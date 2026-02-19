(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/MinecraftPatient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MinecraftPatient",
    ()=>MinecraftPatient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Texture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const PX = 0.0625;
const P = (n)=>n * PX;
_c = P;
const STEVE_SKIN_URL = "/steve.png?v=shoulders-3";
const HEAD_FACES = {
    right: {
        x: 0,
        y: 8,
        w: 8,
        h: 8
    },
    left: {
        x: 16,
        y: 8,
        w: 8,
        h: 8
    },
    top: {
        x: 8,
        y: 0,
        w: 8,
        h: 8
    },
    bottom: {
        x: 16,
        y: 0,
        w: 8,
        h: 8
    },
    front: {
        x: 8,
        y: 8,
        w: 8,
        h: 8
    },
    back: {
        x: 24,
        y: 8,
        w: 8,
        h: 8
    }
};
const BODY_FACES = {
    right: {
        x: 16,
        y: 20,
        w: 4,
        h: 12
    },
    left: {
        x: 28,
        y: 20,
        w: 4,
        h: 12
    },
    top: {
        x: 20,
        y: 16,
        w: 8,
        h: 4
    },
    bottom: {
        x: 28,
        y: 16,
        w: 8,
        h: 4
    },
    front: {
        x: 20,
        y: 20,
        w: 8,
        h: 12
    },
    back: {
        x: 32,
        y: 20,
        w: 8,
        h: 12
    }
};
const ARM_RIGHT_FACES = {
    right: {
        x: 40,
        y: 20,
        w: 4,
        h: 12
    },
    left: {
        x: 48,
        y: 20,
        w: 4,
        h: 12
    },
    top: {
        x: 44,
        y: 16,
        w: 4,
        h: 4
    },
    bottom: {
        x: 48,
        y: 16,
        w: 4,
        h: 4
    },
    front: {
        x: 44,
        y: 20,
        w: 4,
        h: 12
    },
    back: {
        x: 52,
        y: 20,
        w: 4,
        h: 12
    }
};
const ARM_LEFT_FACES = {
    right: {
        x: 32,
        y: 52,
        w: 4,
        h: 12
    },
    left: {
        x: 40,
        y: 52,
        w: 4,
        h: 12
    },
    top: {
        x: 36,
        y: 48,
        w: 4,
        h: 4
    },
    bottom: {
        x: 40,
        y: 48,
        w: 4,
        h: 4
    },
    front: {
        x: 36,
        y: 52,
        w: 4,
        h: 12
    },
    back: {
        x: 44,
        y: 52,
        w: 4,
        h: 12
    }
};
const LEG_RIGHT_FACES = {
    right: {
        x: 0,
        y: 20,
        w: 4,
        h: 12
    },
    left: {
        x: 8,
        y: 20,
        w: 4,
        h: 12
    },
    top: {
        x: 4,
        y: 16,
        w: 4,
        h: 4
    },
    bottom: {
        x: 8,
        y: 16,
        w: 4,
        h: 4
    },
    front: {
        x: 4,
        y: 20,
        w: 4,
        h: 12
    },
    back: {
        x: 12,
        y: 20,
        w: 4,
        h: 12
    }
};
const LEG_LEFT_FACES = {
    right: {
        x: 16,
        y: 52,
        w: 4,
        h: 12
    },
    left: {
        x: 24,
        y: 52,
        w: 4,
        h: 12
    },
    top: {
        x: 20,
        y: 48,
        w: 4,
        h: 4
    },
    bottom: {
        x: 24,
        y: 48,
        w: 4,
        h: 4
    },
    front: {
        x: 20,
        y: 52,
        w: 4,
        h: 12
    },
    back: {
        x: 28,
        y: 52,
        w: 4,
        h: 12
    }
};
function cropTexture(image, rect) {
    const canvas = document.createElement("canvas");
    canvas.width = rect.w;
    canvas.height = rect.h;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
        throw new Error("Could not create skin crop context");
    }
    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0, 0, rect.w, rect.h);
    ctx.drawImage(image, rect.x, rect.y, rect.w, rect.h, 0, 0, rect.w, rect.h);
    const texture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasTexture"](canvas);
    texture.flipY = true;
    texture.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
    texture.magFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NearestFilter"];
    texture.minFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NearestFilter"];
    texture.generateMipmaps = false;
    texture.wrapS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClampToEdgeWrapping"];
    texture.wrapT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClampToEdgeWrapping"];
    texture.needsUpdate = true;
    return texture;
}
function materialFromRect(image, rect) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        map: cropTexture(image, rect),
        roughness: 1,
        metalness: 0,
        flatShading: true
    });
}
function makeFaceMaterials(image, faces) {
    // BoxGeometry material order: right, left, top, bottom, front, back
    return [
        materialFromRect(image, faces.right),
        materialFromRect(image, faces.left),
        materialFromRect(image, faces.top),
        materialFromRect(image, faces.bottom),
        materialFromRect(image, faces.front),
        materialFromRect(image, faces.back)
    ];
}
function fallbackMaterials(color) {
    const mat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color,
        roughness: 1,
        metalness: 0,
        flatShading: true
    });
    return [
        mat,
        mat,
        mat,
        mat,
        mat,
        mat
    ];
}
function MinecraftPatient({ riskScore, reaction, celebrateIdeal, feedbackEmoji }) {
    _s();
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const body = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const head = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const armRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const armLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const legRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const legLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const thumbsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const thumbSprites = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const deathProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const steveTexture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTexture"])(STEVE_SKIN_URL);
    const image = steveTexture.image;
    const validSkin = !!image && image.width === 64 && image.height === 64;
    const headMaterials = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MinecraftPatient.useMemo[headMaterials]": ()=>{
            if (!image || !validSkin) return fallbackMaterials("#b9836d");
            return makeFaceMaterials(image, HEAD_FACES);
        }
    }["MinecraftPatient.useMemo[headMaterials]"], [
        image,
        validSkin
    ]);
    const bodyMaterials = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MinecraftPatient.useMemo[bodyMaterials]": ()=>{
            const mats = !image || !validSkin ? fallbackMaterials("#89CFF0") : makeFaceMaterials(image, BODY_FACES);
            mats.forEach({
                "MinecraftPatient.useMemo[bodyMaterials]": (mat)=>mat.color.set("#89CFF0")
            }["MinecraftPatient.useMemo[bodyMaterials]"]);
            return mats;
        }
    }["MinecraftPatient.useMemo[bodyMaterials]"], [
        image,
        validSkin
    ]);
    const armRightMaterials = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MinecraftPatient.useMemo[armRightMaterials]": ()=>{
            if (!image || !validSkin) return fallbackMaterials("#b9836d");
            return makeFaceMaterials(image, ARM_RIGHT_FACES);
        }
    }["MinecraftPatient.useMemo[armRightMaterials]"], [
        image,
        validSkin
    ]);
    const armLeftMaterials = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MinecraftPatient.useMemo[armLeftMaterials]": ()=>{
            if (!image || !validSkin) return fallbackMaterials("#b9836d");
            return makeFaceMaterials(image, ARM_LEFT_FACES);
        }
    }["MinecraftPatient.useMemo[armLeftMaterials]"], [
        image,
        validSkin
    ]);
    const legRightMaterials = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MinecraftPatient.useMemo[legRightMaterials]": ()=>{
            if (!image || !validSkin) return fallbackMaterials("#3e41ab");
            return makeFaceMaterials(image, LEG_RIGHT_FACES);
        }
    }["MinecraftPatient.useMemo[legRightMaterials]"], [
        image,
        validSkin
    ]);
    const legLeftMaterials = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MinecraftPatient.useMemo[legLeftMaterials]": ()=>{
            if (!image || !validSkin) return fallbackMaterials("#3e41ab");
            return makeFaceMaterials(image, LEG_LEFT_FACES);
        }
    }["MinecraftPatient.useMemo[legLeftMaterials]"], [
        image,
        validSkin
    ]);
    const skinMaterials = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MinecraftPatient.useMemo[skinMaterials]": ()=>[
                ...headMaterials,
                ...bodyMaterials,
                ...armRightMaterials,
                ...armLeftMaterials,
                ...legRightMaterials,
                ...legLeftMaterials
            ]
    }["MinecraftPatient.useMemo[skinMaterials]"], [
        headMaterials,
        bodyMaterials,
        armRightMaterials,
        armLeftMaterials,
        legRightMaterials,
        legLeftMaterials
    ]);
    const emojiTexture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MinecraftPatient.useMemo[emojiTexture]": ()=>{
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
            const texture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasTexture"](canvas);
            texture.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
            texture.needsUpdate = true;
            return texture;
        }
    }["MinecraftPatient.useMemo[emojiTexture]"], [
        feedbackEmoji
    ]);
    const thumbsMaterial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MinecraftPatient.useMemo[thumbsMaterial]": ()=>{
            if (!emojiTexture) return null;
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpriteMaterial"]({
                map: emojiTexture,
                transparent: true,
                depthWrite: false
            });
        }
    }["MinecraftPatient.useMemo[thumbsMaterial]"], [
        emojiTexture
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MinecraftPatient.useEffect": ()=>{
            return ({
                "MinecraftPatient.useEffect": ()=>{
                    emojiTexture?.dispose();
                    thumbsMaterial?.dispose();
                }
            })["MinecraftPatient.useEffect"];
        }
    }["MinecraftPatient.useEffect"], [
        emojiTexture,
        thumbsMaterial
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "MinecraftPatient.useFrame": ({ clock }, delta)=>{
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
            deathProgress.current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].damp(deathProgress.current, criticalTarget, criticalTarget ? 3.4 : 6.2, delta);
            const death = deathProgress.current;
            // Keep the patient visible even in critical collapse states.
            const fade = 1;
            const scale = 1;
            rootRotZ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(rootRotZ, -Math.PI / 2, death);
            rootPosY = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(rootPosY, -0.72, death);
            bodyBob *= 1 - death;
            body.current.position.y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].damp(body.current.position.y, bodyBob, 7, delta);
            root.current.rotation.y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].damp(root.current.rotation.y, rootRotY, 7, delta);
            root.current.rotation.z = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].damp(root.current.rotation.z, rootRotZ, 7, delta);
            root.current.position.y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].damp(root.current.position.y, rootPosY, 7, delta);
            root.current.scale.set(scale, scale, scale);
            head.current.rotation.x = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].damp(head.current.rotation.x, headRotX, 8, delta);
            head.current.rotation.z = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].damp(head.current.rotation.z, headRotZ, 8, delta);
            armRight.current.rotation.x = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].damp(armRight.current.rotation.x, rightArmRotX, 8, delta);
            armRight.current.rotation.z = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].damp(armRight.current.rotation.z, rightArmRotZ, 8, delta);
            armLeft.current.rotation.x = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].damp(armLeft.current.rotation.x, leftArmRotX, 8, delta);
            armLeft.current.rotation.z = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].damp(armLeft.current.rotation.z, leftArmRotZ, 8, delta);
            legRight.current.rotation.x = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].damp(legRight.current.rotation.x, rightLegRotX, 8, delta);
            legLeft.current.rotation.x = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].damp(legLeft.current.rotation.x, leftLegRotX, 8, delta);
            skinMaterials.forEach({
                "MinecraftPatient.useFrame": (mat)=>{
                    mat.transparent = fade < 0.999;
                    mat.opacity = fade;
                }
            }["MinecraftPatient.useFrame"]);
            if (thumbsRef.current) {
                const showEmojiTrail = !!feedbackEmoji;
                thumbsRef.current.visible = showEmojiTrail;
                if (showEmojiTrail) {
                    // Keep emoji trail rising upward even when the body is tilted/fallen.
                    thumbsRef.current.rotation.z = -root.current.rotation.z;
                    thumbSprites.current.forEach({
                        "MinecraftPatient.useFrame": (sprite, i)=>{
                            if (!sprite) return;
                            const phase = t * 1.9 + i * 0.7;
                            const radius = 0.45 + i % 3 * 0.08;
                            sprite.position.x = Math.cos(phase) * radius;
                            sprite.position.z = Math.sin(phase) * radius * 0.5;
                            sprite.position.y = 0.2 + phase * 0.35 % 1.8;
                            const size = 0.2 + i % 4 * 0.03;
                            sprite.scale.set(size, size, size);
                            sprite.material.opacity = 0.55 + 0.45 * Math.abs(Math.sin(phase * 1.2));
                        }
                    }["MinecraftPatient.useFrame"]);
                }
            }
        }
    }["MinecraftPatient.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: root,
        position: [
            -0.6,
            -0.8,
            0.25
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
            ref: body,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    ref: legRight,
                    position: [
                        -P(2),
                        P(6),
                        0
                    ],
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        castShadow: true,
                        material: legRightMaterials,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                            args: [
                                P(4),
                                P(12),
                                P(4)
                            ]
                        }, void 0, false, {
                            fileName: "[project]/src/components/MinecraftPatient.tsx",
                            lineNumber: 377,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MinecraftPatient.tsx",
                        lineNumber: 376,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/MinecraftPatient.tsx",
                    lineNumber: 375,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    ref: legLeft,
                    position: [
                        P(2),
                        P(6),
                        0
                    ],
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        castShadow: true,
                        material: legLeftMaterials,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                            args: [
                                P(4),
                                P(12),
                                P(4)
                            ]
                        }, void 0, false, {
                            fileName: "[project]/src/components/MinecraftPatient.tsx",
                            lineNumber: 382,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MinecraftPatient.tsx",
                        lineNumber: 381,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/MinecraftPatient.tsx",
                    lineNumber: 380,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    position: [
                        0,
                        P(18),
                        0
                    ],
                    castShadow: true,
                    material: bodyMaterials,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            P(8),
                            P(12),
                            P(4)
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/MinecraftPatient.tsx",
                        lineNumber: 387,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/MinecraftPatient.tsx",
                    lineNumber: 386,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    ref: armRight,
                    position: [
                        -P(6),
                        P(18),
                        0
                    ],
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        castShadow: true,
                        material: armRightMaterials,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                            args: [
                                P(4),
                                P(12),
                                P(4)
                            ]
                        }, void 0, false, {
                            fileName: "[project]/src/components/MinecraftPatient.tsx",
                            lineNumber: 392,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MinecraftPatient.tsx",
                        lineNumber: 391,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/MinecraftPatient.tsx",
                    lineNumber: 390,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    ref: armLeft,
                    position: [
                        P(6),
                        P(18),
                        0
                    ],
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        castShadow: true,
                        material: armLeftMaterials,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                            args: [
                                P(4),
                                P(12),
                                P(4)
                            ]
                        }, void 0, false, {
                            fileName: "[project]/src/components/MinecraftPatient.tsx",
                            lineNumber: 397,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MinecraftPatient.tsx",
                        lineNumber: 396,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/MinecraftPatient.tsx",
                    lineNumber: 395,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    ref: head,
                    position: [
                        0,
                        P(28),
                        0
                    ],
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        castShadow: true,
                        material: headMaterials,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                            args: [
                                P(8),
                                P(8),
                                P(8)
                            ]
                        }, void 0, false, {
                            fileName: "[project]/src/components/MinecraftPatient.tsx",
                            lineNumber: 403,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MinecraftPatient.tsx",
                        lineNumber: 402,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/MinecraftPatient.tsx",
                    lineNumber: 401,
                    columnNumber: 9
                }, this),
                thumbsMaterial && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    ref: thumbsRef,
                    position: [
                        0,
                        P(22),
                        0
                    ],
                    visible: false,
                    children: Array.from({
                        length: 9
                    }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sprite", {
                            ref: (el)=>{
                                thumbSprites.current[i] = el;
                            },
                            material: thumbsMaterial,
                            position: [
                                0,
                                0,
                                0
                            ],
                            scale: [
                                0.2,
                                0.2,
                                0.2
                            ]
                        }, i, false, {
                            fileName: "[project]/src/components/MinecraftPatient.tsx",
                            lineNumber: 410,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/MinecraftPatient.tsx",
                    lineNumber: 408,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/MinecraftPatient.tsx",
            lineNumber: 374,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/MinecraftPatient.tsx",
        lineNumber: 373,
        columnNumber: 5
    }, this);
}
_s(MinecraftPatient, "9Q44CRPp0vLW7XiMP626ZdzASSM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTexture"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c1 = MinecraftPatient;
var _c, _c1;
__turbopack_context__.k.register(_c, "P");
__turbopack_context__.k.register(_c1, "MinecraftPatient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/GhostDoctor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GhostDoctor",
    ()=>GhostDoctor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/web/Html.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function GhostDoctor({ mood, promptText, showBubble = true, showPanelTrail = false }) {
    _s();
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const leftBrow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rightBrow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mouth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const expression = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GhostDoctor.useMemo[expression]": ()=>{
            if (mood === "happy") {
                return {
                    browY: 0.26,
                    browRotL: -0.2,
                    browRotR: 0.2,
                    mouthY: -0.08,
                    mouthRot: 0.15,
                    mouthScaleY: 0.65
                };
            }
            if (mood === "concerned") {
                return {
                    browY: 0.24,
                    browRotL: 0.3,
                    browRotR: -0.3,
                    mouthY: -0.06,
                    mouthRot: -0.1,
                    mouthScaleY: 0.45
                };
            }
            if (mood === "strict") {
                return {
                    browY: 0.23,
                    browRotL: 0.4,
                    browRotR: -0.4,
                    mouthY: -0.04,
                    mouthRot: -0.25,
                    mouthScaleY: 0.35
                };
            }
            return {
                browY: 0.25,
                browRotL: 0.06,
                browRotR: -0.06,
                mouthY: -0.06,
                mouthRot: 0,
                mouthScaleY: 0.4
            };
        }
    }["GhostDoctor.useMemo[expression]"], [
        mood
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "GhostDoctor.useFrame": ({ clock })=>{
            if (!root.current) return;
            const t = clock.getElapsedTime();
            root.current.position.y = 0.05 + Math.sin(t * 1.6) * 0.04;
            root.current.rotation.y = Math.sin(t * 0.9) * 0.16;
        }
    }["GhostDoctor.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: root,
        position: [
            0.6,
            0,
            0.15
        ],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                position: [
                    0,
                    0.35,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        castShadow: true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                                args: [
                                    0.38,
                                    24,
                                    24
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/components/GhostDoctor.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                color: "#d7eef9",
                                transparent: true,
                                opacity: 0.86,
                                roughness: 0.25
                            }, void 0, false, {
                                fileName: "[project]/src/components/GhostDoctor.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GhostDoctor.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        position: [
                            0,
                            -0.42,
                            0
                        ],
                        castShadow: true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                                args: [
                                    0.42,
                                    24,
                                    18
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/components/GhostDoctor.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                color: "#d7eef9",
                                transparent: true,
                                opacity: 0.86,
                                roughness: 0.3
                            }, void 0, false, {
                                fileName: "[project]/src/components/GhostDoctor.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GhostDoctor.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        position: [
                            0,
                            -0.78,
                            0
                        ],
                        castShadow: true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("coneGeometry", {
                                args: [
                                    0.24,
                                    0.42,
                                    16
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/components/GhostDoctor.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                color: "#c5e4f4",
                                transparent: true,
                                opacity: 0.78,
                                roughness: 0.35
                            }, void 0, false, {
                                fileName: "[project]/src/components/GhostDoctor.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GhostDoctor.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/GhostDoctor.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                position: [
                    0,
                    0.5,
                    0.34
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        position: [
                            -0.14,
                            0.02,
                            0
                        ],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                                args: [
                                    0.045,
                                    14,
                                    14
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/components/GhostDoctor.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                color: "#1f2835"
                            }, void 0, false, {
                                fileName: "[project]/src/components/GhostDoctor.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GhostDoctor.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        position: [
                            0.14,
                            0.02,
                            0
                        ],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                                args: [
                                    0.045,
                                    14,
                                    14
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/components/GhostDoctor.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                color: "#1f2835"
                            }, void 0, false, {
                                fileName: "[project]/src/components/GhostDoctor.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GhostDoctor.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        position: [
                            -0.14,
                            0.02,
                            0.005
                        ],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("torusGeometry", {
                                args: [
                                    0.08,
                                    0.012,
                                    8,
                                    24
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/components/GhostDoctor.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                color: "#4a5e71",
                                metalness: 0.2,
                                roughness: 0.3
                            }, void 0, false, {
                                fileName: "[project]/src/components/GhostDoctor.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GhostDoctor.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        position: [
                            0.14,
                            0.02,
                            0.005
                        ],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("torusGeometry", {
                                args: [
                                    0.08,
                                    0.012,
                                    8,
                                    24
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/components/GhostDoctor.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                color: "#4a5e71",
                                metalness: 0.2,
                                roughness: 0.3
                            }, void 0, false, {
                                fileName: "[project]/src/components/GhostDoctor.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GhostDoctor.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        position: [
                            0,
                            0.02,
                            0.005
                        ],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                                args: [
                                    0.1,
                                    0.012,
                                    0.012
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/components/GhostDoctor.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                color: "#4a5e71"
                            }, void 0, false, {
                                fileName: "[project]/src/components/GhostDoctor.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GhostDoctor.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                        ref: leftBrow,
                        position: [
                            -0.14,
                            expression.browY,
                            0
                        ],
                        rotation: [
                            0,
                            0,
                            expression.browRotL
                        ],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                                    args: [
                                        0.14,
                                        0.02,
                                        0.02
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/src/components/GhostDoctor.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                    color: "#243244"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/GhostDoctor.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/GhostDoctor.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/GhostDoctor.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                        ref: rightBrow,
                        position: [
                            0.14,
                            expression.browY,
                            0
                        ],
                        rotation: [
                            0,
                            0,
                            expression.browRotR
                        ],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                                    args: [
                                        0.14,
                                        0.02,
                                        0.02
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/src/components/GhostDoctor.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                    color: "#243244"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/GhostDoctor.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/GhostDoctor.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/GhostDoctor.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                        ref: mouth,
                        position: [
                            0,
                            expression.mouthY,
                            0
                        ],
                        rotation: [
                            0,
                            0,
                            expression.mouthRot
                        ],
                        scale: [
                            1,
                            expression.mouthScaleY,
                            1
                        ],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("torusGeometry", {
                                    args: [
                                        0.1,
                                        0.014,
                                        8,
                                        24,
                                        Math.PI
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/src/components/GhostDoctor.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                    color: "#243244"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/GhostDoctor.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/GhostDoctor.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/GhostDoctor.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/GhostDoctor.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            showBubble && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
                position: [
                    -0.04,
                    1.42,
                    0.18
                ],
                center: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onWheel: (e)=>e.stopPropagation(),
                    style: {
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
                        maxHeight: "180px",
                        boxShadow: "0 8px 20px rgba(0,0,0,0.22)",
                        whiteSpace: "pre-wrap",
                        overflowY: "auto",
                        overflowX: "hidden",
                        pointerEvents: "auto",
                        touchAction: "pan-y",
                        overscrollBehavior: "contain",
                        WebkitOverflowScrolling: "touch"
                    },
                    children: promptText
                }, void 0, false, {
                    fileName: "[project]/src/components/GhostDoctor.tsx",
                    lineNumber: 109,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/GhostDoctor.tsx",
                lineNumber: 108,
                columnNumber: 9
            }, this),
            showPanelTrail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
                transform: true,
                position: [
                    0.9,
                    1.08,
                    0.2
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "grid",
                        gap: "8px",
                        justifyItems: "start",
                        pointerEvents: "none"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                width: "18px",
                                height: "18px",
                                borderRadius: "999px",
                                background: "rgba(28, 32, 42, 0.92)",
                                border: "1px solid rgba(80, 95, 120, 0.4)",
                                boxShadow: "0 4px 10px rgba(0,0,0,0.22)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/GhostDoctor.tsx",
                            lineNumber: 149,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                width: "12px",
                                height: "12px",
                                borderRadius: "999px",
                                marginLeft: "10px",
                                background: "rgba(28, 32, 42, 0.92)",
                                border: "1px solid rgba(80, 95, 120, 0.4)",
                                boxShadow: "0 3px 8px rgba(0,0,0,0.2)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/GhostDoctor.tsx",
                            lineNumber: 159,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                width: "8px",
                                height: "8px",
                                borderRadius: "999px",
                                marginLeft: "18px",
                                background: "rgba(28, 32, 42, 0.92)",
                                border: "1px solid rgba(80, 95, 120, 0.4)",
                                boxShadow: "0 2px 6px rgba(0,0,0,0.18)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/GhostDoctor.tsx",
                            lineNumber: 170,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/GhostDoctor.tsx",
                    lineNumber: 141,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/GhostDoctor.tsx",
                lineNumber: 140,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/GhostDoctor.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(GhostDoctor, "gQwIs+yasGOCpcC+7HlxIB3Pme8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = GhostDoctor;
var _c;
__turbopack_context__.k.register(_c, "GhostDoctor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ClinicScene3D.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClinicScene3D",
    ()=>ClinicScene3D
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/OrbitControls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MinecraftPatient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MinecraftPatient.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GhostDoctor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/GhostDoctor.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
function ClinicRoom() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                rotation: [
                    -Math.PI / 2,
                    0,
                    0
                ],
                position: [
                    0,
                    -0.6,
                    0
                ],
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                        args: [
                            12,
                            12
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#b7885a",
                        roughness: 0.9,
                        metalness: 0.02
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClinicScene3D.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    2.5,
                    -4
                ],
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                        args: [
                            12,
                            6
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#c8d0d8",
                        roughness: 0.95
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClinicScene3D.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    -4,
                    2.5,
                    0
                ],
                rotation: [
                    0,
                    Math.PI / 2,
                    0
                ],
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                        args: [
                            8,
                            6
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#d0d6dc",
                        roughness: 0.95
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClinicScene3D.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    4,
                    2.5,
                    0
                ],
                rotation: [
                    0,
                    -Math.PI / 2,
                    0
                ],
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                        args: [
                            8,
                            6
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#d0d6dc",
                        roughness: 0.95
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClinicScene3D.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    2.2,
                    -0.35,
                    -2.8
                ],
                castShadow: true,
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            1.4,
                            0.5,
                            0.6
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#7d8fa8",
                        roughness: 0.72
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClinicScene3D.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    -1.4,
                    0.06,
                    -2.2
                ],
                castShadow: true,
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            1.8,
                            0.12,
                            0.75
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#8b6b4a",
                        roughness: 0.78
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClinicScene3D.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    -2.15,
                    -0.28,
                    -2.48
                ],
                castShadow: true,
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.1,
                            0.64,
                            0.1
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#6f5a44",
                        roughness: 0.8
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClinicScene3D.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    -0.65,
                    -0.28,
                    -2.48
                ],
                castShadow: true,
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.1,
                            0.64,
                            0.1
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#6f5a44",
                        roughness: 0.8
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClinicScene3D.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    -2.15,
                    -0.28,
                    -1.92
                ],
                castShadow: true,
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.1,
                            0.64,
                            0.1
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#6f5a44",
                        roughness: 0.8
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClinicScene3D.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    -0.65,
                    -0.28,
                    -1.92
                ],
                castShadow: true,
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.1,
                            0.64,
                            0.1
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#6f5a44",
                        roughness: 0.8
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClinicScene3D.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    -1.25,
                    0.33,
                    -2.28
                ],
                castShadow: true,
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.55,
                            0.34,
                            0.08
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#1f2530",
                        roughness: 0.35,
                        metalness: 0.25
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClinicScene3D.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    -1.25,
                    0.33,
                    -2.22
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.46,
                            0.24,
                            0.01
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#7fb0de",
                        emissive: "#3e6795",
                        emissiveIntensity: 0.16
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClinicScene3D.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    -1.25,
                    0.19,
                    -2.28
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.07,
                            0.12,
                            0.04
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#2b3038",
                        roughness: 0.5
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClinicScene3D.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    -1.25,
                    0.125,
                    -2.28
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.22,
                            0.02,
                            0.12
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#2b3038",
                        roughness: 0.5
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClinicScene3D.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    -1.58,
                    0.135,
                    -2.05
                ],
                castShadow: true,
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.34,
                            0.02,
                            0.12
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#dadfe7",
                        roughness: 0.55
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClinicScene3D.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    -1.4,
                    -0.28,
                    -1.55
                ],
                castShadow: true,
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.45,
                            0.1,
                            0.42
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#4f6478",
                        roughness: 0.72
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClinicScene3D.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    -1.4,
                    -0.07,
                    -1.73
                ],
                castShadow: true,
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.45,
                            0.45,
                            0.1
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#4f6478",
                        roughness: 0.72
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClinicScene3D.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    -1.58,
                    -0.45,
                    -1.73
                ],
                castShadow: true,
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.04,
                            0.24,
                            0.04
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#3f4b5a",
                        roughness: 0.58,
                        metalness: 0.15
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClinicScene3D.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    -1.22,
                    -0.45,
                    -1.73
                ],
                castShadow: true,
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.04,
                            0.24,
                            0.04
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#3f4b5a",
                        roughness: 0.58,
                        metalness: 0.15
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClinicScene3D.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    -1.58,
                    -0.45,
                    -1.37
                ],
                castShadow: true,
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.04,
                            0.24,
                            0.04
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#3f4b5a",
                        roughness: 0.58,
                        metalness: 0.15
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClinicScene3D.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    -1.22,
                    -0.45,
                    -1.37
                ],
                castShadow: true,
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.04,
                            0.24,
                            0.04
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#3f4b5a",
                        roughness: 0.58,
                        metalness: 0.15
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClinicScene3D.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    1.2,
                    -0.35,
                    -2.0
                ],
                castShadow: true,
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.42,
                            0.08,
                            0.4
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#6f7f90",
                        roughness: 0.76
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClinicScene3D.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    1.2,
                    -0.16,
                    -2.15
                ],
                castShadow: true,
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.42,
                            0.34,
                            0.08
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#6f7f90",
                        roughness: 0.76
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClinicScene3D.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    1.03,
                    -0.5,
                    -2.14
                ],
                castShadow: true,
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.04,
                            0.2,
                            0.04
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#596a7b",
                        roughness: 0.76
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClinicScene3D.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    1.37,
                    -0.5,
                    -2.14
                ],
                castShadow: true,
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.04,
                            0.2,
                            0.04
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#596a7b",
                        roughness: 0.76
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClinicScene3D.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    1.03,
                    -0.5,
                    -1.86
                ],
                castShadow: true,
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.04,
                            0.2,
                            0.04
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#596a7b",
                        roughness: 0.76
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClinicScene3D.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    1.37,
                    -0.5,
                    -1.86
                ],
                castShadow: true,
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.04,
                            0.2,
                            0.04
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#596a7b",
                        roughness: 0.76
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClinicScene3D.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    -2.5,
                    -0.35,
                    -2.5
                ],
                castShadow: true,
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.5,
                            0.5,
                            0.4
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#8b7355",
                        roughness: 0.8
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClinicScene3D.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    -2.5,
                    -0.03,
                    -2.5
                ],
                castShadow: true,
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                        args: [
                            0.1,
                            0.1,
                            0.14,
                            12
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#8f9eab",
                        roughness: 0.7
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClinicScene3D.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    -2.5,
                    0.165,
                    -2.5
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("coneGeometry", {
                        args: [
                            0.16,
                            0.25,
                            10
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#4b9a67",
                        roughness: 0.8
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClinicScene3D.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    2.2,
                    -3.92
                ],
                castShadow: true,
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            2.6,
                            0.7,
                            0.26
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#d9dee6",
                        roughness: 0.65,
                        metalness: 0.08
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClinicScene3D.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    2.2,
                    -3.78
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            2.5,
                            0.62,
                            0.03
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#b7c4d4",
                        roughness: 0.22,
                        metalness: 0.45
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClinicScene3D.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    3.25,
                    -0.16,
                    -3.6
                ],
                castShadow: true,
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            1.25,
                            0.88,
                            0.42
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#ced6df",
                        roughness: 0.72
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClinicScene3D.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    2.95,
                    -0.16,
                    -3.38
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.56,
                            0.78,
                            0.02
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#aebbc9",
                        roughness: 0.5
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClinicScene3D.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    3.55,
                    -0.16,
                    -3.38
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.56,
                            0.78,
                            0.02
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#aebbc9",
                        roughness: 0.5
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClinicScene3D.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    -3.82,
                    2.0,
                    -1.1
                ],
                rotation: [
                    0,
                    Math.PI / 2,
                    0
                ],
                castShadow: true,
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            1.6,
                            0.09,
                            0.28
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#8f775c",
                        roughness: 0.82
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClinicScene3D.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    -3.73,
                    2.17,
                    -1.45
                ],
                rotation: [
                    0,
                    Math.PI / 2,
                    0
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.25,
                            0.34,
                            0.16
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#59a37c",
                        roughness: 0.7
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClinicScene3D.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    -3.73,
                    2.16,
                    -0.78
                ],
                rotation: [
                    0,
                    Math.PI / 2,
                    0
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.22,
                            0.3,
                            0.14
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#d8d2c2",
                        roughness: 0.9
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClinicScene3D.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    3.86,
                    2.05,
                    -1.3
                ],
                rotation: [
                    0,
                    -Math.PI / 2,
                    0
                ],
                castShadow: true,
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            1.65,
                            1.0,
                            0.12
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#252b34",
                        roughness: 0.45,
                        metalness: 0.35
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClinicScene3D.tsx",
                lineNumber: 187,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    3.79,
                    2.05,
                    -1.3
                ],
                rotation: [
                    0,
                    -Math.PI / 2,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            1.42,
                            0.78,
                            0.02
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 192,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#78a8d8",
                        emissive: "#3f6b9e",
                        emissiveIntensity: 0.18,
                        roughness: 0.2
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClinicScene3D.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    -2.35,
                    2.25,
                    -3.9
                ],
                castShadow: true,
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            1.6,
                            0.95,
                            0.06
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#f2f5f7",
                        roughness: 0.7
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClinicScene3D.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    -2.35,
                    2.25,
                    -3.86
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            1.44,
                            0.8,
                            0.01
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 202,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#ffffff",
                        roughness: 0.92
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClinicScene3D.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    2.85,
                    3.15,
                    -3.9
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                        args: [
                            0.24,
                            0.24,
                            0.06,
                            28
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 208,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#f5f5f5",
                        roughness: 0.55,
                        metalness: 0.08
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 209,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClinicScene3D.tsx",
                lineNumber: 207,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    2.85,
                    3.15,
                    -3.86
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.015,
                            0.13,
                            0.01
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 212,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#2f3742"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 213,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClinicScene3D.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    2.92,
                    3.15,
                    -3.86
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.11,
                            0.012,
                            0.01
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#2f3742"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 217,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClinicScene3D.tsx",
                lineNumber: 215,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                rotation: [
                    -Math.PI / 2,
                    0,
                    0
                ],
                position: [
                    0.2,
                    -0.595,
                    -1.45
                ],
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                        args: [
                            3.8,
                            2.2
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 222,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#c8a980",
                        roughness: 0.98
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 223,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClinicScene3D.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    5.35,
                    -1.2
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                        args: [
                            0.42,
                            0.42,
                            0.08,
                            20
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#f7f1dc",
                        emissive: "#f6efda",
                        emissiveIntensity: 0.2
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 229,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClinicScene3D.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    5.2,
                    -1.2
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                        args: [
                            0.03,
                            0.03,
                            0.22,
                            10
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 232,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#7b7f86",
                        roughness: 0.5,
                        metalness: 0.2
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 233,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClinicScene3D.tsx",
                lineNumber: 231,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    1.65,
                    2.2,
                    -3.91
                ],
                castShadow: true,
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            1.35,
                            1.0,
                            0.08
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 238,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#f0f2f5",
                        roughness: 0.75
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 239,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClinicScene3D.tsx",
                lineNumber: 237,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    1.65,
                    2.2,
                    -3.86
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            1.2,
                            0.84,
                            0.01
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 242,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#b9d6ec",
                        roughness: 0.25,
                        metalness: 0.1
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 243,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClinicScene3D.tsx",
                lineNumber: 241,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    1.65,
                    2.2,
                    -3.855
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.04,
                            0.84,
                            0.02
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 246,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#eef2f6",
                        roughness: 0.7
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 247,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClinicScene3D.tsx",
                lineNumber: 245,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    1.65,
                    2.2,
                    -3.855
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            1.2,
                            0.04,
                            0.02
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 250,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#eef2f6",
                        roughness: 0.7
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClinicScene3D.tsx",
                        lineNumber: 251,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClinicScene3D.tsx",
                lineNumber: 249,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ClinicScene3D.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = ClinicRoom;
function ClinicScene3D({ riskScore, reaction, celebrateIdeal, feedbackEmoji, doctorPromptText, doctorMood, doctorShowBubble = true, doctorShowPanelTrail = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "clinic-scene-3d",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
            shadows: true,
            camera: {
                position: [
                    0,
                    1.15,
                    4.3
                ],
                fov: 36
            },
            gl: {
                antialias: true,
                alpha: false
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("color", {
                    attach: "background",
                    args: [
                        "#a8b8c8"
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/ClinicScene3D.tsx",
                    lineNumber: 285,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                    intensity: 0.5
                }, void 0, false, {
                    fileName: "[project]/src/components/ClinicScene3D.tsx",
                    lineNumber: 286,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                    position: [
                        3.5,
                        5,
                        4
                    ],
                    intensity: 1.35,
                    castShadow: true,
                    "shadow-mapSize-width": 1024,
                    "shadow-mapSize-height": 1024,
                    "shadow-camera-far": 14,
                    "shadow-camera-left": -3.5,
                    "shadow-camera-right": 3.5,
                    "shadow-camera-top": 3.5,
                    "shadow-camera-bottom": -3.5,
                    "shadow-bias": -0.0001
                }, void 0, false, {
                    fileName: "[project]/src/components/ClinicScene3D.tsx",
                    lineNumber: 287,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                    position: [
                        -2.5,
                        2.5,
                        2
                    ],
                    intensity: 0.45,
                    color: "#c5d4e8"
                }, void 0, false, {
                    fileName: "[project]/src/components/ClinicScene3D.tsx",
                    lineNumber: 300,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                    position: [
                        0,
                        0.8,
                        2.2
                    ],
                    intensity: 0.4,
                    color: "#fff5e6",
                    distance: 5
                }, void 0, false, {
                    fileName: "[project]/src/components/ClinicScene3D.tsx",
                    lineNumber: 302,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                    position: [
                        0.5,
                        0.5,
                        1.5
                    ],
                    intensity: 0.15,
                    color: "#e8f0ff",
                    distance: 4
                }, void 0, false, {
                    fileName: "[project]/src/components/ClinicScene3D.tsx",
                    lineNumber: 303,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ClinicRoom, {}, void 0, false, {
                    fileName: "[project]/src/components/ClinicScene3D.tsx",
                    lineNumber: 304,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                    fallback: null,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MinecraftPatient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MinecraftPatient"], {
                            riskScore: riskScore,
                            reaction: reaction,
                            celebrateIdeal: celebrateIdeal,
                            feedbackEmoji: feedbackEmoji
                        }, void 0, false, {
                            fileName: "[project]/src/components/ClinicScene3D.tsx",
                            lineNumber: 306,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GhostDoctor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GhostDoctor"], {
                            mood: doctorMood,
                            promptText: doctorPromptText,
                            showBubble: doctorShowBubble,
                            showPanelTrail: doctorShowPanelTrail
                        }, void 0, false, {
                            fileName: "[project]/src/components/ClinicScene3D.tsx",
                            lineNumber: 312,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ClinicScene3D.tsx",
                    lineNumber: 305,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitControls"], {
                    enableZoom: true,
                    zoomSpeed: 0.8,
                    minDistance: 3,
                    maxDistance: 7,
                    enablePan: false,
                    minPolarAngle: 0.5,
                    maxPolarAngle: 1.45,
                    target: [
                        0,
                        0.85,
                        0
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/ClinicScene3D.tsx",
                    lineNumber: 319,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ClinicScene3D.tsx",
            lineNumber: 280,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ClinicScene3D.tsx",
        lineNumber: 279,
        columnNumber: 5
    }, this);
}
_c1 = ClinicScene3D;
var _c, _c1;
__turbopack_context__.k.register(_c, "ClinicRoom");
__turbopack_context__.k.register(_c1, "ClinicScene3D");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/cases.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"id":"case_ckd","title":"Patient with CKD","summary":"58-year-old with A1c 8.6%, eGFR 42 mL/min/1.73 m², obesity, and history of nocturnal hypoglycemia on prior secretagogue.","features":{"a1c":8.6,"bmi":33,"egfr":42,"ascvd":false,"hf":false,"costSensitive":false,"hypoglycemiaRisk":true,"weightLossGoal":true,"giIntolerance":false},"derivedTags":["ckd","high_hypoglycemia_risk","weight_loss_goal"],"teachingPoint":"Prioritize agents with demonstrated cardiorenal benefit and avoid hypoglycemia-prone regimens. SGLT2 inhibitors are recommended for individuals with CKD regardless of A1C (Diabetes Canada 2024; CCS 2022).","appropriate":["sglt2","glp1"],"bestAlternative":"sglt2"},{"id":"case_ascvd","title":"Patient with ASCVD","summary":"64-year-old with prior MI, A1c 8.1%, BMI 36. Motivated for weight loss and stroke prevention.","features":{"a1c":8.1,"bmi":36,"egfr":72,"ascvd":true,"hf":false,"costSensitive":false,"hypoglycemiaRisk":false,"weightLossGoal":true,"giIntolerance":false},"derivedTags":["ascvd","weight_loss_goal"],"teachingPoint":"Use GLP-1 RA or SGLT2i for cardiorenal risk reduction. GLP-1 RAs have strong evidence for MACE and nonfatal stroke reduction; preferred when weight loss is a priority (Diabetes Canada 2024; CCS 2022).","appropriate":["glp1","sglt2"],"bestAlternative":"glp1"},{"id":"case_hf","title":"Patient with Heart Failure","summary":"62-year-old with HFrEF (LVEF 35%), A1c 7.8%, eGFR 58. On guideline-directed HF therapy; need to add glucose-lowering with cardiorenal benefit.","features":{"a1c":7.8,"bmi":30,"egfr":58,"ascvd":true,"hf":true,"costSensitive":false,"hypoglycemiaRisk":false,"weightLossGoal":false,"giIntolerance":false},"derivedTags":["hf","ascvd"],"teachingPoint":"SGLT2 inhibitors are recommended for adults with HF (LVEF ≤40% or >40%) to reduce hospitalization for HF and, in HFrEF, mortality and kidney outcomes. Initiation is independent of A1C (CCS 2022; Diabetes Canada 2024).","appropriate":["sglt2","glp1"],"bestAlternative":"sglt2"},{"id":"case_cost","title":"Cost-Sensitive, New Diagnosis","summary":"47-year-old, A1c 8.4%, no ASCVD/CKD/HF, limited drug coverage. Tolerates metformin.","features":{"a1c":8.4,"bmi":29,"egfr":85,"ascvd":false,"hf":false,"costSensitive":true,"hypoglycemiaRisk":false,"weightLossGoal":false,"giIntolerance":false},"derivedTags":["cost_sensitive"],"teachingPoint":"Metformin remains first-line when tolerated and affordable. Sulfonylureas are the least expensive alternative where financial barriers exist; consider hypoglycemia and weight when choosing (Diabetes Canada 2024).","appropriate":["metformin","sulfonylurea"],"bestAlternative":"metformin"},{"id":"case_gi_intolerance","title":"Patient with GI Intolerance to Metformin","summary":"55-year-old, A1c 8.2%, eGFR 78, ASCVD. Cannot tolerate metformin due to persistent GI symptoms despite slow titration.","features":{"a1c":8.2,"bmi":32,"egfr":78,"ascvd":true,"hf":false,"costSensitive":false,"hypoglycemiaRisk":false,"weightLossGoal":true,"giIntolerance":true},"derivedTags":["ascvd","weight_loss_goal","gi_intolerance"],"teachingPoint":"In ASCVD with need for weight loss, prefer SGLT2i when GLP-1 RA is limited by GI intolerance. SGLT2i offer cardiorenal benefit without GI burden (Diabetes Canada 2024; CCS 2022).","appropriate":["sglt2","dpp4"],"bestAlternative":"sglt2"}]);}),
"[project]/src/data/drugs.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"id":"metformin","name":"Metformin","description":"First-line oral biguanide that lowers hepatic glucose production and improves insulin sensitivity.","benefits":["Durable A1C lowering","Negligible hypoglycemia or weight gain","Long-term safety and affordability"],"risks":["GI side effects (minimize with low initial dose)","Vitamin B12 deficiency with long-term use"],"avoidIf":["advanced_ckd","gi_intolerance"],"preferIf":["cost_sensitive"],"evidence":[{"id":"m1","source":"Diabetes Canada 2024, Can J Diabetes","quote":"Metformin is recommended as the initial antihyperglycemic medication because of its durable efficacy in lowering A1C, negligible risk for hypoglycemia or weight gain, relatively mild side-effect profile, long-term track record, and affordability."}]},{"id":"sglt2","name":"SGLT2 Inhibitor","description":"Oral class that increases urinary glucose excretion and provides heart-kidney protection.","benefits":["Cardiorenal protection in CKD, HF, and high CV risk","Weight loss","Negligible hypoglycemia"],"risks":["Genital mycotic infections","Volume depletion","Hold in acute illness; eGFR limits per product"],"avoidIf":[],"preferIf":["ckd","hf","ascvd"],"evidence":[{"id":"s1","source":"Diabetes Canada 2024, Can J Diabetes","quote":"An SGLT2 inhibitor with demonstrated evidence of benefit is recommended for individuals with CKD (Grade A for canagliflozin, dapagliflozin, or empagliflozin)."},{"id":"s2","source":"CCS 2022, Can J Cardiol","quote":"In adults with HF and LVEF ≤40%, we recommend use of SGLT2i to reduce all-cause and CV mortality, hospitalization for HF, and composite kidney outcome."}]},{"id":"glp1","name":"GLP-1 Receptor Agonist","description":"Incretin-based therapy (often injectable) that improves glucose control and supports weight loss.","benefits":["MACE reduction in high CV risk","Weight loss","Negligible hypoglycemia","Nonfatal stroke reduction"],"risks":["Nausea, vomiting, diarrhea (often transient)","Avoid in pregnancy; safety unknown"],"avoidIf":["gi_intolerance"],"preferIf":["ascvd","weight_loss_goal"],"evidence":[{"id":"g1","source":"Diabetes Canada 2024, Can J Diabetes","quote":"A GLP1-RA with demonstrated evidence of benefit is recommended for individuals at high CV risk (dulaglutide, liraglutide, or subcutaneous semaglutide)."},{"id":"g2","source":"CCS 2022, Can J Cardiol","quote":"GLP-1RA to reduce the risk of nonfatal stroke (Strong Recommendation; Moderate-Quality Evidence)."}]},{"id":"dpp4","name":"DPP-4 Inhibitor","description":"Oral incretin enhancer with modest glucose lowering and generally low hypoglycemia risk.","benefits":["Oral dosing","Low hypoglycemia risk","Weight neutral"],"risks":["Modest A1C lowering vs GLP-1/SGLT2","Some agents: heart failure signal in trials"],"avoidIf":["hf"],"preferIf":[],"evidence":[{"id":"d1","source":"Diabetes Canada 2024, Can J Diabetes","quote":"Combinations of metformin with ... DPP4 inhibitors have broadly comparable A1C-lowering benefits. DPP4 inhibitors have a neutral effect on weight."}]},{"id":"sulfonylurea","name":"Sulfonylurea","description":"Oral insulin secretagogue that lowers glucose effectively but can increase hypo risk.","benefits":["Effective A1C lowering","Low cost"],"risks":["Hypoglycemia","Weight gain (1.5–5 kg)"],"avoidIf":["high_hypoglycemia_risk"],"preferIf":["cost_sensitive"],"evidence":[{"id":"su1","source":"Diabetes Canada 2024, Can J Diabetes","quote":"The risk of hypoglycemia is lower with incretins, SGLT2 inhibitors, and thiazolidinediones compared to sulfonylureas and insulin. Where financial barriers exist, sulfonylureas are the least expensive alternative."}]},{"id":"basal_insulin","name":"Basal Insulin","description":"Long-acting insulin replacement used for strong glucose lowering, especially when control is severe.","benefits":["No dose ceiling; strong glucose lowering","First-line in metabolic decompensation or severe symptomatic hyperglycemia"],"risks":["Hypoglycemia","Weight gain","Injection burden"],"avoidIf":["high_hypoglycemia_risk"],"preferIf":["very_high_a1c"],"evidence":[{"id":"i1","source":"Diabetes Canada 2024, Can J Diabetes","quote":"Insulin, with or without metformin, is recommended as initial pharmacologic therapy for individuals with metabolic decompensation and/or severe symptomatic hyperglycemia."}]},{"id":"prednisone","name":"Prednisone (systemic steroid)","description":"Systemic corticosteroid for inflammatory disease; not a diabetes glucose-lowering treatment.","benefits":["Not a glucose-lowering therapy","Used for inflammatory disease, not routine T2DM management"],"risks":["Can markedly worsen hyperglycemia","Fluid retention and blood pressure worsening","Higher infection risk with prolonged use"],"avoidIf":["ascvd","hf"],"contraindicatedIf":["ckd","high_hypoglycemia_risk","weight_loss_goal"],"preferIf":[],"unsafeDecoy":true,"evidence":[{"id":"x1","source":"Clinical safety principle","quote":"Systemic corticosteroids are not first-line glucose-lowering treatment and may worsen glycemic control."}]},{"id":"ibuprofen_high_dose","name":"Ibuprofen (high-dose chronic)","description":"NSAID analgesic/anti-inflammatory; not used to treat hyperglycemia.","benefits":["Analgesic/anti-inflammatory only","No glucose-lowering benefit"],"risks":["Can precipitate AKI and worsen CKD","GI bleeding risk","Can worsen blood pressure and fluid status"],"avoidIf":["ckd","hf"],"contraindicatedIf":["ckd"],"preferIf":[],"unsafeDecoy":true,"evidence":[{"id":"x2","source":"Clinical safety principle","quote":"Chronic high-dose NSAID therapy is unsafe in CKD and does not treat hyperglycemia."}]},{"id":"gentamicin","name":"Gentamicin","description":"Aminoglycoside antibiotic for serious infections; no role in chronic diabetes control.","benefits":["Antibiotic for selected severe infections","No role in chronic glucose control"],"risks":["Nephrotoxicity","Ototoxicity","Requires therapeutic drug monitoring"],"avoidIf":["ckd"],"contraindicatedIf":["ckd","ascvd","hf","weight_loss_goal","high_hypoglycemia_risk","cost_sensitive"],"preferIf":[],"unsafeDecoy":true,"evidence":[{"id":"x3","source":"Clinical safety principle","quote":"Aminoglycosides are infection-directed agents and can cause serious kidney injury, especially in CKD."}]},{"id":"warfarin","name":"Warfarin","description":"Vitamin K antagonist anticoagulant for clot prevention in specific indications, not glucose control.","benefits":["Anticoagulant for specific thromboembolic indications","No glucose-lowering effect"],"risks":["Major bleeding risk","Frequent INR monitoring","High interaction burden"],"avoidIf":["high_hypoglycemia_risk","ckd"],"contraindicatedIf":["weight_loss_goal","cost_sensitive"],"preferIf":[],"unsafeDecoy":true,"evidence":[{"id":"x4","source":"Clinical safety principle","quote":"Anticoagulation should only be used for clear thrombosis indications and is not treatment for hyperglycemia."}]}]);}),
"[project]/src/lib/engine.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllCases",
    ()=>getAllCases,
    "getAllDrugs",
    ()=>getAllDrugs,
    "gradeChoice",
    ()=>gradeChoice
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cases$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/cases.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$drugs$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/drugs.json (json)");
;
;
const drugs = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$drugs$2e$json__$28$json$29$__["default"];
const cases = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cases$2e$json__$28$json$29$__["default"];
function getAllCases() {
    return cases;
}
function getAllDrugs() {
    return drugs;
}
function gradeChoice(patient, selectedDrugId) {
    if (!selectedDrugId) {
        return {
            headline: "Choose a medication class",
            score: 0,
            bullets: [
                "Select an option to evaluate clinical fit for this patient."
            ],
            rationale: "Use comorbidities, safety profile, and patient goals to guide your first-line choice.",
            sideEffects: [],
            evidence: []
        };
    }
    const drug = drugs.find((d)=>d.id === selectedDrugId);
    if (!drug) return null;
    const matchedAvoid = drug.avoidIf.filter((tag)=>patient.derivedTags.includes(tag));
    const matchedContra = (drug.contraindicatedIf ?? []).filter((tag)=>patient.derivedTags.includes(tag));
    const matchedPrefer = drug.preferIf.filter((tag)=>patient.derivedTags.includes(tag));
    const isUnsafeDecoy = !!drug.unsafeDecoy;
    const isBest = selectedDrugId === patient.bestAlternative;
    const isAppropriate = patient.appropriate.includes(selectedDrugId);
    let score = 55;
    let headline = "Reasonable, but not optimal";
    if (isBest) {
        score = 95;
        headline = "Best choice for this case";
    } else if (isAppropriate) {
        score = 82;
        headline = "Appropriate choice";
    }
    if (isUnsafeDecoy) {
        score = 5;
        headline = "Dangerous choice";
    } else if (matchedContra.length > 0) {
        score = Math.max(8, score - 60);
        headline = "Severely unsafe for this patient";
    } else if (matchedAvoid.length > 0) {
        score = Math.max(25, score - 35);
        headline = "High-risk choice for this patient";
    }
    const bullets = [];
    if (isUnsafeDecoy) {
        bullets.push("This option is intentionally unsafe/non-indicated in this simulator and can cause major harm.");
    }
    if (matchedContra.length > 0) {
        bullets.push(`Strong contraindication for this case: ${matchedContra.join(", ")}.`);
    }
    if (matchedPrefer.length > 0) {
        bullets.push(`Matches priority tags: ${matchedPrefer.join(", ")}.`);
    }
    if (matchedAvoid.length > 0) {
        bullets.push(`Conflicts with risk tags: ${matchedAvoid.join(", ")}.`);
    }
    bullets.push(...isAppropriate ? drug.benefits : drug.risks);
    const rationale = isBest ? patient.teachingPoint : `Most preferred option in this case: ${formatDrugName(patient.bestAlternative)}.`;
    return {
        headline,
        score,
        bullets,
        rationale,
        sideEffects: drug.risks,
        evidence: drug.evidence
    };
}
function formatDrugName(id) {
    return drugs.find((d)=>d.id === id)?.name ?? id;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/CasePlayer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CasePlayer",
    ()=>CasePlayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ClinicScene3D$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ClinicScene3D.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/engine.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const LEARNING_CONSOLIDATION_SECONDS = 30;
function CasePlayer() {
    _s();
    const cases = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllCases"])();
    const drugs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllDrugs"])();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("browse");
    const [questionType, setQuestionType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("mcq");
    const [caseId, setCaseId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(cases[0]?.id ?? "");
    const [testingIndex, setTestingIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [choice, setChoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [shortAnswerInput, setShortAnswerInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [shortAnswerError, setShortAnswerError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [submittedResponseFeedback, setSubmittedResponseFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [testingReasoningQualified, setTestingReasoningQualified] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [testingSubmissionId, setTestingSubmissionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showHint, setShowHint] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [breatherSecondsLeft, setBreatherSecondsLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [learningPhase, setLearningPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [showEmojiKey, setShowEmojiKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showDoctor, setShowDoctor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [doctorQuestion, setDoctorQuestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [doctorLoading, setDoctorLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [bubbleSource, setBubbleSource] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("context");
    const [scoredPoints, setScoredPoints] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [doctorMessages, setDoctorMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            role: "assistant",
            text: "I am your AI Doctor coach. Ask about best medication choice, risks, side effects, or why an option is unsafe."
        }
    ]);
    const testingComplete = mode === "testing" && testingIndex >= cases.length;
    const testingPatient = testingComplete ? cases[0] : cases[testingIndex] ?? cases[0];
    const patient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CasePlayer.useMemo[patient]": ()=>{
            if (mode === "testing") return testingPatient;
            return cases.find({
                "CasePlayer.useMemo[patient]": (c)=>c.id === caseId
            }["CasePlayer.useMemo[patient]"]) ?? cases[0];
        }
    }["CasePlayer.useMemo[patient]"], [
        mode,
        testingPatient,
        cases,
        caseId
    ]);
    const feedback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CasePlayer.useMemo[feedback]": ()=>{
            if (choice) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gradeChoice"])(patient, choice);
            }
            return null;
        }
    }["CasePlayer.useMemo[feedback]"], [
        patient,
        choice
    ]);
    const displayFeedback = submittedResponseFeedback ?? feedback;
    const riskScore = choice ? displayFeedback?.score ?? 60 : 60;
    const reaction = getPatientReaction(choice, displayFeedback?.score ?? 0);
    const celebrateIdeal = !!choice && (displayFeedback?.score ?? 0) >= 95;
    const feedbackEmoji = displayFeedback ? getFeedbackEmoji(displayFeedback.score) : "";
    const testingAnswered = mode === "testing" && !!choice;
    const learningConsolidationActive = mode === "learning" && learningPhase === "timer";
    const selectedDrugName = choice ? drugs.find((drug)=>drug.id === choice)?.name ?? choice : null;
    const questionHint = buildQuestionHint(patient, questionType);
    const scoredTestingAttempts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const difficultyLevel = scoredPoints >= 1500 ? "advanced" : scoredPoints >= 1000 ? "intermediate" : "basic";
    const allowedTestingQuestionTypes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CasePlayer.useMemo[allowedTestingQuestionTypes]": ()=>[
                "short_answer"
            ]
    }["CasePlayer.useMemo[allowedTestingQuestionTypes]"], []);
    const doctorMood = getDoctorMoodFromScore(displayFeedback?.score);
    const doctorPromptText = buildDoctorPromptText({
        mode,
        selectedDrugName,
        feedbackScore: displayFeedback?.score,
        feedbackHeadline: displayFeedback?.headline
    });
    const latestDoctorReply = [
        ...doctorMessages
    ].reverse().find((message)=>message.role === "assistant")?.text ?? null;
    const doctorBubbleText = bubbleSource === "chat" && latestDoctorReply ? latestDoctorReply : doctorPromptText;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CasePlayer.useEffect": ()=>{
            if (!learningConsolidationActive || breatherSecondsLeft <= 0) return;
            const timer = window.setInterval({
                "CasePlayer.useEffect.timer": ()=>{
                    setBreatherSecondsLeft({
                        "CasePlayer.useEffect.timer": (prev)=>prev > 0 ? prev - 1 : 0
                    }["CasePlayer.useEffect.timer"]);
                }
            }["CasePlayer.useEffect.timer"], 1000);
            return ({
                "CasePlayer.useEffect": ()=>window.clearInterval(timer)
            })["CasePlayer.useEffect"];
        }
    }["CasePlayer.useEffect"], [
        learningConsolidationActive,
        breatherSecondsLeft
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CasePlayer.useEffect": ()=>{
            if (!learningConsolidationActive || breatherSecondsLeft > 0) return;
            if (mode !== "learning") return;
            const currentIndex = cases.findIndex({
                "CasePlayer.useEffect.currentIndex": (c)=>c.id === caseId
            }["CasePlayer.useEffect.currentIndex"]);
            const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % cases.length : 0;
            setCaseId(cases[nextIndex]?.id ?? cases[0]?.id ?? "");
            setChoice(null);
            setLearningPhase("idle");
            setShowDoctor(false);
        }
    }["CasePlayer.useEffect"], [
        learningConsolidationActive,
        breatherSecondsLeft,
        mode,
        cases,
        caseId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CasePlayer.useEffect": ()=>{
            if (mode !== "testing") return;
            if (allowedTestingQuestionTypes.includes(questionType)) return;
            setQuestionType("short_answer");
        }
    }["CasePlayer.useEffect"], [
        mode,
        allowedTestingQuestionTypes,
        questionType
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CasePlayer.useEffect": ()=>{
            if (mode !== "testing" || testingSubmissionId <= 0 || !submittedResponseFeedback) return;
            const attemptKey = `${patient.id}:${testingIndex}:${testingSubmissionId}`;
            if (scoredTestingAttempts.current.has(attemptKey)) return;
            scoredTestingAttempts.current.add(attemptKey);
            const correctChoice = !!choice && patient.appropriate.includes(choice);
            const earned = getTestingPointsForAttempt({
                score: submittedResponseFeedback.score,
                correctChoice,
                reasoningQualified: testingReasoningQualified
            });
            if (earned <= 0) return;
            setScoredPoints({
                "CasePlayer.useEffect": (prev)=>prev + earned
            }["CasePlayer.useEffect"]);
        }
    }["CasePlayer.useEffect"], [
        mode,
        testingSubmissionId,
        submittedResponseFeedback,
        choice,
        testingReasoningQualified,
        patient.id,
        testingIndex,
        patient.appropriate
    ]);
    function switchMode(nextMode) {
        setMode(nextMode);
        setBubbleSource("context");
        resetAttemptState();
        if (nextMode === "browse") {
            setQuestionType("mcq");
        }
        if (nextMode === "testing") {
            setQuestionType("short_answer");
            setTestingIndex(0);
        }
    }
    function handleChoice(drugId) {
        setShortAnswerError("");
        setSubmittedResponseFeedback(null);
        setTestingReasoningQualified(false);
        setChoice(drugId);
        setBubbleSource("context");
    }
    function nextAttempt() {
        resetAttemptState();
    }
    function resetAttemptState() {
        setChoice(null);
        setShortAnswerInput("");
        setShortAnswerError("");
        setSubmittedResponseFeedback(null);
        setTestingReasoningQualified(false);
        setTestingSubmissionId(0);
        setShowHint(false);
        setBreatherSecondsLeft(0);
        setLearningPhase("idle");
    }
    function submitShortAnswer() {
        const content = shortAnswerInput.trim();
        const reasoningQualified = hasSufficientShortAnswerReasoning(content);
        const resolved = resolveDrugFromAnswer(content, drugs);
        const responseFeedback = buildShortAnswerSubmissionFeedback({
            content,
            resolvedDrug: resolved,
            reasoningQualified,
            patient
        });
        setShortAnswerError("");
        setSubmittedResponseFeedback(responseFeedback);
        setTestingReasoningQualified(reasoningQualified);
        setTestingSubmissionId((prev)=>prev + 1);
        setChoice(resolved?.id ?? null);
        setBubbleSource("context");
    }
    function startLearningConsolidation() {
        setLearningPhase("timer");
        setBreatherSecondsLeft(LEARNING_CONSOLIDATION_SECONDS);
    }
    function openDoctorFromFeedback() {
        setShowDoctor(true);
    }
    async function askDoctor() {
        const prompt = doctorQuestion.trim();
        if (!prompt) return;
        setDoctorMessages((prev)=>[
                ...prev,
                {
                    role: "user",
                    text: prompt
                }
            ]);
        setDoctorLoading(true);
        setDoctorQuestion("");
        try {
            const selectedDrug = choice ? drugs.find((drug)=>drug.id === choice) ?? null : null;
            const res = await fetch("/api/doctor", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    question: prompt,
                    context: {
                        mode,
                        patient,
                        selectedDrug,
                        feedback: displayFeedback
                    }
                })
            });
            if (!res.ok) {
                const errBody = await res.json().catch(()=>({}));
                const detail = errBody.detail?.trim();
                const summary = errBody.error?.trim();
                const message = detail ?? summary ?? `Request failed with status ${res.status}`;
                throw new Error(message);
            }
            const data = await res.json();
            const answer = data.answer ?? "I could not generate a response right now. Try rephrasing your question.";
            setDoctorMessages((prev)=>[
                    ...prev,
                    {
                        role: "assistant",
                        text: answer
                    }
                ]);
            setBubbleSource("chat");
        } catch (error) {
            const message = error instanceof Error && error.message ? error.message : "AI Doctor is currently unavailable. Check your API key configuration and try again.";
            setDoctorMessages((prev)=>[
                    ...prev,
                    {
                        role: "assistant",
                        text: `AI Doctor is currently unavailable: ${message}`
                    }
                ]);
            setBubbleSource("chat");
        } finally{
            setDoctorLoading(false);
        }
    }
    function renderInlineFeedback() {
        if (!displayFeedback || testingComplete) return null;
        const currentFeedback = displayFeedback;
        if (mode === "testing") {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "inline-feedback",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "score-wrap",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "score",
                            children: [
                                feedbackEmoji,
                                " Score: ",
                                currentFeedback.score,
                                "/100"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CasePlayer.tsx",
                            lineNumber: 264,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/CasePlayer.tsx",
                        lineNumber: 263,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "quiz-actions",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>{
                                nextAttempt();
                                setTestingIndex((i)=>i + 1);
                            },
                            children: "View Next Patient"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CasePlayer.tsx",
                            lineNumber: 267,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/CasePlayer.tsx",
                        lineNumber: 266,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CasePlayer.tsx",
                lineNumber: 262,
                columnNumber: 9
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "inline-feedback",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "score-wrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "score",
                            children: [
                                feedbackEmoji,
                                " Score: ",
                                currentFeedback.score,
                                "/100"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CasePlayer.tsx",
                            lineNumber: 284,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "headline",
                            children: currentFeedback.headline
                        }, void 0, false, {
                            fileName: "[project]/src/components/CasePlayer.tsx",
                            lineNumber: 285,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CasePlayer.tsx",
                    lineNumber: 283,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "rationale",
                    children: currentFeedback.rationale
                }, void 0, false, {
                    fileName: "[project]/src/components/CasePlayer.tsx",
                    lineNumber: 287,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "feedback-label",
                    children: "Key points"
                }, void 0, false, {
                    fileName: "[project]/src/components/CasePlayer.tsx",
                    lineNumber: 288,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "feedback-list",
                    children: currentFeedback.bullets.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: item
                        }, item, false, {
                            fileName: "[project]/src/components/CasePlayer.tsx",
                            lineNumber: 291,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/CasePlayer.tsx",
                    lineNumber: 289,
                    columnNumber: 9
                }, this),
                currentFeedback.evidence.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "feedback-label",
                    children: "Evidence"
                }, void 0, false, {
                    fileName: "[project]/src/components/CasePlayer.tsx",
                    lineNumber: 294,
                    columnNumber: 49
                }, this),
                currentFeedback.evidence.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "evidence",
                    children: [
                        "Evidence: ",
                        currentFeedback.evidence[0].source,
                        " - ",
                        currentFeedback.evidence[0].quote
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CasePlayer.tsx",
                    lineNumber: 296,
                    columnNumber: 11
                }, this),
                currentFeedback.sideEffects.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "side-effects",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "side-effects-title",
                            children: "Potential side effects to monitor"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CasePlayer.tsx",
                            lineNumber: 302,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            children: currentFeedback.sideEffects.map((effect)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: explainSideEffect(effect)
                                }, effect, false, {
                                    fileName: "[project]/src/components/CasePlayer.tsx",
                                    lineNumber: 305,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/CasePlayer.tsx",
                            lineNumber: 303,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CasePlayer.tsx",
                    lineNumber: 301,
                    columnNumber: 11
                }, this),
                mode === "learning" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "quiz-actions",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "rationale",
                            children: [
                                "Checkpoint: ",
                                selectedDrugName,
                                " scored ",
                                currentFeedback.score,
                                "/100 for this case."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CasePlayer.tsx",
                            lineNumber: 312,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: startLearningConsolidation,
                            children: "Next: Start Consolidation Timer"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CasePlayer.tsx",
                            lineNumber: 315,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CasePlayer.tsx",
                    lineNumber: 311,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CasePlayer.tsx",
            lineNumber: 282,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "game-view",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "game-viewport",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ClinicScene3D$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClinicScene3D"], {
                    riskScore: riskScore,
                    reaction: reaction,
                    celebrateIdeal: celebrateIdeal,
                    feedbackEmoji: displayFeedback ? feedbackEmoji : null,
                    doctorPromptText: doctorBubbleText,
                    doctorMood: doctorMood,
                    doctorShowBubble: true
                }, void 0, false, {
                    fileName: "[project]/src/components/CasePlayer.tsx",
                    lineNumber: 327,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hud hud-top",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hud-header",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hud-title",
                                    children: "Simulose"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CasePlayer.tsx",
                                    lineNumber: 338,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hud-subtitle",
                                    children: "Patient medication simulator"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CasePlayer.tsx",
                                    lineNumber: 339,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CasePlayer.tsx",
                            lineNumber: 337,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mode-picker",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                id: "mode-picker",
                                className: "mode-select",
                                value: mode,
                                onChange: (e)=>switchMode(e.target.value),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        disabled: true,
                                        children: "Choose a mode"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CasePlayer.tsx",
                                        lineNumber: 348,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "browse",
                                        children: "Browse Mode"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CasePlayer.tsx",
                                        lineNumber: 351,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "learning",
                                        children: "Learning Mode"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CasePlayer.tsx",
                                        lineNumber: 352,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "testing",
                                        children: "Testing Mode"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CasePlayer.tsx",
                                        lineNumber: 353,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CasePlayer.tsx",
                                lineNumber: 342,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/CasePlayer.tsx",
                            lineNumber: 341,
                            columnNumber: 11
                        }, this),
                        mode === "testing" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "quiz-progress",
                            children: [
                                "Points: ",
                                scoredPoints,
                                " | Difficulty: ",
                                difficultyLevel
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CasePlayer.tsx",
                            lineNumber: 357,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hud-case-picker",
                            children: mode !== "testing" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    id: "case-picker",
                                    className: "case-picker-select",
                                    value: patient.id,
                                    onChange: (e)=>{
                                        setCaseId(e.target.value);
                                        nextAttempt();
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            disabled: true,
                                            children: "Patient list"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CasePlayer.tsx",
                                            lineNumber: 373,
                                            columnNumber: 19
                                        }, this),
                                        cases.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: c.id,
                                                children: c.title
                                            }, c.id, false, {
                                                fileName: "[project]/src/components/CasePlayer.tsx",
                                                lineNumber: 377,
                                                columnNumber: 21
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CasePlayer.tsx",
                                    lineNumber: 364,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "quiz-progress",
                                children: testingComplete ? "Testing complete" : `Patient ${testingIndex + 1} of ${cases.length}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/CasePlayer.tsx",
                                lineNumber: 384,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/CasePlayer.tsx",
                            lineNumber: 361,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CasePlayer.tsx",
                    lineNumber: 336,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "floating-tools",
                    children: [
                        (mode === "browse" || mode === "learning") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "doctor-chat-launch",
                            onClick: ()=>setShowDoctor((open)=>!open),
                            "aria-expanded": showDoctor,
                            "aria-controls": "ai-doctor-panel",
                            children: showDoctor ? "Hide Chat" : "Open Chat"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CasePlayer.tsx",
                            lineNumber: 393,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "emoji-key-wrap",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "emoji-key-button",
                                    onClick: ()=>setShowEmojiKey((open)=>!open),
                                    "aria-expanded": showEmojiKey,
                                    "aria-controls": "emoji-key-panel",
                                    "aria-label": "Toggle emoji key",
                                    title: "Legend",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": "true",
                                        children: "🗝️"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CasePlayer.tsx",
                                        lineNumber: 413,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CasePlayer.tsx",
                                    lineNumber: 404,
                                    columnNumber: 13
                                }, this),
                                showEmojiKey && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    id: "emoji-key-panel",
                                    className: "emoji-key-panel",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "emoji-key-title",
                                            children: "Feedback scale"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CasePlayer.tsx",
                                            lineNumber: 417,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "emoji-key-item",
                                            children: "😁 95-100: excellent match"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CasePlayer.tsx",
                                            lineNumber: 418,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "emoji-key-item",
                                            children: "👍 80-94: strong choice"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CasePlayer.tsx",
                                            lineNumber: 419,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "emoji-key-item",
                                            children: "😐 60-79: acceptable"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CasePlayer.tsx",
                                            lineNumber: 420,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "emoji-key-item",
                                            children: "😓 40-59: weak fit"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CasePlayer.tsx",
                                            lineNumber: 421,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "emoji-key-item",
                                            children: "☹️ 20-39: poor choice"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CasePlayer.tsx",
                                            lineNumber: 422,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "emoji-key-item",
                                            children: "💀 0-19: dangerous choice"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CasePlayer.tsx",
                                            lineNumber: 423,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CasePlayer.tsx",
                                    lineNumber: 416,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CasePlayer.tsx",
                            lineNumber: 403,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CasePlayer.tsx",
                    lineNumber: 391,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hud hud-left",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hud-panel info-panel",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: patient.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CasePlayer.tsx",
                                    lineNumber: 431,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: patient.summary
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CasePlayer.tsx",
                                    lineNumber: 432,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "condition-line",
                                    children: [
                                        "Conditions: ",
                                        describeConditions(patient)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CasePlayer.tsx",
                                    lineNumber: 433,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "quick-tags",
                                    children: buildImportantTags(patient).map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `quick-tag ${tag.tone}`,
                                            children: tag.label
                                        }, tag.label, false, {
                                            fileName: "[project]/src/components/CasePlayer.tsx",
                                            lineNumber: 438,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CasePlayer.tsx",
                                    lineNumber: 436,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "stats-title",
                                    children: "Patient Stats"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CasePlayer.tsx",
                                    lineNumber: 443,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "vitals-grid",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "A1c"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CasePlayer.tsx",
                                                    lineNumber: 446,
                                                    columnNumber: 17
                                                }, this),
                                                patient.features.a1c,
                                                "% (",
                                                a1cInterpretation(patient.features.a1c),
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CasePlayer.tsx",
                                            lineNumber: 445,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Kidney function"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CasePlayer.tsx",
                                                    lineNumber: 450,
                                                    columnNumber: 17
                                                }, this),
                                                "eGFR ",
                                                patient.features.egfr,
                                                " (",
                                                egfrInterpretation(patient.features.egfr),
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CasePlayer.tsx",
                                            lineNumber: 449,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "BMI"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CasePlayer.tsx",
                                                    lineNumber: 454,
                                                    columnNumber: 17
                                                }, this),
                                                patient.features.bmi,
                                                " (",
                                                bmiInterpretation(patient.features.bmi),
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CasePlayer.tsx",
                                            lineNumber: 453,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "CV disease"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CasePlayer.tsx",
                                                    lineNumber: 458,
                                                    columnNumber: 17
                                                }, this),
                                                patient.features.ascvd ? "Established ASCVD" : "No known ASCVD"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CasePlayer.tsx",
                                            lineNumber: 457,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Hypoglycemia risk"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CasePlayer.tsx",
                                                    lineNumber: 462,
                                                    columnNumber: 17
                                                }, this),
                                                patient.features.hypoglycemiaRisk ? "High - avoid low-triggering meds" : "Lower risk"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CasePlayer.tsx",
                                            lineNumber: 461,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Cost consideration"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CasePlayer.tsx",
                                                    lineNumber: 466,
                                                    columnNumber: 17
                                                }, this),
                                                patient.features.costSensitive ? "Important" : "Not primary"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CasePlayer.tsx",
                                            lineNumber: 465,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CasePlayer.tsx",
                                    lineNumber: 444,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CasePlayer.tsx",
                            lineNumber: 430,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hud-panel level-status-panel",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "feedback-label",
                                    children: "Progress"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CasePlayer.tsx",
                                    lineNumber: 472,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "headline",
                                    children: [
                                        "Level: ",
                                        difficultyLevel
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CasePlayer.tsx",
                                    lineNumber: 473,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "score",
                                    children: [
                                        "Points: ",
                                        scoredPoints
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CasePlayer.tsx",
                                    lineNumber: 474,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CasePlayer.tsx",
                            lineNumber: 471,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CasePlayer.tsx",
                    lineNumber: 429,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hud hud-right",
                    children: [
                        showDoctor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            id: "ai-doctor-panel",
                            className: "hud-panel doctor-inline-panel",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "doctor-inline-header",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "doctor-title",
                                            children: "AI Doctor"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CasePlayer.tsx",
                                            lineNumber: 482,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "feedback-chat-toggle",
                                            onClick: ()=>setShowDoctor(false),
                                            children: "Close"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CasePlayer.tsx",
                                            lineNumber: 483,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CasePlayer.tsx",
                                    lineNumber: 481,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "doctor-subtitle",
                                    children: "Educational coach for this case"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CasePlayer.tsx",
                                    lineNumber: 491,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "doctor-chat",
                                    children: doctorMessages.filter((message)=>message.role === "user").map((message, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `doctor-message ${message.role}`,
                                            children: message.text
                                        }, `${message.role}-${idx}`, false, {
                                            fileName: "[project]/src/components/CasePlayer.tsx",
                                            lineNumber: 496,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CasePlayer.tsx",
                                    lineNumber: 492,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    className: "doctor-input-row",
                                    onSubmit: (e)=>{
                                        e.preventDefault();
                                        askDoctor();
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            className: "doctor-input",
                                            rows: 2,
                                            placeholder: "Ask: Why is SGLT2 best here?",
                                            value: doctorQuestion,
                                            onChange: (e)=>setDoctorQuestion(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CasePlayer.tsx",
                                            lineNumber: 508,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "doctor-send",
                                            disabled: doctorLoading,
                                            children: doctorLoading ? "Thinking..." : "Ask"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CasePlayer.tsx",
                                            lineNumber: 515,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CasePlayer.tsx",
                                    lineNumber: 501,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CasePlayer.tsx",
                            lineNumber: 480,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hud-panel drug-panel",
                            children: mode === "learning" && learningConsolidationActive && displayFeedback ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: "Recall Summary"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CasePlayer.tsx",
                                        lineNumber: 525,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "rationale",
                                        children: [
                                            selectedDrugName,
                                            ": ",
                                            displayFeedback.headline
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CasePlayer.tsx",
                                        lineNumber: 526,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "drug-list",
                                        children: displayFeedback.bullets.slice(0, 4).map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: item
                                            }, item, false, {
                                                fileName: "[project]/src/components/CasePlayer.tsx",
                                                lineNumber: 531,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CasePlayer.tsx",
                                        lineNumber: 529,
                                        columnNumber: 17
                                    }, this),
                                    displayFeedback.sideEffects.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "feedback-label",
                                                children: "Monitor for"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CasePlayer.tsx",
                                                lineNumber: 536,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "drug-list",
                                                children: displayFeedback.sideEffects.map((effect)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: effect
                                                    }, effect, false, {
                                                        fileName: "[project]/src/components/CasePlayer.tsx",
                                                        lineNumber: 539,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CasePlayer.tsx",
                                                lineNumber: 537,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: mode === "testing" ? "Pick one medication" : "Medication choices"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CasePlayer.tsx",
                                        lineNumber: 547,
                                        columnNumber: 17
                                    }, this),
                                    mode !== "testing" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "question-type-switch",
                                        role: "tablist",
                                        "aria-label": "Question style",
                                        children: mode === "browse" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: questionType === "mcq" ? "active" : "",
                                            onClick: ()=>{
                                                setQuestionType("mcq");
                                                nextAttempt();
                                            },
                                            children: "Medications"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CasePlayer.tsx",
                                            lineNumber: 551,
                                            columnNumber: 23
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: questionType === "mcq" ? "active" : "",
                                                    onClick: ()=>{
                                                        setQuestionType("mcq");
                                                        nextAttempt();
                                                    },
                                                    children: "MCQ"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CasePlayer.tsx",
                                                    lineNumber: 563,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: questionType === "short_answer" ? "active" : "",
                                                    onClick: ()=>{
                                                        setQuestionType("short_answer");
                                                        nextAttempt();
                                                    },
                                                    children: "Short Answer"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CasePlayer.tsx",
                                                    lineNumber: 573,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CasePlayer.tsx",
                                        lineNumber: 549,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hint-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "hint-toggle",
                                                onClick: ()=>setShowHint((v)=>!v),
                                                children: showHint ? "Hide hint" : "Show hint"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CasePlayer.tsx",
                                                lineNumber: 588,
                                                columnNumber: 19
                                            }, this),
                                            showHint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "hint-text",
                                                children: questionHint
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CasePlayer.tsx",
                                                lineNumber: 591,
                                                columnNumber: 32
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CasePlayer.tsx",
                                        lineNumber: 587,
                                        columnNumber: 17
                                    }, this),
                                    mode !== "testing" && questionType === "mcq" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "drug-grid",
                                        children: drugs.map((drug)=>{
                                            const selected = choice === drug.id;
                                            const disabled = learningConsolidationActive;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "drug-option-wrap",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: `drug-card ${selected ? "selected" : ""}`,
                                                        onClick: ()=>handleChoice(drug.id),
                                                        disabled: disabled,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "drug-name",
                                                                children: drug.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CasePlayer.tsx",
                                                                lineNumber: 607,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "drug-meta-block",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "drug-label",
                                                                        children: "What it is"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CasePlayer.tsx",
                                                                        lineNumber: 609,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "drug-meta",
                                                                        children: drug.description
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CasePlayer.tsx",
                                                                        lineNumber: 610,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CasePlayer.tsx",
                                                                lineNumber: 608,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "drug-meta-block",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "drug-label",
                                                                        children: "Benefits"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CasePlayer.tsx",
                                                                        lineNumber: 613,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                        className: "drug-list",
                                                                        children: drug.benefits.map((benefit)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                children: benefit
                                                                            }, `${drug.id}-benefit-${benefit}`, false, {
                                                                                fileName: "[project]/src/components/CasePlayer.tsx",
                                                                                lineNumber: 616,
                                                                                columnNumber: 35
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CasePlayer.tsx",
                                                                        lineNumber: 614,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CasePlayer.tsx",
                                                                lineNumber: 612,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "drug-meta-block",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "drug-label",
                                                                        children: "Potential side effects"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CasePlayer.tsx",
                                                                        lineNumber: 621,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                        className: "drug-list",
                                                                        children: drug.risks.map((risk)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                children: risk
                                                                            }, `${drug.id}-risk-${risk}`, false, {
                                                                                fileName: "[project]/src/components/CasePlayer.tsx",
                                                                                lineNumber: 624,
                                                                                columnNumber: 35
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CasePlayer.tsx",
                                                                        lineNumber: 622,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CasePlayer.tsx",
                                                                lineNumber: 620,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CasePlayer.tsx",
                                                        lineNumber: 601,
                                                        columnNumber: 27
                                                    }, this),
                                                    selected && renderInlineFeedback()
                                                ]
                                            }, drug.id, true, {
                                                fileName: "[project]/src/components/CasePlayer.tsx",
                                                lineNumber: 600,
                                                columnNumber: 25
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CasePlayer.tsx",
                                        lineNumber: 595,
                                        columnNumber: 19
                                    }, this),
                                    questionType === "short_answer" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "free-answer-block",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "rationale",
                                                children: "Write the best medication class and explain why it fits this patient."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CasePlayer.tsx",
                                                lineNumber: 638,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                className: "doctor-input",
                                                rows: 3,
                                                placeholder: "Enter your medication class and reasoning...",
                                                value: shortAnswerInput,
                                                onChange: (e)=>setShortAnswerInput(e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CasePlayer.tsx",
                                                lineNumber: 641,
                                                columnNumber: 21
                                            }, this),
                                            shortAnswerError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "input-error",
                                                children: shortAnswerError
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CasePlayer.tsx",
                                                lineNumber: 648,
                                                columnNumber: 42
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "quiz-actions",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: displayFeedback ? openDoctorFromFeedback : submitShortAnswer,
                                                    children: displayFeedback ? "Ask more" : "Submit Short Answer"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CasePlayer.tsx",
                                                    lineNumber: 650,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CasePlayer.tsx",
                                                lineNumber: 649,
                                                columnNumber: 21
                                            }, this),
                                            displayFeedback && renderInlineFeedback()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CasePlayer.tsx",
                                        lineNumber: 637,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/src/components/CasePlayer.tsx",
                            lineNumber: 522,
                            columnNumber: 11
                        }, this),
                        mode === "testing" && testingComplete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hud-panel feedback-panel",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "headline",
                                    children: "Testing complete"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CasePlayer.tsx",
                                    lineNumber: 666,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "rationale",
                                    children: "You reviewed all patient scenarios. Restart to try again."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CasePlayer.tsx",
                                    lineNumber: 667,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "quiz-actions",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            setTestingIndex(0);
                                            nextAttempt();
                                        },
                                        children: "Restart Testing"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CasePlayer.tsx",
                                        lineNumber: 669,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CasePlayer.tsx",
                                    lineNumber: 668,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CasePlayer.tsx",
                            lineNumber: 665,
                            columnNumber: 13
                        }, this),
                        mode === "learning" && learningConsolidationActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hud-panel feedback-panel consolidation-panel",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "headline",
                                    children: "Consolidation timer"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CasePlayer.tsx",
                                    lineNumber: 684,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "score",
                                    children: [
                                        breatherSecondsLeft,
                                        "s"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CasePlayer.tsx",
                                    lineNumber: 685,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "rationale",
                                    children: "Review the reasoning mentally. The next patient will load automatically."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CasePlayer.tsx",
                                    lineNumber: 686,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CasePlayer.tsx",
                            lineNumber: 683,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CasePlayer.tsx",
                    lineNumber: 478,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CasePlayer.tsx",
            lineNumber: 326,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/CasePlayer.tsx",
        lineNumber: 325,
        columnNumber: 5
    }, this);
}
_s(CasePlayer, "HfJrj1oCoF4zKCK1lCeOZx5Fk88=");
_c = CasePlayer;
function explainSideEffect(effect) {
    const map = {
        "Genital infections": "Genital infections: counsel on hygiene and early treatment of symptoms.",
        "Volume depletion": "Volume depletion: watch for dizziness, orthostasis, and dehydration.",
        "Nausea": "Nausea: usually early and dose-related; slower titration may help.",
        "Vomiting": "Vomiting: monitor hydration status and consider dose adjustment.",
        "Modest A1c effect": "Modest A1c effect: glucose lowering may be limited; reassess A1c response.",
        "Hypoglycemia": "Hypoglycemia: monitor glucose closely, especially if meal intake is inconsistent.",
        "Weight gain": "Weight gain: discuss diet/activity plan and monitor weight trajectory.",
        "Injection burden": "Injection burden: reinforce technique, adherence, and patient comfort.",
        "GI upset": "GI upset: can improve with slower dose escalation or taking with food.",
        "B12 deficiency with long-term use": "B12 deficiency risk with long-term use: check if neuropathy or anemia develops."
    };
    return map[effect] ?? `${effect}: review warning signs and follow-up monitoring.`;
}
function getDoctorMoodFromScore(score) {
    if (typeof score !== "number") return "neutral";
    if (score >= 85) return "happy";
    if (score >= 65) return "neutral";
    if (score >= 45) return "concerned";
    return "strict";
}
function buildDoctorPromptText({ mode, selectedDrugName, feedbackScore, feedbackHeadline }) {
    if (mode === "browse") {
        if (selectedDrugName && typeof feedbackScore === "number") {
            if (feedbackScore >= 95) return `${selectedDrugName}? Absolutely legendary pick.`;
            if (feedbackScore >= 85) return `${selectedDrugName}: YES. That choice lands hard in the right direction.`;
            if (feedbackScore >= 60) return `${selectedDrugName}: decent move, but you can do better.`;
            if (feedbackScore >= 40) return `${selectedDrugName}: uh oh, this is getting risky.`;
            return `${selectedDrugName}: dramatic miss. Re-check patient safety priorities now.`;
        }
        return "Do you have any questions?";
    }
    if (mode === "learning") {
        if (selectedDrugName && typeof feedbackScore === "number") {
            if (feedbackScore >= 95) return `${selectedDrugName}: perfect clinical read. Incredible work.`;
            if (feedbackScore >= 85) return `${selectedDrugName}: strong call. Keep this momentum.`;
            if (feedbackScore >= 60) return `${selectedDrugName}: okay, but tighten your rationale.`;
            if (feedbackScore >= 40) return `${selectedDrugName}: rough fit. Let's clean up the logic.`;
            return `${selectedDrugName}: hard no. This needs a full rethink.`;
        }
        return "Which medication would you choose?";
    }
    if (mode === "testing") {
        if (feedbackHeadline && typeof feedbackScore === "number") {
            if (feedbackScore >= 85) return `${feedbackHeadline}. Excellent execution.`;
            if (feedbackScore >= 60) return `${feedbackHeadline}. You're close, refine your rationale.`;
            return `${feedbackHeadline}. This needs a stronger clinical justification.`;
        }
        if (selectedDrugName && typeof feedbackScore === "number") {
            if (feedbackScore >= 95) return `${selectedDrugName}: flawless answer. That was elite.`;
            if (feedbackScore >= 85) return `${selectedDrugName}: big win. Your reasoning tracks.`;
            if (feedbackScore >= 60) return `${selectedDrugName}: partial hit. Sharpen the why.`;
            if (feedbackScore >= 40) return `${selectedDrugName}: shaky. You need a safer justification.`;
            return `${selectedDrugName}: red alert answer. Rebuild from patient risks first.`;
        }
        return "Which medication would you choose?";
    }
    return "Do you have any questions?";
}
function pickBubbleVariant(options, seed) {
    let hash = 0;
    for(let i = 0; i < seed.length; i += 1){
        hash = hash * 31 + seed.charCodeAt(i) >>> 0;
    }
    return options[hash % options.length];
}
function getPatientReaction(choice, score) {
    if (!choice) return "neutral";
    if (score >= 85) return "happy";
    if (score >= 60) return "mildly_uncomfortable";
    if (score >= 20) return "uncomfortable";
    return "critical";
}
function getFeedbackEmoji(score) {
    if (score >= 95) return "😁";
    if (score >= 80) return "👍";
    if (score >= 60) return "😐";
    if (score >= 40) return "😓";
    if (score >= 20) return "☹️";
    return "💀";
}
function getTestingPointsForScore(score) {
    if (score >= 95) return 75;
    if (score >= 80) return 50;
    return Math.max(40, Math.round(score * 0.6));
}
function getTestingPointsForAttempt({ score, correctChoice, reasoningQualified }) {
    if (correctChoice && reasoningQualified) return getTestingPointsForScore(score);
    if (correctChoice || reasoningQualified) return 25;
    return 0;
}
function buildShortAnswerSubmissionFeedback({ content, resolvedDrug, reasoningQualified, patient }) {
    if (!content.trim()) {
        return {
            headline: "No answer submitted",
            score: 0,
            bullets: [
                "Submit any medication class attempt to get targeted feedback.",
                "Include a brief reason linked to this patient's risks and goals."
            ],
            rationale: "Try: medication class + one clinical reason (for example CKD, hypoglycemia risk, weight, or cost).",
            sideEffects: [],
            evidence: []
        };
    }
    if (!resolvedDrug) {
        return {
            headline: "Could not identify medication class",
            score: reasoningQualified ? 45 : 0,
            bullets: [
                "We could not match your medication class to available options.",
                "Use one of the listed classes and keep your explanation concise."
            ],
            rationale: "Your reasoning is noted, but the medication class needs to be recognizable for grading.",
            sideEffects: [],
            evidence: []
        };
    }
    const baseFeedback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gradeChoice"])(patient, resolvedDrug.id);
    if (!baseFeedback) {
        return {
            headline: "Unable to grade this response",
            score: 0,
            bullets: [
                "Try submitting again with a medication class from the list."
            ],
            rationale: "A grading error occurred for this specific response.",
            sideEffects: [],
            evidence: []
        };
    }
    if (!patient.appropriate.includes(resolvedDrug.id)) {
        return {
            ...baseFeedback,
            score: reasoningQualified ? Math.max(45, Math.min(65, baseFeedback.score)) : 0,
            headline: "Incorrect medication choice",
            rationale: reasoningQualified ? "Medication choice is incorrect, but your reasoning has some clinical value." : "This selected class is not appropriate for this patient in this case."
        };
    }
    if (reasoningQualified) {
        return baseFeedback;
    }
    return {
        ...baseFeedback,
        score: Math.min(baseFeedback.score, 55),
        headline: "Medication recognized, but reasoning needs work",
        bullets: [
            "Your medication selection was captured.",
            "Add a clearer clinical reason linked to this patient profile.",
            "Mention at least one specific risk/goal (CKD, hypoglycemia, weight, cost, ASCVD/HF)."
        ],
        rationale: "Points in Testing mode require both a clinically appropriate choice and strong reasoning."
    };
}
function a1cInterpretation(a1c) {
    if (a1c >= 9) return "very high";
    if (a1c >= 8) return "above goal";
    if (a1c >= 7) return "slightly above goal";
    return "near goal";
}
function egfrInterpretation(egfr) {
    if (egfr < 30) return "advanced CKD";
    if (egfr < 60) return "moderate CKD";
    return "preserved";
}
function bmiInterpretation(bmi) {
    if (bmi >= 35) return "severe obesity";
    if (bmi >= 30) return "obesity";
    if (bmi >= 25) return "overweight";
    return "normal range";
}
function buildImportantTags(patient) {
    const tags = [];
    if (patient.features.egfr < 60) tags.push({
        label: "CKD [Chronic Kidney Disease]",
        tone: "warn"
    });
    if (patient.features.ascvd) tags.push({
        label: "ASCVD [Atherosclerotic CV Disease]",
        tone: "warn"
    });
    if (patient.features.hf) tags.push({
        label: "HF [Heart Failure]",
        tone: "warn"
    });
    if (patient.features.hypoglycemiaRisk) tags.push({
        label: "High hypo risk",
        tone: "warn"
    });
    if (patient.features.weightLossGoal) tags.push({
        label: "Weight-loss goal",
        tone: "info"
    });
    if (patient.features.costSensitive) tags.push({
        label: "Cost sensitive",
        tone: "info"
    });
    if (tags.length === 0) tags.push({
        label: "No major comorbidity flags",
        tone: "good"
    });
    return tags;
}
function describeConditions(patient) {
    const conditions = [];
    if (patient.features.egfr < 60) conditions.push("CKD [Chronic Kidney Disease]");
    if (patient.features.ascvd) conditions.push("ASCVD [Atherosclerotic Cardiovascular Disease]");
    if (patient.features.hf) conditions.push("HF [Heart Failure]");
    if (patient.features.giIntolerance) conditions.push("GI intolerance [Gastrointestinal side effects]");
    if (conditions.length === 0) return "No major chronic conditions flagged.";
    return conditions.join(", ");
}
function resolveDrugFromAnswer(answer, drugs) {
    const normalized = answer.trim().toLowerCase();
    if (!normalized) return null;
    const aliases = {
        sglt2: "sglt2",
        "sglt2 inhibitor": "sglt2",
        glp1: "glp1",
        "glp-1": "glp1",
        "glp-1 ra": "glp1",
        "glp1 ra": "glp1",
        metformin: "metformin",
        dpp4: "dpp4",
        "dpp-4": "dpp4",
        "dpp4 inhibitor": "dpp4",
        "sulfonylurea": "sulfonylurea",
        "sulfonylureas": "sulfonylurea",
        insulin: "insulin"
    };
    const directId = aliases[normalized] ?? normalized;
    const byId = drugs.find((drug)=>drug.id === directId);
    if (byId) return byId;
    const aliasMatch = Object.entries(aliases).find(([alias])=>normalized.includes(alias));
    if (aliasMatch) {
        const aliasDrug = drugs.find((drug)=>drug.id === aliasMatch[1]);
        if (aliasDrug) return aliasDrug;
    }
    return drugs.find((drug)=>normalized.includes(drug.name.toLowerCase())) ?? null;
}
function buildQuestionHint(patient, questionType) {
    const priorities = [];
    if (patient.features.hf) priorities.push("prioritize heart-failure benefit");
    if (patient.features.ascvd) priorities.push("consider cardiovascular benefit");
    if (patient.features.egfr < 60) priorities.push("protect kidney function");
    if (patient.features.hypoglycemiaRisk) priorities.push("avoid hypoglycemia-prone options");
    if (patient.features.weightLossGoal) priorities.push("prefer weight-benefit options");
    if (patient.features.costSensitive) priorities.push("consider low-cost options");
    const priorityText = priorities.length > 0 ? priorities.join(", ") : "match therapy to case features";
    if (questionType === "mcq") {
        return `Hint: ${priorityText}.`;
    }
    if (questionType === "short_answer") {
        return `Hint: answer with medication class plus reasoning in one response (example: SGLT2 inhibitor because CKD and low hypoglycemia risk). Focus on: ${priorityText}.`;
    }
    return `Hint: ${priorityText}.`;
}
function hasSufficientShortAnswerReasoning(answer) {
    const normalized = answer.trim().toLowerCase();
    if (normalized.length < 25) return false;
    const wordCount = normalized.split(/\s+/).filter(Boolean).length;
    if (wordCount < 6) return false;
    const reasoningSignals = [
        "because",
        "since",
        "due to",
        "given",
        "risk",
        "benefit",
        "avoid",
        "prefer",
        "monitor",
        "kidney",
        "egfr",
        "ckd",
        "hypoglycemia",
        "weight",
        "cost",
        "ascvd",
        "heart failure",
        "hf"
    ];
    return reasoningSignals.some((token)=>normalized.includes(token));
}
var _c;
__turbopack_context__.k.register(_c, "CasePlayer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_890ac7d1._.js.map