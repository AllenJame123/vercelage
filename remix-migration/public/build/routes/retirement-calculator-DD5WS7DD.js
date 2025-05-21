import "/build/_shared/chunk-SWRLEF66.js";
import "/build/_shared/chunk-6HBMKAOW.js";
import {
  Card
} from "/build/_shared/chunk-VABJJFVO.js";
import {
  Label
} from "/build/_shared/chunk-NZ6NDNKU.js";
import {
  Button
} from "/build/_shared/chunk-UBSUZBCG.js";
import "/build/_shared/chunk-B43JI2TA.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  Form,
  useActionData,
  useLoaderData,
  useNavigation
} from "/build/_shared/chunk-X4KD56KE.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  createHotContext
} from "/build/_shared/chunk-G6VJL33X.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/retirement-calculator.tsx
var import_react = __toESM(require_react(), 1);
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\retirement-calculator.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\retirement-calculator.tsx"
  );
  import.meta.hot.lastModified = "1747809956622.6992";
}
var meta = () => {
  return [{
    title: "Retirement Calculator - Plan Your Retirement"
  }, {
    name: "description",
    content: "Calculate your retirement date, projected savings, and monthly contributions needed with our free Retirement Calculator."
  }, {
    name: "keywords",
    content: "retirement calculator, retirement planning, retirement age, retirement savings, retirement date"
  }, {
    property: "og:title",
    content: "Retirement Calculator - Plan Your Retirement"
  }, {
    property: "og:description",
    content: "Calculate your retirement date, projected savings, and monthly contributions needed with our free Retirement Calculator."
  }, {
    property: "og:type",
    content: "website"
  }, {
    property: "og:url",
    content: "https://agecalculator.app/retirement-calculator"
  }, {
    name: "twitter:card",
    content: "summary_large_image"
  }, {
    name: "twitter:title",
    content: "Retirement Calculator - Plan Your Retirement"
  }, {
    name: "twitter:description",
    content: "Calculate your retirement date, projected savings, and monthly contributions needed with our free Retirement Calculator."
  }, {
    rel: "canonical",
    href: "https://agecalculator.app/retirement-calculator"
  }];
};
function RetirementCalculator() {
  _s();
  const actionData = useActionData();
  const navigation = useNavigation();
  const {
    jsonLd,
    breadcrumbJsonLd,
    faqJsonLd
  } = useLoaderData();
  const isSubmitting = navigation.state === "submitting";
  const [showAdvanced, setShowAdvanced] = (0, import_react.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gray-50 py-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-3xl mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("script", { type: "application/ld+json", dangerouslySetInnerHTML: {
      __html: JSON.stringify(jsonLd)
    } }, void 0, false, {
      fileName: "app/routes/retirement-calculator.tsx",
      lineNumber: 211,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("script", { type: "application/ld+json", dangerouslySetInnerHTML: {
      __html: JSON.stringify(breadcrumbJsonLd)
    } }, void 0, false, {
      fileName: "app/routes/retirement-calculator.tsx",
      lineNumber: 214,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("script", { type: "application/ld+json", dangerouslySetInnerHTML: {
      __html: JSON.stringify(faqJsonLd)
    } }, void 0, false, {
      fileName: "app/routes/retirement-calculator.tsx",
      lineNumber: 217,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl font-bold text-primary", children: "Retirement Calculator" }, void 0, false, {
        fileName: "app/routes/retirement-calculator.tsx",
        lineNumber: 222,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl text-neutral-gray max-w-2xl mx-auto", children: "Plan your financial future and calculate when you can retire." }, void 0, false, {
        fileName: "app/routes/retirement-calculator.tsx",
        lineNumber: 223,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/retirement-calculator.tsx",
      lineNumber: 221,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "p-6 bg-white/80 backdrop-blur-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "space-y-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-6 md:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { htmlFor: "birthDate", children: "Your Birth Date" }, void 0, false, {
            fileName: "app/routes/retirement-calculator.tsx",
            lineNumber: 232,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "date", id: "birthDate", name: "birthDate", className: "w-full rounded-md border border-input bg-background px-3 py-2", required: true }, void 0, false, {
            fileName: "app/routes/retirement-calculator.tsx",
            lineNumber: 233,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/retirement-calculator.tsx",
          lineNumber: 231,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { htmlFor: "retirementAge", children: "Planned Retirement Age" }, void 0, false, {
            fileName: "app/routes/retirement-calculator.tsx",
            lineNumber: 237,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "number", id: "retirementAge", name: "retirementAge", className: "w-full rounded-md border border-input bg-background px-3 py-2", defaultValue: 65, min: "1", max: "120", required: true }, void 0, false, {
            fileName: "app/routes/retirement-calculator.tsx",
            lineNumber: 238,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/retirement-calculator.tsx",
          lineNumber: 236,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/retirement-calculator.tsx",
        lineNumber: 230,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "button", variant: "outline", onClick: () => setShowAdvanced(!showAdvanced), className: "w-full md:w-auto", children: showAdvanced ? "Hide Advanced Options" : "Show Advanced Options" }, void 0, false, {
        fileName: "app/routes/retirement-calculator.tsx",
        lineNumber: 243,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/retirement-calculator.tsx",
        lineNumber: 242,
        columnNumber: 13
      }, this),
      showAdvanced && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-6 md:grid-cols-2 pt-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { htmlFor: "currentSavings", children: "Current Retirement Savings ($)" }, void 0, false, {
            fileName: "app/routes/retirement-calculator.tsx",
            lineNumber: 250,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "number", id: "currentSavings", name: "currentSavings", className: "w-full rounded-md border border-input bg-background px-3 py-2", defaultValue: 0, min: "0" }, void 0, false, {
            fileName: "app/routes/retirement-calculator.tsx",
            lineNumber: 251,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/retirement-calculator.tsx",
          lineNumber: 249,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { htmlFor: "monthlySavings", children: "Current Monthly Contributions ($)" }, void 0, false, {
            fileName: "app/routes/retirement-calculator.tsx",
            lineNumber: 255,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "number", id: "monthlySavings", name: "monthlySavings", className: "w-full rounded-md border border-input bg-background px-3 py-2", defaultValue: 0, min: "0" }, void 0, false, {
            fileName: "app/routes/retirement-calculator.tsx",
            lineNumber: 256,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/retirement-calculator.tsx",
          lineNumber: 254,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { htmlFor: "retirementGoal", children: "Retirement Savings Goal ($)" }, void 0, false, {
            fileName: "app/routes/retirement-calculator.tsx",
            lineNumber: 260,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "number", id: "retirementGoal", name: "retirementGoal", className: "w-full rounded-md border border-input bg-background px-3 py-2", defaultValue: 1e6, min: "0" }, void 0, false, {
            fileName: "app/routes/retirement-calculator.tsx",
            lineNumber: 261,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/retirement-calculator.tsx",
          lineNumber: 259,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { htmlFor: "expectedReturn", children: "Expected Annual Return (%)" }, void 0, false, {
            fileName: "app/routes/retirement-calculator.tsx",
            lineNumber: 265,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "number", id: "expectedReturn", name: "expectedReturn", className: "w-full rounded-md border border-input bg-background px-3 py-2", defaultValue: 7, min: "0", max: "30", step: "0.1" }, void 0, false, {
            fileName: "app/routes/retirement-calculator.tsx",
            lineNumber: 266,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/retirement-calculator.tsx",
          lineNumber: 264,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/retirement-calculator.tsx",
        lineNumber: 248,
        columnNumber: 30
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", className: "w-full", disabled: isSubmitting, children: isSubmitting ? "Calculating..." : "Calculate Retirement Plan" }, void 0, false, {
        fileName: "app/routes/retirement-calculator.tsx",
        lineNumber: 270,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/retirement-calculator.tsx",
      lineNumber: 229,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/retirement-calculator.tsx",
      lineNumber: 228,
      columnNumber: 9
    }, this),
    actionData?.result && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-bold mb-4", children: "Your Retirement Projection" }, void 0, false, {
        fileName: "app/routes/retirement-calculator.tsx",
        lineNumber: 277,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 animate-slideUp", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "p-4 bg-white/80 backdrop-blur-sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-medium text-primary mb-2", children: "Retirement Timeline" }, void 0, false, {
            fileName: "app/routes/retirement-calculator.tsx",
            lineNumber: 280,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-600", children: "Current Age:" }, void 0, false, {
                fileName: "app/routes/retirement-calculator.tsx",
                lineNumber: 283,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold", children: [
                actionData.result.currentAge,
                " years"
              ] }, void 0, true, {
                fileName: "app/routes/retirement-calculator.tsx",
                lineNumber: 284,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/retirement-calculator.tsx",
              lineNumber: 282,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-600", children: "Years Until Retirement:" }, void 0, false, {
                fileName: "app/routes/retirement-calculator.tsx",
                lineNumber: 287,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold", children: [
                actionData.result.yearsUntilRetirement,
                " years"
              ] }, void 0, true, {
                fileName: "app/routes/retirement-calculator.tsx",
                lineNumber: 288,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/retirement-calculator.tsx",
              lineNumber: 286,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-600", children: "Retirement Date:" }, void 0, false, {
                fileName: "app/routes/retirement-calculator.tsx",
                lineNumber: 291,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold", children: actionData.result.retirementDate }, void 0, false, {
                fileName: "app/routes/retirement-calculator.tsx",
                lineNumber: 292,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/retirement-calculator.tsx",
              lineNumber: 290,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/retirement-calculator.tsx",
            lineNumber: 281,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/retirement-calculator.tsx",
          lineNumber: 279,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "p-4 bg-white/80 backdrop-blur-sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-medium text-primary mb-2", children: "Savings Projection" }, void 0, false, {
            fileName: "app/routes/retirement-calculator.tsx",
            lineNumber: 298,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-600", children: "Projected Savings:" }, void 0, false, {
                fileName: "app/routes/retirement-calculator.tsx",
                lineNumber: 301,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold", children: [
                "$",
                actionData.result.projectedSavings.toLocaleString()
              ] }, void 0, true, {
                fileName: "app/routes/retirement-calculator.tsx",
                lineNumber: 302,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/retirement-calculator.tsx",
              lineNumber: 300,
              columnNumber: 19
            }, this),
            actionData.result.monthlySavingsNeeded > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-600", children: "Monthly Savings Needed:" }, void 0, false, {
                fileName: "app/routes/retirement-calculator.tsx",
                lineNumber: 305,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold", children: [
                "$",
                actionData.result.monthlySavingsNeeded.toLocaleString()
              ] }, void 0, true, {
                fileName: "app/routes/retirement-calculator.tsx",
                lineNumber: 306,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/retirement-calculator.tsx",
              lineNumber: 304,
              columnNumber: 66
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/retirement-calculator.tsx",
            lineNumber: 299,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/retirement-calculator.tsx",
          lineNumber: 297,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "p-4 bg-white/80 backdrop-blur-sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-medium text-primary mb-2", children: "Retirement Age" }, void 0, false, {
            fileName: "app/routes/retirement-calculator.tsx",
            lineNumber: 312,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-600", children: "Planned Retirement Age:" }, void 0, false, {
                fileName: "app/routes/retirement-calculator.tsx",
                lineNumber: 315,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold", children: [
                actionData.result.retirementAge,
                " years"
              ] }, void 0, true, {
                fileName: "app/routes/retirement-calculator.tsx",
                lineNumber: 316,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/retirement-calculator.tsx",
              lineNumber: 314,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-2 text-sm text-gray-500", children: "Adjust your retirement age to see how it affects your financial projections." }, void 0, false, {
              fileName: "app/routes/retirement-calculator.tsx",
              lineNumber: 318,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/retirement-calculator.tsx",
            lineNumber: 313,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/retirement-calculator.tsx",
          lineNumber: 311,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/retirement-calculator.tsx",
        lineNumber: 278,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/retirement-calculator.tsx",
      lineNumber: 276,
      columnNumber: 32
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-8 md:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "p-6 space-y-4 bg-white/80 backdrop-blur-sm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-bold", children: "Retirement Planning Tips" }, void 0, false, {
          fileName: "app/routes/retirement-calculator.tsx",
          lineNumber: 328,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "space-y-3 list-disc pl-5 text-gray-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Start Early:" }, void 0, false, {
              fileName: "app/routes/retirement-calculator.tsx",
              lineNumber: 330,
              columnNumber: 19
            }, this),
            " The power of compound interest means the earlier you start saving, the less you'll need to save each month."
          ] }, void 0, true, {
            fileName: "app/routes/retirement-calculator.tsx",
            lineNumber: 330,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Max Out Tax-Advantaged Accounts:" }, void 0, false, {
              fileName: "app/routes/retirement-calculator.tsx",
              lineNumber: 331,
              columnNumber: 19
            }, this),
            " Contribute to 401(k)s and IRAs to reduce taxable income and grow investments tax-free."
          ] }, void 0, true, {
            fileName: "app/routes/retirement-calculator.tsx",
            lineNumber: 331,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Diversify Investments:" }, void 0, false, {
              fileName: "app/routes/retirement-calculator.tsx",
              lineNumber: 332,
              columnNumber: 19
            }, this),
            " Spread your investments across different asset classes to manage risk."
          ] }, void 0, true, {
            fileName: "app/routes/retirement-calculator.tsx",
            lineNumber: 332,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Adjust for Inflation:" }, void 0, false, {
              fileName: "app/routes/retirement-calculator.tsx",
              lineNumber: 333,
              columnNumber: 19
            }, this),
            " Remember that inflation will reduce purchasing power over time."
          ] }, void 0, true, {
            fileName: "app/routes/retirement-calculator.tsx",
            lineNumber: 333,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Create a Budget:" }, void 0, false, {
              fileName: "app/routes/retirement-calculator.tsx",
              lineNumber: 334,
              columnNumber: 19
            }, this),
            " Track expenses and identify areas where you can increase savings."
          ] }, void 0, true, {
            fileName: "app/routes/retirement-calculator.tsx",
            lineNumber: 334,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/retirement-calculator.tsx",
          lineNumber: 329,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/retirement-calculator.tsx",
        lineNumber: 327,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "p-6 space-y-4 bg-white/80 backdrop-blur-sm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-bold", children: "Understanding the Results" }, void 0, false, {
          fileName: "app/routes/retirement-calculator.tsx",
          lineNumber: 339,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-700", children: "Our retirement calculator provides estimates based on the information you provide. The projected savings uses a compound interest calculation that factors in your current savings, monthly contributions, and expected investment returns." }, void 0, false, {
          fileName: "app/routes/retirement-calculator.tsx",
          lineNumber: 340,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-700", children: 'The "Monthly Savings Needed" shows how much you should save each month to reach your retirement goal, based on your current age, retirement age, and expected return rate.' }, void 0, false, {
          fileName: "app/routes/retirement-calculator.tsx",
          lineNumber: 343,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-700 font-semibold", children: "Note: These projections are estimates and do not account for taxes, inflation, or market volatility. Consult with a financial advisor for personalized retirement planning." }, void 0, false, {
          fileName: "app/routes/retirement-calculator.tsx",
          lineNumber: 346,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/retirement-calculator.tsx",
        lineNumber: 338,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/retirement-calculator.tsx",
      lineNumber: 326,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg p-6 space-y-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-bold text-center", children: "Frequently Asked Questions" }, void 0, false, {
        fileName: "app/routes/retirement-calculator.tsx",
        lineNumber: 353,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2 p-4 border-b", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-semibold text-lg text-primary", children: "How much should I save for retirement?" }, void 0, false, {
            fileName: "app/routes/retirement-calculator.tsx",
            lineNumber: 356,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "Financial experts often recommend saving 10-15% of your income for retirement. However, the ideal amount varies based on your lifestyle, expected expenses in retirement, and when you start saving. Our calculator can help you estimate a target based on your retirement goals." }, void 0, false, {
            fileName: "app/routes/retirement-calculator.tsx",
            lineNumber: 359,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/retirement-calculator.tsx",
          lineNumber: 355,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2 p-4 border-b", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-semibold text-lg text-primary", children: "What retirement accounts should I use?" }, void 0, false, {
            fileName: "app/routes/retirement-calculator.tsx",
            lineNumber: 364,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "Consider tax-advantaged accounts like 401(k)s, 403(b)s, or IRAs. Many employers offer matching contributions to 401(k) plans, which is essentially free money. After maximizing any employer match, you might consider a Roth IRA for tax-free growth if you're eligible." }, void 0, false, {
            fileName: "app/routes/retirement-calculator.tsx",
            lineNumber: 367,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/retirement-calculator.tsx",
          lineNumber: 363,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2 p-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-semibold text-lg text-primary", children: "How does inflation affect my retirement savings?" }, void 0, false, {
            fileName: "app/routes/retirement-calculator.tsx",
            lineNumber: 372,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "Inflation reduces the purchasing power of your money over time. For example, with 3% annual inflation, $100,000 today would only buy about $55,000 worth of goods in 20 years. This calculator doesn't explicitly account for inflation, so consider that your retirement goal may need to be higher to maintain your desired lifestyle." }, void 0, false, {
            fileName: "app/routes/retirement-calculator.tsx",
            lineNumber: 375,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/retirement-calculator.tsx",
          lineNumber: 371,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/retirement-calculator.tsx",
        lineNumber: 354,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/retirement-calculator.tsx",
      lineNumber: 352,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/retirement-calculator.tsx",
    lineNumber: 210,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/retirement-calculator.tsx",
    lineNumber: 209,
    columnNumber: 10
  }, this);
}
_s(RetirementCalculator, "RMUWmA3LRKVwyvqnBDM5xpUqf5E=", false, function() {
  return [useActionData, useNavigation, useLoaderData];
});
_c = RetirementCalculator;
var _c;
$RefreshReg$(_c, "RetirementCalculator");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  RetirementCalculator as default,
  meta
};
//# sourceMappingURL=/build/routes/retirement-calculator-DD5WS7DD.js.map
