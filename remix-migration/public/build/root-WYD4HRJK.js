import {
  Calendar,
  Menu,
  X
} from "/build/_shared/chunk-DCYVUSHA.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation
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

// css-bundle-plugin-ns:@remix-run/css-bundle
var cssBundleHref = void 0;

// app/root.tsx
var import_node = __toESM(require_node(), 1);

// app/styles/global.css
var global_default = "/build/_assets/global-LROB2JRA.css";

// app/components/Navigation.tsx
var import_react3 = __toESM(require_react(), 1);

// app/components/navigation/NavLink.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\navigation\\\\NavLink.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\navigation\\NavLink.tsx"
  );
  import.meta.hot.lastModified = "1747379831771.2913";
}
var NavLink = ({
  to,
  children
}) => {
  _s();
  const location = useLocation();
  const isActive = location.pathname === to;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to, className: `text-base font-medium transition-colors duration-200 hover:text-primary ${isActive ? "text-primary" : "text-neutral-gray"}`, prefetch: "intent", children }, void 0, false, {
    fileName: "app/components/navigation/NavLink.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
};
_s(NavLink, "pkHmaVRPskBaU4tMJuJJpV42k1I=", false, function() {
  return [useLocation];
});
_c = NavLink;
var _c;
$RefreshReg$(_c, "NavLink");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/navigation/DesktopNav.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\navigation\\\\DesktopNav.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\navigation\\DesktopNav.tsx"
  );
  import.meta.hot.lastModified = "1747722196089.158";
}
var DesktopNav = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hidden md:flex md:space-x-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavLink, { to: "/", children: "Age Calculator" }, void 0, false, {
      fileName: "app/components/navigation/DesktopNav.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavLink, { to: "/difference", children: "Age Difference" }, void 0, false, {
      fileName: "app/components/navigation/DesktopNav.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavLink, { to: "/date-calculator", children: "Date Calculator" }, void 0, false, {
      fileName: "app/components/navigation/DesktopNav.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavLink, { to: "/birthday-countdown", children: "Birthday Countdown" }, void 0, false, {
      fileName: "app/components/navigation/DesktopNav.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavLink, { to: "/pregnancy-calculator", children: "Pregnancy Age" }, void 0, false, {
      fileName: "app/components/navigation/DesktopNav.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavLink, { to: "/leap-year-calculator", children: "Leap Year" }, void 0, false, {
      fileName: "app/components/navigation/DesktopNav.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavLink, { to: "/retirement-calculator", children: "Retirement" }, void 0, false, {
      fileName: "app/components/navigation/DesktopNav.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavLink, { to: "/generation-finder", children: "Generational Cohort" }, void 0, false, {
      fileName: "app/components/navigation/DesktopNav.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/navigation/DesktopNav.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
};
_c2 = DesktopNav;
var _c2;
$RefreshReg$(_c2, "DesktopNav");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/navigation/MobileNavLink.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\navigation\\\\MobileNavLink.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\navigation\\MobileNavLink.tsx"
  );
  import.meta.hot.lastModified = "1747379962268.0725";
}
var MobileNavLink = ({
  to,
  onClick,
  children
}) => {
  _s2();
  const location = useLocation();
  const isActive = location.pathname === to;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to, className: `block px-3 py-2 rounded-md text-base font-display transition-colors duration-200 ${isActive ? "bg-soft-purple text-primary" : "text-neutral-gray hover:bg-soft-gray hover:text-primary"}`, onClick, prefetch: "intent", children }, void 0, false, {
    fileName: "app/components/navigation/MobileNavLink.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
};
_s2(MobileNavLink, "pkHmaVRPskBaU4tMJuJJpV42k1I=", false, function() {
  return [useLocation];
});
_c3 = MobileNavLink;
var _c3;
$RefreshReg$(_c3, "MobileNavLink");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/navigation/MobileNav.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\navigation\\\\MobileNav.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\navigation\\MobileNav.tsx"
  );
  import.meta.hot.lastModified = "1747722205989.8057";
}
var MobileNav = ({
  isOpen,
  onClose
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: `${isOpen ? "block" : "hidden"} md:hidden absolute top-16 inset-x-0 z-50 bg-white shadow-lg`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "px-2 pt-2 pb-3 space-y-1", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(MobileNavLink, { to: "/", onClick: onClose, children: "Age Calculator" }, void 0, false, {
      fileName: "app/components/navigation/MobileNav.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(MobileNavLink, { to: "/difference", onClick: onClose, children: "Age Difference" }, void 0, false, {
      fileName: "app/components/navigation/MobileNav.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(MobileNavLink, { to: "/date-calculator", onClick: onClose, children: "Date Calculator" }, void 0, false, {
      fileName: "app/components/navigation/MobileNav.tsx",
      lineNumber: 34,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(MobileNavLink, { to: "/birthday-countdown", onClick: onClose, children: "Birthday Countdown" }, void 0, false, {
      fileName: "app/components/navigation/MobileNav.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(MobileNavLink, { to: "/pregnancy-calculator", onClick: onClose, children: "Pregnancy Age" }, void 0, false, {
      fileName: "app/components/navigation/MobileNav.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(MobileNavLink, { to: "/leap-year-calculator", onClick: onClose, children: "Leap Year" }, void 0, false, {
      fileName: "app/components/navigation/MobileNav.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(MobileNavLink, { to: "/retirement-calculator", onClick: onClose, children: "Retirement" }, void 0, false, {
      fileName: "app/components/navigation/MobileNav.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(MobileNavLink, { to: "/generation-finder", onClick: onClose, children: "Generational Cohort" }, void 0, false, {
      fileName: "app/components/navigation/MobileNav.tsx",
      lineNumber: 49,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/navigation/MobileNav.tsx",
    lineNumber: 27,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/navigation/MobileNav.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
};
_c4 = MobileNav;
var _c4;
$RefreshReg$(_c4, "MobileNav");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Navigation.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Navigation.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Navigation.tsx"
  );
  import.meta.hot.lastModified = "1747379987322.5198";
}
var Navigation = () => {
  _s3();
  const [isMenuOpen, setIsMenuOpen] = (0, import_react3.useState)(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("nav", { className: "bg-white border-b border-gray-200", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex justify-between items-center h-16", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center gap-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Calendar, { className: "h-7 w-7 text-primary" }, void 0, false, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 34,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { onClick: toggleMenu, className: "md:hidden p-2 rounded-md text-neutral-gray hover:text-neutral-dark hover:bg-soft-gray focus:outline-none focus:ring-2 focus:ring-primary", "aria-label": isMenuOpen ? "Close menu" : "Open menu", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "sr-only", children: "Open menu" }, void 0, false, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 38,
          columnNumber: 13
        }, this),
        isMenuOpen ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(X, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 39,
          columnNumber: 27
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Menu, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 39,
          columnNumber: 74
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 37,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DesktopNav, {}, void 0, false, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Navigation.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Navigation.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(MobileNav, { isOpen: isMenuOpen, onClose: () => setIsMenuOpen(false) }, void 0, false, {
      fileName: "app/components/Navigation.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Navigation.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
};
_s3(Navigation, "vK10R+uCyHfZ4DZVnxbYkMWJB8g=");
_c5 = Navigation;
var _c5;
$RefreshReg$(_c5, "Navigation");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/root.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\root.tsx"
  );
}
var links = () => [...cssBundleHref ? [{
  rel: "stylesheet",
  href: cssBundleHref
}] : [], {
  rel: "stylesheet",
  href: global_default
}, {
  rel: "icon",
  href: "/favicon.ico"
}];
function App() {
  _s4();
  const {
    url
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("script", { async: true, src: "https://www.googletagmanager.com/gtag/js?id=G-CNH77P68MM" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("script", { dangerouslySetInnerHTML: {
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-CNH77P68MM');
        `
      } }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("body", { className: "min-h-screen bg-gray-50", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Navigation, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 48,
    columnNumber: 10
  }, this);
}
_s4(App, "cA8ld9TUC1Mf2yqxzb4dDjG4ZqA=", false, function() {
  return [useLoaderData];
});
_c6 = App;
var _c6;
$RefreshReg$(_c6, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  App as default,
  links
};
//# sourceMappingURL=/build/root-WYD4HRJK.js.map
