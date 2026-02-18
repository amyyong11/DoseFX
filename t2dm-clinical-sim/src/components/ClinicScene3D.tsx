"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { MinecraftPatient } from "@/components/MinecraftPatient";
import type { PatientReaction } from "@/lib/types";

function ClinicRoom() {
  return (
    <group>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.6, 0]} receiveShadow>
        <planeGeometry args={[12, 12]} />
        <meshStandardMaterial color="#e2dfd9" roughness={0.92} metalness={0.03} />
      </mesh>
      {/* Back wall */}
      <mesh position={[0, 2.5, -4]} receiveShadow>
        <planeGeometry args={[12, 6]} />
        <meshStandardMaterial color="#c8d0d8" roughness={0.95} />
      </mesh>
      {/* Left wall */}
      <mesh position={[-4, 2.5, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[8, 6]} />
        <meshStandardMaterial color="#d0d6dc" roughness={0.95} />
      </mesh>
      {/* Right wall */}
      <mesh position={[4, 2.5, 0]} rotation={[0, -Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[8, 6]} />
        <meshStandardMaterial color="#d0d6dc" roughness={0.95} />
      </mesh>
      {/* Exam table */}
      <mesh position={[2.2, 0.15, -2.8]} castShadow receiveShadow>
        <boxGeometry args={[1.4, 0.5, 0.6]} />
        <meshStandardMaterial color="#7d8fa8" roughness={0.72} />
      </mesh>
      {/* Side table with plant or object - warmth */}
      <mesh position={[-2.5, 0.4, -2.5]} castShadow receiveShadow>
        <boxGeometry args={[0.5, 0.5, 0.4]} />
        <meshStandardMaterial color="#8b7355" roughness={0.8} />
      </mesh>
    </group>
  );
}

type ClinicScene3DProps = {
  riskScore: number;
  reaction: PatientReaction;
  celebrateIdeal: boolean;
};

export function ClinicScene3D({ riskScore, reaction, celebrateIdeal }: ClinicScene3DProps) {
  return (
    <div className="clinic-scene-3d">
      <Canvas
        shadows
        camera={{ position: [0, 1.15, 4.3], fov: 36 }}
        gl={{ antialias: true, alpha: false }}
      >
        <color attach="background" args={["#a8b8c8"]} />
        <fog attach="fog" args={["#a8b8c8", 5, 13]} />
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[3.5, 5, 4]}
          intensity={1.35}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={14}
          shadow-camera-left={-3.5}
          shadow-camera-right={3.5}
          shadow-camera-top={3.5}
          shadow-camera-bottom={-3.5}
          shadow-bias={-0.0001}
        />
        <directionalLight position={[-2.5, 2.5, 2]} intensity={0.45} color="#c5d4e8" />
        {/* Warm key on character - they're the focus, emotionally lit */}
        <pointLight position={[0, 0.8, 2.2]} intensity={0.4} color="#fff5e6" distance={5} />
        <pointLight position={[0.5, 0.5, 1.5]} intensity={0.15} color="#e8f0ff" distance={4} />
        <ClinicRoom />
        <Suspense fallback={null}>
          <MinecraftPatient riskScore={riskScore} reaction={reaction} celebrateIdeal={celebrateIdeal} />
        </Suspense>
        <OrbitControls
          enableZoom={true}
          zoomSpeed={0.8}
          minDistance={3}
          maxDistance={7}
          enablePan={false}
          minPolarAngle={0.5}
          maxPolarAngle={1.45}
          target={[0, 0.85, 0]}
        />
      </Canvas>
    </div>
  );
}
