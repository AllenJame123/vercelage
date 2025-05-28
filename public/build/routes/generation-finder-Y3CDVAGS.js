import {
  Card
} from "/build/_shared/chunk-AZCUNKMG.js";
import {
  UsersRound
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
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  createHotContext
} from "/build/_shared/chunk-SREIQTEP.js";
import "/build/_shared/chunk-MZF3CFPM.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/generation-finder.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\generation-finder.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\generation-finder.tsx"
  );
  import.meta.hot.lastModified = "1747983470022.757";
}
var meta = () => {
  return [{
    title: "Generation Finder - What Generation Am I?"
  }, {
    name: "description",
    content: "Find out which generation you belong to based on your birth year with our free Generation Finder tool."
  }, {
    name: "keywords",
    content: "generation finder, what generation am i, generational cohort, baby boomer, gen x, millennial, gen z"
  }, {
    property: "og:title",
    content: "Generation Finder - What Generation Am I?"
  }, {
    property: "og:description",
    content: "Find out which generation you belong to based on your birth year with our free Generation Finder tool."
  }, {
    property: "og:type",
    content: "website"
  }, {
    property: "og:url",
    content: "https://agecalculator.app/generation-finder"
  }, {
    name: "twitter:card",
    content: "summary_large_image"
  }, {
    name: "twitter:title",
    content: "Generation Finder - What Generation Am I?"
  }, {
    name: "twitter:description",
    content: "Find out which generation you belong to based on your birth year with our free Generation Finder tool."
  }, {
    rel: "canonical",
    href: "https://agecalculator.app/generation-finder"
  }];
};
function GenerationFinder() {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gray-50 py-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-3xl mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("script", { type: "application/ld+json", dangerouslySetInnerHTML: {
      __html: JSON.stringify(jsonLd)
    } }, void 0, false, {
      fileName: "app/routes/generation-finder.tsx",
      lineNumber: 202,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("script", { type: "application/ld+json", dangerouslySetInnerHTML: {
      __html: JSON.stringify(breadcrumbJsonLd)
    } }, void 0, false, {
      fileName: "app/routes/generation-finder.tsx",
      lineNumber: 205,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("script", { type: "application/ld+json", dangerouslySetInnerHTML: {
      __html: JSON.stringify(faqJsonLd)
    } }, void 0, false, {
      fileName: "app/routes/generation-finder.tsx",
      lineNumber: 208,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl font-bold text-primary", children: "What Generation Am I?" }, void 0, false, {
        fileName: "app/routes/generation-finder.tsx",
        lineNumber: 213,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl text-neutral-gray max-w-2xl mx-auto", children: "Enter your birth year to discover your generational cohort and learn about its characteristics." }, void 0, false, {
        fileName: "app/routes/generation-finder.tsx",
        lineNumber: 214,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/generation-finder.tsx",
      lineNumber: 212,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "p-6 bg-white/80 backdrop-blur-sm max-w-xl mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "space-y-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { htmlFor: "birthYear", children: "Birth Year" }, void 0, false, {
          fileName: "app/routes/generation-finder.tsx",
          lineNumber: 222,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "number", id: "birthYear", name: "birthYear", className: "w-full rounded-md border border-input bg-background px-3 py-2 text-lg", placeholder: "Enter your birth year (e.g., 1990)", min: "1900", max: currentYear, required: true }, void 0, false, {
          fileName: "app/routes/generation-finder.tsx",
          lineNumber: 223,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/generation-finder.tsx",
        lineNumber: 221,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", className: "w-full", disabled: isSubmitting, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UsersRound, { className: "mr-2 h-5 w-5" }, void 0, false, {
          fileName: "app/routes/generation-finder.tsx",
          lineNumber: 227,
          columnNumber: 15
        }, this),
        isSubmitting ? "Finding..." : "Find My Generation"
      ] }, void 0, true, {
        fileName: "app/routes/generation-finder.tsx",
        lineNumber: 226,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/generation-finder.tsx",
      lineNumber: 220,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/generation-finder.tsx",
      lineNumber: 219,
      columnNumber: 9
    }, this),
    actionData?.result && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "p-6 bg-blue-50 border border-blue-100 max-w-xl mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-bold text-primary", children: [
          "You are part of ",
          actionData.result.generation
        ] }, void 0, true, {
          fileName: "app/routes/generation-finder.tsx",
          lineNumber: 236,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-neutral-gray", children: [
          "Birth Years: ",
          actionData.result.yearRange
        ] }, void 0, true, {
          fileName: "app/routes/generation-finder.tsx",
          lineNumber: 239,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/generation-finder.tsx",
        lineNumber: 235,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-neutral-dark", children: actionData.result.description }, void 0, false, {
        fileName: "app/routes/generation-finder.tsx",
        lineNumber: 243,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/generation-finder.tsx",
      lineNumber: 234,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/generation-finder.tsx",
      lineNumber: 233,
      columnNumber: 32
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "p-6 space-y-6 bg-white/80 backdrop-blur-sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-bold text-center text-neutral-dark", children: "How It Works" }, void 0, false, {
        fileName: "app/routes/generation-finder.tsx",
        lineNumber: 250,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center text-center max-w-[250px] relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4", children: "1" }, void 0, false, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 255,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold text-neutral-dark mb-2", children: "Select Your Birth Year" }, void 0, false, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 258,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-neutral-gray text-sm", children: "Enter your birth year in the calculator above" }, void 0, false, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 261,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden md:block absolute left-[calc(100%+1rem)] top-6 -translate-y-1/2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", className: "text-primary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M5 12H19M19 12L12 5M19 12L12 19", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 266,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 265,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 264,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/generation-finder.tsx",
          lineNumber: 254,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center text-center max-w-[250px] relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4", children: "2" }, void 0, false, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 271,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold text-neutral-dark mb-2", children: "Get Your Generation" }, void 0, false, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 274,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-neutral-gray text-sm", children: "Our tool identifies which generation you belong to based on your birth year" }, void 0, false, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 277,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden md:block absolute left-[calc(100%+1rem)] top-6 -translate-y-1/2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", className: "text-primary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M5 12H19M19 12L12 5M19 12L12 19", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 282,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 281,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 280,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/generation-finder.tsx",
          lineNumber: 270,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center text-center max-w-[250px]", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4", children: "3" }, void 0, false, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 287,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold text-neutral-dark mb-2", children: "Learn More" }, void 0, false, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 290,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-neutral-gray text-sm", children: "Discover characteristics and key events that shaped your generation" }, void 0, false, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 293,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/generation-finder.tsx",
          lineNumber: 286,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/generation-finder.tsx",
        lineNumber: 253,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/generation-finder.tsx",
      lineNumber: 249,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-bold text-center mb-6", children: [
        "Generation Overview (",
        currentYear,
        ")"
      ] }, void 0, true, {
        fileName: "app/routes/generation-finder.tsx",
        lineNumber: 301,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-gray-100", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "p-3 text-left", children: "Generation" }, void 0, false, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 306,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "p-3 text-left", children: "Time Frame" }, void 0, false, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 307,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "p-3 text-left", children: [
            "Age in ",
            currentYear
          ] }, void 0, true, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 308,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/generation-finder.tsx",
          lineNumber: 305,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/generation-finder.tsx",
          lineNumber: 304,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "border-b", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "p-3", children: "The Silent Generation" }, void 0, false, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 313,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "p-3", children: "1928-1945" }, void 0, false, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 314,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "p-3", children: [
              currentYear - 1928,
              "-",
              currentYear - 1945,
              " years old"
            ] }, void 0, true, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 315,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 312,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "border-b", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "p-3", children: "Baby Boomers" }, void 0, false, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 318,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "p-3", children: "1946-1964" }, void 0, false, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 319,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "p-3", children: [
              currentYear - 1964,
              "-",
              currentYear - 1946,
              " years old"
            ] }, void 0, true, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 320,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 317,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "border-b", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "p-3", children: "Gen X" }, void 0, false, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 323,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "p-3", children: "1965-1980" }, void 0, false, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 324,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "p-3", children: [
              currentYear - 1980,
              "-",
              currentYear - 1965,
              " years old"
            ] }, void 0, true, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 325,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 322,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "border-b", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "p-3", children: "Millennials" }, void 0, false, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 328,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "p-3", children: "1981-1996" }, void 0, false, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 329,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "p-3", children: [
              currentYear - 1996,
              "-",
              currentYear - 1981,
              " years old"
            ] }, void 0, true, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 330,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 327,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "border-b", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "p-3", children: "Gen Z" }, void 0, false, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 333,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "p-3", children: "1997-2012" }, void 0, false, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 334,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "p-3", children: [
              currentYear - 2012,
              "-",
              currentYear - 1997,
              " years old"
            ] }, void 0, true, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 335,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 332,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "p-3", children: "Gen Alpha" }, void 0, false, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 338,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "p-3", children: "2013-Present" }, void 0, false, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 339,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "p-3", children: [
              "0-",
              currentYear - 2013,
              " years old"
            ] }, void 0, true, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 340,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 337,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/generation-finder.tsx",
          lineNumber: 311,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/generation-finder.tsx",
        lineNumber: 303,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/generation-finder.tsx",
        lineNumber: 302,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-8 space-y-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-semibold", children: "Interesting Facts About Each Generation" }, void 0, false, {
          fileName: "app/routes/generation-finder.tsx",
          lineNumber: 347,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-semibold text-primary", children: "The Silent Generation" }, void 0, false, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 351,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "list-disc pl-5 space-y-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "They were the first generation to embrace television as a primary form of entertainment." }, void 0, false, {
                fileName: "app/routes/generation-finder.tsx",
                lineNumber: 353,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "This generation has the highest rate of civic engagement and volunteerism among all living generations." }, void 0, false, {
                fileName: "app/routes/generation-finder.tsx",
                lineNumber: 354,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 352,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 350,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-semibold text-primary", children: "Baby Boomers" }, void 0, false, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 359,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "list-disc pl-5 space-y-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "They witnessed and participated in significant cultural movements like Woodstock and the Civil Rights Movement." }, void 0, false, {
                fileName: "app/routes/generation-finder.tsx",
                lineNumber: 361,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "This generation controls about 70% of all disposable income in the United States." }, void 0, false, {
                fileName: "app/routes/generation-finder.tsx",
                lineNumber: 362,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 360,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 358,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-semibold text-primary", children: "Generation X" }, void 0, false, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 367,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "list-disc pl-5 space-y-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "They were the first generation to grow up with personal computers in their homes." }, void 0, false, {
                fileName: "app/routes/generation-finder.tsx",
                lineNumber: 369,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Gen X has the highest rate of startup founders among all generations." }, void 0, false, {
                fileName: "app/routes/generation-finder.tsx",
                lineNumber: 370,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 368,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 366,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-semibold text-primary", children: "Millennials" }, void 0, false, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 375,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "list-disc pl-5 space-y-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "They are the most educated generation in history, with over 39% holding a bachelor's degree." }, void 0, false, {
                fileName: "app/routes/generation-finder.tsx",
                lineNumber: 377,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Millennials are the first generation to prioritize experiences over material possessions in their spending habits." }, void 0, false, {
                fileName: "app/routes/generation-finder.tsx",
                lineNumber: 378,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 376,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 374,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-semibold text-primary", children: "Generation Z" }, void 0, false, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 383,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "list-disc pl-5 space-y-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "They are the most diverse generation in history and have never known a world without the internet." }, void 0, false, {
                fileName: "app/routes/generation-finder.tsx",
                lineNumber: 385,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Gen Z has an average attention span of 8 seconds, compared to 12 seconds for millennials." }, void 0, false, {
                fileName: "app/routes/generation-finder.tsx",
                lineNumber: 386,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 384,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 382,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-semibold text-primary", children: "Generation Alpha" }, void 0, false, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 391,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "list-disc pl-5 space-y-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "They are the first generation to be born entirely in the 21st century." }, void 0, false, {
                fileName: "app/routes/generation-finder.tsx",
                lineNumber: 393,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Expected to be the most technologically immersed generation, with AI being a natural part of their daily lives." }, void 0, false, {
                fileName: "app/routes/generation-finder.tsx",
                lineNumber: 394,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 392,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 390,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/generation-finder.tsx",
          lineNumber: 349,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/generation-finder.tsx",
        lineNumber: 346,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/generation-finder.tsx",
      lineNumber: 300,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg p-6 space-y-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-bold text-center", children: "Frequently Asked Questions" }, void 0, false, {
        fileName: "app/routes/generation-finder.tsx",
        lineNumber: 402,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2 p-4 border-b", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-semibold text-lg text-primary", children: "How are generations defined?" }, void 0, false, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 405,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "Generations are defined by birth year ranges that correspond to significant cultural, technological, and social changes. These cohorts often share common experiences and characteristics that shape their worldview." }, void 0, false, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 408,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/generation-finder.tsx",
          lineNumber: 404,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2 p-4 border-b", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-semibold text-lg text-primary", children: "Why do generation dates sometimes overlap?" }, void 0, false, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 413,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "Generation boundaries aren't always exact, and there can be some overlap between generations. People born on the cusp between two generations might identify with characteristics of both groups." }, void 0, false, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 416,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/generation-finder.tsx",
          lineNumber: 412,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2 p-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-semibold text-lg text-primary", children: "What if I don't identify with my generation's characteristics?" }, void 0, false, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 421,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "While generational categories can provide insights into shared experiences, they're broad generalizations. Individual experiences, values, and circumstances can vary significantly within each generation." }, void 0, false, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 424,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/generation-finder.tsx",
          lineNumber: 420,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/generation-finder.tsx",
        lineNumber: 403,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/generation-finder.tsx",
      lineNumber: 401,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/generation-finder.tsx",
    lineNumber: 201,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/generation-finder.tsx",
    lineNumber: 200,
    columnNumber: 10
  }, this);
}
_s(GenerationFinder, "2J4ZEfGUVEQofCBwzqufJNOXay8=", false, function() {
  return [useActionData, useNavigation, useLoaderData];
});
_c = GenerationFinder;
var _c;
$RefreshReg$(_c, "GenerationFinder");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  GenerationFinder as default,
  meta
};
//# sourceMappingURL=/build/routes/generation-finder-Y3CDVAGS.js.map
