"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import type { Group, MeshStandardMaterial, Texture } from "three";
import type { PatientReaction } from "@/lib/types";

type MinecraftPatientProps = {
  riskScore: number;
  reaction: PatientReaction;
  celebrateIdeal: boolean;
  feedbackEmoji?: string | null;
};

type Rect = {
  x: number;
  y: number;
  w: number;
  h: number;
};

type FaceRects = {
  right: Rect;
  left: Rect;
  top: Rect;
  bottom: Rect;
  front: Rect;
  back: Rect;
};

const PX = 0.0625;
const P = (n: number) => n * PX;

const STEVE_SKIN_URL = "/steve.png?v=shoulders-3";

const HEAD_FACES: FaceRects = {
  right: { x: 0, y: 8, w: 8, h: 8 },
  left: { x: 16, y: 8, w: 8, h: 8 },
  top: { x: 8, y: 0, w: 8, h: 8 },
  bottom: { x: 16, y: 0, w: 8, h: 8 },
  front: { x: 8, y: 8, w: 8, h: 8 },
  back: { x: 24, y: 8, w: 8, h: 8 },
};

const BODY_FACES: FaceRects = {
  right: { x: 16, y: 20, w: 4, h: 12 },
  left: { x: 28, y: 20, w: 4, h: 12 },
  top: { x: 20, y: 16, w: 8, h: 4 },
  bottom: { x: 28, y: 16, w: 8, h: 4 },
  front: { x: 20, y: 20, w: 8, h: 12 },
  back: { x: 32, y: 20, w: 8, h: 12 },
};

const ARM_RIGHT_FACES: FaceRects = {
  right: { x: 40, y: 20, w: 4, h: 12 },
  left: { x: 48, y: 20, w: 4, h: 12 },
  top: { x: 44, y: 16, w: 4, h: 4 },
  bottom: { x: 48, y: 16, w: 4, h: 4 },
  front: { x: 44, y: 20, w: 4, h: 12 },
  back: { x: 52, y: 20, w: 4, h: 12 },
};

const ARM_LEFT_FACES: FaceRects = {
  right: { x: 32, y: 52, w: 4, h: 12 },
  left: { x: 40, y: 52, w: 4, h: 12 },
  top: { x: 36, y: 48, w: 4, h: 4 },
  bottom: { x: 40, y: 48, w: 4, h: 4 },
  front: { x: 36, y: 52, w: 4, h: 12 },
  back: { x: 44, y: 52, w: 4, h: 12 },
};

const LEG_RIGHT_FACES: FaceRects = {
  right: { x: 0, y: 20, w: 4, h: 12 },
  left: { x: 8, y: 20, w: 4, h: 12 },
  top: { x: 4, y: 16, w: 4, h: 4 },
  bottom: { x: 8, y: 16, w: 4, h: 4 },
  front: { x: 4, y: 20, w: 4, h: 12 },
  back: { x: 12, y: 20, w: 4, h: 12 },
};

const LEG_LEFT_FACES: FaceRects = {
  right: { x: 16, y: 52, w: 4, h: 12 },
  left: { x: 24, y: 52, w: 4, h: 12 },
  top: { x: 20, y: 48, w: 4, h: 4 },
  bottom: { x: 24, y: 48, w: 4, h: 4 },
  front: { x: 20, y: 52, w: 4, h: 12 },
  back: { x: 28, y: 52, w: 4, h: 12 },
};

function cropTexture(image: HTMLImageElement, rect: Rect): Texture {
  const canvas = document.createElement("canvas");
  canvas.width = rect.w;
  canvas.height = rect.h;

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw new Error("Could not create skin crop context");
  }

  ctx.imageSmoothingEnabled = false;
  ctx.clearRect(0, 0, rect.w, rect.h);
  ctx.drawImage(
    image,
    rect.x,
    rect.y,
    rect.w,
    rect.h,
    0,
    0,
    rect.w,
    rect.h
  );

  const texture = new THREE.CanvasTexture(canvas);
  texture.flipY = true;
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.NearestFilter;
  texture.generateMipmaps = false;
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.needsUpdate = true;

  return texture;
}

function materialFromRect(image: HTMLImageElement, rect: Rect): MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    map: cropTexture(image, rect),
    roughness: 1,
    metalness: 0,
    flatShading: true,
  });
}

