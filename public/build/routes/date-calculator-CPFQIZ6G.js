import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "/build/_shared/chunk-PFL7Q57P.js";
import {
  Calendar
} from "/build/_shared/chunk-DOGCWUIS.js";
import "/build/_shared/chunk-SWRLEF66.js";
import {
  ResultCard
} from "/build/_shared/chunk-QX7IUN3N.js";
import "/build/_shared/chunk-6HBMKAOW.js";
import "/build/_shared/chunk-AZCUNKMG.js";
import "/build/_shared/chunk-DCYVUSHA.js";
import {
  Label
} from "/build/_shared/chunk-KZWWNWMV.js";
import {
  Button
} from "/build/_shared/chunk-WMG2BVA6.js";
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
} from "/build/_shared/chunk-YFEOI4V6.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  createHotContext
} from "/build/_shared/chunk-SREIQTEP.js";
import "/build/_shared/chunk-MZF3CFPM.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/date-calculator.tsx
var import_react = __toESM(require_react(), 1);
var import_node = __toESM(require_node(), 1);

// app/components/date-calculator/Results.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\date-calculator\\\\Results.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\date-calculator\\Results.tsx"
  );
  import.meta.hot.lastModified = "1747983714000.3887";
}
var Results = ({
  result,
  calculationType
}) => {
  if (calculationType === "difference" || calculationType === "business") {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 animate-slideUp", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResultCard, { title: "Total Days", value: result.totalDays.toString(), description: "Including weekends and holidays" }, void 0, false, {
        fileName: "app/components/date-calculator/Results.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResultCard, { title: "Business Days", value: result.businessDays.toString(), description: "Excluding weekends" }, void 0, false, {
        fileName: "app/components/date-calculator/Results.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResultCard, { title: "End Date Details", value: result.dayOfWeek || "", description: "Day of the week" }, void 0, false, {
        fileName: "app/components/date-calculator/Results.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/date-calculator/Results.tsx",
      lineNumber: 27,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4 sm:grid-cols-2 animate-slideUp", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResultCard, { title: "Result Date", value: result.formattedDate || "", description: result.dayOfWeek || "" }, void 0, false, {
      fileName: "app/components/date-calculator/Results.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResultCard, { title: "Days Changed", value: result.totalDays.toString(), description: `${calculationType === "add" ? "Added" : "Subtracted"} days` }, void 0, false, {
      fileName: "app/components/date-calculator/Results.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/date-calculator/Results.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
};
_c = Results;
var _c;
$RefreshReg$(_c, "Results");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/date-calculator.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\date-calculator.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\date-calculator.tsx"
  );
  import.meta.hot.lastModified = "1747983462155.2395";
}
var meta = () => {
  return [{
    title: "Date Calculator - Calculate Days Between Dates"
  }, {
    name: "description",
    content: "Calculate the number of days between two dates, add or subtract days, and find business days with our free online date calculator."
  }, {
    name: "keywords",
    content: "date calculator, days between dates, add days, subtract days, business days calculator"
  }, {
    property: "og:title",
    content: "Date Calculator - Calculate Days Between Dates"
  }, {
    property: "og:description",
    content: "Calculate the number of days between two dates, add or subtract days, and find business days with our free online date calculator."
  }, {
    property: "og:type",
    content: "website"
  }, {
    property: "og:url",
    content: "https://agecalculator.app/date-calculator"
  }, {
    name: "twitter:card",
    content: "summary_large_image"
  }, {
    name: "twitter:title",
    content: "Date Calculator - Calculate Days Between Dates"
  }, {
    name: "twitter:description",
    content: "Calculate the number of days between two dates, add or subtract days, and find business days with our free online date calculator."
  }, {
    rel: "canonical",
    href: "https://agecalculator.app/date-calculator"
  }];
};
function DateCalculator() {
  _s();
  const actionData = useActionData();
  const navigation = useNavigation();
  const {
    jsonLd,
    breadcrumbJsonLd,
    faqJsonLd
  } = useLoaderData();
  const isSubmitting = navigation.state === "submitting";
  const [calculationType, setCalculationType] = (0, import_react.useState)("difference");
  const [startDate, setStartDate] = (0, import_react.useState)();
  const [endDate, setEndDate] = (0, import_react.useState)();
  const [daysToAdd, setDaysToAdd] = (0, import_react.useState)(1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "min-h-screen bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "max-w-screen-lg mx-auto px-4 py-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-5xl font-bold text-gray-900 text-center mb-2", children: "Date Calculator" }, void 0, false, {
      fileName: "app/routes/date-calculator.tsx",
      lineNumber: 207,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-lg text-gray-600 text-center mb-8", children: [
      "Calculate days between dates, add or subtract days, and determine business days",
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/date-calculator.tsx",
        lineNumber: 208,
        columnNumber: 142
      }, this),
      "with precision"
    ] }, void 0, true, {
      fileName: "app/routes/date-calculator.tsx",
      lineNumber: 208,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white rounded-lg shadow p-8 max-w-2xl mx-auto mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { method: "post", className: "space-y-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mb-4 text-left", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { htmlFor: "calculationType", className: "font-semibold", children: "Calculation Type" }, void 0, false, {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 212,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Select, { name: "calculationType", defaultValue: "difference", onValueChange: (value) => setCalculationType(value), children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SelectValue, { placeholder: "Select calculation type" }, void 0, false, {
              fileName: "app/routes/date-calculator.tsx",
              lineNumber: 215,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/date-calculator.tsx",
              lineNumber: 214,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SelectContent, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SelectItem, { value: "difference", children: "Date Difference" }, void 0, false, {
                fileName: "app/routes/date-calculator.tsx",
                lineNumber: 218,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SelectItem, { value: "add", children: "Add Days" }, void 0, false, {
                fileName: "app/routes/date-calculator.tsx",
                lineNumber: 219,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SelectItem, { value: "subtract", children: "Subtract Days" }, void 0, false, {
                fileName: "app/routes/date-calculator.tsx",
                lineNumber: 220,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SelectItem, { value: "business", children: "Business Days" }, void 0, false, {
                fileName: "app/routes/date-calculator.tsx",
                lineNumber: 221,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/date-calculator.tsx",
              lineNumber: 217,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 213,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/date-calculator.tsx",
          lineNumber: 211,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col md:flex-row gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { className: "font-semibold mb-2 block", children: "Start Date" }, void 0, false, {
              fileName: "app/routes/date-calculator.tsx",
              lineNumber: 227,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Calendar, { mode: "single", selected: startDate, onSelect: setStartDate, className: "rounded-lg border" }, void 0, false, {
              fileName: "app/routes/date-calculator.tsx",
              lineNumber: 228,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "startDate", value: startDate ? startDate.toISOString().slice(0, 10) : "", required: true }, void 0, false, {
              fileName: "app/routes/date-calculator.tsx",
              lineNumber: 229,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 226,
            columnNumber: 15
          }, this),
          calculationType === "difference" || calculationType === "business" ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { className: "font-semibold mb-2 block", children: "End Date" }, void 0, false, {
              fileName: "app/routes/date-calculator.tsx",
              lineNumber: 232,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Calendar, { mode: "single", selected: endDate, onSelect: setEndDate, className: "rounded-lg border" }, void 0, false, {
              fileName: "app/routes/date-calculator.tsx",
              lineNumber: 233,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "endDate", value: endDate ? endDate.toISOString().slice(0, 10) : "", required: true }, void 0, false, {
              fileName: "app/routes/date-calculator.tsx",
              lineNumber: 234,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 231,
            columnNumber: 85
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { htmlFor: "daysToAdd", className: "font-semibold", children: "Number of Days" }, void 0, false, {
              fileName: "app/routes/date-calculator.tsx",
              lineNumber: 236,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "number", id: "daysToAdd", name: "daysToAdd", className: "w-full rounded-md border border-gray-300 bg-white px-3 py-2", min: "1", value: daysToAdd, onChange: (e) => setDaysToAdd(Number(e.target.value)), required: true }, void 0, false, {
              fileName: "app/routes/date-calculator.tsx",
              lineNumber: 237,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 235,
            columnNumber: 26
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/date-calculator.tsx",
          lineNumber: 225,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { type: "submit", className: "w-full bg-[#19b6e9] hover:bg-[#15a3cc] text-white font-semibold py-2 rounded", disabled: isSubmitting, children: isSubmitting ? "Calculating..." : "Calculate" }, void 0, false, {
          fileName: "app/routes/date-calculator.tsx",
          lineNumber: 240,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/date-calculator.tsx",
        lineNumber: 210,
        columnNumber: 11
      }, this),
      actionData && "result" in actionData && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-2xl font-bold mb-4", children: "Results" }, void 0, false, {
          fileName: "app/routes/date-calculator.tsx",
          lineNumber: 245,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Results, { result: actionData.result, calculationType: actionData.calculationType }, void 0, false, {
          fileName: "app/routes/date-calculator.tsx",
          lineNumber: 246,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/date-calculator.tsx",
        lineNumber: 244,
        columnNumber: 52
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/date-calculator.tsx",
      lineNumber: 209,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white rounded-lg shadow p-8 max-w-2xl mx-auto mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-2xl font-bold text-center mb-6", children: "How It Works" }, void 0, false, {
        fileName: "app/routes/date-calculator.tsx",
        lineNumber: 250,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col md:flex-row justify-center items-center gap-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-[#19b6e9] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-2", children: "1" }, void 0, false, {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 253,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "font-semibold mb-1", children: "Select Calculation Type" }, void 0, false, {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 254,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-gray-500 text-center text-sm", children: "Choose between date difference, adding days, or business day calculation." }, void 0, false, {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 255,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/date-calculator.tsx",
          lineNumber: 252,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-2xl text-[#19b6e9]", children: "\u2192" }, void 0, false, {
          fileName: "app/routes/date-calculator.tsx",
          lineNumber: 257,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-[#19b6e9] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-2", children: "2" }, void 0, false, {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 259,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "font-semibold mb-1", children: "Enter Dates" }, void 0, false, {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 260,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-gray-500 text-center text-sm", children: "Select your dates using the calendar or enter the number of days." }, void 0, false, {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 261,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/date-calculator.tsx",
          lineNumber: 258,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-2xl text-[#19b6e9]", children: "\u2192" }, void 0, false, {
          fileName: "app/routes/date-calculator.tsx",
          lineNumber: 263,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-[#19b6e9] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-2", children: "3" }, void 0, false, {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 265,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "font-semibold mb-1", children: "Get Results" }, void 0, false, {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 266,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-gray-500 text-center text-sm", children: "View your calculated results in multiple formats." }, void 0, false, {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 267,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/date-calculator.tsx",
          lineNumber: 264,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/date-calculator.tsx",
        lineNumber: 251,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/date-calculator.tsx",
      lineNumber: 249,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white rounded-lg shadow p-8 max-w-2xl mx-auto mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-2xl font-bold text-center mb-6", children: "Why Use Our Date Calculator" }, void 0, false, {
        fileName: "app/routes/date-calculator.tsx",
        lineNumber: 272,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-[#19b6e9] text-xl mt-1", children: "\u2714" }, void 0, false, {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 275,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "font-semibold", children: "Multiple Calculation Types" }, void 0, false, {
              fileName: "app/routes/date-calculator.tsx",
              lineNumber: 277,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-gray-500 text-sm", children: "Calculate date differences, add or subtract days, and determine business days; all in one place." }, void 0, false, {
              fileName: "app/routes/date-calculator.tsx",
              lineNumber: 278,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 276,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/date-calculator.tsx",
          lineNumber: 274,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-[#19b6e9] text-xl mt-1", children: "\u2714" }, void 0, false, {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 282,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "font-semibold", children: "Business Day Calculations" }, void 0, false, {
              fileName: "app/routes/date-calculator.tsx",
              lineNumber: 284,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-gray-500 text-sm", children: "Accurately calculate working days between dates, excluding weekends for professional planning." }, void 0, false, {
              fileName: "app/routes/date-calculator.tsx",
              lineNumber: 285,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 283,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/date-calculator.tsx",
          lineNumber: 281,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-[#19b6e9] text-xl mt-1", children: "\u2714" }, void 0, false, {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 289,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "font-semibold", children: "User-Friendly Interface" }, void 0, false, {
              fileName: "app/routes/date-calculator.tsx",
              lineNumber: 291,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-gray-500 text-sm", children: "Interactive calendar selection and clear results make date calculations simple and intuitive." }, void 0, false, {
              fileName: "app/routes/date-calculator.tsx",
              lineNumber: 292,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 290,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/date-calculator.tsx",
          lineNumber: 288,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-[#19b6e9] text-xl mt-1", children: "\u2714" }, void 0, false, {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 296,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "font-semibold", children: "Comprehensive Results" }, void 0, false, {
              fileName: "app/routes/date-calculator.tsx",
              lineNumber: 298,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-gray-500 text-sm", children: "Get detailed breakdowns including total days, business days and day of the week information." }, void 0, false, {
              fileName: "app/routes/date-calculator.tsx",
              lineNumber: 299,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 297,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/date-calculator.tsx",
          lineNumber: 295,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/date-calculator.tsx",
        lineNumber: 273,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/date-calculator.tsx",
      lineNumber: 271,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white rounded-lg shadow p-8 max-w-2xl mx-auto mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-2xl font-bold text-center mb-6", children: "Frequently Asked Questions" }, void 0, false, {
        fileName: "app/routes/date-calculator.tsx",
        lineNumber: 305,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-[#19b6e9] font-semibold mb-2", children: "How does the date calculator handle weekends?" }, void 0, false, {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 308,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-gray-600 text-sm", children: "The date calculator automatically identifies weekends when calculating business days. When using the business day calculation mode, Saturdays and Sundays are excluded from the count, giving you an accurate number of working days between dates." }, void 0, false, {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 309,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/date-calculator.tsx",
          lineNumber: 307,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-[#19b6e9] font-semibold mb-2", children: "Can I calculate dates across different years?" }, void 0, false, {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 312,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-gray-600 text-sm", children: "Yes! The calculator can handle dates across any time period, including different years, months, and centuries. It automatically accounts for leap years and varying month lengths to ensure accurate calculations." }, void 0, false, {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 313,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/date-calculator.tsx",
          lineNumber: 311,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-[#19b6e9] font-semibold mb-2", children: "What's the difference between total days and business days?" }, void 0, false, {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 316,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-gray-600 text-sm", children: "Total days include every calendar day between two dates, including weekends and holidays. Business days exclude weekends (Saturdays and Sundays) from the count, providing a more accurate measure for work and business planning purposes." }, void 0, false, {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 317,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/date-calculator.tsx",
          lineNumber: 315,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/date-calculator.tsx",
        lineNumber: 306,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/date-calculator.tsx",
      lineNumber: 304,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/date-calculator.tsx",
    lineNumber: 206,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/date-calculator.tsx",
    lineNumber: 205,
    columnNumber: 10
  }, this);
}
_s(DateCalculator, "rw7Nig8D9vjw7fX6IO8y6ivc7xY=", false, function() {
  return [useActionData, useNavigation, useLoaderData];
});
_c2 = DateCalculator;
var _c2;
$RefreshReg$(_c2, "DateCalculator");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  DateCalculator as default,
  meta
};
//# sourceMappingURL=/build/routes/date-calculator-CPFQIZ6G.js.map
