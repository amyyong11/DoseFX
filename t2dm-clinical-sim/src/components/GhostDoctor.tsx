"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import type { Group } from "three";

export type DoctorMood = "neutral" | "happy" | "concerned" | "strict";

type GhostDoctorProps = {
  mood: DoctorMood;
  promptText: string;
  showBubble?: boolean;
  showPanelTrail?: boolean;
};

export function GhostDoctor({
  mood,
  promptText,
  showBubble = true,
  showPanelTrail = false,
}: GhostDoctorProps) {
  const root = useRef<Group>(null);
  const leftBrow = useRef<Group>(null);
  const rightBrow = useRef<Group>(null);
  const mouth = useRef<Group>(null);

  const expression = useMemo(() => {
    if (mood === "happy") {
      return { browY: 0.26, browRotL: -0.2, browRotR: 0.2, mouthY: -0.08, mouthRot: 0.15, mouthScaleY: 0.65 };
    }
    if (mood === "concerned") {
      return { browY: 0.24, browRotL: 0.3, browRotR: -0.3, mouthY: -0.06, mouthRot: -0.1, mouthScaleY: 0.45 };
    }
    if (mood === "strict") {
      return { browY: 0.23, browRotL: 0.4, browRotR: -0.4, mouthY: -0.04, mouthRot: -0.25, mouthScaleY: 0.35 };
    }
    return { browY: 0.25, browRotL: 0.06, browRotR: -0.06, mouthY: -0.06, mouthRot: 0, mouthScaleY: 0.4 };
  }, [mood]);

  useFrame(({ clock }) => {
    if (!root.current) return;
    const t = clock.getElapsedTime();
    root.current.position.y = 0.05 + Math.sin(t * 1.6) * 0.04;
    root.current.rotation.y = Math.sin(t * 0.9) * 0.16;
  });

  return (
    <group ref={root} position={[0.6, 0, 0.15]}>
      <group position={[0, 0.35, 0]}>
        <mesh castShadow>
          <sphereGeometry args={[0.38, 24, 24]} />
          <meshStandardMaterial color="#d7eef9" transparent opacity={0.86} roughness={0.25} />
        </mesh>
        <mesh position={[0, -0.42, 0]} castShadow>
          <sphereGeometry args={[0.42, 24, 18]} />
          <meshStandardMaterial color="#d7eef9" transparent opacity={0.86} roughness={0.3} />
        </mesh>
        <mesh position={[0, -0.78, 0]} castShadow>
          <coneGeometry args={[0.24, 0.42, 16]} />
          <meshStandardMaterial color="#c5e4f4" transparent opacity={0.78} roughness={0.35} />
        </mesh>
      </group>

      <group position={[0, 0.5, 0.34]}>
        <mesh position={[-0.14, 0.02, 0]}>
          <sphereGeometry args={[0.045, 14, 14]} />
          <meshStandardMaterial color="#1f2835" />
        </mesh>
        <mesh position={[0.14, 0.02, 0]}>
          <sphereGeometry args={[0.045, 14, 14]} />
          <meshStandardMaterial color="#1f2835" />
        </mesh>
        <mesh position={[-0.14, 0.02, 0.005]}>
          <torusGeometry args={[0.08, 0.012, 8, 24]} />
          <meshStandardMaterial color="#4a5e71" metalness={0.2} roughness={0.3} />
        </mesh>
        <mesh position={[0.14, 0.02, 0.005]}>
          <torusGeometry args={[0.08, 0.012, 8, 24]} />
          <meshStandardMaterial color="#4a5e71" metalness={0.2} roughness={0.3} />
        </mesh>
        <mesh position={[0, 0.02, 0.005]}>
          <boxGeometry args={[0.1, 0.012, 0.012]} />
          <meshStandardMaterial color="#4a5e71" />
        </mesh>

        <group ref={leftBrow} position={[-0.14, expression.browY, 0]} rotation={[0, 0, expression.browRotL]}>
          <mesh>
            <boxGeometry args={[0.14, 0.02, 0.02]} />
            <meshStandardMaterial color="#243244" />
          </mesh>
        </group>
        <group ref={rightBrow} position={[0.14, expression.browY, 0]} rotation={[0, 0, expression.browRotR]}>
          <mesh>
            <boxGeometry args={[0.14, 0.02, 0.02]} />
            <meshStandardMaterial color="#243244" />
          </mesh>
        </group>
        <group ref={mouth} position={[0, expression.mouthY, 0]} rotation={[0, 0, expression.mouthRot]} scale={[1, expression.mouthScaleY, 1]}>
          <mesh>
            <torusGeometry args={[0.1, 0.014, 8, 24, Math.PI]} />
            <meshStandardMaterial color="#243244" />
          </mesh>
        </group>
      </group>

      {showBubble && (
        <Html position={[-0.04, 1.42, 0.18]} center>
          <div
            style={{
              position: "relative",
              background: "rgba(255,255,255,0.96)",
              color: "#1f2c3a",
              border: "1px solid rgba(31,44,58,0.2)",
              borderRadius: "18px",
              padding: "10px 12px",
              fontSize: "13px",
              lineHeight: 1.25,
              fontWeight: 600,
              maxWidth: "250px",
              width: "max-content",
              boxShadow: "0 8px 20px rgba(0,0,0,0.22)",
              whiteSpace: "pre-wrap",
            }}
          >
            {promptText}
            <span
              style={{
                position: "absolute",
                left: "50%",
                bottom: "-10px",
                width: "14px",
                height: "14px",
                transform: "translateX(-50%)",
                background: "rgba(255,255,255,0.96)",
                border: "1px solid rgba(31,44,58,0.2)",
                borderRadius: "50%",
              }}
            />
            <span
              style={{
                position: "absolute",
                left: "50%",
                bottom: "-24px",
                width: "10px",
                height: "10px",
                transform: "translateX(-50%)",
                background: "rgba(255,255,255,0.95)",
                border: "1px solid rgba(31,44,58,0.18)",
                borderRadius: "50%",
              }}
            />
            <span
              style={{
                position: "absolute",
                left: "50%",
                bottom: "-34px",
                width: "7px",
                height: "7px",
                transform: "translateX(-50%)",
                background: "rgba(255,255,255,0.94)",
                border: "1px solid rgba(31,44,58,0.16)",
                borderRadius: "50%",
              }}
            />
          </div>
        </Html>
      )}

      {showPanelTrail && (
        <Html transform position={[0.9, 1.08, 0.2]}>
          <div
            style={{
              display: "grid",
              gap: "8px",
              justifyItems: "start",
              pointerEvents: "none",
            }}
          >
            <span
              style={{
                width: "18px",
                height: "18px",
                borderRadius: "999px",
                background: "rgba(28, 32, 42, 0.92)",
                border: "1px solid rgba(80, 95, 120, 0.4)",
                boxShadow: "0 4px 10px rgba(0,0,0,0.22)",
              }}
            />
            <span
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "999px",
                marginLeft: "10px",
                background: "rgba(28, 32, 42, 0.92)",
                border: "1px solid rgba(80, 95, 120, 0.4)",
                boxShadow: "0 3px 8px rgba(0,0,0,0.2)",
              }}
            />
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "999px",
                marginLeft: "18px",
                background: "rgba(28, 32, 42, 0.92)",
                border: "1px solid rgba(80, 95, 120, 0.4)",
                boxShadow: "0 2px 6px rgba(0,0,0,0.18)",
              }}
            />
          </div>
        </Html>
      )}
    </group>
  );
}