function makeFaceMaterials(image: HTMLImageElement, faces: FaceRects): MeshStandardMaterial[] {
  // BoxGeometry material order: right, left, top, bottom, front, back
  return [
    materialFromRect(image, faces.right),
    materialFromRect(image, faces.left),
    materialFromRect(image, faces.top),
    materialFromRect(image, faces.bottom),
    materialFromRect(image, faces.front),
    materialFromRect(image, faces.back),
  ];
}

function fallbackMaterials(color: string): MeshStandardMaterial[] {
  const mat = new THREE.MeshStandardMaterial({ color, roughness: 1, metalness: 0, flatShading: true });
  return [mat, mat, mat, mat, mat, mat];
}

export function MinecraftPatient({ riskScore, reaction, celebrateIdeal, feedbackEmoji }: MinecraftPatientProps) {
  const root = useRef<Group>(null);
  const body = useRef<Group>(null);
  const head = useRef<Group>(null);
  const armRight = useRef<Group>(null);
  const armLeft = useRef<Group>(null);
  const legRight = useRef<Group>(null);
  const legLeft = useRef<Group>(null);
  const thumbsRef = useRef<Group>(null);
  const thumbSprites = useRef<Array<THREE.Sprite | null>>([]);
  const deathProgress = useRef(0);

  const steveTexture = useTexture(STEVE_SKIN_URL);

  const image = steveTexture.image as HTMLImageElement | undefined;
  const validSkin = !!image && image.width === 64 && image.height === 64;

  const headMaterials = useMemo(() => {
    if (!image || !validSkin) return fallbackMaterials("#b9836d");
    return makeFaceMaterials(image, HEAD_FACES);
  }, [image, validSkin]);

  const bodyMaterials = useMemo(() => {
    const mats = !image || !validSkin ? fallbackMaterials("#89CFF0") : makeFaceMaterials(image, BODY_FACES);
    mats.forEach((mat) => mat.color.set("#89CFF0"));
    return mats;
  }, [image, validSkin]);

  const armRightMaterials = useMemo(() => {
    if (!image || !validSkin) return fallbackMaterials("#b9836d");
    return makeFaceMaterials(image, ARM_RIGHT_FACES);
  }, [image, validSkin]);

  const armLeftMaterials = useMemo(() => {
    if (!image || !validSkin) return fallbackMaterials("#b9836d");
    return makeFaceMaterials(image, ARM_LEFT_FACES);
  }, [image, validSkin]);

  const legRightMaterials = useMemo(() => {
    if (!image || !validSkin) return fallbackMaterials("#3e41ab");
    return makeFaceMaterials(image, LEG_RIGHT_FACES);
  }, [image, validSkin]);

  const legLeftMaterials = useMemo(() => {
    if (!image || !validSkin) return fallbackMaterials("#3e41ab");
    return makeFaceMaterials(image, LEG_LEFT_FACES);
  }, [image, validSkin]);
  const skinMaterials = useMemo(
    () => [
      ...headMaterials,
      ...bodyMaterials,
      ...armRightMaterials,
      ...armLeftMaterials,
      ...legRightMaterials,
      ...legLeftMaterials,
    ],
    [headMaterials, bodyMaterials, armRightMaterials, armLeftMaterials, legRightMaterials, legLeftMaterials]
  );
  const emojiTexture = useMemo(() => {
    const glyph = feedbackEmoji ?? "👍";
    const canvas = document.createElement("canvas");
    canvas.width = 96;
    canvas.height = 96;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    ctx.clearRect(0, 0, 96, 96);
    ctx.font = "72px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(glyph, 48, 52);
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.needsUpdate = true;
    return texture;
  }, [feedbackEmoji]);
  const thumbsMaterial = useMemo(() => {
    if (!emojiTexture) return null;
    return new THREE.SpriteMaterial({ map: emojiTexture, transparent: true, depthWrite: false });
  }, [emojiTexture]);

  useEffect(() => {
    return () => {
      emojiTexture?.dispose();
      thumbsMaterial?.dispose();
    };
  }, [emojiTexture, thumbsMaterial]);

  useFrame(({ clock }, delta) => {
    if (!root.current || !body.current || !head.current || !armRight.current || !armLeft.current || !legRight.current || !legLeft.current) return;
    const t = clock.getElapsedTime();
    const baselineBob = 0.008 + (100 - Math.max(0, Math.min(100, riskScore))) * 0.00004;

    let bodyBob = Math.sin(t * 1.4) * baselineBob;
    let rootRotY = Math.sin(t * 0.45) * 0.05;
    let rootRotZ = 0;
    let rootPosY = -0.62;
    let headRotX = 0;
    let headRotZ = 0;
    let rightArmRotX = 0;
    let rightArmRotZ = 0;
    let leftArmRotX = 0;
    let leftArmRotZ = 0;
    let rightLegRotX = 0;
    let leftLegRotX = 0;

    if (celebrateIdeal) {
      bodyBob = Math.abs(Math.sin(t * 5.4)) * 0.13;
      rootRotY = Math.sin(t * 2.4) * 0.14;
      headRotX = Math.sin(t * 4.8) * 0.18;
      rightArmRotX = -1.25 + Math.sin(t * 6.4) * 0.15;
      leftArmRotX = -1.25 + Math.sin(t * 6.4 + 0.5) * 0.15;
      rightArmRotZ = 0.3;
      leftArmRotZ = -0.3;
      rightLegRotX = Math.sin(t * 5.6) * 0.1;
      leftLegRotX = -Math.sin(t * 5.6) * 0.1;
    } else if (reaction === "happy") {
      bodyBob = Math.sin(t * 3.1) * 0.024;
      rootRotY = Math.sin(t * 1.5) * 0.08;
      headRotX = Math.sin(t * 2.2) * 0.14;
      rightArmRotX = -1.0 + Math.sin(t * 4.2) * 0.2;
      leftArmRotX = -1.0 + Math.sin(t * 4.2 + 0.6) * 0.2;
      rightArmRotZ = 0.22;
      leftArmRotZ = -0.22;
      rightLegRotX = Math.sin(t * 3.2) * 0.06;
      leftLegRotX = -Math.sin(t * 3.2) * 0.06;
    } else if (reaction === "mildly_uncomfortable") {
      bodyBob = Math.sin(t * 1.8) * 0.012;
      headRotZ = Math.sin(t * 1.6) * 0.12;
      headRotX = 0.07;
      rightArmRotX = 0.12;
      leftArmRotX = 0.12;
      rightArmRotZ = 0.08;
      leftArmRotZ = -0.08;
      rootRotY = Math.sin(t * 0.8) * 0.04;
    } else if (reaction === "uncomfortable") {
      bodyBob = Math.sin(t * 1.0) * 0.006;
      rootRotY = Math.sin(t * 0.6) * 0.025;
      headRotX = 0.2;
      headRotZ = Math.sin(t * 1.4) * 0.08;
      rightArmRotX = 0.48;
      leftArmRotX = 0.48;
      rightArmRotZ = 0.15;
      leftArmRotZ = -0.15;
      rightLegRotX = -0.05;
      leftLegRotX = -0.05;
    } else if (reaction === "critical") {
      bodyBob = 0;
      rootRotY = 0;
      rootRotZ = -1.55;
      rootPosY = -0.68;
      headRotX = 0.55;
      headRotZ = -0.2;
      rightArmRotX = 1.1 + Math.sin(t * 20) * 0.08;
      leftArmRotX = 1.1 + Math.cos(t * 17) * 0.08;
      rightArmRotZ = 0.35;
      leftArmRotZ = -0.35;
      rightLegRotX = 0.25;
      leftLegRotX = -0.05;
    }

    const criticalTarget = reaction === "critical" ? 1 : 0;
    deathProgress.current = THREE.MathUtils.damp(
      deathProgress.current,
      criticalTarget,
      criticalTarget ? 3.4 : 6.2,
      delta
    );
    const death = deathProgress.current;
    // Keep the patient visible even in critical collapse states.
    const fade = 1;
    const scale = 1;

    rootRotZ = THREE.MathUtils.lerp(rootRotZ, -Math.PI / 2, death);
    rootPosY = THREE.MathUtils.lerp(rootPosY, -0.72, death);
    bodyBob *= 1 - death;

    body.current.position.y = THREE.MathUtils.damp(body.current.position.y, bodyBob, 7, delta);
    root.current.rotation.y = THREE.MathUtils.damp(root.current.rotation.y, rootRotY, 7, delta);
    root.current.rotation.z = THREE.MathUtils.damp(root.current.rotation.z, rootRotZ, 7, delta);
    root.current.position.y = THREE.MathUtils.damp(root.current.position.y, rootPosY, 7, delta);
    root.current.scale.set(scale, scale, scale);

    head.current.rotation.x = THREE.MathUtils.damp(head.current.rotation.x, headRotX, 8, delta);
    head.current.rotation.z = THREE.MathUtils.damp(head.current.rotation.z, headRotZ, 8, delta);
    armRight.current.rotation.x = THREE.MathUtils.damp(armRight.current.rotation.x, rightArmRotX, 8, delta);
    armRight.current.rotation.z = THREE.MathUtils.damp(armRight.current.rotation.z, rightArmRotZ, 8, delta);
    armLeft.current.rotation.x = THREE.MathUtils.damp(armLeft.current.rotation.x, leftArmRotX, 8, delta);
    armLeft.current.rotation.z = THREE.MathUtils.damp(armLeft.current.rotation.z, leftArmRotZ, 8, delta);
    legRight.current.rotation.x = THREE.MathUtils.damp(legRight.current.rotation.x, rightLegRotX, 8, delta);
    legLeft.current.rotation.x = THREE.MathUtils.damp(legLeft.current.rotation.x, leftLegRotX, 8, delta);

    skinMaterials.forEach((mat) => {
      mat.transparent = fade < 0.999;
      mat.opacity = fade;
    });

    if (thumbsRef.current) {
      const showEmojiTrail = !!feedbackEmoji;
      thumbsRef.current.visible = showEmojiTrail;
      if (showEmojiTrail) {
        thumbSprites.current.forEach((sprite, i) => {
          if (!sprite) return;
          const phase = t * 1.9 + i * 0.7;
          const radius = 0.45 + (i % 3) * 0.08;
          sprite.position.x = Math.cos(phase) * radius;
          sprite.position.z = Math.sin(phase) * radius * 0.5;
          sprite.position.y = 0.2 + ((phase * 0.35) % 1.8);
          const size = 0.2 + ((i % 4) * 0.03);
          sprite.scale.set(size, size, size);
          sprite.material.opacity = 0.55 + 0.45 * Math.abs(Math.sin(phase * 1.2));
        });
      }
    }
  });

  return (
    <group ref={root} position={[0, -0.62, 0.25]}>
      <group ref={body}>
        <group ref={legRight} position={[-P(2), P(6), 0]}>
          <mesh castShadow material={legRightMaterials}>
            <boxGeometry args={[P(4), P(12), P(4)]} />
          </mesh>
        </group>
        <group ref={legLeft} position={[P(2), P(6), 0]}>
          <mesh castShadow material={legLeftMaterials}>
            <boxGeometry args={[P(4), P(12), P(4)]} />
          </mesh>
        </group>

        <mesh position={[0, P(18), 0]} castShadow material={bodyMaterials}>
          <boxGeometry args={[P(8), P(12), P(4)]} />
        </mesh>

        <group ref={armRight} position={[-P(6), P(18), 0]}>
          <mesh castShadow material={armRightMaterials}>
            <boxGeometry args={[P(4), P(12), P(4)]} />
          </mesh>
        </group>
        <group ref={armLeft} position={[P(6), P(18), 0]}>
          <mesh castShadow material={armLeftMaterials}>
            <boxGeometry args={[P(4), P(12), P(4)]} />
          </mesh>
        </group>

        <group ref={head} position={[0, P(28), 0]}>
          <mesh castShadow material={headMaterials}>
            <boxGeometry args={[P(8), P(8), P(8)]} />
          </mesh>
        </group>

        {thumbsMaterial && (
          <group ref={thumbsRef} position={[0, P(22), 0]} visible={false}>
            {Array.from({ length: 9 }).map((_, i) => (
              <sprite
                key={i}
                ref={(el) => {
                  thumbSprites.current[i] = el;
                }}
                material={thumbsMaterial}
                position={[0, 0, 0]}
                scale={[0.2, 0.2, 0.2]}
              />
            ))}
          </group>
        )}
      </group>
    </group>
  );
}
