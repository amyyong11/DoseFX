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
        <meshStandardMaterial color="#b7885a" roughness={0.9} metalness={0.02} />
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
      {/* Desk area */}
      <mesh position={[-1.4, 0.45, -2.2]} castShadow receiveShadow>
        <boxGeometry args={[1.8, 0.12, 0.75]} />
        <meshStandardMaterial color="#8b6b4a" roughness={0.78} />
      </mesh>
      <mesh position={[-2.15, 0.22, -2.48]} castShadow receiveShadow>
        <boxGeometry args={[0.1, 0.44, 0.1]} />
        <meshStandardMaterial color="#6f5a44" roughness={0.8} />
      </mesh>
      <mesh position={[-0.65, 0.22, -2.48]} castShadow receiveShadow>
        <boxGeometry args={[0.1, 0.44, 0.1]} />
        <meshStandardMaterial color="#6f5a44" roughness={0.8} />
      </mesh>
      <mesh position={[-2.15, 0.22, -1.92]} castShadow receiveShadow>
        <boxGeometry args={[0.1, 0.44, 0.1]} />
        <meshStandardMaterial color="#6f5a44" roughness={0.8} />
      </mesh>
      <mesh position={[-0.65, 0.22, -1.92]} castShadow receiveShadow>
        <boxGeometry args={[0.1, 0.44, 0.1]} />
        <meshStandardMaterial color="#6f5a44" roughness={0.8} />
      </mesh>

      {/* Desk monitor + keyboard */}
      <mesh position={[-1.25, 0.72, -2.28]} castShadow receiveShadow>
        <boxGeometry args={[0.55, 0.34, 0.08]} />
        <meshStandardMaterial color="#1f2530" roughness={0.35} metalness={0.25} />
      </mesh>
      <mesh position={[-1.25, 0.72, -2.22]}>
        <boxGeometry args={[0.46, 0.24, 0.01]} />
        <meshStandardMaterial color="#7fb0de" emissive="#3e6795" emissiveIntensity={0.16} />
      </mesh>
      <mesh position={[-1.25, 0.56, -2.28]} castShadow>
        <boxGeometry args={[0.07, 0.12, 0.04]} />
        <meshStandardMaterial color="#2b3038" roughness={0.5} />
      </mesh>
      <mesh position={[-1.25, 0.5, -2.28]} castShadow>
        <boxGeometry args={[0.22, 0.02, 0.12]} />
        <meshStandardMaterial color="#2b3038" roughness={0.5} />
      </mesh>
      <mesh position={[-1.58, 0.52, -2.05]} castShadow receiveShadow>
        <boxGeometry args={[0.34, 0.02, 0.12]} />
        <meshStandardMaterial color="#dadfe7" roughness={0.55} />
      </mesh>

      {/* Office chair */}
      <mesh position={[-1.4, 0.33, -1.55]} castShadow receiveShadow>
        <boxGeometry args={[0.45, 0.1, 0.42]} />
        <meshStandardMaterial color="#4f6478" roughness={0.72} />
      </mesh>
      <mesh position={[-1.4, 0.58, -1.73]} castShadow receiveShadow>
        <boxGeometry args={[0.45, 0.45, 0.1]} />
        <meshStandardMaterial color="#4f6478" roughness={0.72} />
      </mesh>
      <mesh position={[-1.4, 0.19, -1.55]} castShadow receiveShadow>
        <cylinderGeometry args={[0.04, 0.04, 0.28, 10]} />
        <meshStandardMaterial color="#3f4b5a" roughness={0.58} metalness={0.15} />
      </mesh>
      <mesh position={[-1.4, 0.06, -1.55]} castShadow receiveShadow>
        <boxGeometry args={[0.55, 0.03, 0.55]} />
        <meshStandardMaterial color="#3f4b5a" roughness={0.58} metalness={0.15} />
      </mesh>

      {/* Visitor chair near exam table */}
      <mesh position={[1.2, 0.28, -2.0]} castShadow receiveShadow>
        <boxGeometry args={[0.42, 0.08, 0.4]} />
        <meshStandardMaterial color="#6f7f90" roughness={0.76} />
      </mesh>
      <mesh position={[1.2, 0.5, -2.15]} castShadow receiveShadow>
        <boxGeometry args={[0.42, 0.34, 0.08]} />
        <meshStandardMaterial color="#6f7f90" roughness={0.76} />
      </mesh>
      {/* Side table with plant or object - warmth */}
      <mesh position={[-2.5, 0.4, -2.5]} castShadow receiveShadow>
        <boxGeometry args={[0.5, 0.5, 0.4]} />
        <meshStandardMaterial color="#8b7355" roughness={0.8} />
      </mesh>
      <mesh position={[-2.5, 0.74, -2.5]} castShadow receiveShadow>
        <cylinderGeometry args={[0.1, 0.1, 0.14, 12]} />
        <meshStandardMaterial color="#8f9eab" roughness={0.7} />
      </mesh>
      <mesh position={[-2.5, 0.85, -2.5]} castShadow>
        <coneGeometry args={[0.16, 0.25, 10]} />
        <meshStandardMaterial color="#4b9a67" roughness={0.8} />
      </mesh>

      {/* Back-wall floating cabinet */}
      <mesh position={[0, 2.2, -3.92]} castShadow receiveShadow>
        <boxGeometry args={[2.6, 0.7, 0.26]} />
        <meshStandardMaterial color="#d9dee6" roughness={0.65} metalness={0.08} />
      </mesh>
      <mesh position={[0, 2.2, -3.78]} castShadow>
        <boxGeometry args={[2.5, 0.62, 0.03]} />
        <meshStandardMaterial color="#b7c4d4" roughness={0.22} metalness={0.45} />
      </mesh>

      {/* Floor storage cabinet */}
      <mesh position={[3.25, 0.44, -3.6]} castShadow receiveShadow>
        <boxGeometry args={[1.25, 0.88, 0.42]} />
        <meshStandardMaterial color="#ced6df" roughness={0.72} />
      </mesh>
      <mesh position={[2.95, 0.44, -3.38]} castShadow>
        <boxGeometry args={[0.56, 0.78, 0.02]} />
        <meshStandardMaterial color="#aebbc9" roughness={0.5} />
      </mesh>
      <mesh position={[3.55, 0.44, -3.38]} castShadow>
        <boxGeometry args={[0.56, 0.78, 0.02]} />
        <meshStandardMaterial color="#aebbc9" roughness={0.5} />
      </mesh>

      {/* Left-wall shelf + items */}
      <mesh position={[-3.82, 2.0, -1.1]} rotation={[0, Math.PI / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.6, 0.09, 0.28]} />
        <meshStandardMaterial color="#8f775c" roughness={0.82} />
      </mesh>
      <mesh position={[-3.73, 2.17, -1.45]} rotation={[0, Math.PI / 2, 0]} castShadow>
        <boxGeometry args={[0.25, 0.34, 0.16]} />
        <meshStandardMaterial color="#59a37c" roughness={0.7} />
      </mesh>
      <mesh position={[-3.73, 2.16, -0.78]} rotation={[0, Math.PI / 2, 0]} castShadow>
        <boxGeometry args={[0.22, 0.3, 0.14]} />
        <meshStandardMaterial color="#d8d2c2" roughness={0.9} />
      </mesh>

      {/* Right-wall monitor panel */}
      <mesh position={[3.86, 2.05, -1.3]} rotation={[0, -Math.PI / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.65, 1.0, 0.12]} />
        <meshStandardMaterial color="#252b34" roughness={0.45} metalness={0.35} />
      </mesh>
      <mesh position={[3.79, 2.05, -1.3]} rotation={[0, -Math.PI / 2, 0]}>
        <boxGeometry args={[1.42, 0.78, 0.02]} />
        <meshStandardMaterial color="#78a8d8" emissive="#3f6b9e" emissiveIntensity={0.18} roughness={0.2} />
      </mesh>

      {/* Back-wall whiteboard */}
      <mesh position={[-2.35, 2.25, -3.9]} castShadow receiveShadow>
        <boxGeometry args={[1.6, 0.95, 0.06]} />
        <meshStandardMaterial color="#f2f5f7" roughness={0.7} />
      </mesh>
      <mesh position={[-2.35, 2.25, -3.86]}>
        <boxGeometry args={[1.44, 0.8, 0.01]} />
        <meshStandardMaterial color="#ffffff" roughness={0.92} />
      </mesh>

      {/* Simple wall clock */}
      <mesh position={[2.85, 3.15, -3.9]} castShadow>
        <cylinderGeometry args={[0.24, 0.24, 0.06, 28]} />
        <meshStandardMaterial color="#f5f5f5" roughness={0.55} metalness={0.08} />
      </mesh>
      <mesh position={[2.85, 3.15, -3.86]}>
        <boxGeometry args={[0.015, 0.13, 0.01]} />
        <meshStandardMaterial color="#2f3742" />
      </mesh>
      <mesh position={[2.92, 3.15, -3.86]}>
        <boxGeometry args={[0.11, 0.012, 0.01]} />
        <meshStandardMaterial color="#2f3742" />
      </mesh>

      {/* Area rug */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0.2, -0.595, -1.45]} receiveShadow>
        <planeGeometry args={[3.8, 2.2]} />
        <meshStandardMaterial color="#c8a980" roughness={0.98} />
      </mesh>

      {/* Ceiling lamp */}
      <mesh position={[0, 5.35, -1.2]} castShadow>
        <cylinderGeometry args={[0.42, 0.42, 0.08, 20]} />
        <meshStandardMaterial color="#f7f1dc" emissive="#f6efda" emissiveIntensity={0.2} />
      </mesh>
      <mesh position={[0, 5.2, -1.2]} castShadow>
        <cylinderGeometry args={[0.03, 0.03, 0.22, 10]} />
        <meshStandardMaterial color="#7b7f86" roughness={0.5} metalness={0.2} />
      </mesh>

      {/* Window on back wall */}
      <mesh position={[1.65, 2.2, -3.91]} castShadow receiveShadow>
        <boxGeometry args={[1.35, 1.0, 0.08]} />
        <meshStandardMaterial color="#f0f2f5" roughness={0.75} />
      </mesh>
      <mesh position={[1.65, 2.2, -3.86]}>
        <boxGeometry args={[1.2, 0.84, 0.01]} />
        <meshStandardMaterial color="#b9d6ec" roughness={0.25} metalness={0.1} />
      </mesh>
      <mesh position={[1.65, 2.2, -3.855]}>
        <boxGeometry args={[0.04, 0.84, 0.02]} />
        <meshStandardMaterial color="#eef2f6" roughness={0.7} />
      </mesh>
      <mesh position={[1.65, 2.2, -3.855]}>
        <boxGeometry args={[1.2, 0.04, 0.02]} />
        <meshStandardMaterial color="#eef2f6" roughness={0.7} />
      </mesh>
    </group>
  );
}

type ClinicScene3DProps = {
  riskScore: number;
  reaction: PatientReaction;
  celebrateIdeal: boolean;
  feedbackEmoji?: string | null;
};

export function ClinicScene3D({ riskScore, reaction, celebrateIdeal, feedbackEmoji }: ClinicScene3DProps) {
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
          <MinecraftPatient
            riskScore={riskScore}
            reaction={reaction}
            celebrateIdeal={celebrateIdeal}
            feedbackEmoji={feedbackEmoji}
          />
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
