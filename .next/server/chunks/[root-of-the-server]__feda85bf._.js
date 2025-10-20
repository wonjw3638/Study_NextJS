module.exports = [
"[project]/.next-internal/server/app/api/posts/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[project]/lib/constants/sample-posts.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"id\":\"1\",\"title\":\"🌅 감성 가득한 노을\",\"content\":\"오늘 하루도 수고했어! 노을 보면서 힐링하는 시간 ☁️✨\",\"image\":\"https://images.unsplash.com/photo-1495567720989-cebdbdd97913\"},{\"id\":\"2\",\"title\":\"☕ 아침의 시작, 커피 한 잔\",\"content\":\"커피 한 잔과 함께하는 여유로운 아침. 오늘도 화이팅! ☀️\",\"image\":\"https://images.unsplash.com/photo-1535876702291-5b30e2a2ab95\"},{\"id\":\"3\",\"title\":\"🏞️ 여행 가고 싶은 날\",\"content\":\"여행이 너무 가고 싶다... 어디든 떠나볼까? ✈️💙\",\"image\":\"https://images.unsplash.com/photo-1501785888041-af3ef285b470\"},{\"id\":\"4\",\"title\":\"🍽️ 오늘의 맛있는 한 끼\",\"content\":\"맛있는 음식이 주는 행복, 오늘은 뭘 먹을까? 😋\",\"image\":\"https://images.unsplash.com/photo-1572424117831-005b5e9b3ae4\"},{\"id\":\"5\",\"title\":\"💡 오늘의 한 마디\",\"content\":\"‘작은 변화가 큰 차이를 만든다.’ 오늘도 긍정적인 하루 보내자! 💪\",\"image\":\"https://images.unsplash.com/photo-1509909756405-be0199881695\"}]"));}),
"[project]/app/api/posts/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$sample$2d$posts$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/lib/constants/sample-posts.json (json)");
;
;
async function GET() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$sample$2d$posts$2e$json__$28$json$29$__["default"], {
        status: 200
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__feda85bf._.js.map