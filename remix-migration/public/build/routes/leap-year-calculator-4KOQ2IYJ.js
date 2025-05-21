import {
  ResultCard
} from "/build/_shared/chunk-IR7NGXFW.js";
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
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  createHotContext
} from "/build/_shared/chunk-G6VJL33X.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/leap-year-calculator.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\leap-year-calculator.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\leap-year-calculator.tsx"
  );
  import.meta.hot.lastModified = "1747809845275.6584";
}
var meta = () => {
  return [{
    title: "Leap Year Calculator - Check if a Year is a Leap Year"
  }, {
    name: "description",
    content: "Check if any year is a leap year and learn about leap year rules with our free Leap Year Calculator."
  }, {
    name: "keywords",
    content: "leap year calculator, is leap year, leap year rules, february 29, leap day"
  }, {
    property: "og:title",
    content: "Leap Year Calculator - Check if a Year is a Leap Year"
  }, {
    property: "og:description",
    content: "Check if any year is a leap year and learn about leap year rules with our free Leap Year Calculator."
  }, {
    property: "og:type",
    content: "website"
  }, {
    property: "og:url",
    content: "https://agecalculator.app/leap-year-calculator"
  }, {
    name: "twitter:card",
    content: "summary_large_image"
  }, {
    name: "twitter:title",
    content: "Leap Year Calculator - Check if a Year is a Leap Year"
  }, {
    name: "twitter:description",
    content: "Check if any year is a leap year and learn about leap year rules with our free Leap Year Calculator."
  }, {
    rel: "canonical",
    href: "https://agecalculator.app/leap-year-calculator"
  }];
};
function LeapYearCalculator() {
  _s();
  const actionData = useActionData();
  const navigation = useNavigation();
  const {
    jsonLd,
    breadcrumbJsonLd,
    faqJsonLd
  } = useLoaderData();
  const isSubmitting = navigation.state === "submitting";
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const hasResult = actionData && typeof actionData === "object" && "result" in actionData && actionData.result;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gray-50 py-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-3xl mx-auto space-y-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-xl shadow p-10 mb-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center space-y-4 mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl font-bold text-primary", children: "Leap Year Calculator" }, void 0, false, {
            fileName: "app/routes/leap-year-calculator.tsx",
            lineNumber: 189,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl text-neutral-gray max-w-2xl mx-auto", children: "Check if a year is a leap year and learn about leap year rules." }, void 0, false, {
            fileName: "app/routes/leap-year-calculator.tsx",
            lineNumber: 190,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/leap-year-calculator.tsx",
          lineNumber: 188,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "space-y-6 max-w-md mx-auto", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { htmlFor: "year", children: "Enter Year" }, void 0, false, {
              fileName: "app/routes/leap-year-calculator.tsx",
              lineNumber: 196,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "number", id: "year", name: "year", className: "w-full rounded-md border border-input bg-background px-3 py-2", defaultValue: currentYear, min: "1", max: "9999", required: true }, void 0, false, {
              fileName: "app/routes/leap-year-calculator.tsx",
              lineNumber: 197,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/leap-year-calculator.tsx",
            lineNumber: 195,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", className: "w-full", disabled: isSubmitting, children: isSubmitting ? "Checking..." : "Check Leap Year" }, void 0, false, {
            fileName: "app/routes/leap-year-calculator.tsx",
            lineNumber: 199,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/leap-year-calculator.tsx",
          lineNumber: 194,
          columnNumber: 11
        }, this),
        hasResult && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 animate-slideUp w-full", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResultCard, { title: "Year Status", value: actionData.result.isLeapYear ? "Leap Year" : "Not a Leap Year", description: `${actionData.result.year} has ${actionData.result.isLeapYear ? "366" : "365"} days` }, void 0, false, {
            fileName: "app/routes/leap-year-calculator.tsx",
            lineNumber: 205,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResultCard, { title: "Days in February", value: actionData.result.daysInFebruary.toString(), description: "Days in February for this year" }, void 0, false, {
            fileName: "app/routes/leap-year-calculator.tsx",
            lineNumber: 206,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResultCard, { title: "Days in Year", value: actionData.result.daysInYear.toString(), description: "Total days in this year" }, void 0, false, {
            fileName: "app/routes/leap-year-calculator.tsx",
            lineNumber: 207,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResultCard, { title: "Previous Leap Year", value: actionData.result.previousLeapYear ? actionData.result.previousLeapYear.toString() : "N/A", description: "Most recent leap year before this year" }, void 0, false, {
            fileName: "app/routes/leap-year-calculator.tsx",
            lineNumber: 208,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResultCard, { title: "Next Leap Year", value: actionData.result.nextLeapYear.toString(), description: "First upcoming leap year" }, void 0, false, {
            fileName: "app/routes/leap-year-calculator.tsx",
            lineNumber: 209,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/leap-year-calculator.tsx",
          lineNumber: 204,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/leap-year-calculator.tsx",
          lineNumber: 203,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-xl shadow p-8 mb-8 mt-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-bold text-center mb-6", children: "How It Works" }, void 0, false, {
            fileName: "app/routes/leap-year-calculator.tsx",
            lineNumber: 215,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col md:flex-row justify-center items-center gap-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#19b6e9] text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mb-2", children: "1" }, void 0, false, {
                fileName: "app/routes/leap-year-calculator.tsx",
                lineNumber: 218,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-semibold mb-1", children: "Select a Year" }, void 0, false, {
                fileName: "app/routes/leap-year-calculator.tsx",
                lineNumber: 219,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-gray-500 text-center text-sm", children: "Choose any year from the dropdown menu to check if it's a leap year" }, void 0, false, {
                fileName: "app/routes/leap-year-calculator.tsx",
                lineNumber: 220,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/leap-year-calculator.tsx",
              lineNumber: 217,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-2xl text-[#19b6e9]", children: "\u2192" }, void 0, false, {
              fileName: "app/routes/leap-year-calculator.tsx",
              lineNumber: 222,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#19b6e9] text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mb-2", children: "2" }, void 0, false, {
                fileName: "app/routes/leap-year-calculator.tsx",
                lineNumber: 224,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-semibold mb-1", children: "Get Results" }, void 0, false, {
                fileName: "app/routes/leap-year-calculator.tsx",
                lineNumber: 225,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-gray-500 text-center text-sm", children: "View whether it's a leap year and see the next three upcoming leap years" }, void 0, false, {
                fileName: "app/routes/leap-year-calculator.tsx",
                lineNumber: 226,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/leap-year-calculator.tsx",
              lineNumber: 223,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-2xl text-[#19b6e9]", children: "\u2192" }, void 0, false, {
              fileName: "app/routes/leap-year-calculator.tsx",
              lineNumber: 228,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#19b6e9] text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mb-2", children: "3" }, void 0, false, {
                fileName: "app/routes/leap-year-calculator.tsx",
                lineNumber: 230,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-semibold mb-1", children: "Plan Ahead" }, void 0, false, {
                fileName: "app/routes/leap-year-calculator.tsx",
                lineNumber: 231,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-gray-500 text-center text-sm", children: "Use the future leap year information for long-term date planning" }, void 0, false, {
                fileName: "app/routes/leap-year-calculator.tsx",
                lineNumber: 232,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/leap-year-calculator.tsx",
              lineNumber: 229,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/leap-year-calculator.tsx",
            lineNumber: 216,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/leap-year-calculator.tsx",
          lineNumber: 214,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-xl shadow p-8 mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-bold text-center mb-6", children: "Why Use Our Leap Year Calculator" }, void 0, false, {
            fileName: "app/routes/leap-year-calculator.tsx",
            lineNumber: 239,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bg-[#19b6e9] w-6 h-6 rounded-full flex items-center justify-center text-white font-bold", children: "\u2713" }, void 0, false, {
                fileName: "app/routes/leap-year-calculator.tsx",
                lineNumber: 242,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-semibold", children: "Quick Year Verification" }, void 0, false, {
                  fileName: "app/routes/leap-year-calculator.tsx",
                  lineNumber: 244,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-gray-500 text-sm", children: "Instantly check if any year is a leap year with our accurate calculator." }, void 0, false, {
                  fileName: "app/routes/leap-year-calculator.tsx",
                  lineNumber: 245,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/leap-year-calculator.tsx",
                lineNumber: 243,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/leap-year-calculator.tsx",
              lineNumber: 241,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bg-[#19b6e9] w-6 h-6 rounded-full flex items-center justify-center text-white font-bold", children: "\u2713" }, void 0, false, {
                fileName: "app/routes/leap-year-calculator.tsx",
                lineNumber: 249,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-semibold", children: "Future Planning" }, void 0, false, {
                  fileName: "app/routes/leap-year-calculator.tsx",
                  lineNumber: 251,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-gray-500 text-sm", children: "Find the next three upcoming leap years to help with long-term date planning." }, void 0, false, {
                  fileName: "app/routes/leap-year-calculator.tsx",
                  lineNumber: 252,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/leap-year-calculator.tsx",
                lineNumber: 250,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/leap-year-calculator.tsx",
              lineNumber: 248,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bg-[#19b6e9] w-6 h-6 rounded-full flex items-center justify-center text-white font-bold", children: "\u2713" }, void 0, false, {
                fileName: "app/routes/leap-year-calculator.tsx",
                lineNumber: 256,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-semibold", children: "Educational Tool" }, void 0, false, {
                  fileName: "app/routes/leap-year-calculator.tsx",
                  lineNumber: 258,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-gray-500 text-sm", children: "Learn about leap year rules and why they're important for our calendar system." }, void 0, false, {
                  fileName: "app/routes/leap-year-calculator.tsx",
                  lineNumber: 259,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/leap-year-calculator.tsx",
                lineNumber: 257,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/leap-year-calculator.tsx",
              lineNumber: 255,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bg-[#19b6e9] w-6 h-6 rounded-full flex items-center justify-center text-white font-bold", children: "\u2713" }, void 0, false, {
                fileName: "app/routes/leap-year-calculator.tsx",
                lineNumber: 263,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-semibold", children: "Date Accuracy" }, void 0, false, {
                  fileName: "app/routes/leap-year-calculator.tsx",
                  lineNumber: 265,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-gray-500 text-sm", children: "Ensure precise date calculations by knowing which years have 366 days." }, void 0, false, {
                  fileName: "app/routes/leap-year-calculator.tsx",
                  lineNumber: 266,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/leap-year-calculator.tsx",
                lineNumber: 264,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/leap-year-calculator.tsx",
              lineNumber: 262,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/leap-year-calculator.tsx",
            lineNumber: 240,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/leap-year-calculator.tsx",
          lineNumber: 238,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/leap-year-calculator.tsx",
        lineNumber: 187,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-8 md:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "p-6 space-y-4 bg-white/80 backdrop-blur-sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-bold", children: "Why Do We Need Leap Years?" }, void 0, false, {
            fileName: "app/routes/leap-year-calculator.tsx",
            lineNumber: 274,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-700", children: "The Earth takes approximately 365.2422 days to orbit the Sun. Without leap years, our calendar would drift about 6 hours each year, or about 24 days per century. Leap years help synchronize our calendar year with the solar year." }, void 0, false, {
            fileName: "app/routes/leap-year-calculator.tsx",
            lineNumber: 275,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-700", children: "The current leap year system was introduced by Pope Gregory XIII in 1582 when he reformed the Julian calendar. The Gregorian calendar is now the internationally accepted civil calendar." }, void 0, false, {
            fileName: "app/routes/leap-year-calculator.tsx",
            lineNumber: 278,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/leap-year-calculator.tsx",
          lineNumber: 273,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "p-6 space-y-4 bg-white/80 backdrop-blur-sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-bold", children: "Interesting Leap Year Facts" }, void 0, false, {
            fileName: "app/routes/leap-year-calculator.tsx",
            lineNumber: 283,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "space-y-3 text-gray-700", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold", children: "Leap Year Babies:" }, void 0, false, {
                fileName: "app/routes/leap-year-calculator.tsx",
                lineNumber: 286,
                columnNumber: 17
              }, this),
              ' People born on February 29 are sometimes called "leaplings" or "leap year babies"'
            ] }, void 0, true, {
              fileName: "app/routes/leap-year-calculator.tsx",
              lineNumber: 285,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold", children: "February 30:" }, void 0, false, {
                fileName: "app/routes/leap-year-calculator.tsx",
                lineNumber: 289,
                columnNumber: 17
              }, this),
              " Sweden once had a February 30 (in 1712) due to a calendar correction"
            ] }, void 0, true, {
              fileName: "app/routes/leap-year-calculator.tsx",
              lineNumber: 288,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold", children: "Tradition:" }, void 0, false, {
                fileName: "app/routes/leap-year-calculator.tsx",
                lineNumber: 292,
                columnNumber: 17
              }, this),
              " In many European countries, women can traditionally propose marriage to men on leap days"
            ] }, void 0, true, {
              fileName: "app/routes/leap-year-calculator.tsx",
              lineNumber: 291,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold", children: "Olympic Games:" }, void 0, false, {
                fileName: "app/routes/leap-year-calculator.tsx",
                lineNumber: 295,
                columnNumber: 17
              }, this),
              " Summer Olympic Games are held during leap years"
            ] }, void 0, true, {
              fileName: "app/routes/leap-year-calculator.tsx",
              lineNumber: 294,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/leap-year-calculator.tsx",
            lineNumber: 284,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/leap-year-calculator.tsx",
          lineNumber: 282,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/leap-year-calculator.tsx",
        lineNumber: 272,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg p-6 space-y-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-bold text-center", children: "Frequently Asked Questions" }, void 0, false, {
          fileName: "app/routes/leap-year-calculator.tsx",
          lineNumber: 301,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2 p-4 border-b", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-semibold text-lg text-primary", children: "How often do leap years occur?" }, void 0, false, {
              fileName: "app/routes/leap-year-calculator.tsx",
              lineNumber: 304,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "Leap years typically occur every 4 years. However, years divisible by 100 are not leap years unless they are also divisible by 400. This means that while 2000 was a leap year, 1900 was not, and 2100 will not be." }, void 0, false, {
              fileName: "app/routes/leap-year-calculator.tsx",
              lineNumber: 307,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/leap-year-calculator.tsx",
            lineNumber: 303,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2 p-4 border-b", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-semibold text-lg text-primary", children: "What happens to people born on February 29?" }, void 0, false, {
              fileName: "app/routes/leap-year-calculator.tsx",
              lineNumber: 312,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "People born on February 29 typically celebrate their birthdays on February 28 or March 1 in non-leap years. Legally, most jurisdictions recognize March 1 as their official birthday in non-leap years." }, void 0, false, {
              fileName: "app/routes/leap-year-calculator.tsx",
              lineNumber: 315,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/leap-year-calculator.tsx",
            lineNumber: 311,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2 p-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-semibold text-lg text-primary", children: "Why are centuries special in leap year calculations?" }, void 0, false, {
              fileName: "app/routes/leap-year-calculator.tsx",
              lineNumber: 320,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "Century years (those ending in 00) are not leap years unless they are divisible by 400. This refinement to the leap year rule makes the Gregorian calendar more accurate, as it accounts for the fact that the solar year is slightly less than 365.25 days." }, void 0, false, {
              fileName: "app/routes/leap-year-calculator.tsx",
              lineNumber: 323,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/leap-year-calculator.tsx",
            lineNumber: 319,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/leap-year-calculator.tsx",
          lineNumber: 302,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/leap-year-calculator.tsx",
        lineNumber: 300,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/leap-year-calculator.tsx",
      lineNumber: 186,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("script", { type: "application/ld+json", dangerouslySetInnerHTML: {
      __html: JSON.stringify(jsonLd)
    } }, void 0, false, {
      fileName: "app/routes/leap-year-calculator.tsx",
      lineNumber: 330,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("script", { type: "application/ld+json", dangerouslySetInnerHTML: {
      __html: JSON.stringify(breadcrumbJsonLd)
    } }, void 0, false, {
      fileName: "app/routes/leap-year-calculator.tsx",
      lineNumber: 333,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("script", { type: "application/ld+json", dangerouslySetInnerHTML: {
      __html: JSON.stringify(faqJsonLd)
    } }, void 0, false, {
      fileName: "app/routes/leap-year-calculator.tsx",
      lineNumber: 336,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/leap-year-calculator.tsx",
    lineNumber: 185,
    columnNumber: 10
  }, this);
}
_s(LeapYearCalculator, "2J4ZEfGUVEQofCBwzqufJNOXay8=", false, function() {
  return [useActionData, useNavigation, useLoaderData];
});
_c = LeapYearCalculator;
var _c;
$RefreshReg$(_c, "LeapYearCalculator");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  LeapYearCalculator as default,
  meta
};
//# sourceMappingURL=/build/routes/leap-year-calculator-4KOQ2IYJ.js.map
