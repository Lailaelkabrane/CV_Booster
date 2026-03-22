(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FORMATS",
    ()=>FORMATS,
    "default",
    ()=>FormatScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/CV-Booster(ATS Score)/Frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// FormatScreen.jsx
// Let the user choose CV format before boosting — ATS, Basic, Modern only
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Downloads/CV-Booster(ATS Score)/Frontend/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__ = __turbopack_context__.i("[project]/Downloads/CV-Booster(ATS Score)/Frontend/node_modules/lucide-react/dist/esm/icons/rocket.js [app-client] (ecmascript) <export default as Rocket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/Downloads/CV-Booster(ATS Score)/Frontend/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/Downloads/CV-Booster(ATS Score)/Frontend/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/Downloads/CV-Booster(ATS Score)/Frontend/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/Downloads/CV-Booster(ATS Score)/Frontend/node_modules/lucide-react/dist/esm/icons/palette.js [app-client] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__ = __turbopack_context__.i("[project]/Downloads/CV-Booster(ATS Score)/Frontend/node_modules/lucide-react/dist/esm/icons/type.js [app-client] (ecmascript) <export default as Type>");
"use client";
;
;
const FORMATS = [
    {
        id: "ats",
        name: "ATS Optimized",
        tag: "Recommended",
        tagColor: "#10B981",
        tagBg: "rgba(16,185,129,0.1)",
        tagBorder: "rgba(16,185,129,0.3)",
        font: "Times New Roman · 10.5pt",
        description: "Maximizes your chances of passing automated HR filters. Pure structure — exactly what ATS robots need.",
        bestFor: "Online platforms · LinkedIn · Taleo · Workday · Large companies",
        features: [
            "Single column, no graphics",
            "Times New Roman — ATS-safe font",
            "Dates right-aligned with tab stops",
            "Section headings in caps",
            "No color, no borders"
        ],
        preview: [
            {
                type: "name",
                text: "JOHN SMITH"
            },
            {
                type: "contact",
                text: "john@email.com  |  +212 6XX  |  LinkedIn"
            },
            {
                type: "section",
                text: "PROFILE"
            },
            {
                type: "body",
                text: "Detail-oriented Data Scientist with 2+ years..."
            },
            {
                type: "section",
                text: "PROFESSIONAL EXPERIENCE"
            },
            {
                type: "job",
                left: "Data Analyst | TechCorp",
                right: "2023 – Present"
            },
            {
                type: "bullet",
                text: "Built dashboards reducing reporting time by 40%"
            },
            {
                type: "section",
                text: "SKILLS"
            },
            {
                type: "body",
                text: "Programming: Python, SQL  |  ML: Scikit-learn..."
            }
        ]
    },
    {
        id: "basic",
        name: "Basic / Classic",
        tag: "Traditional",
        tagColor: "#6B7280",
        tagBg: "rgba(107,114,128,0.1)",
        tagBorder: "rgba(107,114,128,0.25)",
        font: "Georgia · 10.5pt",
        description: "Two-column layout with your bold name as header. Elegant and clean — perfect balance between modern and classic.",
        bestFor: "Traditional companies · Public sector · General applications",
        features: [
            "Large bold name header",
            "Two columns: Education+Skills left | Experience right",
            "Subtle vertical separator line",
            "Spaced uppercase section headers",
            "Calibri — clean universal font"
        ],
        preview: [
            {
                type: "basic-header",
                name: "John Smith",
                domain: "Data Science",
                contact: "john@email.com  |  +212 6XX  |  LinkedIn"
            },
            {
                type: "basic-2col"
            }
        ]
    },
    {
        id: "modern",
        name: "Modern / Creative",
        tag: "Creative",
        tagColor: "#F59E0B",
        tagBg: "rgba(245,158,11,0.08)",
        tagBorder: "rgba(245,158,11,0.3)",
        font: "Calibri · Two columns",
        description: "Bold navy sidebar on the left with your name and skills. Main content on the right. Striking first impression.",
        bestFor: "Direct email applications · Startups · Tech & Creative companies",
        features: [
            "Navy blue sidebar — name, contact, skills",
            "Clean white main area — experience",
            "Visually memorable to recruiters",
            "Best for direct or email applications",
            "Two-column creative layout"
        ],
        preview: [
            {
                type: "modern-full"
            }
        ]
    }
];
// ── Mini CV Preview — fixed height so all 3 are the same size ───────────────
const PREVIEW_H = 200;
function MiniPreview({ format, selected }) {
    const borderAccent = selected ? "rgba(233,30,140,0.25)" : "rgba(0,0,0,0.10)";
    if (format.id === "basic") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: "#fff",
            borderRadius: 8,
            overflow: "hidden",
            boxShadow: `0 2px 12px ${borderAccent}`,
            height: PREVIEW_H,
            userSelect: "none",
            fontFamily: "Calibri,sans-serif",
            fontSize: 6,
            border: `1px solid ${borderAccent}`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "8px 10px 5px",
                    borderBottom: "2px solid #aaa"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontWeight: 900,
                            fontSize: 11,
                            color: "#0D0D0D",
                            lineHeight: 1
                        },
                        children: "John Smith"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 6,
                            color: "#555",
                            marginTop: 2
                        },
                        children: "Data Science"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 5,
                            color: "#777",
                            marginTop: 2
                        },
                        children: "john@email.com  |  +212 6XX  |  LinkedIn"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            borderBottom: "1px solid #ddd",
                            marginTop: 3
                        }
                    }, void 0, false, {
                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: "36%",
                            padding: "5px 7px",
                            borderRight: "1px solid #DDD"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 6,
                                    fontWeight: 700,
                                    letterSpacing: 1,
                                    color: "#0D0D0D",
                                    borderBottom: "0.5px solid #CCC",
                                    paddingBottom: 1,
                                    marginBottom: 3,
                                    marginTop: 3
                                },
                                children: "EDUCATION"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 5,
                                    fontWeight: 700,
                                    color: "#2B2B2B"
                                },
                                children: "BSc Computer Science"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 4.5,
                                    color: "#777"
                                },
                                children: "University · 2020–2023"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 6,
                                    fontWeight: 700,
                                    letterSpacing: 1,
                                    color: "#0D0D0D",
                                    borderBottom: "0.5px solid #CCC",
                                    paddingBottom: 1,
                                    marginBottom: 3,
                                    marginTop: 5
                                },
                                children: "SKILLS"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 5,
                                    color: "#444"
                                },
                                children: "• Python, SQL"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 5,
                                    color: "#444"
                                },
                                children: "• Machine Learning"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 5,
                                    color: "#444"
                                },
                                children: "• Power BI"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 6,
                                    fontWeight: 700,
                                    letterSpacing: 1,
                                    color: "#0D0D0D",
                                    borderBottom: "0.5px solid #CCC",
                                    paddingBottom: 1,
                                    marginBottom: 3,
                                    marginTop: 5
                                },
                                children: "LANGUAGES"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 5,
                                    color: "#444"
                                },
                                children: "• English — Fluent"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 5,
                                    color: "#444"
                                },
                                children: "• French — B2"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            padding: "5px 7px 5px 9px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 6,
                                    fontWeight: 700,
                                    letterSpacing: 1,
                                    color: "#0D0D0D",
                                    borderBottom: "0.5px solid #CCC",
                                    paddingBottom: 1,
                                    marginBottom: 3,
                                    marginTop: 3
                                },
                                children: "SUMMARY"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 5,
                                    color: "#444",
                                    lineHeight: 1.5
                                },
                                children: "Detail-oriented Data Scientist with 2+ years of experience in analytics and ML."
                            }, void 0, false, {
                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 6,
                                    fontWeight: 700,
                                    letterSpacing: 1,
                                    color: "#0D0D0D",
                                    borderBottom: "0.5px solid #CCC",
                                    paddingBottom: 1,
                                    marginBottom: 3,
                                    marginTop: 5
                                },
                                children: "EXPERIENCE"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 5.5,
                                    fontWeight: 700,
                                    color: "#2B2B2B"
                                },
                                children: "Data Analyst | TechCorp"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 4.5,
                                    color: "#888"
                                },
                                children: "2023 – Present"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 5,
                                    color: "#444"
                                },
                                children: "• Built dashboards reducing reporting time by 40%"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 5,
                                    color: "#444"
                                },
                                children: "• Automated data pipeline with Python & SQL"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
    if (format.id === "modern") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: "#fff",
            borderRadius: 8,
            overflow: "hidden",
            boxShadow: `0 2px 12px ${borderAccent}`,
            height: PREVIEW_H,
            userSelect: "none",
            fontFamily: "Calibri,sans-serif",
            fontSize: 6,
            display: "flex",
            border: `1px solid ${borderAccent}`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: "34%",
                    background: "#1A3C72",
                    padding: "9px 6px",
                    display: "flex",
                    flexDirection: "column"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontWeight: 900,
                            fontSize: 8.5,
                            color: "#fff",
                            lineHeight: 1.1,
                            marginBottom: 5,
                            letterSpacing: 0.5
                        },
                        children: "JOHN SMITH"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 5,
                            fontWeight: 700,
                            color: "#fff",
                            borderBottom: "0.5px solid rgba(255,255,255,0.5)",
                            paddingBottom: 1.5,
                            marginBottom: 3,
                            letterSpacing: 0.5
                        },
                        children: "CONTACT"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 4.5,
                            color: "#BBCCEE",
                            marginBottom: 1.5
                        },
                        children: "+212 6XX XXX"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 4.5,
                            color: "#BBCCEE",
                            marginBottom: 1.5
                        },
                        children: "john@email.com"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 4.5,
                            color: "#BBCCEE",
                            marginBottom: 5
                        },
                        children: "LinkedIn"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 5,
                            fontWeight: 700,
                            color: "#fff",
                            borderBottom: "0.5px solid rgba(255,255,255,0.5)",
                            paddingBottom: 1.5,
                            marginBottom: 3,
                            letterSpacing: 0.5,
                            marginTop: 3
                        },
                        children: "SKILLS"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 4.5,
                            color: "#fff",
                            opacity: 0.9
                        },
                        children: "• Python, SQL"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 4.5,
                            color: "#fff",
                            opacity: 0.9
                        },
                        children: "• Machine Learning"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 4.5,
                            color: "#fff",
                            opacity: 0.9
                        },
                        children: "• Power BI"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    padding: "9px 7px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 6,
                            fontWeight: 700,
                            color: "#111",
                            letterSpacing: 1,
                            borderBottom: "0.5px solid #CCC",
                            paddingBottom: 1.5,
                            marginBottom: 3
                        },
                        children: "EXPERIENCE"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 5,
                            color: "#888",
                            marginBottom: 1
                        },
                        children: "2023 – Present"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 5.5,
                            fontWeight: 700,
                            color: "#111"
                        },
                        children: "Data Analyst"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 5,
                            color: "#444",
                            marginBottom: 2
                        },
                        children: "TechCorp, Agadir"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 5,
                            color: "#444"
                        },
                        children: "• Built dashboards reducing time by 40%"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 5,
                            color: "#444"
                        },
                        children: "• Automated pipeline with Python & SQL"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 6,
                            fontWeight: 700,
                            color: "#111",
                            letterSpacing: 1,
                            borderBottom: "0.5px solid #CCC",
                            paddingBottom: 1.5,
                            marginBottom: 3,
                            marginTop: 5
                        },
                        children: "EDUCATION"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 4.5,
                            color: "#888"
                        },
                        children: "2020 – 2023"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 5,
                            color: "#555"
                        },
                        children: "University of Agadir"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 5.5,
                            fontWeight: 700,
                            color: "#111"
                        },
                        children: "BSc Computer Science"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
        lineNumber: 142,
        columnNumber: 5
    }, this);
    // ATS (default)
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: "#fff",
            borderRadius: 8,
            overflow: "hidden",
            padding: "9px 11px",
            fontSize: 6,
            lineHeight: 1.5,
            color: "#111",
            fontFamily: "'Times New Roman',serif",
            boxShadow: `0 2px 12px ${borderAccent}`,
            height: PREVIEW_H,
            userSelect: "none",
            border: `1px solid ${borderAccent}`,
            overflowY: "hidden"
        },
        children: format.preview.map((line, i)=>{
            if (line.type === "name") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 10,
                    fontWeight: 900,
                    textAlign: "center",
                    marginBottom: 2,
                    letterSpacing: 1
                },
                children: line.text
            }, i, false, {
                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                lineNumber: 189,
                columnNumber: 11
            }, this);
            if (line.type === "contact") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 5,
                    textAlign: "center",
                    color: "#555",
                    marginBottom: 4
                },
                children: line.text
            }, i, false, {
                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                lineNumber: 192,
                columnNumber: 11
            }, this);
            if (line.type === "section") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 6.5,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    borderBottom: "1px solid #000",
                    marginTop: 5,
                    marginBottom: 2,
                    paddingBottom: 1
                },
                children: line.text
            }, i, false, {
                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                lineNumber: 195,
                columnNumber: 11
            }, this);
            if (line.type === "body") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 5,
                    color: "#333",
                    marginBottom: 2
                },
                children: line.text
            }, i, false, {
                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                lineNumber: 198,
                columnNumber: 11
            }, this);
            if (line.type === "job") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: 5.5,
                    fontWeight: 700,
                    marginBottom: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: line.left
                    }, void 0, false, {
                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                        lineNumber: 202,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: "#555"
                        },
                        children: line.right
                    }, void 0, false, {
                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                        lineNumber: 202,
                        columnNumber: 37
                    }, this)
                ]
            }, i, true, {
                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                lineNumber: 201,
                columnNumber: 11
            }, this);
            if (line.type === "bullet") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 5,
                    color: "#444",
                    marginLeft: 7,
                    marginBottom: 1
                },
                children: [
                    "• ",
                    line.text
                ]
            }, i, true, {
                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                lineNumber: 206,
                columnNumber: 11
            }, this);
            return null;
        })
    }, void 0, false, {
        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
        lineNumber: 178,
        columnNumber: 5
    }, this);
}
_c = MiniPreview;
function FormatScreen({ selectedFormat, setSelectedFormat, onNext, onBack }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: "calc(100vh - 57px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "44px 24px 72px",
            animation: "fadeUp .35s ease both"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: "100%",
                    maxWidth: 960,
                    display: "flex",
                    flexDirection: "column",
                    gap: 28
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "inline-block",
                                    padding: "4px 14px",
                                    borderRadius: 99,
                                    border: "1.5px solid rgba(233,30,140,.35)",
                                    fontSize: 11,
                                    fontWeight: 700,
                                    letterSpacing: ".1em",
                                    color: "var(--pink)",
                                    marginBottom: 12
                                },
                                children: "Step 05 — Format"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                                lineNumber: 228,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: "clamp(26px,4vw,42px)",
                                    fontWeight: 900,
                                    letterSpacing: "-.03em",
                                    margin: "0 0 8px",
                                    color: "var(--text)",
                                    lineHeight: 1.1
                                },
                                children: "Choose your CV format"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                                lineNumber: 234,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: 14,
                                    color: "var(--text-muted)",
                                    margin: 0
                                },
                                children: "Each format is optimized for a different context. Pick the one that matches your situation."
                            }, void 0, false, {
                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                                lineNumber: 238,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                        lineNumber: 227,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: 20
                        },
                        className: "format-grid",
                        children: FORMATS.map((fmt)=>{
                            const selected = selectedFormat === fmt.id;
                            const IconCmp = fmt.id === "ats" ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"] : fmt.id === "basic" ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"] : __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"];
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setSelectedFormat(fmt.id),
                                style: {
                                    all: "unset",
                                    display: "flex",
                                    flexDirection: "column",
                                    background: selected ? "linear-gradient(135deg,rgba(233,30,140,0.06),rgba(123,47,190,0.06))" : "var(--surface)",
                                    border: selected ? "2px solid rgba(233,30,140,0.5)" : "1.5px solid var(--border)",
                                    borderRadius: 20,
                                    padding: "22px 20px",
                                    cursor: "pointer",
                                    transition: "all .2s",
                                    boxShadow: selected ? "0 4px 28px rgba(233,30,140,0.15)" : "var(--shadow-sm)",
                                    gap: 0,
                                    position: "relative"
                                },
                                onMouseEnter: (e)=>{
                                    if (!selected) {
                                        e.currentTarget.style.borderColor = "rgba(123,47,190,.3)";
                                        e.currentTarget.style.transform = "translateY(-2px)";
                                    }
                                },
                                onMouseLeave: (e)=>{
                                    if (!selected) {
                                        e.currentTarget.style.borderColor = "var(--border)";
                                        e.currentTarget.style.transform = "none";
                                    }
                                },
                                children: [
                                    selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "absolute",
                                            top: 14,
                                            right: 14,
                                            width: 22,
                                            height: 22,
                                            borderRadius: "50%",
                                            background: "var(--grad)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                            size: 13,
                                            color: "#fff"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                                            lineNumber: 280,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                                        lineNumber: 274,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 10,
                                            marginBottom: 12
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: 38,
                                                    height: 38,
                                                    borderRadius: 11,
                                                    flexShrink: 0,
                                                    background: selected ? "rgba(233,30,140,.12)" : "rgba(123,47,190,.08)",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    color: selected ? "var(--pink)" : "var(--violet)",
                                                    transition: "all .2s"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconCmp, {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                                                    lineNumber: 293,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                                                lineNumber: 286,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: 15,
                                                            fontWeight: 800,
                                                            color: "var(--text)",
                                                            marginBottom: 3
                                                        },
                                                        children: fmt.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                                                        lineNumber: 296,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: 10,
                                                            fontWeight: 700,
                                                            padding: "2px 8px",
                                                            borderRadius: 99,
                                                            color: fmt.tagColor,
                                                            background: fmt.tagBg,
                                                            border: `1px solid ${fmt.tagBorder}`
                                                        },
                                                        children: fmt.tag
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                                                        lineNumber: 299,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                                                lineNumber: 295,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                                        lineNumber: 285,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: 12,
                                            color: "var(--text-muted)",
                                            margin: "0 0 8px",
                                            lineHeight: 1.6
                                        },
                                        children: fmt.description
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                                        lineNumber: 308,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 11,
                                            color: "var(--text-faint)",
                                            marginBottom: 12
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: "var(--violet)",
                                                    fontWeight: 600
                                                },
                                                children: "Best for: "
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                                                lineNumber: 314,
                                                columnNumber: 19
                                            }, this),
                                            fmt.bestFor
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                                        lineNumber: 313,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: 5,
                                            fontSize: 10,
                                            fontWeight: 600,
                                            padding: "3px 10px",
                                            borderRadius: 99,
                                            background: "rgba(123,47,190,0.07)",
                                            border: "1px solid rgba(123,47,190,0.15)",
                                            color: "var(--violet)",
                                            marginBottom: 14
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__["Type"], {
                                                size: 10
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                                                lineNumber: 327,
                                                columnNumber: 19
                                            }, this),
                                            " ",
                                            fmt.font
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                                        lineNumber: 319,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 5,
                                            marginBottom: 20
                                        },
                                        children: fmt.features.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 7
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: 4,
                                                            height: 4,
                                                            borderRadius: "50%",
                                                            background: selected ? "var(--pink)" : "rgba(123,47,190,0.4)",
                                                            flexShrink: 0
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                                                        lineNumber: 334,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: 11,
                                                            color: "var(--text-muted)"
                                                        },
                                                        children: f
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                                                        lineNumber: 338,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                                                lineNumber: 333,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                                        lineNumber: 331,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 9,
                                            fontWeight: 600,
                                            color: "var(--text-faint)",
                                            textTransform: "uppercase",
                                            letterSpacing: ".08em",
                                            marginBottom: 8
                                        },
                                        children: "Preview"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                                        lineNumber: 344,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniPreview, {
                                        format: fmt,
                                        selected: selected
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                                        lineNumber: 352,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, fmt.id, true, {
                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                                lineNumber: 250,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                        lineNumber: 244,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: "var(--surface)",
                            border: "1.5px solid rgba(233,30,140,.2)",
                            borderRadius: 20,
                            padding: "22px 28px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: 24,
                            flexWrap: "wrap",
                            boxShadow: "0 4px 24px rgba(233,30,140,.08)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 13,
                                            fontWeight: 700,
                                            color: "var(--text)",
                                            marginBottom: 3
                                        },
                                        children: [
                                            "Selected:",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    background: "var(--grad)",
                                                    WebkitBackgroundClip: "text",
                                                    WebkitTextFillColor: "transparent"
                                                },
                                                children: FORMATS.find((f)=>f.id === selectedFormat)?.name
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                                                lineNumber: 371,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                                        lineNumber: 369,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 12,
                                            color: "var(--text-muted)"
                                        },
                                        children: [
                                            FORMATS.find((f)=>f.id === selectedFormat)?.font,
                                            " · ",
                                            FORMATS.find((f)=>f.id === selectedFormat)?.tag
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                                        lineNumber: 375,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                                lineNumber: 368,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 10,
                                    alignItems: "flex-end"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: onNext,
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 9,
                                            padding: "15px 36px",
                                            borderRadius: 14,
                                            background: "var(--grad)",
                                            border: "none",
                                            color: "#fff",
                                            fontFamily: "var(--font)",
                                            fontSize: 15,
                                            fontWeight: 800,
                                            cursor: "pointer",
                                            boxShadow: "0 6px 28px rgba(233,30,140,.38)",
                                            transition: "all .2s",
                                            whiteSpace: "nowrap"
                                        },
                                        onMouseEnter: (e)=>{
                                            e.currentTarget.style.boxShadow = "0 8px 36px rgba(233,30,140,.55)";
                                            e.currentTarget.style.transform = "translateY(-2px)";
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.boxShadow = "0 6px 28px rgba(233,30,140,.38)";
                                            e.currentTarget.style.transform = "none";
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"], {
                                                size: 15
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                                                lineNumber: 396,
                                                columnNumber: 15
                                            }, this),
                                            "Boost My CV"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                                        lineNumber: 381,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: onBack,
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 6,
                                            padding: "9px 18px",
                                            borderRadius: 10,
                                            background: "transparent",
                                            border: "1px solid var(--border)",
                                            color: "var(--text-faint)",
                                            fontFamily: "var(--font)",
                                            fontSize: 12,
                                            cursor: "pointer",
                                            transition: "all .2s"
                                        },
                                        onMouseEnter: (e)=>{
                                            e.currentTarget.style.borderColor = "rgba(123,47,190,.3)";
                                            e.currentTarget.style.color = "var(--violet)";
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.borderColor = "var(--border)";
                                            e.currentTarget.style.color = "var(--text-faint)";
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                size: 11
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                                                lineNumber: 413,
                                                columnNumber: 15
                                            }, this),
                                            "Go Back"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                                        lineNumber: 400,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                                lineNumber: 380,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                        lineNumber: 360,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                lineNumber: 224,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @media (max-width: 860px) {
          .format-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 520px) {
          .format-grid { grid-template-columns: 1fr !important; }
        }
      `
            }, void 0, false, {
                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
                lineNumber: 421,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx",
        lineNumber: 217,
        columnNumber: 5
    }, this);
}
_c1 = FormatScreen;
var _c, _c1;
__turbopack_context__.k.register(_c, "MiniPreview");
__turbopack_context__.k.register(_c1, "FormatScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/ResultInsights.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ATSCompliance",
    ()=>ATSCompliance,
    "WhatWasImproved",
    ()=>WhatWasImproved,
    "deriveCompliance",
    ()=>deriveCompliance,
    "deriveImprovements",
    ()=>deriveImprovements
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/CV-Booster(ATS Score)/Frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/Downloads/CV-Booster(ATS Score)/Frontend/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
"use client";
;
;
const ATS_FORMAT_RULES = {
    ats: [
        "Single-column layout — ATS-safe structure",
        "Times New Roman — universally readable font",
        "Dates right-aligned via tab stops",
        "Section headings in ALL CAPS",
        "No tables, graphics or colors",
        ".docx format — maximum ATS compatibility"
    ],
    basic: [
        "Two-column classic layout — Georgia font",
        "Bold name header with domain subtitle",
        "Education & Skills in left column",
        "Experience & Projects in right column",
        "Subtle separator line between columns",
        ".docx format — maximum ATS compatibility"
    ],
    modern: [
        "Navy blue sidebar — contact & skills",
        "Calibri font — modern and readable",
        "White main area — experience & education",
        "Visually striking two-column design",
        "Optimized for direct email applications",
        ".docx format — maximum ATS compatibility"
    ],
    canadian: [
        "Canadian standard — no photo, age or gender",
        "Calibri with dark navy section headings",
        "Single-column professional layout",
        "Full-width underlined section separators",
        "Complies with PIPEDA privacy guidelines",
        ".docx format — maximum ATS compatibility"
    ],
    europass: [
        "Europass EU standard format",
        "Arial font — EU institution standard",
        "Blue header bands per Europass specification",
        "CEFR language level labeling",
        "Recognized across 32 European countries",
        ".docx format — maximum ATS compatibility"
    ]
};
const CRITERION_IMPROVEMENT_LABEL = {
    summary: "Professional summary rewritten with impact keywords",
    skills: "Skills section enriched and restructured by category",
    experience: "Work experience reformatted with bullet points & action verbs",
    sections: "CV structure reorganized — all key ATS sections present",
    keywords: "ATS keyword density boosted for your domain",
    contact: "Contact information completed and standardized",
    languages: "Languages section added with CEFR proficiency levels",
    length: "CV length optimized to ATS-ideal range (20–70 lines)"
};
function deriveImprovements({ parsedCV, bdBefore, bdAfter, selections, domain, platformLabs = [], platformCerts = [], platformQuiz = null }) {
    if (!bdBefore || !bdAfter) return [];
    const items = [];
    const gains = Object.entries(CRITERION_IMPROVEMENT_LABEL).map(([key, label])=>({
            key,
            label,
            gain: (bdAfter[key]?.score ?? 0) - (bdBefore[key]?.score ?? 0)
        })).filter((x)=>x.gain > 0).sort((a, b)=>b.gain - a.gain);
    for (const { label, gain } of gains)items.push({
        type: "score-gain",
        text: label,
        gain: `+${gain} pts`
    });
    if (selections?.quiz && platformQuiz) items.push({
        type: "platform",
        text: `Platform quiz integrated — ${platformQuiz.domain} · Level ${platformQuiz.level} (${platformQuiz.score}%)`,
        gain: null
    });
    const integratedLabs = platformLabs.filter((l)=>selections?.labs?.includes(l.id));
    if (integratedLabs.length > 0) items.push({
        type: "platform",
        text: `${integratedLabs.length} platform lab${integratedLabs.length > 1 ? "s" : ""} integrated: ${integratedLabs.map((l)=>l.title).join(", ")}`,
        gain: null
    });
    const integratedCerts = platformCerts.filter((c)=>selections?.certs?.includes(c.id));
    if (integratedCerts.length > 0) items.push({
        type: "platform",
        text: `${integratedCerts.length} certification${integratedCerts.length > 1 ? "s" : ""} added: ${integratedCerts.map((c)=>c.title).join(", ")}`,
        gain: null
    });
    const matchedKw = bdAfter["keywords"]?.matched || [];
    if (matchedKw.length > 0 && domain) {
        const topKw = [
            ...matchedKw
        ].sort((a, b)=>{
            const sa = typeof a === "string" ? 0 : a.similarity ?? 0;
            const sb = typeof b === "string" ? 0 : b.similarity ?? 0;
            return sb - sa;
        }).slice(0, 5).map((m)=>typeof m === "string" ? m : m.keyword).filter(Boolean);
        if (topKw.length > 0) items.push({
            type: "keywords",
            text: `Top keywords matched for "${domain}": ${topKw.join(", ")}`,
            gain: null
        });
    }
    return items.slice(0, 8);
}
function deriveCompliance({ parsedCV, bdAfter, selectedFormat }) {
    const formatRules = ATS_FORMAT_RULES[selectedFormat] || ATS_FORMAT_RULES["ats"];
    const sections = parsedCV?.sections || {};
    const sectionChecks = [
        {
            key: "profile",
            label: "Professional summary present"
        },
        {
            key: "experience",
            label: "Work experience section complete"
        },
        {
            key: "skills",
            label: "Technical skills section present"
        },
        {
            key: "education",
            label: "Education section present"
        },
        {
            key: "certifications",
            label: "Certifications section added"
        },
        {
            key: "languages",
            label: "Languages section present"
        }
    ];
    const dynamicChecks = sectionChecks.filter(({ key })=>(sections[key]?.length ?? 0) > 0).map(({ label })=>({
            text: label,
            ok: true
        }));
    const totalAfter = bdAfter ? Object.values(bdAfter).reduce((s, v)=>s + (v.score || 0), 0) : 0;
    if (totalAfter > 0) dynamicChecks.push({
        text: totalAfter >= 75 ? `ATS score ${totalAfter}/100 — above recruiter threshold` : `ATS score ${totalAfter}/100 — improved from baseline`,
        ok: true
    });
    const all = [
        ...formatRules.map((text)=>({
                text,
                ok: true
            })),
        ...dynamicChecks
    ];
    const seen = new Set();
    return all.filter((item)=>{
        if (seen.has(item.text)) return false;
        seen.add(item.text);
        return true;
    }).slice(0, 8);
}
const TYPE_CFG = {
    "score-gain": {
        color: "#E91E8C",
        bg: "rgba(233,30,140,.07)",
        border: "rgba(233,30,140,.18)"
    },
    "platform": {
        color: "#7B2FBE",
        bg: "rgba(123,47,190,.07)",
        border: "rgba(123,47,190,.18)"
    },
    "keywords": {
        color: "#10B981",
        bg: "rgba(16,185,129,.07)",
        border: "rgba(16,185,129,.18)"
    }
};
function WhatWasImproved({ items }) {
    if (!items || items.length === 0) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            fontSize: 13,
            color: "var(--text-faint)",
            padding: "12px 0",
            textAlign: "center"
        },
        children: "Boost your CV to see what was really changed."
    }, void 0, false, {
        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/ResultInsights.tsx",
        lineNumber: 90,
        columnNumber: 44
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            gap: 8
        },
        children: items.map((item, i)=>{
            const cfg = TYPE_CFG[item.type] || TYPE_CFG["score-gain"];
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "9px 13px",
                    borderRadius: 10,
                    background: cfg.bg,
                    border: `1.5px solid ${cfg.border}`,
                    animation: `fadeUp .28s ease ${i * 55}ms both`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: 7,
                            height: 7,
                            borderRadius: "50%",
                            background: cfg.color,
                            flexShrink: 0
                        }
                    }, void 0, false, {
                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/ResultInsights.tsx",
                        lineNumber: 95,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: 13,
                            color: "var(--text)",
                            lineHeight: 1.45,
                            flex: 1
                        },
                        children: item.text
                    }, void 0, false, {
                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/ResultInsights.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this),
                    item.gain && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: 11,
                            fontWeight: 800,
                            flexShrink: 0,
                            padding: "2px 8px",
                            borderRadius: 99,
                            background: cfg.color,
                            color: "#fff",
                            boxShadow: `0 2px 8px ${cfg.color}44`
                        },
                        children: item.gain
                    }, void 0, false, {
                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/ResultInsights.tsx",
                        lineNumber: 97,
                        columnNumber: 25
                    }, this)
                ]
            }, i, true, {
                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/ResultInsights.tsx",
                lineNumber: 94,
                columnNumber: 9
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/ResultInsights.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_c = WhatWasImproved;
function ATSCompliance({ items }) {
    if (!items || items.length === 0) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            fontSize: 13,
            color: "var(--text-faint)",
            padding: "12px 0",
            textAlign: "center"
        },
        children: "Compliance data will appear after boost."
    }, void 0, false, {
        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/ResultInsights.tsx",
        lineNumber: 105,
        columnNumber: 44
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            gap: 8
        },
        children: items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    animation: `fadeUp .28s ease ${i * 45}ms both`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                        size: 13,
                        color: "#10B981",
                        style: {
                            flexShrink: 0,
                            marginTop: 1
                        }
                    }, void 0, false, {
                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/ResultInsights.tsx",
                        lineNumber: 110,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: 13,
                            color: "var(--text)",
                            lineHeight: 1.45
                        },
                        children: item.text
                    }, void 0, false, {
                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/ResultInsights.tsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, this)
                ]
            }, i, true, {
                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/ResultInsights.tsx",
                lineNumber: 109,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/ResultInsights.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
_c1 = ATSCompliance;
var _c, _c1;
__turbopack_context__.k.register(_c, "WhatWasImproved");
__turbopack_context__.k.register(_c1, "ATSCompliance");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>JobBoosterApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/CV-Booster(ATS Score)/Frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/CV-Booster(ATS Score)/Frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/Downloads/CV-Booster(ATS Score)/Frontend/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/Downloads/CV-Booster(ATS Score)/Frontend/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Downloads/CV-Booster(ATS Score)/Frontend/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wand$2d$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wand2$3e$__ = __turbopack_context__.i("[project]/Downloads/CV-Booster(ATS Score)/Frontend/node_modules/lucide-react/dist/esm/icons/wand-sparkles.js [app-client] (ecmascript) <export default as Wand2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/Downloads/CV-Booster(ATS Score)/Frontend/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/Downloads/CV-Booster(ATS Score)/Frontend/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/Downloads/CV-Booster(ATS Score)/Frontend/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/Downloads/CV-Booster(ATS Score)/Frontend/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/Downloads/CV-Booster(ATS Score)/Frontend/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/Downloads/CV-Booster(ATS Score)/Frontend/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/Downloads/CV-Booster(ATS Score)/Frontend/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/Downloads/CV-Booster(ATS Score)/Frontend/node_modules/lucide-react/dist/esm/icons/palette.js [app-client] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$components$2f$FormatScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/FormatScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$components$2f$ResultInsights$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/ResultInsights.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const API_URL = "http://localhost:8000";
// ─────────────────────────────────────────────────────────────────────────────
// SCORE RING
// ─────────────────────────────────────────────────────────────────────────────
function ScoreRing({ score, label, size = 108, animate = false }) {
    const r = size * 0.38, circ = 2 * Math.PI * r;
    const dash = score / 100 * circ;
    const color = score >= 75 ? "#10B981" : score >= 50 ? "#F59E0B" : "#EF4444";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative",
                    width: size,
                    height: size
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: size,
                        height: size,
                        style: {
                            transform: "rotate(-90deg)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: size / 2,
                                cy: size / 2,
                                r: r,
                                fill: "none",
                                stroke: "rgba(123,47,190,0.1)",
                                strokeWidth: size * 0.075
                            }, void 0, false, {
                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: size / 2,
                                cy: size / 2,
                                r: r,
                                fill: "none",
                                stroke: color,
                                strokeWidth: size * 0.075,
                                strokeDasharray: circ,
                                strokeDashoffset: circ - dash,
                                strokeLinecap: "round",
                                style: {
                                    transition: animate ? "stroke-dashoffset 1.3s cubic-bezier(0.34,1.56,0.64,1)" : "none"
                                }
                            }, void 0, false, {
                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            inset: 0,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: size * 0.23,
                                    fontWeight: 900,
                                    color,
                                    lineHeight: 1
                                },
                                children: score
                            }, void 0, false, {
                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: size * 0.1,
                                    color: "var(--text-faint)"
                                },
                                children: "/100"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: 12,
                    color: "var(--text-muted)",
                    fontWeight: 600
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c = ScoreRing;
// ─────────────────────────────────────────────────────────────────────────────
// CRITERIA BAR
// ─────────────────────────────────────────────────────────────────────────────
function CriteriaBar({ label, before, after, max }) {
    const improved = after > before;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "crit-row",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "crit-row-head",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "crit-row-label",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "crit-row-scores",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "score-before",
                                children: [
                                    before,
                                    "/",
                                    max
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            improved && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "score-after",
                                children: [
                                    "→ ",
                                    after,
                                    "/",
                                    max
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                lineNumber: 59,
                                columnNumber: 24
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bar-track",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bar-seg bar-before",
                        style: {
                            width: `${before / max * 100}%`
                        }
                    }, void 0, false, {
                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bar-seg bar-after",
                        style: {
                            width: `${after / max * 100}%`,
                            background: improved ? "linear-gradient(90deg,#E91E8C,#7B2FBE)" : "rgba(123,47,190,0.15)",
                            transition: "width 1s cubic-bezier(0.34,1.56,0.64,1) 0.3s"
                        }
                    }, void 0, false, {
                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_c1 = CriteriaBar;
const CRITERIA_META = {
    sections: {
        label: "Key Sections",
        max: 20
    },
    skills: {
        label: "Technical Skills",
        max: 18
    },
    experience: {
        label: "Work Experience",
        max: 18
    },
    length: {
        label: "CV Length",
        max: 12
    },
    contact: {
        label: "Contact Info",
        max: 8
    },
    keywords: {
        label: "ATS Keywords",
        max: 8
    },
    summary: {
        label: "Professional Summary",
        max: 10
    },
    languages: {
        label: "Languages",
        max: 6
    }
};
function JobBoosterApp() {
    _s();
    // URL params + job fetch — all in one useEffect to avoid timing issues
    const [userId, setUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [jobId, setJobId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("32e610bd-3b5c-4835-8582-2a135368e74e");
    // State
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("job");
    const [job, setJob] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [jobLoading, setJobLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [errorMsg, setErrorMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedFormat, setSelectedFormat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("ats");
    const [applyingFormat, setApplyingFormat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [docxUrl, setDocxUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [docxName, setDocxName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [scoreBefore, setScoreBefore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [scoreAfter, setScoreAfter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [bdBefore, setBdBefore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [bdAfter, setBdAfter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [parsedCV, setParsedCV] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [domain, setDomain] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [improvementItems, setImprovementItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [complianceItems, setComplianceItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cvLanguage, setCvLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("auto");
    // Read URL params + fetch job in one shot to avoid timing race
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "JobBoosterApp.useEffect": ()=>{
            const params = new URLSearchParams(window.location.search);
            const uid = params.get("user_id") || "";
            const jid = params.get("job_id") || "32e610bd-3b5c-4835-8582-2a135368e74e";
            setUserId(uid);
            setJobId(jid);
            fetch(`${API_URL}/job-data/${jid}`).then({
                "JobBoosterApp.useEffect": (r)=>r.json()
            }["JobBoosterApp.useEffect"]).then({
                "JobBoosterApp.useEffect": (data)=>{
                    setJob(data);
                    setJobLoading(false);
                }
            }["JobBoosterApp.useEffect"]).catch({
                "JobBoosterApp.useEffect": ()=>{
                    setJob(null);
                    setJobLoading(false);
                }
            }["JobBoosterApp.useEffect"]);
        }
    }["JobBoosterApp.useEffect"], []);
    // Enhance CV for this job
    const handleEnhance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "JobBoosterApp.useCallback[handleEnhance]": async ()=>{
            if (!userId) {
                setErrorMsg("No user ID found. Please access this page from your SUBUL account.");
                setPhase("error");
                return;
            }
            setPhase("loading");
            try {
                const fd = new FormData();
                fd.append("user_id", userId);
                fd.append("job_id", jobId);
                fd.append("cv_format", selectedFormat);
                const res = await fetch(`${API_URL}/enhance-cv-for-job`, {
                    method: "POST",
                    body: fd
                });
                if (!res.ok) {
                    const err = await res.json().catch({
                        "JobBoosterApp.useCallback[handleEnhance]": ()=>({})
                    }["JobBoosterApp.useCallback[handleEnhance]"]);
                    throw new Error(err.error || `Server error ${res.status}`);
                }
                const sBefore = parseInt(res.headers.get("X-ATS-Score-Before") || "0");
                const sAfter = parseInt(res.headers.get("X-ATS-Score-After") || "0");
                const bbRaw = res.headers.get("X-ATS-Breakdown-Before");
                const baRaw = res.headers.get("X-ATS-Breakdown-After");
                const pcRaw = res.headers.get("X-Parsed-CV");
                const domainRaw = res.headers.get("X-Domain") || "";
                const jobTitle = res.headers.get("X-Job-Title") || "Job";
                setScoreBefore(sBefore);
                setScoreAfter(sAfter);
                if (bbRaw) setBdBefore(JSON.parse(bbRaw));
                if (baRaw) setBdAfter(JSON.parse(baRaw));
                if (pcRaw) setParsedCV(JSON.parse(pcRaw));
                if (domainRaw) setDomain(domainRaw);
                const newBdBefore = bbRaw ? JSON.parse(bbRaw) : null;
                const newBdAfter = baRaw ? JSON.parse(baRaw) : null;
                const newParsedCV = pcRaw ? JSON.parse(pcRaw) : null;
                if (newBdBefore && newBdAfter) {
                    setImprovementItems((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$components$2f$ResultInsights$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deriveImprovements"])({
                        parsedCV: newParsedCV,
                        bdBefore: newBdBefore,
                        bdAfter: newBdAfter,
                        selections: {
                            quiz: false,
                            labs: [],
                            certs: []
                        },
                        domain: domainRaw
                    }));
                    setComplianceItems((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$components$2f$ResultInsights$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deriveCompliance"])({
                        parsedCV: newParsedCV,
                        bdAfter: newBdAfter,
                        selectedFormat
                    }));
                }
                const blob = await res.blob();
                setDocxUrl(URL.createObjectURL(blob));
                const safeJob = jobTitle.replace(/[^\w\s-]/g, "").replace(/\s+/g, "_").slice(0, 30);
                setDocxName(`CV_${safeJob}.docx`);
                setPhase("done");
            } catch (e) {
                setErrorMsg((e instanceof Error ? e.message : String(e)) || "Unknown error");
                setPhase("error");
            }
        }
    }["JobBoosterApp.useCallback[handleEnhance]"], [
        userId,
        jobId,
        selectedFormat
    ]);
    // Apply different format instantly
    const handleApplyFormat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "JobBoosterApp.useCallback[handleApplyFormat]": async (fmt)=>{
            if (!parsedCV) return;
            setApplyingFormat(true);
            setSelectedFormat(fmt);
            if (bdAfter) {
                setComplianceItems((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$components$2f$ResultInsights$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deriveCompliance"])({
                    parsedCV,
                    bdAfter,
                    selectedFormat: fmt
                }));
            }
            try {
                const fd = new FormData();
                fd.append("parsed_cv", JSON.stringify(parsedCV));
                fd.append("cv_format", fmt);
                const res = await fetch(`${API_URL}/apply-format`, {
                    method: "POST",
                    body: fd
                });
                if (!res.ok) throw new Error("Format error");
                const blob = await res.blob();
                if (docxUrl) URL.revokeObjectURL(docxUrl);
                setDocxUrl(URL.createObjectURL(blob));
            } catch (e) {
                console.error("Format switch failed:", e);
            } finally{
                setApplyingFormat(false);
            }
        }
    }["JobBoosterApp.useCallback[handleApplyFormat]"], [
        parsedCV,
        docxUrl,
        bdAfter
    ]);
    const downloadFile = ()=>{
        if (!docxUrl) return;
        const a = document.createElement("a");
        a.href = docxUrl;
        a.download = docxName;
        a.click();
    };
    const delta = scoreBefore !== null && scoreAfter !== null ? scoreAfter - scoreBefore : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "app",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "blobs",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "blob blob-1"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                        lineNumber: 222,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "blob blob-2"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                        lineNumber: 222,
                        columnNumber: 40
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "topbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "logo",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "logo-icon",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                    size: 14,
                                    color: "#fff"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                    lineNumber: 227,
                                    columnNumber: 38
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                lineNumber: 227,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "logo-text",
                                children: [
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        children: "SUBUL"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                        lineNumber: 228,
                                        columnNumber: 40
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                lineNumber: 228,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                        lineNumber: 226,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 12,
                            color: "var(--text-faint)",
                            fontWeight: 600
                        },
                        children: "CV Enhancer for Job Offer"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                        lineNumber: 230,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                lineNumber: 225,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "main-content",
                children: [
                    phase === "job" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            padding: "44px 24px 72px",
                            gap: 24,
                            animation: "fadeUp .35s ease both"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: "100%",
                                maxWidth: 760
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: 28
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "inline-block",
                                                padding: "4px 14px",
                                                borderRadius: 99,
                                                border: "1.5px solid rgba(233,30,140,.35)",
                                                fontSize: 11,
                                                fontWeight: 700,
                                                letterSpacing: ".1em",
                                                color: "var(--pink)",
                                                marginBottom: 12
                                            },
                                            children: "JOB OFFER"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                            lineNumber: 244,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: {
                                                fontSize: "clamp(24px,4vw,38px)",
                                                fontWeight: 900,
                                                letterSpacing: "-.03em",
                                                margin: "0 0 8px",
                                                color: "var(--text)"
                                            },
                                            children: "Enhance your CV for this job"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                            lineNumber: 247,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: 14,
                                                color: "var(--text-muted)",
                                                margin: 0
                                            },
                                            children: "Your saved CV will be rewritten to match this specific job offer"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                            lineNumber: 250,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                    lineNumber: 243,
                                    columnNumber: 15
                                }, this),
                                jobLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: "var(--surface)",
                                        border: "1px solid var(--border)",
                                        borderRadius: 20,
                                        padding: "32px",
                                        textAlign: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                            size: 24,
                                            color: "#7B2FBE",
                                            style: {
                                                animation: "spin 1.5s linear infinite"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                            lineNumber: 258,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginTop: 12,
                                                color: "var(--text-muted)",
                                                fontSize: 14
                                            },
                                            children: "Loading job details…"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                            lineNumber: 259,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                    lineNumber: 257,
                                    columnNumber: 17
                                }, this) : job && !job.error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: "var(--surface)",
                                        border: "1.5px solid rgba(123,47,190,.2)",
                                        borderRadius: 20,
                                        padding: "28px 32px",
                                        boxShadow: "0 4px 24px rgba(123,47,190,.08)",
                                        marginBottom: 24
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "flex-start",
                                                justifyContent: "space-between",
                                                gap: 16,
                                                marginBottom: 20,
                                                flexWrap: "wrap"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        style: {
                                                            fontSize: 24,
                                                            fontWeight: 900,
                                                            color: "var(--text)",
                                                            margin: "0 0 8px",
                                                            letterSpacing: "-.02em"
                                                        },
                                                        children: job.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                                        lineNumber: 266,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: 16,
                                                            flexWrap: "wrap"
                                                        },
                                                        children: [
                                                            job.location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    gap: 5,
                                                                    fontSize: 13,
                                                                    color: "var(--text-muted)",
                                                                    fontWeight: 600
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                        size: 13,
                                                                        color: "var(--violet)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                                                        lineNumber: 272,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    " ",
                                                                    job.location
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                                                lineNumber: 271,
                                                                columnNumber: 27
                                                            }, this),
                                                            job.seniority && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    gap: 5,
                                                                    fontSize: 13,
                                                                    color: "var(--text-muted)",
                                                                    fontWeight: 600
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                                                                        size: 13,
                                                                        color: "var(--violet)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                                                        lineNumber: 277,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    " ",
                                                                    job.seniority
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                                                lineNumber: 276,
                                                                columnNumber: 27
                                                            }, this),
                                                            job.source && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    padding: "2px 10px",
                                                                    borderRadius: 99,
                                                                    background: "rgba(123,47,190,.08)",
                                                                    border: "1px solid rgba(123,47,190,.2)",
                                                                    fontSize: 11,
                                                                    fontWeight: 700,
                                                                    color: "var(--violet)"
                                                                },
                                                                children: job.source
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                                                lineNumber: 281,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                                        lineNumber: 269,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                                lineNumber: 265,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                            lineNumber: 264,
                                            columnNumber: 19
                                        }, this),
                                        job.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginBottom: 16
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 11,
                                                        fontWeight: 700,
                                                        letterSpacing: ".08em",
                                                        textTransform: "uppercase",
                                                        color: "var(--text-faint)",
                                                        marginBottom: 6
                                                    },
                                                    children: "Description"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                                    lineNumber: 292,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontSize: 14,
                                                        color: "var(--text-muted)",
                                                        lineHeight: 1.65,
                                                        margin: 0
                                                    },
                                                    children: job.description
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                                    lineNumber: 293,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                            lineNumber: 291,
                                            columnNumber: 21
                                        }, this),
                                        job.requirements && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 11,
                                                        fontWeight: 700,
                                                        letterSpacing: ".08em",
                                                        textTransform: "uppercase",
                                                        color: "var(--text-faint)",
                                                        marginBottom: 6
                                                    },
                                                    children: "Requirements"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                                    lineNumber: 300,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontSize: 14,
                                                        color: "var(--text-muted)",
                                                        lineHeight: 1.65,
                                                        margin: 0
                                                    },
                                                    children: job.requirements
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                                    lineNumber: 301,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                            lineNumber: 299,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                    lineNumber: 262,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: "var(--surface)",
                                        border: "1.5px solid rgba(239,68,68,.3)",
                                        borderRadius: 20,
                                        padding: "24px",
                                        textAlign: "center",
                                        marginBottom: 24
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                            size: 24,
                                            color: "#EF4444"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                            lineNumber: 307,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginTop: 8,
                                                color: "var(--text-muted)",
                                                fontSize: 14
                                            },
                                            children: "Job not found. Using demo job."
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                            lineNumber: 308,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                    lineNumber: 306,
                                    columnNumber: 17
                                }, this),
                                !userId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: "14px 20px",
                                        borderRadius: 14,
                                        background: "rgba(245,158,11,.07)",
                                        border: "1.5px solid rgba(245,158,11,.3)",
                                        fontSize: 13,
                                        color: "#92400e",
                                        marginBottom: 16,
                                        fontWeight: 600
                                    },
                                    children: [
                                        "⚠️ No user ID detected. Access this page via ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                            children: "?user_id=YOUR_ID&job_id=JOB_ID"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                            lineNumber: 315,
                                            columnNumber: 64
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                    lineNumber: 314,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        justifyContent: "center"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleEnhance,
                                        disabled: !userId,
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 10,
                                            padding: "16px 40px",
                                            borderRadius: 16,
                                            background: userId ? "var(--grad)" : "rgba(123,47,190,.2)",
                                            border: "none",
                                            color: "#fff",
                                            fontFamily: "var(--font)",
                                            fontSize: 16,
                                            fontWeight: 800,
                                            cursor: userId ? "pointer" : "not-allowed",
                                            boxShadow: userId ? "0 6px 28px rgba(233,30,140,.38)" : "none",
                                            transition: "all .2s"
                                        },
                                        onMouseEnter: (e)=>{
                                            if (userId) {
                                                e.currentTarget.style.boxShadow = "0 8px 36px rgba(233,30,140,.55)";
                                                e.currentTarget.style.transform = "translateY(-2px)";
                                            }
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.boxShadow = userId ? "0 6px 28px rgba(233,30,140,.38)" : "none";
                                            e.currentTarget.style.transform = "none";
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wand$2d$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wand2$3e$__["Wand2"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                                lineNumber: 338,
                                                columnNumber: 19
                                            }, this),
                                            " Enhance CV for this Job"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                        lineNumber: 321,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                    lineNumber: 320,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                            lineNumber: 240,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                        lineNumber: 239,
                        columnNumber: 11
                    }, this),
                    phase === "loading" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "screen screen-loading",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "loader-ring-wrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "loader-ring-outer"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                        lineNumber: 349,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                        size: 26,
                                        color: "#7B2FBE",
                                        style: {
                                            animation: "spin 2s linear infinite reverse"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                        lineNumber: 350,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                lineNumber: 348,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "loading-title",
                                children: "Enhancing your CV…"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                lineNumber: 352,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 13,
                                    color: "var(--text-muted)",
                                    maxWidth: 360,
                                    textAlign: "center",
                                    lineHeight: 1.6
                                },
                                children: [
                                    "Rewriting your CV to match",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                        lineNumber: 354,
                                        columnNumber: 41
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        style: {
                                            color: "var(--violet)"
                                        },
                                        children: job?.title || "this job offer"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                        lineNumber: 355,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                lineNumber: 353,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                        lineNumber: 347,
                        columnNumber: 11
                    }, this),
                    phase === "done" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "screen screen-done",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "result-two-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "section-micro-label",
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 6,
                                                    marginBottom: 14
                                                },
                                                children: "What was improved for this job"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                                lineNumber: 367,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$components$2f$ResultInsights$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WhatWasImproved"], {
                                                items: improvementItems
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                                lineNumber: 370,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                        lineNumber: 366,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "section-micro-label",
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 6,
                                                    marginBottom: 14
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                        size: 12,
                                                        color: "#10B981",
                                                        style: {
                                                            flexShrink: 0
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                                        lineNumber: 374,
                                                        columnNumber: 19
                                                    }, this),
                                                    "ATS Compliance — ",
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$components$2f$FormatScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FORMATS"].find((f)=>f.id === selectedFormat)?.name || "ATS Classic"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                                lineNumber: 373,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$components$2f$ResultInsights$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ATSCompliance"], {
                                                items: complianceItems
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                                lineNumber: 377,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                        lineNumber: 372,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                lineNumber: 365,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card result-card-wide card-download",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "dl-icon-wrap",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                            size: 24,
                                            color: "#E91E8C"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                            lineNumber: 383,
                                            columnNumber: 45
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                        lineNumber: 383,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "dl-title",
                                        children: "Your CV is ready!"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                        lineNumber: 384,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "dl-sub",
                                        children: [
                                            "Optimized for ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: job?.title
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                                lineNumber: 385,
                                                columnNumber: 51
                                            }, this),
                                            ". Switch format instantly."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                        lineNumber: 385,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginBottom: 20
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 11,
                                                    fontWeight: 700,
                                                    letterSpacing: ".08em",
                                                    textTransform: "uppercase",
                                                    color: "var(--text-faint)",
                                                    marginBottom: 10
                                                },
                                                children: "Choose format"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                                lineNumber: 389,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    gap: 10,
                                                    flexWrap: "wrap"
                                                },
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$components$2f$FormatScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FORMATS"].map((fmt)=>{
                                                    const isActive = selectedFormat === fmt.id;
                                                    const IconCmp = fmt.id === "ats" ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"] : fmt.id === "basic" ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"] : __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"];
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>handleApplyFormat(fmt.id),
                                                        disabled: applyingFormat,
                                                        style: {
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: 8,
                                                            padding: "10px 16px",
                                                            borderRadius: 12,
                                                            background: isActive ? "var(--grad)" : "var(--surface)",
                                                            border: isActive ? "none" : "1.5px solid var(--border)",
                                                            color: isActive ? "#fff" : "var(--text-muted)",
                                                            fontFamily: "var(--font)",
                                                            fontSize: 13,
                                                            fontWeight: 700,
                                                            cursor: applyingFormat ? "wait" : "pointer",
                                                            boxShadow: isActive ? "0 4px 18px rgba(233,30,140,.35)" : "var(--shadow-sm)",
                                                            transition: "all .18s",
                                                            opacity: applyingFormat && !isActive ? 0.5 : 1
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconCmp, {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                                                lineNumber: 409,
                                                                columnNumber: 25
                                                            }, this),
                                                            fmt.name,
                                                            isActive && applyingFormat && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: 10,
                                                                    opacity: .8
                                                                },
                                                                children: "…"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                                                lineNumber: 410,
                                                                columnNumber: 56
                                                            }, this)
                                                        ]
                                                    }, fmt.id, true, {
                                                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                                        lineNumber: 395,
                                                        columnNumber: 23
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                                lineNumber: 390,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                        lineNumber: 388,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "dl-file-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                size: 20,
                                                color: "#7B2FBE"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                                lineNumber: 418,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "dl-file-name",
                                                        children: docxName
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                                        lineNumber: 420,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "dl-file-meta",
                                                        children: [
                                                            "Optimized for ",
                                                            job?.title,
                                                            " · ",
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$components$2f$FormatScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FORMATS"].find((f)=>f.id === selectedFormat)?.name
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                                        lineNumber: 421,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                                lineNumber: 419,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                        lineNumber: 417,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "dl-actions",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "btn-download",
                                                onClick: downloadFile,
                                                type: "button",
                                                disabled: applyingFormat,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                        size: 15
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                                        lineNumber: 426,
                                                        columnNumber: 19
                                                    }, this),
                                                    applyingFormat ? "Generating…" : "Download Enhanced CV (.docx)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                                lineNumber: 425,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "btn-reset btn-reset-inline",
                                                onClick: ()=>setPhase("job"),
                                                type: "button",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                                        size: 11
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                                        lineNumber: 429,
                                                        columnNumber: 19
                                                    }, this),
                                                    " Back to Job"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                                lineNumber: 428,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                        lineNumber: 424,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                lineNumber: 382,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                        lineNumber: 362,
                        columnNumber: 11
                    }, this),
                    phase === "error" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "screen screen-error",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "error-icon-wrap",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                    size: 28,
                                    color: "#EF4444"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                    lineNumber: 440,
                                    columnNumber: 46
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                lineNumber: 440,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "error-title",
                                children: "An error occurred"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                lineNumber: 441,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "error-msg",
                                children: errorMsg
                            }, void 0, false, {
                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                lineNumber: 442,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$CV$2d$Booster$28$ATS__Score$292f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn-reset",
                                onClick: ()=>setPhase("job"),
                                type: "button",
                                children: "Try again"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                                lineNumber: 443,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                        lineNumber: 439,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
                lineNumber: 235,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/CV-Booster(ATS Score)/Frontend/components/JobBoosterApp.tsx",
        lineNumber: 220,
        columnNumber: 5
    }, this);
}
_s(JobBoosterApp, "t6QBHz+T0uJvXdcbKcTjbOdiriI=");
_c2 = JobBoosterApp;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ScoreRing");
__turbopack_context__.k.register(_c1, "CriteriaBar");
__turbopack_context__.k.register(_c2, "JobBoosterApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_CV-Booster%28ATS%20Score%29_Frontend_components_1b7bba87._.js.map