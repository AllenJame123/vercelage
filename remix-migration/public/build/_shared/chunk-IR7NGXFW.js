import {
  Card
} from "/build/_shared/chunk-VABJJFVO.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-G6VJL33X.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/age-calculator/ResultCard.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\age-calculator\\\\ResultCard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\age-calculator\\ResultCard.tsx"
  );
  import.meta.hot.lastModified = "1747380263265.5466";
}
var ResultCard = ({
  title,
  value,
  description
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "p-6 text-center bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-primary", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm font-medium text-soft-charcoal mb-3", children: title }, void 0, false, {
    fileName: "app/components/age-calculator/ResultCard.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-3xl font-bold mb-2 font-display text-primary-dark", children: value }, void 0, false, {
    fileName: "app/components/age-calculator/ResultCard.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-neutral-gray", children: description }, void 0, false, {
    fileName: "app/components/age-calculator/ResultCard.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/components/age-calculator/ResultCard.tsx",
  lineNumber: 26,
  columnNumber: 7
}, this);
_c = ResultCard;
var _c;
$RefreshReg$(_c, "ResultCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  ResultCard
};
//# sourceMappingURL=/build/_shared/chunk-IR7NGXFW.js.map
