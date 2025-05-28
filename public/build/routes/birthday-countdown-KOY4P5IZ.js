import {
  ResultCard
} from "/build/_shared/chunk-QX7IUN3N.js";
import "/build/_shared/chunk-6HBMKAOW.js";
import "/build/_shared/chunk-AZCUNKMG.js";
import {
  CalendarDays,
  PartyPopper
} from "/build/_shared/chunk-DCYVUSHA.js";
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

// app/routes/birthday-countdown.tsx
var import_react = __toESM(require_react(), 1);
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\birthday-countdown.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\birthday-countdown.tsx"
  );
  import.meta.hot.lastModified = "1747983457719.0664";
}
var meta = () => {
  return [{
    title: "Birthday Countdown Calculator - How Many Days Until My Birthday?"
  }, {
    name: "description",
    content: "Find out exactly how many days, hours, and minutes until your next birthday with our free Birthday Countdown Calculator."
  }, {
    name: "keywords",
    content: "birthday countdown, days until birthday, birthday calculator, next birthday, birthday timer"
  }, {
    property: "og:title",
    content: "Birthday Countdown Calculator - How Many Days Until My Birthday?"
  }, {
    property: "og:description",
    content: "Find out exactly how many days, hours, and minutes until your next birthday with our free Birthday Countdown Calculator."
  }, {
    property: "og:type",
    content: "website"
  }, {
    property: "og:url",
    content: "https://agecalculator.app/birthday-countdown"
  }, {
    name: "twitter:card",
    content: "summary_large_image"
  }, {
    name: "twitter:title",
    content: "Birthday Countdown Calculator - How Many Days Until My Birthday?"
  }, {
    name: "twitter:description",
    content: "Find out exactly how many days, hours, and minutes until your next birthday with our free Birthday Countdown Calculator."
  }, {
    rel: "canonical",
    href: "https://agecalculator.app/birthday-countdown"
  }];
};
function BirthdayCountdown() {
  _s();
  const actionData = useActionData();
  const navigation = useNavigation();
  const {
    jsonLd,
    breadcrumbJsonLd,
    faqJsonLd
  } = useLoaderData();
  const isSubmitting = navigation.state === "submitting";
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = Array.from({
    length: 31
  }, (_, i) => i + 1);
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const years = Array.from({
    length: 101
  }, (_, i) => currentYear - i);
  const [selectedMonth, setSelectedMonth] = (0, import_react.useState)("");
  const [selectedDay, setSelectedDay] = (0, import_react.useState)("");
  const [selectedYear, setSelectedYear] = (0, import_react.useState)("");
  const birthdayStr = selectedYear && selectedMonth && selectedDay ? `${selectedYear}-${String(Number(selectedMonth) + 1).padStart(2, "0")}-${String(selectedDay).padStart(2, "0")}` : "";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gray-50 py-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-2xl mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-xl shadow p-8 mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2 mb-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CalendarDays, { className: "text-[#19b6e9] w-7 h-7" }, void 0, false, {
          fileName: "app/routes/birthday-countdown.tsx",
          lineNumber: 207,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold text-gray-900 flex-1 text-center", children: "Birthday Countdown" }, void 0, false, {
          fileName: "app/routes/birthday-countdown.tsx",
          lineNumber: 208,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PartyPopper, { className: "text-[#19b6e9] w-7 h-7" }, void 0, false, {
          fileName: "app/routes/birthday-countdown.tsx",
          lineNumber: 209,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/birthday-countdown.tsx",
        lineNumber: 206,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "space-y-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col md:flex-row gap-4 mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { className: "font-semibold flex items-center gap-1 mb-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CalendarDays, { className: "w-4 h-4 mr-1" }, void 0, false, {
                fileName: "app/routes/birthday-countdown.tsx",
                lineNumber: 214,
                columnNumber: 79
              }, this),
              "Month"
            ] }, void 0, true, {
              fileName: "app/routes/birthday-countdown.tsx",
              lineNumber: 214,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { className: "w-full rounded-md border border-gray-300 px-3 py-2", value: selectedMonth, onChange: (e) => setSelectedMonth(e.target.value), required: true, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "Month" }, void 0, false, {
                fileName: "app/routes/birthday-countdown.tsx",
                lineNumber: 216,
                columnNumber: 19
              }, this),
              months.map((m, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: idx, children: m }, m, false, {
                fileName: "app/routes/birthday-countdown.tsx",
                lineNumber: 217,
                columnNumber: 43
              }, this))
            ] }, void 0, true, {
              fileName: "app/routes/birthday-countdown.tsx",
              lineNumber: 215,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/birthday-countdown.tsx",
            lineNumber: 213,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { className: "font-semibold flex items-center gap-1 mb-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CalendarDays, { className: "w-4 h-4 mr-1" }, void 0, false, {
                fileName: "app/routes/birthday-countdown.tsx",
                lineNumber: 221,
                columnNumber: 79
              }, this),
              "Day"
            ] }, void 0, true, {
              fileName: "app/routes/birthday-countdown.tsx",
              lineNumber: 221,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { className: "w-full rounded-md border border-gray-300 px-3 py-2", value: selectedDay, onChange: (e) => setSelectedDay(e.target.value), required: true, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "Day" }, void 0, false, {
                fileName: "app/routes/birthday-countdown.tsx",
                lineNumber: 223,
                columnNumber: 19
              }, this),
              days.map((d) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: d, children: d }, d, false, {
                fileName: "app/routes/birthday-countdown.tsx",
                lineNumber: 224,
                columnNumber: 34
              }, this))
            ] }, void 0, true, {
              fileName: "app/routes/birthday-countdown.tsx",
              lineNumber: 222,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/birthday-countdown.tsx",
            lineNumber: 220,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { className: "font-semibold flex items-center gap-1 mb-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CalendarDays, { className: "w-4 h-4 mr-1" }, void 0, false, {
                fileName: "app/routes/birthday-countdown.tsx",
                lineNumber: 228,
                columnNumber: 79
              }, this),
              "Year"
            ] }, void 0, true, {
              fileName: "app/routes/birthday-countdown.tsx",
              lineNumber: 228,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { className: "w-full rounded-md border border-gray-300 px-3 py-2", value: selectedYear, onChange: (e) => setSelectedYear(e.target.value), required: true, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "Year" }, void 0, false, {
                fileName: "app/routes/birthday-countdown.tsx",
                lineNumber: 230,
                columnNumber: 19
              }, this),
              years.map((y) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: y, children: y }, y, false, {
                fileName: "app/routes/birthday-countdown.tsx",
                lineNumber: 231,
                columnNumber: 35
              }, this))
            ] }, void 0, true, {
              fileName: "app/routes/birthday-countdown.tsx",
              lineNumber: 229,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/birthday-countdown.tsx",
            lineNumber: 227,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/birthday-countdown.tsx",
          lineNumber: 212,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "birthday", value: birthdayStr }, void 0, false, {
          fileName: "app/routes/birthday-countdown.tsx",
          lineNumber: 235,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", className: "w-full bg-[#19b6e9] hover:bg-[#15a3cc] text-white font-semibold py-2 rounded", disabled: isSubmitting, children: isSubmitting ? "Calculating..." : "Start Countdown" }, void 0, false, {
          fileName: "app/routes/birthday-countdown.tsx",
          lineNumber: 236,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/birthday-countdown.tsx",
        lineNumber: 211,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/birthday-countdown.tsx",
      lineNumber: 205,
      columnNumber: 9
    }, this),
    actionData && "result" in actionData && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-xl shadow p-6 mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-bold mb-4 text-center", children: "Your Birthday Countdown" }, void 0, false, {
        fileName: "app/routes/birthday-countdown.tsx",
        lineNumber: 242,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResultCard, { title: "Days Until Birthday", value: actionData.result.daysUntilBirthday.toString(), description: `Your countdown has started!` }, void 0, false, {
          fileName: "app/routes/birthday-countdown.tsx",
          lineNumber: 244,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResultCard, { title: "Next Birthday", value: actionData.result.nextBirthdayDate, description: `Falls on a ${actionData.result.dayOfWeek}` }, void 0, false, {
          fileName: "app/routes/birthday-countdown.tsx",
          lineNumber: 245,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResultCard, { title: "Your Age Then", value: actionData.result.nextAge.toString(), description: actionData.result.isLeapYear ? "Born in a leap year!" : "" }, void 0, false, {
          fileName: "app/routes/birthday-countdown.tsx",
          lineNumber: 246,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/birthday-countdown.tsx",
        lineNumber: 243,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/birthday-countdown.tsx",
      lineNumber: 241,
      columnNumber: 50
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-xl shadow p-8 mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-bold text-center mb-6", children: "How It Works" }, void 0, false, {
        fileName: "app/routes/birthday-countdown.tsx",
        lineNumber: 250,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col md:flex-row justify-center items-center gap-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#19b6e9] text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mb-2", children: "1" }, void 0, false, {
            fileName: "app/routes/birthday-countdown.tsx",
            lineNumber: 253,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-semibold mb-1", children: "Select Your Birthday" }, void 0, false, {
            fileName: "app/routes/birthday-countdown.tsx",
            lineNumber: 254,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-gray-500 text-center text-sm", children: "Choose your birth date using the month, day, and year selectors" }, void 0, false, {
            fileName: "app/routes/birthday-countdown.tsx",
            lineNumber: 255,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/birthday-countdown.tsx",
          lineNumber: 252,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-2xl text-[#19b6e9]", children: "\u2192" }, void 0, false, {
          fileName: "app/routes/birthday-countdown.tsx",
          lineNumber: 257,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#19b6e9] text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mb-2", children: "2" }, void 0, false, {
            fileName: "app/routes/birthday-countdown.tsx",
            lineNumber: 259,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-semibold mb-1", children: "Start Countdown" }, void 0, false, {
            fileName: "app/routes/birthday-countdown.tsx",
            lineNumber: 260,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-gray-500 text-center text-sm", children: "Click to start the real-time countdown to your next birthday" }, void 0, false, {
            fileName: "app/routes/birthday-countdown.tsx",
            lineNumber: 261,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/birthday-countdown.tsx",
          lineNumber: 258,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-2xl text-[#19b6e9]", children: "\u2192" }, void 0, false, {
          fileName: "app/routes/birthday-countdown.tsx",
          lineNumber: 263,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#19b6e9] text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mb-2", children: "3" }, void 0, false, {
            fileName: "app/routes/birthday-countdown.tsx",
            lineNumber: 265,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-semibold mb-1", children: "Watch Time Tick" }, void 0, false, {
            fileName: "app/routes/birthday-countdown.tsx",
            lineNumber: 266,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-gray-500 text-center text-sm", children: "See days, hours, minutes, and seconds until your celebration" }, void 0, false, {
            fileName: "app/routes/birthday-countdown.tsx",
            lineNumber: 267,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/birthday-countdown.tsx",
          lineNumber: 264,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/birthday-countdown.tsx",
        lineNumber: 251,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/birthday-countdown.tsx",
      lineNumber: 249,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-xl shadow p-8 mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-bold text-center mb-6", children: "Frequently Asked Questions" }, void 0, false, {
        fileName: "app/routes/birthday-countdown.tsx",
        lineNumber: 272,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-b pb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-semibold text-[#19b6e9] mb-1", children: "How accurate is the birthday countdown?" }, void 0, false, {
            fileName: "app/routes/birthday-countdown.tsx",
            lineNumber: 275,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-gray-600 text-sm", children: "Our countdown is precise to the second, continuously updating to show you exactly how long until your next birthday celebration." }, void 0, false, {
            fileName: "app/routes/birthday-countdown.tsx",
            lineNumber: 276,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/birthday-countdown.tsx",
          lineNumber: 274,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-b pb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-semibold text-[#19b6e9] mb-1", children: "Can I count down to someone else's birthday?" }, void 0, false, {
            fileName: "app/routes/birthday-countdown.tsx",
            lineNumber: 279,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-gray-600 text-sm", children: "Yes! You can use any valid birth date to count down to anyone's birthday. Just make sure the date isn't in the future." }, void 0, false, {
            fileName: "app/routes/birthday-countdown.tsx",
            lineNumber: 280,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/birthday-countdown.tsx",
          lineNumber: 278,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-semibold text-[#19b6e9] mb-1", children: "What happens when it's my birthday?" }, void 0, false, {
            fileName: "app/routes/birthday-countdown.tsx",
            lineNumber: 283,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-gray-600 text-sm", children: "The countdown will reset for the next year, so you can keep celebrating every year!" }, void 0, false, {
            fileName: "app/routes/birthday-countdown.tsx",
            lineNumber: 284,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/birthday-countdown.tsx",
          lineNumber: 282,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/birthday-countdown.tsx",
        lineNumber: 273,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/birthday-countdown.tsx",
      lineNumber: 271,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/birthday-countdown.tsx",
    lineNumber: 204,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/birthday-countdown.tsx",
    lineNumber: 203,
    columnNumber: 10
  }, this);
}
_s(BirthdayCountdown, "Gq9Hx3l2gzYv4ekVlz6pZ8aDHSk=", false, function() {
  return [useActionData, useNavigation, useLoaderData];
});
_c = BirthdayCountdown;
var _c;
$RefreshReg$(_c, "BirthdayCountdown");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  BirthdayCountdown as default,
  meta
};
//# sourceMappingURL=/build/routes/birthday-countdown-KOY4P5IZ.js.map
