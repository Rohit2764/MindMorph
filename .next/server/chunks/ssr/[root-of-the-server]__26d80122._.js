module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[project]/OneDrive/Desktop/mindmorph-new/src/hooks/useEmotionSocket.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/hooks/useEmotionSocket.ts
__turbopack_context__.s([
    "useEmotionSocket",
    ()=>useEmotionSocket
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mindmorph-new/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mindmorph-new/node_modules/socket.io-client/build/esm-debug/index.js [app-ssr] (ecmascript) <locals>");
"use client";
;
;
const SERVER_URL = "http://127.0.0.1:5000"; // Flask backend
const useEmotionSocket = ()=>{
    const [emotion, setEmotion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        label: "default",
        confidence: 0
    });
    const [isConnected, setIsConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const socketRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioCtxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Behavior tracking
    const typingStats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        keys: 0,
        lastKeyTs: 0,
        intervals: []
    });
    const mouseStats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        distance_px: 0,
        lastPos: null,
        idle_ms: 0,
        idleStart: Date.now()
    });
    // 🎙️ --- Audio capture setup ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function startAudioCapture() {
            try {
                const ctx = new AudioContext({
                    sampleRate: 22050
                });
                audioCtxRef.current = ctx;
                const stream = await navigator.mediaDevices.getUserMedia({
                    audio: true
                });
                const source = ctx.createMediaStreamSource(stream);
                const processor = ctx.createScriptProcessor(4096, 1, 1);
                source.connect(processor);
                processor.connect(ctx.destination);
                let buffer = [];
                let totalLen = 0;
                const chunkDurationMs = 1000;
                const samplesToSend = Math.floor(ctx.sampleRate * chunkDurationMs / 1000);
                const floatTo16BitPCM = (input)=>{
                    const buffer = new ArrayBuffer(input.length * 2);
                    const view = new DataView(buffer);
                    let offset = 0;
                    for(let i = 0; i < input.length; i++, offset += 2){
                        const s = Math.max(-1, Math.min(1, input[i]));
                        view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
                    }
                    return buffer;
                };
                const writeString = (view, offset, str)=>{
                    for(let i = 0; i < str.length; i++)view.setUint8(offset + i, str.charCodeAt(i));
                };
                const encodeWAV = (samples, sampleRate)=>{
                    const buffer = new ArrayBuffer(44 + samples.length * 2);
                    const view = new DataView(buffer);
                    writeString(view, 0, "RIFF");
                    view.setUint32(4, 36 + samples.length * 2, true);
                    writeString(view, 8, "WAVE");
                    writeString(view, 12, "fmt ");
                    view.setUint32(16, 16, true);
                    view.setUint16(20, 1, true);
                    view.setUint16(22, 1, true);
                    view.setUint32(24, sampleRate, true);
                    view.setUint32(28, sampleRate * 2, true);
                    view.setUint16(32, 2, true);
                    view.setUint16(34, 16, true);
                    writeString(view, 36, "data");
                    view.setUint32(40, samples.length * 2, true);
                    const pcm = new DataView(floatTo16BitPCM(samples));
                    for(let i = 0; i < pcm.byteLength; i++){
                        view.setUint8(44 + i, pcm.getUint8(i));
                    }
                    const blob = new Blob([
                        view
                    ], {
                        type: "audio/wav"
                    });
                    return blob;
                };
                processor.onaudioprocess = (e)=>{
                    const input = e.inputBuffer.getChannelData(0);
                    const copy = new Float32Array(input);
                    buffer.push(copy);
                    totalLen += copy.length;
                    if (totalLen >= samplesToSend) {
                        const merged = new Float32Array(totalLen);
                        let offset = 0;
                        for (const chunk of buffer){
                            merged.set(chunk, offset);
                            offset += chunk.length;
                        }
                        buffer = [];
                        totalLen = 0;
                        const wavBlob = encodeWAV(merged, ctx.sampleRate);
                        const reader = new FileReader();
                        reader.onloadend = ()=>{
                            const base64data = reader.result;
                            socketRef.current?.emit("audio_event", {
                                wav_b64: base64data,
                                timestamp: Date.now()
                            });
                        };
                        reader.readAsDataURL(wavBlob);
                    }
                };
            } catch (err) {
                console.warn("Audio permission denied or error:", err);
            }
        }
        startAudioCapture();
    }, []);
    // 🧠 --- Socket setup ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["io"])(SERVER_URL, {
            transports: [
                "websocket"
            ],
            reconnectionAttempts: 10,
            reconnectionDelay: 2000,
            timeout: 30000,
            forceNew: true
        });
        socketRef.current = socket;
        socket.on("connect", ()=>{
            console.log("✅ Connected to backend");
            setIsConnected(true);
        });
        socket.on("disconnect", ()=>{
            console.log("❌ Disconnected");
            setIsConnected(false);
        });
        socket.on("emotion_update", (data)=>{
            console.log("🧠 Fused Emotion received:", data);
            setEmotion(data);
            console.log("✅ Emotion state updated to:", data.label);
        });
        socket.on("connect_error", (err)=>console.error("Socket error:", err));
        // Add ping/pong handling to keep connection alive
        socket.on("ping", ()=>{
            socket.emit("pong");
        });
        // ✅ Cleanup on unmount
        return ()=>{
            if (socket.connected) {
                socket.disconnect();
                console.log("Socket disconnected on unmount");
            }
        };
    }, []);
    // ⌨️ --- Behavior tracking ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function onKeydown() {
            const now = Date.now();
            if (typingStats.current.lastKeyTs) {
                typingStats.current.intervals.push(now - typingStats.current.lastKeyTs);
            }
            typingStats.current.lastKeyTs = now;
            typingStats.current.keys++;
        }
        function onMouseMove(e) {
            const now = Date.now();
            const last = mouseStats.current.lastPos;
            if (last) {
                const dx = e.clientX - last.x;
                const dy = e.clientY - last.y;
                mouseStats.current.distance_px += Math.sqrt(dx * dx + dy * dy);
            }
            mouseStats.current.lastPos = {
                x: e.clientX,
                y: e.clientY
            };
            mouseStats.current.idle_ms = now - mouseStats.current.idleStart;
        }
        window.addEventListener("keydown", onKeydown);
        window.addEventListener("mousemove", onMouseMove);
        const interval = setInterval(()=>{
            const avgI = typingStats.current.intervals.length > 0 ? typingStats.current.intervals.reduce((a, b)=>a + b, 0) / typingStats.current.intervals.length : 0;
            const burstiness = typingStats.current.intervals.length > 0 ? typingStats.current.intervals.length / Math.max(1, typingStats.current.keys) : 0;
            const typing = {
                keys: typingStats.current.keys,
                avg_ikey_interval_ms: avgI,
                burstiness
            };
            const mouse = {
                distance_px: mouseStats.current.distance_px,
                idle_ms: mouseStats.current.idle_ms,
                speed_px_per_s: mouseStats.current.distance_px / 1.5
            };
            socketRef.current?.emit("behavior_event", {
                typing,
                mouse,
                timestamp: Date.now()
            });
            typingStats.current = {
                keys: 0,
                lastKeyTs: 0,
                intervals: []
            };
            mouseStats.current.distance_px = 0;
        }, 1500);
        return ()=>{
            clearInterval(interval);
            window.removeEventListener("keydown", onKeydown);
            window.removeEventListener("mousemove", onMouseMove);
        };
    }, []);
    const sendFrame = (frame)=>{
        socketRef.current?.emit("video_frame", {
            frame,
            timestamp: Date.now()
        });
    };
    return {
        emotion,
        isConnected,
        sendFrame
    };
};
}),
"[project]/OneDrive/Desktop/mindmorph-new/src/lib/emotionStyles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Defines the visual properties for each emotional state
__turbopack_context__.s([
    "emotionStyles",
    ()=>emotionStyles
]);
const emotionStyles = {
    happy: {
        orbColor: "#FFD700",
        auroraColors: [
            "#FFD700",
            "#FF4500"
        ],
        quote: "Joy is a net of love by which you can catch souls."
    },
    sad: {
        orbColor: "#4B0082",
        auroraColors: [
            "#4B0082",
            "#6A5ACD"
        ],
        quote: "Tears are words that need to be written."
    },
    angry: {
        orbColor: "#DC143C",
        auroraColors: [
            "#DC143C",
            "#8B0000"
        ],
        quote: "For every minute you remain angry, you give up sixty seconds of peace of mind."
    },
    neutral: {
        orbColor: "#E5E7EB",
        auroraColors: [
            "#E5E7EB",
            "#9CA3AF"
        ],
        quote: "The quieter you become, the more you are able to hear."
    },
    calm: {
        orbColor: "#00BFFF",
        auroraColors: [
            "#00BFFF",
            "#008B8B"
        ],
        quote: "Calmness is the cradle of power."
    },
    surprise: {
        orbColor: "#FF69B4",
        auroraColors: [
            "#FF69B4",
            "#DA70D6"
        ],
        quote: "The invariable mark of wisdom is to see the miraculous in the common."
    },
    fear: {
        orbColor: "#9370DB",
        auroraColors: [
            "#9370DB",
            "#483D8B"
        ],
        quote: "The brave man is not he who does not feel afraid, but he who conquers that fear."
    },
    disgust: {
        orbColor: "#3CB371",
        auroraColors: [
            "#3CB371",
            "#2E8B57"
        ],
        quote: "To be disgusted with oneself is a good thing."
    },
    default: {
        orbColor: "#E5E7EB",
        auroraColors: [
            "#E5E7EB",
            "#9CA3AF"
        ],
        quote: "Welcome to MindMorph. Let's begin the journey."
    }
};
}),
"[project]/OneDrive/Desktop/mindmorph-new/src/components/BreathingGuide.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mindmorph-new/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mindmorph-new/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mindmorph-new/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mindmorph-new/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mindmorph-new/node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mindmorph-new/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mindmorph-new/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mindmorph-new/node_modules/lucide-react/dist/esm/icons/minus.js [app-ssr] (ecmascript) <export default as Minus>");
'use client';
;
;
;
;
const BreathingGuide = ({ isVisible, onClose })=>{
    // --- Interactive Pacing State ---
    const [inhaleTime, setInhaleTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(4);
    const [holdTime, setHoldTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(4);
    const [exhaleTime, setExhaleTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(6);
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Inhale');
    const totalDuration = inhaleTime + holdTime + exhaleTime;
    const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAnimation"])();
    // Effect to manage the animation sequence and text labels
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isVisible) {
            const sequence = async ()=>{
                while(true){
                    setCurrentStep(`Inhale (${inhaleTime}s)`);
                    await controls.start({
                        scale: 1.5,
                        transition: {
                            duration: inhaleTime,
                            ease: 'easeInOut'
                        }
                    });
                    setCurrentStep(`Hold (${holdTime}s)`);
                    await new Promise((resolve)=>setTimeout(resolve, holdTime * 1000));
                    setCurrentStep(`Exhale (${exhaleTime}s)`);
                    await controls.start({
                        scale: 1,
                        transition: {
                            duration: exhaleTime,
                            ease: 'easeInOut'
                        }
                    });
                    await new Promise((resolve)=>setTimeout(resolve, 500)); // Brief pause
                }
            };
            sequence();
        }
    }, [
        isVisible,
        inhaleTime,
        holdTime,
        exhaleTime,
        controls
    ]);
    // Handlers for interactive controls
    const adjustTime = (setter, delta)=>{
        setter((prev)=>Math.max(1, prev + delta));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1,
                backdropFilter: 'blur(16px)'
            },
            exit: {
                opacity: 0,
                backdropFilter: 'blur(0px)'
            },
            transition: {
                duration: 0.5
            },
            className: "fixed inset-0 z-50 flex items-center justify-center bg-black/70",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "absolute top-6 right-6 text-white/70 hover:text-white transition-all z-20",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        size: 32
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/components/BreathingGuide.tsx",
                        lineNumber: 56,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/components/BreathingGuide.tsx",
                    lineNumber: 55,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex h-80 w-80 items-center justify-center",
                    children: [
                        [
                            0,
                            1,
                            2
                        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "absolute h-full w-full rounded-full border border-blue-400/30",
                                initial: {
                                    scale: 1
                                },
                                animate: controls,
                                style: {
                                    animationDelay: `${i * 0.2}s`
                                }
                            }, i, false, {
                                fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/components/BreathingGuide.tsx",
                                lineNumber: 63,
                                columnNumber: 18
                            }, ("TURBOPACK compile-time value", void 0))),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "z-10 text-center text-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    mode: "wait",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                                        initial: {
                                            opacity: 0,
                                            y: 10
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        exit: {
                                            opacity: 0,
                                            y: -10
                                        },
                                        transition: {
                                            duration: 0.5
                                        },
                                        className: "text-4xl font-semibold",
                                        children: currentStep.split(' ')[0]
                                    }, currentStep, false, {
                                        fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/components/BreathingGuide.tsx",
                                        lineNumber: 75,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/components/BreathingGuide.tsx",
                                    lineNumber: 74,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg text-white/60 mt-2",
                                    children: currentStep.includes('(') ? currentStep.split(' ')[1] : ''
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/components/BreathingGuide.tsx",
                                    lineNumber: 86,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/components/BreathingGuide.tsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].svg, {
                            className: "absolute h-full w-full",
                            viewBox: "0 0 100 100",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].circle, {
                                cx: "50",
                                cy: "50",
                                r: "48",
                                stroke: "rgba(59, 130, 246, 0.7)",
                                strokeWidth: "3",
                                fill: "transparent",
                                strokeDasharray: "301.59",
                                initial: {
                                    strokeDashoffset: 301.59
                                },
                                animate: {
                                    strokeDashoffset: [
                                        301.59,
                                        0,
                                        0,
                                        301.59,
                                        301.59
                                    ]
                                },
                                transition: {
                                    duration: totalDuration + 0.5,
                                    ease: "linear",
                                    repeat: Infinity,
                                    times: [
                                        0,
                                        inhaleTime / totalDuration,
                                        (inhaleTime + holdTime) / totalDuration,
                                        1,
                                        1
                                    ]
                                }
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/components/BreathingGuide.tsx",
                                lineNumber: 91,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/components/BreathingGuide.tsx",
                            lineNumber: 90,
                            columnNumber: 14
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/components/BreathingGuide.tsx",
                    lineNumber: 60,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute bottom-10 flex gap-8 text-white bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-white/10",
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            delay: 0.5
                        }
                    },
                    children: [
                        'Inhale',
                        'Hold',
                        'Exhale'
                    ].map((label)=>{
                        const [value, setter] = {
                            'Inhale': [
                                inhaleTime,
                                setInhaleTime
                            ],
                            'Hold': [
                                holdTime,
                                setHoldTime
                            ],
                            'Exhale': [
                                exhaleTime,
                                setExhaleTime
                            ]
                        }[label];
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium text-white/70",
                                    children: label
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/components/BreathingGuide.tsx",
                                    lineNumber: 126,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>adjustTime(setter, -1),
                                            className: "p-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/components/BreathingGuide.tsx",
                                                lineNumber: 128,
                                                columnNumber: 153
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/components/BreathingGuide.tsx",
                                            lineNumber: 128,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg font-bold w-6 text-center",
                                            children: value
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/components/BreathingGuide.tsx",
                                            lineNumber: 129,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>adjustTime(setter, 1),
                                            className: "p-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/components/BreathingGuide.tsx",
                                                lineNumber: 130,
                                                columnNumber: 152
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/components/BreathingGuide.tsx",
                                            lineNumber: 130,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/components/BreathingGuide.tsx",
                                    lineNumber: 127,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, label, true, {
                            fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/components/BreathingGuide.tsx",
                            lineNumber: 125,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/components/BreathingGuide.tsx",
                    lineNumber: 112,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/components/BreathingGuide.tsx",
            lineNumber: 48,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/components/BreathingGuide.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = BreathingGuide;
}),
"[project]/OneDrive/Desktop/mindmorph-new/src/components/AnimatedQuote.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mindmorph-new/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mindmorph-new/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mindmorph-new/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
const AnimatedQuote = ({ quote, author, isLoading })=>{
    const sentenceVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2,
                staggerChildren: 0.02
            }
        }
    };
    const letterVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0
        }
    };
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-24 items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "w-4 h-4 bg-white/50 rounded-full",
                animate: {
                    scale: [
                        1,
                        1.2,
                        1
                    ],
                    opacity: [
                        0.5,
                        1,
                        0.5
                    ]
                },
                transition: {
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/components/AnimatedQuote.tsx",
                lineNumber: 34,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/components/AnimatedQuote.tsx",
            lineNumber: 33,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        mode: "wait",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "flex h-24 flex-col items-center justify-center",
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            transition: {
                duration: 0.5
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h2, {
                    className: "max-w-2xl text-center text-xl italic text-white",
                    variants: sentenceVariants,
                    initial: "hidden",
                    animate: "visible",
                    children: quote.split("").map((char, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                            variants: letterVariants,
                            children: char
                        }, `${char}-${index}`, false, {
                            fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/components/AnimatedQuote.tsx",
                            lineNumber: 67,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/components/AnimatedQuote.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                    className: "mt-3 text-sm text-white/60",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1,
                        transition: {
                            delay: 1.5
                        }
                    },
                    children: [
                        "- ",
                        author
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/components/AnimatedQuote.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, quote, true, {
            fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/components/AnimatedQuote.tsx",
            lineNumber: 52,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/components/AnimatedQuote.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = AnimatedQuote;
}),
"[project]/OneDrive/Desktop/mindmorph-new/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mindmorph-new/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mindmorph-new/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$react$2d$webcam$2f$dist$2f$react$2d$webcam$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mindmorph-new/node_modules/react-webcam/dist/react-webcam.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mindmorph-new/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mindmorph-new/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mindmorph-new/node_modules/lucide-react/dist/esm/icons/wifi.js [app-ssr] (ecmascript) <export default as Wifi>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wind$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wind$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mindmorph-new/node_modules/lucide-react/dist/esm/icons/wind.js [app-ssr] (ecmascript) <export default as Wind>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mindmorph-new/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-ssr] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoOff$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mindmorph-new/node_modules/lucide-react/dist/esm/icons/video-off.js [app-ssr] (ecmascript) <export default as VideoOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mindmorph-new/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$src$2f$hooks$2f$useEmotionSocket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mindmorph-new/src/hooks/useEmotionSocket.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$src$2f$lib$2f$emotionStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mindmorph-new/src/lib/emotionStyles.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$src$2f$components$2f$BreathingGuide$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mindmorph-new/src/components/BreathingGuide.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$src$2f$components$2f$AnimatedQuote$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/mindmorph-new/src/components/AnimatedQuote.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
function HomePage() {
    const webcamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { emotion, isConnected, sendFrame } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$src$2f$hooks$2f$useEmotionSocket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEmotionSocket"])();
    const [currentQuote, setCurrentQuote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        quote: "Activate the Bio-Sensor or explore the dashboard.",
        author: "MindMorph"
    });
    const [isQuoteLoading, setIsQuoteLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showBreathingGuide, setShowBreathingGuide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isWebcamActive, setIsWebcamActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Get current emotion - properly handle undefined/null
    const emotionLabel = emotion?.label?.toLowerCase() || "default";
    const currentEmotion = emotionLabel;
    const confidence = emotion?.confidence || 0;
    const currentStyle = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$src$2f$lib$2f$emotionStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emotionStyles"][currentEmotion] || __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$src$2f$lib$2f$emotionStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emotionStyles"].default;
    // capture webcam frames
    const captureFrame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (isWebcamActive && webcamRef.current) {
            const imageSrc = webcamRef.current.getScreenshot();
            if (imageSrc) sendFrame(imageSrc);
        }
    }, [
        sendFrame,
        isWebcamActive
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const interval = setInterval(captureFrame, 600);
        return ()=>clearInterval(interval);
    }, [
        captureFrame
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "relative min-h-screen w-full overflow-hidden bg-gray-900 text-white transition-colors duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute inset-0 z-0",
                initial: {
                    background: `radial-gradient(ellipse at 40% 60%, ${__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$src$2f$lib$2f$emotionStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emotionStyles"].default.auroraColors[0]} 0%, transparent 50%),
                       radial-gradient(ellipse at 60% 40%, ${__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$src$2f$lib$2f$emotionStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emotionStyles"].default.auroraColors[1]} 0%, transparent 50%)`
                },
                animate: {
                    background: `radial-gradient(ellipse at 40% 60%, ${currentStyle.auroraColors[0]} 0%, transparent 50%),
                       radial-gradient(ellipse at 60% 40%, ${currentStyle.auroraColors[1]} 0%, transparent 50%)`
                },
                transition: {
                    duration: 0.8,
                    ease: "easeInOut"
                }
            }, `aurora-${currentEmotion}`, false, {
                fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/app/page.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex h-screen flex-col items-center p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "absolute top-0 left-0 w-full p-6 flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl font-bold tracking-wider",
                                children: "MindMorph"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/app/page.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 text-gray-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        title: "Refresh",
                                        className: "hover:text-white transition-colors",
                                        onClick: ()=>window.location.reload(),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/app/page.tsx",
                                            lineNumber: 80,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/app/page.tsx",
                                        lineNumber: 75,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        title: "Breathing Exercise",
                                        onClick: ()=>setShowBreathingGuide(true),
                                        className: "hover:text-white transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wind$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wind$3e$__["Wind"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/app/page.tsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/app/page.tsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/app/page.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/app/page.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-1 flex-col items-center justify-center text-center -mt-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "mb-8 h-48 w-48 rounded-full flex items-center justify-center shadow-2xl",
                                initial: {
                                    background: `radial-gradient(circle at center, ${__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$src$2f$lib$2f$emotionStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emotionStyles"].default.orbColor} 0%, transparent 70%)`,
                                    scale: 1
                                },
                                animate: {
                                    background: `radial-gradient(circle at center, ${currentStyle.orbColor} 0%, transparent 70%)`,
                                    scale: [
                                        1,
                                        1.08,
                                        1
                                    ]
                                },
                                transition: {
                                    background: {
                                        duration: 0.8,
                                        ease: "easeInOut"
                                    },
                                    scale: {
                                        duration: 3.5,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                    className: "text-3xl font-bold capitalize",
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    transition: {
                                        duration: 0.5
                                    },
                                    children: currentEmotion
                                }, `emotion-text-${currentEmotion}`, false, {
                                    fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/app/page.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this)
                            }, `orb-${currentEmotion}`, false, {
                                fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/app/page.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                                className: "text-sm opacity-70",
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                transition: {
                                    duration: 0.4
                                },
                                children: [
                                    "Confidence: ",
                                    (confidence * 100).toFixed(0),
                                    "%"
                                ]
                            }, `confidence-${confidence}`, true, {
                                fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/app/page.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$src$2f$components$2f$AnimatedQuote$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                quote: currentQuote.quote,
                                author: currentQuote.author,
                                isLoading: isQuoteLoading
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/app/page.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/app/page.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "absolute bottom-0 w-full h-48 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            mode: "wait",
                            children: isWebcamActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "w-full max-w-xs rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-lg shadow-lg",
                                initial: {
                                    opacity: 0,
                                    scale: 0.8
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1
                                },
                                exit: {
                                    opacity: 0,
                                    scale: 0.8
                                },
                                transition: {
                                    duration: 0.3
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative aspect-video w-full overflow-hidden rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$react$2d$webcam$2f$dist$2f$react$2d$webcam$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            ref: webcamRef,
                                            mirrored: true,
                                            className: "h-full w-full object-cover",
                                            videoConstraints: {
                                                width: 320,
                                                height: 180,
                                                facingMode: "user"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/app/page.tsx",
                                            lineNumber: 149,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-2 right-2 flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setIsWebcamActive(false),
                                                    className: "p-1.5 rounded-full bg-red-500/80 text-white hover:bg-red-600/80 transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoOff$3e$__["VideoOff"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/app/page.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/app/page.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `flex items-center gap-2 rounded-full px-2 py-1 text-xs transition-colors ${isConnected ? "bg-green-500/80" : "bg-red-500/80"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__["Wifi"], {
                                                            size: 12
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/app/page.tsx",
                                                            lineNumber: 171,
                                                            columnNumber: 23
                                                        }, this),
                                                        isConnected ? "Connected" : "Offline"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/app/page.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/app/page.tsx",
                                            lineNumber: 159,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/app/page.tsx",
                                    lineNumber: 148,
                                    columnNumber: 17
                                }, this)
                            }, "webcam-active", false, {
                                fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/app/page.tsx",
                                lineNumber: 140,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "w-full h-full flex items-center justify-center",
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsWebcamActive(true),
                                    className: "w-20 h-20 rounded-full bg-white/10 border border-white/20 backdrop-blur-lg flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        animate: {
                                            scale: [
                                                1,
                                                1.1,
                                                1
                                            ]
                                        },
                                        transition: {
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                            size: 28
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/app/page.tsx",
                                            lineNumber: 196,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/app/page.tsx",
                                        lineNumber: 188,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/app/page.tsx",
                                    lineNumber: 184,
                                    columnNumber: 17
                                }, this)
                            }, "webcam-off", false, {
                                fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/app/page.tsx",
                                lineNumber: 178,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/app/page.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/app/page.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/app/page.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$mindmorph$2d$new$2f$src$2f$components$2f$BreathingGuide$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isVisible: showBreathingGuide,
                onClose: ()=>setShowBreathingGuide(false)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/app/page.tsx",
                lineNumber: 205,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/mindmorph-new/src/app/page.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__26d80122._.js.map