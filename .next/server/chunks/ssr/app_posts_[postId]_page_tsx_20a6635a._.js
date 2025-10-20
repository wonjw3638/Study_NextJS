module.exports = [
"[project]/app/posts/[postId]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "generateMetadata",
    ()=>generateMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
async function generateMetadata(props) {
    const { params } = props;
    const { postId } = await params;
    return {
        title: `Title (Post ID: ${postId})`,
        description: `Description (Post ID:  ${postId})`,
        openGraph: {
            images: [
                `/api/og?title=${`Post ID: ${postId}`}`
            ]
        }
    };
}
async function PostItemPage(props) {
    const { params } = props;
    const { postId } = await params;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "box page",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: `PostItemPage ${postId}`
        }, void 0, false, {
            fileName: "[project]/app/posts/[postId]/page.tsx",
            lineNumber: 24,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/posts/[postId]/page.tsx",
        lineNumber: 23,
        columnNumber: 13
    }, this);
}
const __TURBOPACK__default__export__ = PostItemPage;
}),
];

//# sourceMappingURL=app_posts_%5BpostId%5D_page_tsx_20a6635a._.js.map