import {
  Calendar,
  addWeeks
} from "/build/_shared/chunk-OMKXYEXA.js";
import "/build/_shared/chunk-SWRLEF66.js";
import "/build/_shared/chunk-6HBMKAOW.js";
import {
  Check
} from "/build/_shared/chunk-DCYVUSHA.js";
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

// app/routes/pregnancy-calculator.tsx
var import_node = __toESM(require_node(), 1);
var import_react2 = __toESM(require_react(), 1);

// app/components/pregnancy-calculator/PregnancyWeekRow.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\pregnancy-calculator\\\\PregnancyWeekRow.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\pregnancy-calculator\\PregnancyWeekRow.tsx"
  );
  import.meta.hot.lastModified = "1747808533222.7178";
}
function PregnancyWeekRow({
  week,
  currentWeek
}) {
  const isCurrentWeek = week.week === currentWeek;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: `border-b hover:bg-gray-50 ${isCurrentWeek ? "bg-blue-50" : ""}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-4 py-3 text-center font-semibold", children: week.trimester }, void 0, false, {
      fileName: "app/components/pregnancy-calculator/PregnancyWeekRow.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-4 py-3 text-center", children: week.date.toLocaleDateString() }, void 0, false, {
      fileName: "app/components/pregnancy-calculator/PregnancyWeekRow.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-4 py-3 text-center", children: [
      "Week ",
      week.week
    ] }, void 0, true, {
      fileName: "app/components/pregnancy-calculator/PregnancyWeekRow.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-4 py-3", children: week.fetalDevelopment }, void 0, false, {
      fileName: "app/components/pregnancy-calculator/PregnancyWeekRow.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-4 py-3", children: week.babySize }, void 0, false, {
      fileName: "app/components/pregnancy-calculator/PregnancyWeekRow.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-4 py-3", children: week.medicalProcedures }, void 0, false, {
      fileName: "app/components/pregnancy-calculator/PregnancyWeekRow.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pregnancy-calculator/PregnancyWeekRow.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c = PregnancyWeekRow;
var _c;
$RefreshReg$(_c, "PregnancyWeekRow");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/pregnancy-calculator/PregnancyTableHeader.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\pregnancy-calculator\\\\PregnancyTableHeader.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\pregnancy-calculator\\PregnancyTableHeader.tsx"
  );
  import.meta.hot.lastModified = "1747808513778.9597";
}
function PregnancyTableHeader() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("thead", { className: "bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("tr", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("th", { className: "px-4 py-3 text-center font-semibold", children: "Trimester" }, void 0, false, {
      fileName: "app/components/pregnancy-calculator/PregnancyTableHeader.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("th", { className: "px-4 py-3 text-center font-semibold", children: "Date" }, void 0, false, {
      fileName: "app/components/pregnancy-calculator/PregnancyTableHeader.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("th", { className: "px-4 py-3 text-center font-semibold", children: "Week" }, void 0, false, {
      fileName: "app/components/pregnancy-calculator/PregnancyTableHeader.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("th", { className: "px-4 py-3 text-left font-semibold", children: "Fetal Development" }, void 0, false, {
      fileName: "app/components/pregnancy-calculator/PregnancyTableHeader.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("th", { className: "px-4 py-3 text-left font-semibold", children: "Baby Size" }, void 0, false, {
      fileName: "app/components/pregnancy-calculator/PregnancyTableHeader.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("th", { className: "px-4 py-3 text-left font-semibold", children: "Medical Procedures" }, void 0, false, {
      fileName: "app/components/pregnancy-calculator/PregnancyTableHeader.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pregnancy-calculator/PregnancyTableHeader.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pregnancy-calculator/PregnancyTableHeader.tsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}
_c2 = PregnancyTableHeader;
var _c2;
$RefreshReg$(_c2, "PregnancyTableHeader");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/pregnancy-calculator.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\pregnancy-calculator.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\pregnancy-calculator.tsx"
  );
  import.meta.hot.lastModified = "1747808834701.5486";
}
var meta = () => {
  return [{
    title: "Pregnancy Calculator - Calculate Due Date and Pregnancy Milestones"
  }, {
    name: "description",
    content: "Calculate your due date, conception date, and pregnancy milestones with our free Pregnancy Calculator."
  }, {
    name: "keywords",
    content: "pregnancy calculator, due date calculator, conception date, pregnancy milestones, trimester calculator"
  }, {
    property: "og:title",
    content: "Pregnancy Calculator - Calculate Due Date and Pregnancy Milestones"
  }, {
    property: "og:description",
    content: "Calculate your due date, conception date, and pregnancy milestones with our free Pregnancy Calculator."
  }, {
    property: "og:type",
    content: "website"
  }, {
    property: "og:url",
    content: "https://agecalculator.app/pregnancy-calculator"
  }, {
    name: "twitter:card",
    content: "summary_large_image"
  }, {
    name: "twitter:title",
    content: "Pregnancy Calculator - Calculate Due Date and Pregnancy Milestones"
  }, {
    name: "twitter:description",
    content: "Calculate your due date, conception date, and pregnancy milestones with our free Pregnancy Calculator."
  }, {
    rel: "canonical",
    href: "https://agecalculator.app/pregnancy-calculator"
  }];
};
var weekDetails = [{
  trimester: "First",
  fetalDevelopment: "Conception and implantation.",
  babySize: "Size: 0.1-0.2 mm (zygote)",
  medicalProcedures: "Blood test (hCG levels), urine test to confirm pregnancy."
}, {
  trimester: "First",
  fetalDevelopment: "Conception and implantation continue.",
  babySize: "Size: 0.1-0.2 mm (zygote)",
  medicalProcedures: "Blood test (hCG levels), urine test to confirm pregnancy."
}, {
  trimester: "First",
  fetalDevelopment: "Blastocyst implants in the uterus; hCG production begins.",
  babySize: "Size: 0.1-0.2 mm.",
  medicalProcedures: "Blood test to confirm pregnancy."
}, {
  trimester: "First",
  fetalDevelopment: "Positive pregnancy test; placenta begins to form.",
  babySize: "Size: 1-2 mm (poppy seed).",
  medicalProcedures: "Home pregnancy test; first prenatal visit scheduled."
}, {
  trimester: "First",
  fetalDevelopment: "Embryo size: sesame seed; neural tube forms.",
  babySize: "Size: 2-3 mm (sesame seed).",
  medicalProcedures: "First prenatal visit (if not done earlier)."
}, {
  trimester: "First",
  fetalDevelopment: "Heartbeat begins; facial features start forming.",
  babySize: "Size: 4-5 mm (lentil).",
  medicalProcedures: "Dating ultrasound to confirm pregnancy and check heartbeat."
}, {
  trimester: "First",
  fetalDevelopment: "Brain, eyes, and ears develop; limb buds appear.",
  babySize: "Size: 8-10 mm (blueberry).",
  medicalProcedures: "Blood tests (blood type, Rh factor, infections)."
}, {
  trimester: "First",
  fetalDevelopment: "Major organs form; embryo now called a fetus.",
  babySize: "Size: 1.6 cm, Weight: 1 g (raspberry).",
  medicalProcedures: "Urine test (protein, glucose, infections)."
}, {
  trimester: "First",
  fetalDevelopment: "Fetal movements begin; facial features become distinct.",
  babySize: "Size: 2.3 cm, Weight: 2 g (cherry).",
  medicalProcedures: "Genetic screening options discussed (e.g., NIPT, CVS)."
}, {
  trimester: "First",
  fetalDevelopment: "Critical development ends; nails and hair begin to form.",
  babySize: "Size: 3.1 cm, Weight: 4 g (strawberry).",
  medicalProcedures: "Nuchal translucency (NT) scan scheduled (Weeks 11-14)."
}, {
  trimester: "First",
  fetalDevelopment: "Rapid growth; bones begin to harden.",
  babySize: "Size: 4.1 cm, Weight: 7 g (lime).",
  medicalProcedures: "First-trimester screening (NT scan + blood tests for PAPP-A and hCG)."
}, {
  trimester: "First",
  fetalDevelopment: "Reflexes develop; fetus can make sucking movements.",
  babySize: "Size: 5.4 cm, Weight: 14 g (plum).",
  medicalProcedures: "Chorionic villus sampling (CVS) if needed (Weeks 10-13)."
}, {
  trimester: "First",
  fetalDevelopment: "Vocal cords form; risk of miscarriage decreases.",
  babySize: "Size: 7.4 cm, Weight: 23 g (lemon).",
  medicalProcedures: "End of first trimester; routine checkup."
}, {
  trimester: "Second",
  fetalDevelopment: "Fetus can make facial expressions; fine hair (lanugo) covers the body.",
  babySize: "Size: 8.7 cm, Weight: 43 g (peach).",
  medicalProcedures: "Routine blood and urine tests."
}, {
  trimester: "Second",
  fetalDevelopment: "Fetus can move limbs; mother may feel flutters (quickening).",
  babySize: "Size: 10.1 cm, Weight: 70 g (apple).",
  medicalProcedures: "Quad screen scheduled (Weeks 15-20)."
}, {
  trimester: "Second",
  fetalDevelopment: "Facial expressions develop; eyes are sensitive to light.",
  babySize: "Size: 11.6 cm, Weight: 100 g (avocado).",
  medicalProcedures: "Anatomy ultrasound scheduled (Weeks 18-22)."
}, {
  trimester: "Second",
  fetalDevelopment: "Fat begins to accumulate under the skin.",
  babySize: "Size: 13 cm, Weight: 140 g (pear).",
  medicalProcedures: "Routine checkup; discuss amniocentesis if needed."
}, {
  trimester: "Second",
  fetalDevelopment: "Hearing develops; bones harden.",
  babySize: "Size: 14.2 cm, Weight: 190 g (sweet potato).",
  medicalProcedures: "Anatomy ultrasound to check fetal development and sex."
}, {
  trimester: "Second",
  fetalDevelopment: "Vernix caseosa (protective coating) forms on the skin.",
  babySize: "Size: 15.3 cm, Weight: 240 g (mango).",
  medicalProcedures: "Routine blood and urine tests."
}, {
  trimester: "Second",
  fetalDevelopment: "Halfway point; fetus is more active.",
  babySize: "Size: 16.4 cm, Weight: 300 g (banana).",
  medicalProcedures: "Glucose screening test scheduled (Weeks 24-28)."
}, {
  trimester: "Second",
  fetalDevelopment: "Taste buds develop; fetus can swallow amniotic fluid.",
  babySize: "Size: 26.7 cm, Weight: 360 g (carrot).",
  medicalProcedures: "Routine checkup."
}, {
  trimester: "Second",
  fetalDevelopment: "Hair grows on the head; fetus is more active.",
  babySize: "Size: 27.8 cm, Weight: 430 g (spaghetti squash).",
  medicalProcedures: "Routine blood and urine tests."
}, {
  trimester: "Second",
  fetalDevelopment: "Lungs develop; fetus practices breathing movements.",
  babySize: "Size: 28.9 cm, Weight: 500 g (grapefruit).",
  medicalProcedures: "Glucose screening test (if not done earlier)."
}, {
  trimester: "Second",
  fetalDevelopment: "Fetus reaches viability; could survive outside the womb with medical help.",
  babySize: "Size: 30 cm, Weight: 600 g (ear of corn).",
  medicalProcedures: "Rh antibody test for Rh-negative mothers."
}, {
  trimester: "Second",
  fetalDevelopment: "Fetus responds to touch and sound.",
  babySize: "Size: 34.6 cm, Weight: 660 g (rutabaga).",
  medicalProcedures: "Routine checkup."
}, {
  trimester: "Second",
  fetalDevelopment: "Eyes can open; lungs continue to mature.",
  babySize: "Size: 35.6 cm, Weight: 760 g (scallion).",
  medicalProcedures: "Routine blood and urine tests."
}, {
  trimester: "Second",
  fetalDevelopment: "Brain activity increases; lungs continue to mature.",
  babySize: "Size: 36.6 cm, Weight: 875 g (cauliflower).",
  medicalProcedures: "TDAP vaccine recommended (Weeks 27-36)."
}, {
  trimester: "Third",
  fetalDevelopment: "Fetus can blink and dream; third trimester begins.",
  babySize: "Size: 37.6 cm, Weight: 1 kg (eggplant).",
  medicalProcedures: "Routine checkup; discuss birth plan."
}, {
  trimester: "Third",
  fetalDevelopment: "Muscles and lungs mature; fetus gains weight.",
  babySize: "Size: 38.6 cm, Weight: 1.2 kg (butternut squash).",
  medicalProcedures: "Routine blood and urine tests."
}, {
  trimester: "Third",
  fetalDevelopment: "Fetus gains fat; eyes can perceive light and dark.",
  babySize: "Size: 39.9 cm, Weight: 1.3 kg (cabbage).",
  medicalProcedures: "Ultrasound to check fetal growth and amniotic fluid levels (if needed)."
}, {
  trimester: "Third",
  fetalDevelopment: "Fetus can perceive light and dark; rapid brain development.",
  babySize: "Size: 41.1 cm, Weight: 1.5 kg (coconut).",
  medicalProcedures: "Routine checkup."
}, {
  trimester: "Third",
  fetalDevelopment: "Fetus may move into a head-down position.",
  babySize: "Size: 42.4 cm, Weight: 1.7 kg (jicama).",
  medicalProcedures: "Group B Streptococcus (GBS) test scheduled (Weeks 35-37)."
}, {
  trimester: "Third",
  fetalDevelopment: "Bones harden; skull remains soft for delivery.",
  babySize: "Size: 43.7 cm, Weight: 1.9 kg (pineapple).",
  medicalProcedures: "Routine blood and urine tests."
}, {
  trimester: "Third",
  fetalDevelopment: "Immune system develops; fetus practices breathing.",
  babySize: "Size: 45 cm, Weight: 2.1 kg (cantaloupe).",
  medicalProcedures: "Non-stress test (NST) or biophysical profile (BPP) if high-risk."
}, {
  trimester: "Third",
  fetalDevelopment: "Lungs are nearly fully developed.",
  babySize: "Size: 46.2 cm, Weight: 2.4 kg (honeydew melon).",
  medicalProcedures: "GBS test performed."
}, {
  trimester: "Third",
  fetalDevelopment: "Fetus gains fat; may drop lower into the pelvis.",
  babySize: "Size: 47.4 cm, Weight: 2.6 kg (papaya).",
  medicalProcedures: "Pelvic exam to check cervical dilation and effacement."
}, {
  trimester: "Third",
  fetalDevelopment: "Fetus is considered full-term.",
  babySize: "Size: 48.6 cm, Weight: 2.9 kg (Swiss chard).",
  medicalProcedures: "Weekly checkups begin; NST or BPP if high-risk."
}, {
  trimester: "Third",
  fetalDevelopment: "Brain and lungs are fully developed; fetus is ready for birth.",
  babySize: "Size: 49.8 cm, Weight: 3.1 kg (pumpkin).",
  medicalProcedures: "Routine checkup; discuss induction if overdue."
}, {
  trimester: "Third",
  fetalDevelopment: "Fetus is fully developed; waiting for labor to begin.",
  babySize: "Size: 50.7 cm, Weight: 3.3 kg (mini watermelon).",
  medicalProcedures: "Membrane sweep offered if overdue."
}, {
  trimester: "Third",
  fetalDevelopment: "Due date arrives; labor could begin any day.",
  babySize: "Size: 51.2 cm, Weight: 3.5 kg (small pumpkin).",
  medicalProcedures: "Final checkup; discuss induction if labor hasn't started."
}];
function generatePregnancyTimeline(startDate) {
  return weekDetails.map((detail, i) => ({
    week: i + 1,
    date: addWeeks(startDate, i),
    ...detail
  }));
}
function PregnancyCalculator() {
  _s();
  const actionData = useActionData();
  const navigation = useNavigation();
  const {
    jsonLd,
    breadcrumbJsonLd,
    faqJsonLd
  } = useLoaderData();
  const isSubmitting = navigation.state === "submitting";
  const [selectedDate, setSelectedDate] = (0, import_react2.useState)();
  const getDateForWeek = (weekNumber) => {
    if (!selectedDate)
      return /* @__PURE__ */ new Date();
    return addWeeks(selectedDate, weekNumber - 1);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "min-h-screen bg-gray-50 py-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "max-w-3xl mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bg-white rounded-xl shadow p-10 mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "text-4xl font-bold text-gray-900 text-center mb-2", children: "Pregnancy Calculator" }, void 0, false, {
        fileName: "app/routes/pregnancy-calculator.tsx",
        lineNumber: 414,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-lg text-gray-600 text-center mb-8", children: "Track your pregnancy week by week and get your estimated due date" }, void 0, false, {
        fileName: "app/routes/pregnancy-calculator.tsx",
        lineNumber: 415,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form, { method: "post", className: "flex flex-col items-center gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-full max-w-xs mx-auto", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Label, { className: "block text-center text-lg font-semibold mb-2", children: "First Day of Last Period" }, void 0, false, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 418,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Calendar, { mode: "single", selected: selectedDate, onSelect: setSelectedDate, className: "rounded-lg border mx-auto" }, void 0, false, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 419,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "hidden", name: "lastPeriod", value: selectedDate ? selectedDate.toISOString().slice(0, 10) : "", required: true }, void 0, false, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 420,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/pregnancy-calculator.tsx",
          lineNumber: 417,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { type: "submit", className: "bg-[#19b6e9] hover:bg-[#15a3cc] text-white font-semibold px-8 py-2 rounded", disabled: isSubmitting, children: isSubmitting ? "Calculating..." : "Calculate" }, void 0, false, {
          fileName: "app/routes/pregnancy-calculator.tsx",
          lineNumber: 422,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/pregnancy-calculator.tsx",
        lineNumber: 416,
        columnNumber: 11
      }, this),
      actionData && "result" in actionData && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-8 grid grid-cols-1 md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "border-2 border-[#19b6e9] rounded-lg p-6 text-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-gray-500 mb-1", children: "Current Week" }, void 0, false, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 428,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-3xl font-bold text-[#19b6e9] mb-1", children: [
            "Week ",
            actionData.result.currentWeek
          ] }, void 0, true, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 429,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-gray-500", children: "of pregnancy" }, void 0, false, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 430,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/pregnancy-calculator.tsx",
          lineNumber: 427,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "border-2 border-[#19b6e9] rounded-lg p-6 text-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-gray-500 mb-1", children: "Due Date" }, void 0, false, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 433,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-2xl font-bold text-[#19b6e9] mb-1", children: actionData.result.dueDate }, void 0, false, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 434,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-gray-500", children: "estimated delivery" }, void 0, false, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 435,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/pregnancy-calculator.tsx",
          lineNumber: 432,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/pregnancy-calculator.tsx",
        lineNumber: 426,
        columnNumber: 52
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/pregnancy-calculator.tsx",
      lineNumber: 413,
      columnNumber: 9
    }, this),
    selectedDate && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bg-white rounded-xl shadow p-8 mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "text-2xl font-bold text-center mb-6", children: "Pregnancy Timeline" }, void 0, false, {
        fileName: "app/routes/pregnancy-calculator.tsx",
        lineNumber: 441,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("table", { className: "w-full text-sm border rounded-lg", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(PregnancyTableHeader, {}, void 0, false, {
          fileName: "app/routes/pregnancy-calculator.tsx",
          lineNumber: 444,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("tbody", { children: generatePregnancyTimeline(selectedDate).map((week) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(PregnancyWeekRow, { week, currentWeek: actionData && "result" in actionData ? actionData.result.currentWeek : 0 }, week.week, false, {
          fileName: "app/routes/pregnancy-calculator.tsx",
          lineNumber: 446,
          columnNumber: 72
        }, this)) }, void 0, false, {
          fileName: "app/routes/pregnancy-calculator.tsx",
          lineNumber: 445,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/pregnancy-calculator.tsx",
        lineNumber: 443,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/pregnancy-calculator.tsx",
        lineNumber: 442,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/pregnancy-calculator.tsx",
      lineNumber: 440,
      columnNumber: 26
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bg-white rounded-xl shadow p-8 mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "text-2xl font-bold text-center mb-6", children: "How It Works" }, void 0, false, {
        fileName: "app/routes/pregnancy-calculator.tsx",
        lineNumber: 453,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col md:flex-row justify-center items-center gap-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bg-[#19b6e9] text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mb-2", children: "1" }, void 0, false, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 456,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "font-semibold mb-1", children: "Enter Last Period" }, void 0, false, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 457,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-gray-500 text-center text-sm", children: "Input the first day of your last menstrual period to begin the calculation" }, void 0, false, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 458,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/pregnancy-calculator.tsx",
          lineNumber: 455,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-2xl text-[#19b6e9]", children: "\u2192" }, void 0, false, {
          fileName: "app/routes/pregnancy-calculator.tsx",
          lineNumber: 460,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bg-[#19b6e9] text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mb-2", children: "2" }, void 0, false, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 462,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "font-semibold mb-1", children: "Calculate" }, void 0, false, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 463,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-gray-500 text-center text-sm", children: "Our calculator determines your current pregnancy week and estimated due date" }, void 0, false, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 464,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/pregnancy-calculator.tsx",
          lineNumber: 461,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-2xl text-[#19b6e9]", children: "\u2192" }, void 0, false, {
          fileName: "app/routes/pregnancy-calculator.tsx",
          lineNumber: 466,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bg-[#19b6e9] text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mb-2", children: "3" }, void 0, false, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 468,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "font-semibold mb-1", children: "View Results" }, void 0, false, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 469,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-gray-500 text-center text-sm", children: "Follow your pregnancy journey with week-by-week development information" }, void 0, false, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 470,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/pregnancy-calculator.tsx",
          lineNumber: 467,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/pregnancy-calculator.tsx",
        lineNumber: 454,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/pregnancy-calculator.tsx",
      lineNumber: 452,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bg-white rounded-xl shadow p-8 mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "text-2xl font-bold text-center mb-6", children: "Why Use Our Pregnancy Calculator" }, void 0, false, {
        fileName: "app/routes/pregnancy-calculator.tsx",
        lineNumber: 476,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Check, { className: "text-[#19b6e9] w-6 h-6 mt-1" }, void 0, false, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 479,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "font-semibold", children: "Accurate Due Date Calculation" }, void 0, false, {
              fileName: "app/routes/pregnancy-calculator.tsx",
              lineNumber: 481,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-gray-500 text-sm", children: "Get a precise estimation of your due date based on your last menstrual period, using the same method healthcare providers use." }, void 0, false, {
              fileName: "app/routes/pregnancy-calculator.tsx",
              lineNumber: 482,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 480,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/pregnancy-calculator.tsx",
          lineNumber: 478,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Check, { className: "text-[#19b6e9] w-6 h-6 mt-1" }, void 0, false, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 486,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "font-semibold", children: "Week-by-Week Development Tracking" }, void 0, false, {
              fileName: "app/routes/pregnancy-calculator.tsx",
              lineNumber: 488,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-gray-500 text-sm", children: "Follow your baby's growth with detailed weekly updates about development milestones, size comparisons, and important medical procedures." }, void 0, false, {
              fileName: "app/routes/pregnancy-calculator.tsx",
              lineNumber: 489,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 487,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/pregnancy-calculator.tsx",
          lineNumber: 485,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Check, { className: "text-[#19b6e9] w-6 h-6 mt-1" }, void 0, false, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 493,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "font-semibold", children: "Trimester Breakdown" }, void 0, false, {
              fileName: "app/routes/pregnancy-calculator.tsx",
              lineNumber: 495,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-gray-500 text-sm", children: "Understand which trimester you're in and what to expect during each phase of your pregnancy journey." }, void 0, false, {
              fileName: "app/routes/pregnancy-calculator.tsx",
              lineNumber: 496,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 494,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/pregnancy-calculator.tsx",
          lineNumber: 492,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Check, { className: "text-[#19b6e9] w-6 h-6 mt-1" }, void 0, false, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 500,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "font-semibold", children: "Medical Timeline" }, void 0, false, {
              fileName: "app/routes/pregnancy-calculator.tsx",
              lineNumber: 502,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-gray-500 text-sm", children: "Access a comprehensive timeline of recommended medical check-ups, tests, and screenings throughout your pregnancy." }, void 0, false, {
              fileName: "app/routes/pregnancy-calculator.tsx",
              lineNumber: 503,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 501,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/pregnancy-calculator.tsx",
          lineNumber: 499,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Check, { className: "text-[#19b6e9] w-6 h-6 mt-1" }, void 0, false, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 507,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "font-semibold", children: "Size Visualization" }, void 0, false, {
              fileName: "app/routes/pregnancy-calculator.tsx",
              lineNumber: 509,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-gray-500 text-sm", children: "Visualize your baby's size with familiar fruit and vegetable comparisons that make it easy to understand their growth." }, void 0, false, {
              fileName: "app/routes/pregnancy-calculator.tsx",
              lineNumber: 510,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 508,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/pregnancy-calculator.tsx",
          lineNumber: 506,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Check, { className: "text-[#19b6e9] w-6 h-6 mt-1" }, void 0, false, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 514,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "font-semibold", children: "Pregnancy Planning" }, void 0, false, {
              fileName: "app/routes/pregnancy-calculator.tsx",
              lineNumber: 516,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-gray-500 text-sm", children: "Plan ahead with information about important milestones, helping you prepare for each stage of your pregnancy." }, void 0, false, {
              fileName: "app/routes/pregnancy-calculator.tsx",
              lineNumber: 517,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 515,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/pregnancy-calculator.tsx",
          lineNumber: 513,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/pregnancy-calculator.tsx",
        lineNumber: 477,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/pregnancy-calculator.tsx",
      lineNumber: 475,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bg-white rounded-xl shadow p-8 mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "text-2xl font-bold text-center mb-6", children: "Frequently Asked Questions" }, void 0, false, {
        fileName: "app/routes/pregnancy-calculator.tsx",
        lineNumber: 524,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "space-y-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "border-b pb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "font-semibold text-[#19b6e9] mb-1", children: "How is the due date calculated?" }, void 0, false, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 527,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-gray-600 text-sm", children: "The due date is calculated by adding 280 days (40 weeks) to the first day of your last menstrual period. This is known as Naegele's rule and is the standard method used by healthcare providers." }, void 0, false, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 528,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/pregnancy-calculator.tsx",
          lineNumber: 526,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "border-b pb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "font-semibold text-[#19b6e9] mb-1", children: "What are the three trimesters of pregnancy?" }, void 0, false, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 531,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-gray-600 text-sm", children: "The three trimesters are: First trimester (weeks 1-13), Second trimester (weeks 14-26), and Third trimester (weeks 27-40). Each trimester has different developmental milestones and changes." }, void 0, false, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 532,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/pregnancy-calculator.tsx",
          lineNumber: 530,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "font-semibold text-[#19b6e9] mb-1", children: "How accurate is the pregnancy calculator?" }, void 0, false, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 535,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-gray-600 text-sm", children: "The calculator provides an estimate based on the standard 40-week pregnancy. However, only about 5% of women deliver on their exact due date. Most babies are born within two weeks before or after the due date." }, void 0, false, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 536,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/pregnancy-calculator.tsx",
          lineNumber: 534,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/pregnancy-calculator.tsx",
        lineNumber: 525,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/pregnancy-calculator.tsx",
      lineNumber: 523,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/pregnancy-calculator.tsx",
    lineNumber: 412,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/pregnancy-calculator.tsx",
    lineNumber: 411,
    columnNumber: 10
  }, this);
}
_s(PregnancyCalculator, "PeiNiglpo4AH77BHyRQnz74pRZw=", false, function() {
  return [useActionData, useNavigation, useLoaderData];
});
_c3 = PregnancyCalculator;
var _c3;
$RefreshReg$(_c3, "PregnancyCalculator");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  PregnancyCalculator as default,
  meta
};
//# sourceMappingURL=/build/routes/pregnancy-calculator-B74SORVV.js.map
