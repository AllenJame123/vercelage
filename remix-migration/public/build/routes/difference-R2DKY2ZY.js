import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "/build/_shared/chunk-4N5BII3N.js";
import {
  ResultCard
} from "/build/_shared/chunk-IR7NGXFW.js";
import {
  format
} from "/build/_shared/chunk-6HBMKAOW.js";
import {
  Card
} from "/build/_shared/chunk-VABJJFVO.js";
import "/build/_shared/chunk-DCYVUSHA.js";
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

// app/routes/difference.tsx
var import_node = __toESM(require_node(), 1);

// app/components/age-difference/AgeDifferenceCalculator.tsx
var import_react = __toESM(require_react(), 1);

// app/components/age-difference/DateSelector.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\age-difference\\\\DateSelector.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\age-difference\\DateSelector.tsx"
  );
  import.meta.hot.lastModified = "1747380488498.8784";
}
var DateSelector = ({
  label,
  date,
  setDate,
  namePrefix
}) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const years = Array.from({
    length: 150
  }, (_, i) => currentYear - i);
  const months = Array.from({
    length: 12
  }, (_, i) => i + 1);
  const days = Array.from({
    length: 31
  }, (_, i) => i + 1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-2xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-medium text-gray-700 text-center", children: label }, void 0, false, {
      fileName: "app/components/age-difference/DateSelector.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { onValueChange: (value) => setDate({
          ...date,
          year: value
        }), value: date.year, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger, { className: "w-[140px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectValue, { placeholder: "Year" }, void 0, false, {
            fileName: "app/components/age-difference/DateSelector.tsx",
            lineNumber: 49,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/age-difference/DateSelector.tsx",
            lineNumber: 48,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent, { children: years.map((year) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: year.toString(), children: year }, year, false, {
            fileName: "app/components/age-difference/DateSelector.tsx",
            lineNumber: 52,
            columnNumber: 36
          }, this)) }, void 0, false, {
            fileName: "app/components/age-difference/DateSelector.tsx",
            lineNumber: 51,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/age-difference/DateSelector.tsx",
          lineNumber: 44,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: `${namePrefix}Year`, value: date.year }, void 0, false, {
          fileName: "app/components/age-difference/DateSelector.tsx",
          lineNumber: 57,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/age-difference/DateSelector.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { onValueChange: (value) => setDate({
          ...date,
          month: value
        }), value: date.month, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger, { className: "w-[140px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectValue, { placeholder: "Month" }, void 0, false, {
            fileName: "app/components/age-difference/DateSelector.tsx",
            lineNumber: 66,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/age-difference/DateSelector.tsx",
            lineNumber: 65,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent, { children: months.map((month) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: month.toString(), children: format(new Date(2024, month - 1), "MMMM") }, month, false, {
            fileName: "app/components/age-difference/DateSelector.tsx",
            lineNumber: 69,
            columnNumber: 38
          }, this)) }, void 0, false, {
            fileName: "app/components/age-difference/DateSelector.tsx",
            lineNumber: 68,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/age-difference/DateSelector.tsx",
          lineNumber: 61,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: `${namePrefix}Month`, value: date.month }, void 0, false, {
          fileName: "app/components/age-difference/DateSelector.tsx",
          lineNumber: 74,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/age-difference/DateSelector.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { onValueChange: (value) => setDate({
          ...date,
          day: value
        }), value: date.day, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger, { className: "w-[140px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectValue, { placeholder: "Day" }, void 0, false, {
            fileName: "app/components/age-difference/DateSelector.tsx",
            lineNumber: 83,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/age-difference/DateSelector.tsx",
            lineNumber: 82,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent, { children: days.map((day) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: day.toString(), children: day }, day, false, {
            fileName: "app/components/age-difference/DateSelector.tsx",
            lineNumber: 86,
            columnNumber: 34
          }, this)) }, void 0, false, {
            fileName: "app/components/age-difference/DateSelector.tsx",
            lineNumber: 85,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/age-difference/DateSelector.tsx",
          lineNumber: 78,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: `${namePrefix}Day`, value: date.day }, void 0, false, {
          fileName: "app/components/age-difference/DateSelector.tsx",
          lineNumber: 91,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/age-difference/DateSelector.tsx",
        lineNumber: 77,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/age-difference/DateSelector.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/age-difference/DateSelector.tsx",
    lineNumber: 40,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/age-difference/DateSelector.tsx",
    lineNumber: 39,
    columnNumber: 10
  }, this);
};
_c = DateSelector;
var _c;
$RefreshReg$(_c, "DateSelector");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/age-difference/Results.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\age-difference\\\\Results.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\age-difference\\Results.tsx"
  );
  import.meta.hot.lastModified = "1747380500841.4863";
}
var Results = ({
  result
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 animate-slideUp w-full", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ResultCard, { title: "Age Difference", value: `${result.years} years, ${result.months} months, ${result.days} days`, description: "Precise age difference" }, void 0, false, {
    fileName: "app/components/age-difference/Results.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ResultCard, { title: "Total Days", value: result.totalDays.toLocaleString(), description: "Number of days between dates" }, void 0, false, {
    fileName: "app/components/age-difference/Results.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ResultCard, { title: "Other Units", value: `${result.weeks.toLocaleString()} weeks`, description: `${result.hours.toLocaleString()} hours` }, void 0, false, {
    fileName: "app/components/age-difference/Results.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/components/age-difference/Results.tsx",
  lineNumber: 24,
  columnNumber: 7
}, this);
_c2 = Results;
var _c2;
$RefreshReg$(_c2, "Results");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/age-difference/HowItWorks.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\age-difference\\\\HowItWorks.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\age-difference\\HowItWorks.tsx"
  );
  import.meta.hot.lastModified = "1747380513360.3325";
}
var HowItWorks = () => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bg-white shadow-md rounded-lg p-6", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "text-2xl font-bold mb-4", children: "How It Works" }, void 0, false, {
    fileName: "app/components/age-difference/HowItWorks.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "mb-4", children: "Our age difference calculator is simple to use:" }, void 0, false, {
    fileName: "app/components/age-difference/HowItWorks.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ol", { className: "list-decimal pl-5 space-y-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: "Select the first date (birth date, event date, etc.)" }, void 0, false, {
      fileName: "app/components/age-difference/HowItWorks.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: "Select the second date to compare against" }, void 0, false, {
      fileName: "app/components/age-difference/HowItWorks.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: 'Click the "Calculate Difference" button' }, void 0, false, {
      fileName: "app/components/age-difference/HowItWorks.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: "View the precise difference in years, months, days, weeks, and hours" }, void 0, false, {
      fileName: "app/components/age-difference/HowItWorks.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/age-difference/HowItWorks.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "mt-4", children: "The calculator automatically handles leap years, different month lengths, and ensures accurate results." }, void 0, false, {
    fileName: "app/components/age-difference/HowItWorks.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/components/age-difference/HowItWorks.tsx",
  lineNumber: 21,
  columnNumber: 33
}, this);
_c3 = HowItWorks;
var _c3;
$RefreshReg$(_c3, "HowItWorks");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/age-difference/WhyUseSection.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\age-difference\\\\WhyUseSection.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\age-difference\\WhyUseSection.tsx"
  );
  import.meta.hot.lastModified = "1747380523518.422";
}
var WhyUseSection = () => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "bg-white shadow-md rounded-lg p-6", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-2xl font-bold mb-4", children: "Why Use Our Age Difference Calculator" }, void 0, false, {
    fileName: "app/components/age-difference/WhyUseSection.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { className: "list-disc pl-5 space-y-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Accurate calculations that account for leap years and varying month lengths" }, void 0, false, {
      fileName: "app/components/age-difference/WhyUseSection.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Multiple units of measurement (years, months, days, weeks, hours)" }, void 0, false, {
      fileName: "app/components/age-difference/WhyUseSection.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Simple, user-friendly interface" }, void 0, false, {
      fileName: "app/components/age-difference/WhyUseSection.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Instant results with no page reloading" }, void 0, false, {
      fileName: "app/components/age-difference/WhyUseSection.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Free to use with no limitations" }, void 0, false, {
      fileName: "app/components/age-difference/WhyUseSection.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/age-difference/WhyUseSection.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/components/age-difference/WhyUseSection.tsx",
  lineNumber: 21,
  columnNumber: 36
}, this);
_c4 = WhyUseSection;
var _c4;
$RefreshReg$(_c4, "WhyUseSection");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/age-difference/FAQ.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\age-difference\\\\FAQ.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\age-difference\\FAQ.tsx"
  );
  import.meta.hot.lastModified = "1747380536149.5002";
}
var FAQ = () => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "bg-white shadow-md rounded-lg p-6", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "text-2xl font-bold mb-4", children: "Frequently Asked Questions" }, void 0, false, {
    fileName: "app/components/age-difference/FAQ.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "space-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h3", { className: "font-bold text-lg", children: "How do you calculate age difference?" }, void 0, false, {
        fileName: "app/components/age-difference/FAQ.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Our calculator computes the exact difference between two dates in multiple units (years, months, days, weeks, hours). It accounts for leap years and varying month lengths to provide accurate results." }, void 0, false, {
        fileName: "app/components/age-difference/FAQ.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/age-difference/FAQ.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h3", { className: "font-bold text-lg", children: "Is this calculator free to use?" }, void 0, false, {
        fileName: "app/components/age-difference/FAQ.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Yes, our age difference calculator is completely free with no usage limitations." }, void 0, false, {
        fileName: "app/components/age-difference/FAQ.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/age-difference/FAQ.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h3", { className: "font-bold text-lg", children: "What can I use this calculator for?" }, void 0, false, {
        fileName: "app/components/age-difference/FAQ.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "You can use it to calculate age gaps between siblings, partners, or any two people. It's also useful for determining time elapsed between historical events or planning future events." }, void 0, false, {
        fileName: "app/components/age-difference/FAQ.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/age-difference/FAQ.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h3", { className: "font-bold text-lg", children: "Does it work with all dates?" }, void 0, false, {
        fileName: "app/components/age-difference/FAQ.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "The calculator works with dates from 1900 to the present year. For historical dates earlier than 1900, the calculation may not account for calendar changes." }, void 0, false, {
        fileName: "app/components/age-difference/FAQ.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/age-difference/FAQ.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/age-difference/FAQ.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/components/age-difference/FAQ.tsx",
  lineNumber: 21,
  columnNumber: 26
}, this);
_c5 = FAQ;
var _c5;
$RefreshReg$(_c5, "FAQ");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/age-difference/AgeDifferenceCalculator.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\age-difference\\\\AgeDifferenceCalculator.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\age-difference\\AgeDifferenceCalculator.tsx"
  );
  import.meta.hot.lastModified = "1747725161234.0493";
}
var AgeDifferenceCalculator = () => {
  _s();
  const [firstDate, setFirstDate] = (0, import_react.useState)({
    year: "",
    month: "",
    day: ""
  });
  const [secondDate, setSecondDate] = (0, import_react.useState)({
    year: "",
    month: "",
    day: ""
  });
  const navigation = useNavigation();
  const actionData = useActionData();
  const isCalculating = navigation.state === "submitting";
  const isFormValid = firstDate.year && firstDate.month && firstDate.day && secondDate.year && secondDate.month && secondDate.day;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "min-h-screen bg-gray-50 py-12 px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "max-w-3xl mx-auto space-y-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "text-center space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { className: "text-4xl sm:text-5xl font-bold tracking-tight", children: "Age Difference Calculator" }, void 0, false, {
        fileName: "app/components/age-difference/AgeDifferenceCalculator.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-lg text-gray-600 max-w-2xl mx-auto", children: "Calculate the exact age difference between two dates with precision" }, void 0, false, {
        fileName: "app/components/age-difference/AgeDifferenceCalculator.tsx",
        lineNumber: 53,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/age-difference/AgeDifferenceCalculator.tsx",
      lineNumber: 49,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Card, { className: "p-10 bg-white shadow rounded-lg border border-gray-200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "space-y-8 flex flex-col items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form, { method: "post", className: "w-full space-y-8 flex flex-col items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DateSelector, { label: "First Date", date: firstDate, setDate: setFirstDate, namePrefix: "first" }, void 0, false, {
          fileName: "app/components/age-difference/AgeDifferenceCalculator.tsx",
          lineNumber: 61,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DateSelector, { label: "Second Date", date: secondDate, setDate: setSecondDate, namePrefix: "second" }, void 0, false, {
          fileName: "app/components/age-difference/AgeDifferenceCalculator.tsx",
          lineNumber: 63,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Button, { type: "submit", className: "bg-primary hover:bg-primary-light text-white", disabled: !isFormValid || isCalculating, children: isCalculating ? "Calculating..." : "Calculate Difference" }, void 0, false, {
          fileName: "app/components/age-difference/AgeDifferenceCalculator.tsx",
          lineNumber: 65,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/age-difference/AgeDifferenceCalculator.tsx",
        lineNumber: 60,
        columnNumber: 13
      }, this),
      actionData && !actionData.error && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Results, { result: actionData }, void 0, false, {
        fileName: "app/components/age-difference/AgeDifferenceCalculator.tsx",
        lineNumber: 70,
        columnNumber: 49
      }, this),
      actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "text-red-500 text-center", children: actionData.error }, void 0, false, {
        fileName: "app/components/age-difference/AgeDifferenceCalculator.tsx",
        lineNumber: 72,
        columnNumber: 35
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/age-difference/AgeDifferenceCalculator.tsx",
      lineNumber: 59,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/age-difference/AgeDifferenceCalculator.tsx",
      lineNumber: 58,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(HowItWorks, {}, void 0, false, {
      fileName: "app/components/age-difference/AgeDifferenceCalculator.tsx",
      lineNumber: 78,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(WhyUseSection, {}, void 0, false, {
      fileName: "app/components/age-difference/AgeDifferenceCalculator.tsx",
      lineNumber: 79,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(FAQ, {}, void 0, false, {
      fileName: "app/components/age-difference/AgeDifferenceCalculator.tsx",
      lineNumber: 80,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/age-difference/AgeDifferenceCalculator.tsx",
    lineNumber: 48,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/age-difference/AgeDifferenceCalculator.tsx",
    lineNumber: 47,
    columnNumber: 10
  }, this);
};
_s(AgeDifferenceCalculator, "Un/KxRG+oRmQdE/+zM2h26AdqkY=", false, function() {
  return [useNavigation, useActionData];
});
_c6 = AgeDifferenceCalculator;
var _c6;
$RefreshReg$(_c6, "AgeDifferenceCalculator");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/difference.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\difference.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\difference.tsx"
  );
  import.meta.hot.lastModified = "1747637026468.3508";
}
var meta = () => {
  return [{
    title: "Age Difference Calculator - Calculate Age Gaps with Precision"
  }, {
    name: "description",
    content: "Calculate the exact age difference between two dates. Perfect for finding age gaps between siblings, partners, or any two dates with our precise age difference calculator."
  }, {
    name: "keywords",
    content: "age difference calculator, calculate age gap, age gap calculator, date difference calculator"
  }, {
    property: "og:type",
    content: "website"
  }, {
    property: "og:url",
    content: "https://agecalculator.app/difference"
  }, {
    property: "og:title",
    content: "Age Difference Calculator - Calculate Age Gaps with Precision"
  }, {
    property: "og:description",
    content: "Calculate the exact age difference between two dates. Perfect for finding age gaps between siblings, partners, or any two dates."
  }, {
    property: "og:image",
    content: "https://images.unsplash.com/photo-1517842645767-c639042777db"
  }, {
    property: "twitter:card",
    content: "summary_large_image"
  }, {
    property: "twitter:url",
    content: "https://agecalculator.app/difference"
  }, {
    property: "twitter:title",
    content: "Age Difference Calculator - Calculate Age Gaps with Precision"
  }, {
    property: "twitter:description",
    content: "Calculate the exact age difference between two dates. Perfect for finding age gaps between siblings, partners, or any two dates."
  }, {
    property: "twitter:image",
    content: "https://images.unsplash.com/photo-1517842645767-c639042777db"
  }, {
    rel: "canonical",
    href: "https://agecalculator.app/difference"
  }];
};
function Difference() {
  _s2();
  const {
    jsonLd,
    breadcrumbJsonLd
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("script", { type: "application/ld+json", dangerouslySetInnerHTML: {
      __html: JSON.stringify(jsonLd)
    } }, void 0, false, {
      fileName: "app/routes/difference.tsx",
      lineNumber: 189,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("script", { type: "application/ld+json", dangerouslySetInnerHTML: {
      __html: JSON.stringify(breadcrumbJsonLd)
    } }, void 0, false, {
      fileName: "app/routes/difference.tsx",
      lineNumber: 192,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(AgeDifferenceCalculator, {}, void 0, false, {
      fileName: "app/routes/difference.tsx",
      lineNumber: 195,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/difference.tsx",
    lineNumber: 188,
    columnNumber: 10
  }, this);
}
_s2(Difference, "XmzdJGUxlMNQY0pW5lZYGwj/Aqo=", false, function() {
  return [useLoaderData];
});
_c7 = Difference;
var _c7;
$RefreshReg$(_c7, "Difference");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Difference as default,
  meta
};
//# sourceMappingURL=/build/routes/difference-R2DKY2ZY.js.map
