import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
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

// app/routes/_index.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\_index.tsx"
  );
  import.meta.hot.lastModified = "1747983123476.7512";
}
var meta = () => [{
  title: "Age Calculator App - Free Online Age Calculators & Tools"
}, {
  name: "description",
  content: "Collection of free online age calculation tools including age calculator, date calculator, birthday countdown, pregnancy calculator, and more."
}];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function calculateAge(year, month, day) {
  if (!year || !month || !day)
    return null;
  const birthDate = new Date(Number(year), Number(month) - 1, Number(day));
  const now = /* @__PURE__ */ new Date();
  let years = now.getFullYear() - birthDate.getFullYear();
  let monthsDiff = now.getMonth() - birthDate.getMonth();
  let daysDiff = now.getDate() - birthDate.getDate();
  if (daysDiff < 0) {
    monthsDiff--;
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    daysDiff += prevMonth.getDate();
  }
  if (monthsDiff < 0) {
    years--;
    monthsDiff += 12;
  }
  const _MS_PER_DAY = 1e3 * 60 * 60 * 24;
  const utc1 = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  const utc2 = Date.UTC(birthDate.getFullYear(), birthDate.getMonth(), birthDate.getDate());
  const totalDays = Math.floor((utc1 - utc2) / _MS_PER_DAY);
  const weeks = Math.floor(totalDays / 7);
  const hours = totalDays * 24;
  return {
    years,
    months: monthsDiff,
    days: daysDiff,
    totalDays,
    weeks,
    hours
  };
}
function Index() {
  _s();
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const years = (0, import_react.useMemo)(() => {
    const arr = [];
    for (let y = currentYear; y >= 1900; y--)
      arr.push(y);
    return arr;
  }, [currentYear]);
  const days = Array.from({
    length: 31
  }, (_, i) => i + 1);
  const [selectedYear, setSelectedYear] = (0, import_react.useState)("");
  const [selectedMonth, setSelectedMonth] = (0, import_react.useState)("");
  const [selectedDay, setSelectedDay] = (0, import_react.useState)("");
  const [result, setResult] = (0, import_react.useState)(null);
  const [error, setError] = (0, import_react.useState)("");
  const handleCalculate = () => {
    if (!selectedYear || !selectedMonth || !selectedDay) {
      setError("Please select year, month, and day.");
      setResult(null);
      return;
    }
    setError("");
    const res = calculateAge(selectedYear, selectedMonth, selectedDay);
    setResult(res);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-screen-xl mx-auto px-8 sm:px-4 py-16", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#f1f6f8] rounded-lg p-12 max-w-4xl mx-auto text-center mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-5xl font-bold text-gray-900 mb-4", children: "Age Calculator" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 93,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl text-gray-600 mb-8", children: "Calculate your exact age in years, months, days, and more" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 94,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col md:flex-row justify-center gap-4 mb-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { className: "border rounded px-4 py-2", value: selectedYear, onChange: (e) => setSelectedYear(e.target.value), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "Year" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 97,
            columnNumber: 15
          }, this),
          years.map((y) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: y, children: y }, y, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 98,
            columnNumber: 31
          }, this))
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 96,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { className: "border rounded px-4 py-2", value: selectedMonth, onChange: (e) => setSelectedMonth(e.target.value), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "Month" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 101,
            columnNumber: 15
          }, this),
          months.map((m, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: idx + 1, children: m }, m, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 102,
            columnNumber: 39
          }, this))
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 100,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { className: "border rounded px-4 py-2", value: selectedDay, onChange: (e) => setSelectedDay(e.target.value), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "Day" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 105,
            columnNumber: 15
          }, this),
          days.map((d) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: d, children: d }, d, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 106,
            columnNumber: 30
          }, this))
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 104,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "bg-[#6ad0f7] text-white font-semibold px-6 py-2 rounded hover:bg-[#4bb8e6] transition", onClick: handleCalculate, children: "Calculate Age" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 108,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 95,
        columnNumber: 11
      }, this),
      error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-red-500 mb-4", children: error }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 110,
        columnNumber: 21
      }, this),
      result && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 bg-white rounded-lg shadow p-6 max-w-xl mx-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-2xl font-bold mb-4 text-gray-900", children: "Your Age" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 112,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-lg text-gray-700 mb-2", children: [
          result.years,
          " years, ",
          result.months,
          " months, ",
          result.days,
          " days"
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 113,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-gray-500", children: [
          "Total days: ",
          result.totalDays
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 114,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-gray-500", children: [
          "Weeks: ",
          result.weeks
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 115,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-gray-500", children: [
          "Hours: ",
          result.hours
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 116,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 111,
        columnNumber: 22
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 92,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow p-12 max-w-4xl mx-auto mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-bold text-gray-900 text-center mb-8", children: "How It Works" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 121,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col md:flex-row justify-center items-center gap-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#19b6e9] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-2", children: "1" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 124,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-semibold text-lg mb-1", children: "Select Your Birth Date" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 125,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-gray-500 text-center", children: "Choose your birth year, month, and day from the dropdown menus" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 126,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 123,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-3xl text-[#19b6e9]", children: "\u2192" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 128,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#19b6e9] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-2", children: "2" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 130,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-semibold text-lg mb-1", children: "Calculate" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 131,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-gray-500 text-center", children: "Click the calculate button to process your age" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 132,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 129,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-3xl text-[#19b6e9]", children: "\u2192" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 134,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#19b6e9] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-2", children: "3" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 136,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-semibold text-lg mb-1", children: "View Results" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 137,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-gray-500 text-center", children: "See your age in various formats and units" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 138,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 135,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 122,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 120,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow p-12 max-w-4xl mx-auto mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-bold text-gray-900 text-center mb-8", children: "Why Use Our Age Calculator" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 144,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-[#19b6e9] text-2xl mt-1", children: "\u2714" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 147,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-semibold text-lg", children: "Precise Age Calculation" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 149,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-gray-500", children: "Get accurate calculations of your age in years, months, days, weeks, and even hours." }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 150,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 148,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 146,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-[#19b6e9] text-2xl mt-1", children: "\u2714" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 154,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-semibold text-lg", children: "Multiple Time Units" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 156,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-gray-500", children: "View your age broken down into different units of time for a complete perspective." }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 157,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 155,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 153,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-[#19b6e9] text-2xl mt-1", children: "\u2714" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 161,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-semibold text-lg", children: "Easy to Use" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 163,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-gray-500", children: "Simple interface with dropdown menus makes it easy to input your birth date and get instant results." }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 164,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 162,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 160,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-[#19b6e9] text-2xl mt-1", children: "\u2714" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 168,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-semibold text-lg", children: "Instant Results" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 170,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-gray-500", children: "See your age calculations update immediately with detailed breakdowns and visualizations." }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 171,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 169,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 167,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 145,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 143,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow p-12 max-w-4xl mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-bold text-gray-900 text-center mb-8", children: "Frequently Asked Questions" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 178,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-[#19b6e9] font-semibold text-xl mb-2", children: "How is the age calculated?" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 181,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-gray-600", children: "Our calculator uses precise date arithmetic to compute your exact age in various units, including years, months, days, weeks, and hours." }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 182,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 180,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-[#19b6e9] font-semibold text-xl mb-2", children: "Why might this be useful?" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 185,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-gray-600", children: "Age calculations are useful for various purposes, including retirement planning, insurance calculations, and celebrating milestone birthdays." }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 186,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 184,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-[#19b6e9] font-semibold text-xl mb-2", children: "How accurate is the calculation?" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 189,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-gray-600", children: "The calculator provides precise results down to the day, taking into account leap years and varying month lengths." }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 190,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 188,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 179,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 177,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 91,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 90,
    columnNumber: 10
  }, this);
}
_s(Index, "nbwhglPMP3jzKxy8HPspUovCBrk=");
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-4UYWSYXV.js.map
