var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isBotRequest(request.headers.get("user-agent")) || remixContext.isSpaMode ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function isBotRequest(userAgent) {
  return userAgent ? "isbot" in isbotModule && typeof isbotModule.isbot == "function" ? isbotModule.isbot(userAgent) : "default" in isbotModule && typeof isbotModule.default == "function" ? isbotModule.default(userAgent) : !1 : !1;
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 66,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 116,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "@remix-run/react";
import { json } from "@remix-run/node";

// app/styles/global.css
var global_default = "/build/_assets/global-LROB2JRA.css";

// app/components/Navigation.tsx
import { useState } from "react";
import { Menu, X, Calendar } from "lucide-react";

// app/components/navigation/NavLink.tsx
import { Link, useLocation } from "@remix-run/react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var NavLink = ({ to, children }) => {
  let isActive = useLocation().pathname === to;
  return /* @__PURE__ */ jsxDEV2(
    Link,
    {
      to,
      className: `text-base font-medium transition-colors duration-200 hover:text-primary ${isActive ? "text-primary" : "text-neutral-gray"}`,
      prefetch: "intent",
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/navigation/NavLink.tsx",
      lineNumber: 13,
      columnNumber: 5
    },
    this
  );
};

// app/components/navigation/DesktopNav.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var DesktopNav = () => /* @__PURE__ */ jsxDEV3("div", { className: "hidden md:flex md:space-x-6", children: [
  /* @__PURE__ */ jsxDEV3(NavLink, { to: "/", children: "Age Calculator" }, void 0, !1, {
    fileName: "app/components/navigation/DesktopNav.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV3(NavLink, { to: "/difference", children: "Age Difference" }, void 0, !1, {
    fileName: "app/components/navigation/DesktopNav.tsx",
    lineNumber: 9,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV3(NavLink, { to: "/date-calculator", children: "Date Calculator" }, void 0, !1, {
    fileName: "app/components/navigation/DesktopNav.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV3(NavLink, { to: "/birthday-countdown", children: "Birthday Countdown" }, void 0, !1, {
    fileName: "app/components/navigation/DesktopNav.tsx",
    lineNumber: 15,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV3(NavLink, { to: "/pregnancy-calculator", children: "Pregnancy Age" }, void 0, !1, {
    fileName: "app/components/navigation/DesktopNav.tsx",
    lineNumber: 18,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV3(NavLink, { to: "/leap-year-calculator", children: "Leap Year" }, void 0, !1, {
    fileName: "app/components/navigation/DesktopNav.tsx",
    lineNumber: 21,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV3(NavLink, { to: "/retirement-calculator", children: "Retirement" }, void 0, !1, {
    fileName: "app/components/navigation/DesktopNav.tsx",
    lineNumber: 24,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV3(NavLink, { to: "/generation-finder", children: "Generational Cohort" }, void 0, !1, {
    fileName: "app/components/navigation/DesktopNav.tsx",
    lineNumber: 27,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/components/navigation/DesktopNav.tsx",
  lineNumber: 5,
  columnNumber: 5
}, this);

// app/components/navigation/MobileNavLink.tsx
import { Link as Link2, useLocation as useLocation2 } from "@remix-run/react";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var MobileNavLink = ({ to, onClick, children }) => {
  let isActive = useLocation2().pathname === to;
  return /* @__PURE__ */ jsxDEV4(
    Link2,
    {
      to,
      className: `block px-3 py-2 rounded-md text-base font-display transition-colors duration-200 ${isActive ? "bg-soft-purple text-primary" : "text-neutral-gray hover:bg-soft-gray hover:text-primary"}`,
      onClick,
      prefetch: "intent",
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/navigation/MobileNavLink.tsx",
      lineNumber: 14,
      columnNumber: 5
    },
    this
  );
};

// app/components/navigation/MobileNav.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var MobileNav = ({ isOpen, onClose }) => /* @__PURE__ */ jsxDEV5(
  "div",
  {
    className: `${isOpen ? "block" : "hidden"} md:hidden absolute top-16 inset-x-0 z-50 bg-white shadow-lg`,
    children: /* @__PURE__ */ jsxDEV5("div", { className: "px-2 pt-2 pb-3 space-y-1", children: [
      /* @__PURE__ */ jsxDEV5(MobileNavLink, { to: "/", onClick: onClose, children: "Age Calculator" }, void 0, !1, {
        fileName: "app/components/navigation/MobileNav.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5(MobileNavLink, { to: "/difference", onClick: onClose, children: "Age Difference" }, void 0, !1, {
        fileName: "app/components/navigation/MobileNav.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5(MobileNavLink, { to: "/date-calculator", onClick: onClose, children: "Date Calculator" }, void 0, !1, {
        fileName: "app/components/navigation/MobileNav.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5(MobileNavLink, { to: "/birthday-countdown", onClick: onClose, children: "Birthday Countdown" }, void 0, !1, {
        fileName: "app/components/navigation/MobileNav.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5(MobileNavLink, { to: "/pregnancy-calculator", onClick: onClose, children: "Pregnancy Age" }, void 0, !1, {
        fileName: "app/components/navigation/MobileNav.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5(MobileNavLink, { to: "/leap-year-calculator", onClick: onClose, children: "Leap Year" }, void 0, !1, {
        fileName: "app/components/navigation/MobileNav.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5(MobileNavLink, { to: "/retirement-calculator", onClick: onClose, children: "Retirement" }, void 0, !1, {
        fileName: "app/components/navigation/MobileNav.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5(MobileNavLink, { to: "/generation-finder", onClick: onClose, children: "Generational Cohort" }, void 0, !1, {
        fileName: "app/components/navigation/MobileNav.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/navigation/MobileNav.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/components/navigation/MobileNav.tsx",
    lineNumber: 10,
    columnNumber: 5
  },
  this
);

// app/components/Navigation.tsx
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var Navigation = () => {
  let [isMenuOpen, setIsMenuOpen] = useState(!1);
  return /* @__PURE__ */ jsxDEV6("nav", { className: "bg-white border-b border-gray-200", children: [
    /* @__PURE__ */ jsxDEV6("div", { className: "max-w-7xl mx-auto px-4", children: /* @__PURE__ */ jsxDEV6("div", { className: "flex justify-between items-center h-16", children: [
      /* @__PURE__ */ jsxDEV6("div", { className: "flex items-center gap-1", children: /* @__PURE__ */ jsxDEV6(Calendar, { className: "h-7 w-7 text-primary" }, void 0, !1, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 16,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 15,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV6(
        "button",
        {
          onClick: () => setIsMenuOpen(!isMenuOpen),
          className: "md:hidden p-2 rounded-md text-neutral-gray hover:text-neutral-dark hover:bg-soft-gray focus:outline-none focus:ring-2 focus:ring-primary",
          "aria-label": isMenuOpen ? "Close menu" : "Open menu",
          children: [
            /* @__PURE__ */ jsxDEV6("span", { className: "sr-only", children: "Open menu" }, void 0, !1, {
              fileName: "app/components/Navigation.tsx",
              lineNumber: 24,
              columnNumber: 13
            }, this),
            isMenuOpen ? /* @__PURE__ */ jsxDEV6(X, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
              fileName: "app/components/Navigation.tsx",
              lineNumber: 26,
              columnNumber: 15
            }, this) : /* @__PURE__ */ jsxDEV6(Menu, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
              fileName: "app/components/Navigation.tsx",
              lineNumber: 28,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 19,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV6(DesktopNav, {}, void 0, !1, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Navigation.tsx",
      lineNumber: 14,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Navigation.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6(MobileNav, { isOpen: isMenuOpen, onClose: () => setIsMenuOpen(!1) }, void 0, !1, {
      fileName: "app/components/Navigation.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Navigation.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
};

// app/root.tsx
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var links = () => [
  ...void 0 ? [{ rel: "stylesheet", href: void 0 }] : [],
  { rel: "stylesheet", href: global_default },
  { rel: "icon", href: "/favicon.ico" }
], loader = async ({ request }) => json({
  url: request.url
});
function App() {
  let { url } = useLoaderData();
  return /* @__PURE__ */ jsxDEV7("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV7("head", { children: [
      /* @__PURE__ */ jsxDEV7("script", { async: !0, src: "https://www.googletagmanager.com/gtag/js?id=G-CNH77P68MM" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV7("script", { dangerouslySetInnerHTML: { __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-CNH77P68MM');
        ` } }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV7("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV7("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV7(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV7(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV7("body", { className: "min-h-screen bg-gray-50", children: [
      /* @__PURE__ */ jsxDEV7(Navigation, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV7(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV7(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV7(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV7(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

// app/routes/retirement-calculator.tsx
var retirement_calculator_exports = {};
__export(retirement_calculator_exports, {
  action: () => action,
  default: () => RetirementCalculator,
  loader: () => loader2,
  meta: () => meta
});
import { useState as useState2 } from "react";
import { json as json2 } from "@remix-run/node";
import { Form, useActionData, useNavigation, useLoaderData as useLoaderData2 } from "@remix-run/react";

// app/components/ui/button.tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

// app/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// app/components/ui/button.tsx
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
var buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Button = React.forwardRef(
  ({ className, variant, size, asChild = !1, ...props }, ref) => /* @__PURE__ */ jsxDEV8(
    asChild ? Slot : "button",
    {
      className: cn(buttonVariants({ variant, size, className })),
      ref,
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/button.tsx",
      lineNumber: 46,
      columnNumber: 7
    },
    this
  )
);
Button.displayName = "Button";

// app/components/ui/card.tsx
import * as React2 from "react";
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
var Card = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV9(
  "div",
  {
    ref,
    className: cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/card.tsx",
    lineNumber: 9,
    columnNumber: 3
  },
  this
));
Card.displayName = "Card";
var CardHeader = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV9(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/card.tsx",
    lineNumber: 24,
    columnNumber: 3
  },
  this
));
CardHeader.displayName = "CardHeader";
var CardTitle = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV9(
  "h3",
  {
    ref,
    className: cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/card.tsx",
    lineNumber: 36,
    columnNumber: 3
  },
  this
));
CardTitle.displayName = "CardTitle";
var CardDescription = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV9(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/card.tsx",
    lineNumber: 51,
    columnNumber: 3
  },
  this
));
CardDescription.displayName = "CardDescription";
var CardContent = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV9("div", { ref, className: cn("p-6 pt-0", className), ...props }, void 0, !1, {
  fileName: "app/components/ui/card.tsx",
  lineNumber: 63,
  columnNumber: 3
}, this));
CardContent.displayName = "CardContent";
var CardFooter = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV9(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/card.tsx",
    lineNumber: 71,
    columnNumber: 3
  },
  this
));
CardFooter.displayName = "CardFooter";

// app/components/ui/label.tsx
import * as React3 from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva as cva2 } from "class-variance-authority";
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
var labelVariants = cva2(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Label = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV10(
  LabelPrimitive.Root,
  {
    ref,
    className: cn(labelVariants(), className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/label.tsx",
    lineNumber: 16,
    columnNumber: 3
  },
  this
));
Label.displayName = LabelPrimitive.Root.displayName;

// app/routes/retirement-calculator.tsx
import { addYears, differenceInYears, format } from "date-fns";
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
var meta = () => [
  { title: "Retirement Calculator - Plan Your Retirement" },
  { name: "description", content: "Calculate your retirement date, projected savings, and monthly contributions needed with our free Retirement Calculator." },
  { name: "keywords", content: "retirement calculator, retirement planning, retirement age, retirement savings, retirement date" },
  { property: "og:title", content: "Retirement Calculator - Plan Your Retirement" },
  { property: "og:description", content: "Calculate your retirement date, projected savings, and monthly contributions needed with our free Retirement Calculator." },
  { property: "og:type", content: "website" },
  { property: "og:url", content: "https://agecalculator.app/retirement-calculator" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "Retirement Calculator - Plan Your Retirement" },
  { name: "twitter:description", content: "Calculate your retirement date, projected savings, and monthly contributions needed with our free Retirement Calculator." },
  { rel: "canonical", href: "https://agecalculator.app/retirement-calculator" }
];
function loader2() {
  return {
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Retirement Calculator",
      applicationCategory: "FinanceApplication",
      description: "Calculate your retirement date, projected savings, and monthly contributions needed with our free Retirement Calculator.",
      operatingSystem: "Any",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD"
      },
      url: "https://agecalculator.app/retirement-calculator",
      screenshot: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe",
      featureList: "Calculate retirement date, projected savings, monthly contributions. Easy to use. Free. Instant calculations.",
      inLanguage: "en",
      audience: {
        "@type": "Audience",
        audienceType: "Everyone"
      }
    },
    breadcrumbJsonLd: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://agecalculator.app"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Retirement Calculator",
          item: "https://agecalculator.app/retirement-calculator"
        }
      ]
    },
    faqJsonLd: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How is my retirement date calculated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The calculator adds your chosen retirement age to your birth date to determine when you'll reach retirement age. It then calculates the number of years until retirement and uses compound interest formulas to project your savings."
          }
        },
        {
          "@type": "Question",
          name: "What factors affect my retirement savings?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Key factors include your current savings, monthly contributions, expected return on investment, and your retirement goal amount. The calculator uses compound interest to project how these factors will affect your retirement savings over time."
          }
        },
        {
          "@type": "Question",
          name: "How accurate are the retirement projections?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The projections are based on the information you provide and assume consistent returns. Real-world factors like market fluctuations, inflation, and changes in contribution amounts can affect actual results. It's recommended to review and adjust your retirement plan regularly."
          }
        }
      ]
    }
  };
}
async function action({ request }) {
  let formData = await request.formData(), birthDateStr = formData.get("birthDate"), retirementAgeStr = formData.get("retirementAge"), currentSavingsStr = formData.get("currentSavings"), monthlySavingsStr = formData.get("monthlySavings"), retirementGoalStr = formData.get("retirementGoal"), expectedReturnStr = formData.get("expectedReturn");
  if (!birthDateStr || !retirementAgeStr)
    return json2({ error: "Birth date and retirement age are required" });
  let birthDate = new Date(birthDateStr), retirementAge = parseInt(retirementAgeStr, 10), currentSavings = parseFloat(currentSavingsStr || "0"), monthlySavings = parseFloat(monthlySavingsStr || "0"), retirementGoal = parseFloat(retirementGoalStr || "0"), expectedReturn = parseFloat(expectedReturnStr || "7") / 100, currentAge = differenceInYears(/* @__PURE__ */ new Date(), birthDate), retirementDate = addYears(birthDate, retirementAge), yearsUntilRetirement = Math.max(0, retirementAge - currentAge), projectedSavings = currentSavings * Math.pow(1 + expectedReturn, yearsUntilRetirement), annualSavings = monthlySavings * 12;
  expectedReturn > 0 ? projectedSavings += annualSavings * (Math.pow(1 + expectedReturn, yearsUntilRetirement) - 1) / expectedReturn : projectedSavings += annualSavings * yearsUntilRetirement;
  let monthlySavingsNeeded = 0;
  if (retirementGoal > 0 && yearsUntilRetirement > 0) {
    let goalMinusCurrentSavings = retirementGoal - currentSavings * Math.pow(1 + expectedReturn, yearsUntilRetirement);
    expectedReturn > 0 ? monthlySavingsNeeded = goalMinusCurrentSavings * expectedReturn / (Math.pow(1 + expectedReturn, yearsUntilRetirement) - 1) / 12 : monthlySavingsNeeded = goalMinusCurrentSavings / (yearsUntilRetirement * 12), monthlySavingsNeeded = Math.max(0, monthlySavingsNeeded);
  }
  let result = {
    currentAge,
    retirementAge,
    yearsUntilRetirement,
    retirementDate: format(retirementDate, "MMMM d, yyyy"),
    monthlySavingsNeeded: Math.round(monthlySavingsNeeded),
    projectedSavings: Math.round(projectedSavings)
  };
  return json2({ result });
}
function RetirementCalculator() {
  let actionData = useActionData(), navigation = useNavigation(), { jsonLd, breadcrumbJsonLd, faqJsonLd } = useLoaderData2(), isSubmitting = navigation.state === "submitting", [showAdvanced, setShowAdvanced] = useState2(!1);
  return /* @__PURE__ */ jsxDEV11("div", { className: "min-h-screen bg-gray-50 py-10", children: /* @__PURE__ */ jsxDEV11("div", { className: "max-w-3xl mx-auto", children: [
    /* @__PURE__ */ jsxDEV11(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
          __html: JSON.stringify(jsonLd)
        }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/retirement-calculator.tsx",
        lineNumber: 189,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV11(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
          __html: JSON.stringify(breadcrumbJsonLd)
        }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/retirement-calculator.tsx",
        lineNumber: 195,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV11(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
          __html: JSON.stringify(faqJsonLd)
        }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/retirement-calculator.tsx",
        lineNumber: 201,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV11("div", { className: "text-center space-y-4", children: [
      /* @__PURE__ */ jsxDEV11("h1", { className: "text-4xl font-bold text-primary", children: "Retirement Calculator" }, void 0, !1, {
        fileName: "app/routes/retirement-calculator.tsx",
        lineNumber: 209,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV11("p", { className: "text-xl text-neutral-gray max-w-2xl mx-auto", children: "Plan your financial future and calculate when you can retire." }, void 0, !1, {
        fileName: "app/routes/retirement-calculator.tsx",
        lineNumber: 210,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/retirement-calculator.tsx",
      lineNumber: 208,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV11(Card, { className: "p-6 bg-white/80 backdrop-blur-sm", children: /* @__PURE__ */ jsxDEV11(Form, { method: "post", className: "space-y-6", children: [
      /* @__PURE__ */ jsxDEV11("div", { className: "grid gap-6 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxDEV11("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxDEV11(Label, { htmlFor: "birthDate", children: "Your Birth Date" }, void 0, !1, {
            fileName: "app/routes/retirement-calculator.tsx",
            lineNumber: 219,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV11(
            "input",
            {
              type: "date",
              id: "birthDate",
              name: "birthDate",
              className: "w-full rounded-md border border-input bg-background px-3 py-2",
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/retirement-calculator.tsx",
              lineNumber: 220,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/retirement-calculator.tsx",
          lineNumber: 218,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV11("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxDEV11(Label, { htmlFor: "retirementAge", children: "Planned Retirement Age" }, void 0, !1, {
            fileName: "app/routes/retirement-calculator.tsx",
            lineNumber: 230,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV11(
            "input",
            {
              type: "number",
              id: "retirementAge",
              name: "retirementAge",
              className: "w-full rounded-md border border-input bg-background px-3 py-2",
              defaultValue: 65,
              min: "1",
              max: "120",
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/retirement-calculator.tsx",
              lineNumber: 231,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/retirement-calculator.tsx",
          lineNumber: 229,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/retirement-calculator.tsx",
        lineNumber: 217,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV11("div", { className: "pt-2", children: /* @__PURE__ */ jsxDEV11(
        Button,
        {
          type: "button",
          variant: "outline",
          onClick: () => setShowAdvanced(!showAdvanced),
          className: "w-full md:w-auto",
          children: showAdvanced ? "Hide Advanced Options" : "Show Advanced Options"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/retirement-calculator.tsx",
          lineNumber: 245,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/retirement-calculator.tsx",
        lineNumber: 244,
        columnNumber: 13
      }, this),
      showAdvanced && /* @__PURE__ */ jsxDEV11("div", { className: "grid gap-6 md:grid-cols-2 pt-2", children: [
        /* @__PURE__ */ jsxDEV11("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxDEV11(Label, { htmlFor: "currentSavings", children: "Current Retirement Savings ($)" }, void 0, !1, {
            fileName: "app/routes/retirement-calculator.tsx",
            lineNumber: 258,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV11(
            "input",
            {
              type: "number",
              id: "currentSavings",
              name: "currentSavings",
              className: "w-full rounded-md border border-input bg-background px-3 py-2",
              defaultValue: 0,
              min: "0"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/retirement-calculator.tsx",
              lineNumber: 259,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/retirement-calculator.tsx",
          lineNumber: 257,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV11("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxDEV11(Label, { htmlFor: "monthlySavings", children: "Current Monthly Contributions ($)" }, void 0, !1, {
            fileName: "app/routes/retirement-calculator.tsx",
            lineNumber: 270,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV11(
            "input",
            {
              type: "number",
              id: "monthlySavings",
              name: "monthlySavings",
              className: "w-full rounded-md border border-input bg-background px-3 py-2",
              defaultValue: 0,
              min: "0"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/retirement-calculator.tsx",
              lineNumber: 271,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/retirement-calculator.tsx",
          lineNumber: 269,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV11("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxDEV11(Label, { htmlFor: "retirementGoal", children: "Retirement Savings Goal ($)" }, void 0, !1, {
            fileName: "app/routes/retirement-calculator.tsx",
            lineNumber: 282,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV11(
            "input",
            {
              type: "number",
              id: "retirementGoal",
              name: "retirementGoal",
              className: "w-full rounded-md border border-input bg-background px-3 py-2",
              defaultValue: 1e6,
              min: "0"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/retirement-calculator.tsx",
              lineNumber: 283,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/retirement-calculator.tsx",
          lineNumber: 281,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV11("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxDEV11(Label, { htmlFor: "expectedReturn", children: "Expected Annual Return (%)" }, void 0, !1, {
            fileName: "app/routes/retirement-calculator.tsx",
            lineNumber: 294,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV11(
            "input",
            {
              type: "number",
              id: "expectedReturn",
              name: "expectedReturn",
              className: "w-full rounded-md border border-input bg-background px-3 py-2",
              defaultValue: 7,
              min: "0",
              max: "30",
              step: "0.1"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/retirement-calculator.tsx",
              lineNumber: 295,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/retirement-calculator.tsx",
          lineNumber: 293,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/retirement-calculator.tsx",
        lineNumber: 256,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV11(Button, { type: "submit", className: "w-full", disabled: isSubmitting, children: isSubmitting ? "Calculating..." : "Calculate Retirement Plan" }, void 0, !1, {
        fileName: "app/routes/retirement-calculator.tsx",
        lineNumber: 309,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/retirement-calculator.tsx",
      lineNumber: 216,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/retirement-calculator.tsx",
      lineNumber: 215,
      columnNumber: 9
    }, this),
    actionData?.result && /* @__PURE__ */ jsxDEV11("div", { className: "py-4", children: [
      /* @__PURE__ */ jsxDEV11("h2", { className: "text-2xl font-bold mb-4", children: "Your Retirement Projection" }, void 0, !1, {
        fileName: "app/routes/retirement-calculator.tsx",
        lineNumber: 317,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV11("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 animate-slideUp", children: [
        /* @__PURE__ */ jsxDEV11(Card, { className: "p-4 bg-white/80 backdrop-blur-sm", children: [
          /* @__PURE__ */ jsxDEV11("h3", { className: "text-lg font-medium text-primary mb-2", children: "Retirement Timeline" }, void 0, !1, {
            fileName: "app/routes/retirement-calculator.tsx",
            lineNumber: 320,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV11("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDEV11("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxDEV11("span", { className: "text-gray-600", children: "Current Age:" }, void 0, !1, {
                fileName: "app/routes/retirement-calculator.tsx",
                lineNumber: 323,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV11("span", { className: "font-semibold", children: [
                actionData.result.currentAge,
                " years"
              ] }, void 0, !0, {
                fileName: "app/routes/retirement-calculator.tsx",
                lineNumber: 324,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/retirement-calculator.tsx",
              lineNumber: 322,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV11("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxDEV11("span", { className: "text-gray-600", children: "Years Until Retirement:" }, void 0, !1, {
                fileName: "app/routes/retirement-calculator.tsx",
                lineNumber: 327,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV11("span", { className: "font-semibold", children: [
                actionData.result.yearsUntilRetirement,
                " years"
              ] }, void 0, !0, {
                fileName: "app/routes/retirement-calculator.tsx",
                lineNumber: 328,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/retirement-calculator.tsx",
              lineNumber: 326,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV11("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxDEV11("span", { className: "text-gray-600", children: "Retirement Date:" }, void 0, !1, {
                fileName: "app/routes/retirement-calculator.tsx",
                lineNumber: 331,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV11("span", { className: "font-semibold", children: actionData.result.retirementDate }, void 0, !1, {
                fileName: "app/routes/retirement-calculator.tsx",
                lineNumber: 332,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/retirement-calculator.tsx",
              lineNumber: 330,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/retirement-calculator.tsx",
            lineNumber: 321,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/retirement-calculator.tsx",
          lineNumber: 319,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV11(Card, { className: "p-4 bg-white/80 backdrop-blur-sm", children: [
          /* @__PURE__ */ jsxDEV11("h3", { className: "text-lg font-medium text-primary mb-2", children: "Savings Projection" }, void 0, !1, {
            fileName: "app/routes/retirement-calculator.tsx",
            lineNumber: 338,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV11("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDEV11("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxDEV11("span", { className: "text-gray-600", children: "Projected Savings:" }, void 0, !1, {
                fileName: "app/routes/retirement-calculator.tsx",
                lineNumber: 341,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV11("span", { className: "font-semibold", children: [
                "$",
                actionData.result.projectedSavings.toLocaleString()
              ] }, void 0, !0, {
                fileName: "app/routes/retirement-calculator.tsx",
                lineNumber: 342,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/retirement-calculator.tsx",
              lineNumber: 340,
              columnNumber: 19
            }, this),
            actionData.result.monthlySavingsNeeded > 0 && /* @__PURE__ */ jsxDEV11("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxDEV11("span", { className: "text-gray-600", children: "Monthly Savings Needed:" }, void 0, !1, {
                fileName: "app/routes/retirement-calculator.tsx",
                lineNumber: 346,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV11("span", { className: "font-semibold", children: [
                "$",
                actionData.result.monthlySavingsNeeded.toLocaleString()
              ] }, void 0, !0, {
                fileName: "app/routes/retirement-calculator.tsx",
                lineNumber: 347,
                columnNumber: 23
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/retirement-calculator.tsx",
              lineNumber: 345,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/retirement-calculator.tsx",
            lineNumber: 339,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/retirement-calculator.tsx",
          lineNumber: 337,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV11(Card, { className: "p-4 bg-white/80 backdrop-blur-sm", children: [
          /* @__PURE__ */ jsxDEV11("h3", { className: "text-lg font-medium text-primary mb-2", children: "Retirement Age" }, void 0, !1, {
            fileName: "app/routes/retirement-calculator.tsx",
            lineNumber: 354,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV11("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDEV11("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxDEV11("span", { className: "text-gray-600", children: "Planned Retirement Age:" }, void 0, !1, {
                fileName: "app/routes/retirement-calculator.tsx",
                lineNumber: 357,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV11("span", { className: "font-semibold", children: [
                actionData.result.retirementAge,
                " years"
              ] }, void 0, !0, {
                fileName: "app/routes/retirement-calculator.tsx",
                lineNumber: 358,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/retirement-calculator.tsx",
              lineNumber: 356,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV11("div", { className: "pt-2 text-sm text-gray-500", children: "Adjust your retirement age to see how it affects your financial projections." }, void 0, !1, {
              fileName: "app/routes/retirement-calculator.tsx",
              lineNumber: 360,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/retirement-calculator.tsx",
            lineNumber: 355,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/retirement-calculator.tsx",
          lineNumber: 353,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/retirement-calculator.tsx",
        lineNumber: 318,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/retirement-calculator.tsx",
      lineNumber: 316,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV11("div", { className: "grid gap-8 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxDEV11(Card, { className: "p-6 space-y-4 bg-white/80 backdrop-blur-sm", children: [
        /* @__PURE__ */ jsxDEV11("h2", { className: "text-2xl font-bold", children: "Retirement Planning Tips" }, void 0, !1, {
          fileName: "app/routes/retirement-calculator.tsx",
          lineNumber: 371,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV11("ul", { className: "space-y-3 list-disc pl-5 text-gray-700", children: [
          /* @__PURE__ */ jsxDEV11("li", { children: [
            /* @__PURE__ */ jsxDEV11("strong", { children: "Start Early:" }, void 0, !1, {
              fileName: "app/routes/retirement-calculator.tsx",
              lineNumber: 373,
              columnNumber: 19
            }, this),
            " The power of compound interest means the earlier you start saving, the less you'll need to save each month."
          ] }, void 0, !0, {
            fileName: "app/routes/retirement-calculator.tsx",
            lineNumber: 373,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV11("li", { children: [
            /* @__PURE__ */ jsxDEV11("strong", { children: "Max Out Tax-Advantaged Accounts:" }, void 0, !1, {
              fileName: "app/routes/retirement-calculator.tsx",
              lineNumber: 374,
              columnNumber: 19
            }, this),
            " Contribute to 401(k)s and IRAs to reduce taxable income and grow investments tax-free."
          ] }, void 0, !0, {
            fileName: "app/routes/retirement-calculator.tsx",
            lineNumber: 374,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV11("li", { children: [
            /* @__PURE__ */ jsxDEV11("strong", { children: "Diversify Investments:" }, void 0, !1, {
              fileName: "app/routes/retirement-calculator.tsx",
              lineNumber: 375,
              columnNumber: 19
            }, this),
            " Spread your investments across different asset classes to manage risk."
          ] }, void 0, !0, {
            fileName: "app/routes/retirement-calculator.tsx",
            lineNumber: 375,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV11("li", { children: [
            /* @__PURE__ */ jsxDEV11("strong", { children: "Adjust for Inflation:" }, void 0, !1, {
              fileName: "app/routes/retirement-calculator.tsx",
              lineNumber: 376,
              columnNumber: 19
            }, this),
            " Remember that inflation will reduce purchasing power over time."
          ] }, void 0, !0, {
            fileName: "app/routes/retirement-calculator.tsx",
            lineNumber: 376,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV11("li", { children: [
            /* @__PURE__ */ jsxDEV11("strong", { children: "Create a Budget:" }, void 0, !1, {
              fileName: "app/routes/retirement-calculator.tsx",
              lineNumber: 377,
              columnNumber: 19
            }, this),
            " Track expenses and identify areas where you can increase savings."
          ] }, void 0, !0, {
            fileName: "app/routes/retirement-calculator.tsx",
            lineNumber: 377,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/retirement-calculator.tsx",
          lineNumber: 372,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/retirement-calculator.tsx",
        lineNumber: 370,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV11(Card, { className: "p-6 space-y-4 bg-white/80 backdrop-blur-sm", children: [
        /* @__PURE__ */ jsxDEV11("h2", { className: "text-2xl font-bold", children: "Understanding the Results" }, void 0, !1, {
          fileName: "app/routes/retirement-calculator.tsx",
          lineNumber: 382,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV11("p", { className: "text-gray-700", children: "Our retirement calculator provides estimates based on the information you provide. The projected savings uses a compound interest calculation that factors in your current savings, monthly contributions, and expected investment returns." }, void 0, !1, {
          fileName: "app/routes/retirement-calculator.tsx",
          lineNumber: 383,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV11("p", { className: "text-gray-700", children: 'The "Monthly Savings Needed" shows how much you should save each month to reach your retirement goal, based on your current age, retirement age, and expected return rate.' }, void 0, !1, {
          fileName: "app/routes/retirement-calculator.tsx",
          lineNumber: 386,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV11("p", { className: "text-gray-700 font-semibold", children: "Note: These projections are estimates and do not account for taxes, inflation, or market volatility. Consult with a financial advisor for personalized retirement planning." }, void 0, !1, {
          fileName: "app/routes/retirement-calculator.tsx",
          lineNumber: 389,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/retirement-calculator.tsx",
        lineNumber: 381,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/retirement-calculator.tsx",
      lineNumber: 369,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV11("div", { className: "bg-white rounded-lg p-6 space-y-6", children: [
      /* @__PURE__ */ jsxDEV11("h2", { className: "text-2xl font-bold text-center", children: "Frequently Asked Questions" }, void 0, !1, {
        fileName: "app/routes/retirement-calculator.tsx",
        lineNumber: 396,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV11("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxDEV11("div", { className: "space-y-2 p-4 border-b", children: [
          /* @__PURE__ */ jsxDEV11("h3", { className: "font-semibold text-lg text-primary", children: "How much should I save for retirement?" }, void 0, !1, {
            fileName: "app/routes/retirement-calculator.tsx",
            lineNumber: 399,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV11("p", { className: "text-gray-600", children: "Financial experts often recommend saving 10-15% of your income for retirement. However, the ideal amount varies based on your lifestyle, expected expenses in retirement, and when you start saving. Our calculator can help you estimate a target based on your retirement goals." }, void 0, !1, {
            fileName: "app/routes/retirement-calculator.tsx",
            lineNumber: 402,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/retirement-calculator.tsx",
          lineNumber: 398,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV11("div", { className: "space-y-2 p-4 border-b", children: [
          /* @__PURE__ */ jsxDEV11("h3", { className: "font-semibold text-lg text-primary", children: "What retirement accounts should I use?" }, void 0, !1, {
            fileName: "app/routes/retirement-calculator.tsx",
            lineNumber: 407,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV11("p", { className: "text-gray-600", children: "Consider tax-advantaged accounts like 401(k)s, 403(b)s, or IRAs. Many employers offer matching contributions to 401(k) plans, which is essentially free money. After maximizing any employer match, you might consider a Roth IRA for tax-free growth if you're eligible." }, void 0, !1, {
            fileName: "app/routes/retirement-calculator.tsx",
            lineNumber: 410,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/retirement-calculator.tsx",
          lineNumber: 406,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV11("div", { className: "space-y-2 p-4", children: [
          /* @__PURE__ */ jsxDEV11("h3", { className: "font-semibold text-lg text-primary", children: "How does inflation affect my retirement savings?" }, void 0, !1, {
            fileName: "app/routes/retirement-calculator.tsx",
            lineNumber: 415,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV11("p", { className: "text-gray-600", children: "Inflation reduces the purchasing power of your money over time. For example, with 3% annual inflation, $100,000 today would only buy about $55,000 worth of goods in 20 years. This calculator doesn't explicitly account for inflation, so consider that your retirement goal may need to be higher to maintain your desired lifestyle." }, void 0, !1, {
            fileName: "app/routes/retirement-calculator.tsx",
            lineNumber: 418,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/retirement-calculator.tsx",
          lineNumber: 414,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/retirement-calculator.tsx",
        lineNumber: 397,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/retirement-calculator.tsx",
      lineNumber: 395,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/retirement-calculator.tsx",
    lineNumber: 188,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/retirement-calculator.tsx",
    lineNumber: 187,
    columnNumber: 5
  }, this);
}

// app/routes/leap-year-calculator.tsx
var leap_year_calculator_exports = {};
__export(leap_year_calculator_exports, {
  action: () => action2,
  default: () => LeapYearCalculator,
  loader: () => loader3,
  meta: () => meta2
});
import { json as json3 } from "@remix-run/node";
import { Form as Form2, useActionData as useActionData2, useNavigation as useNavigation2, useLoaderData as useLoaderData3 } from "@remix-run/react";
import { isLeapYear } from "date-fns";

// app/components/age-calculator/ResultCard.tsx
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
var ResultCard = ({ title, value, description }) => /* @__PURE__ */ jsxDEV12(Card, { className: "p-6 text-center bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-primary", children: [
  /* @__PURE__ */ jsxDEV12("h3", { className: "text-sm font-medium text-soft-charcoal mb-3", children: title }, void 0, !1, {
    fileName: "app/components/age-calculator/ResultCard.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ jsxDEV12("p", { className: "text-3xl font-bold mb-2 font-display text-primary-dark", children: value }, void 0, !1, {
    fileName: "app/components/age-calculator/ResultCard.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ jsxDEV12("p", { className: "text-sm text-neutral-gray", children: description }, void 0, !1, {
    fileName: "app/components/age-calculator/ResultCard.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/components/age-calculator/ResultCard.tsx",
  lineNumber: 10,
  columnNumber: 3
}, this);

// app/routes/leap-year-calculator.tsx
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
var meta2 = () => [
  { title: "Leap Year Calculator - Check if a Year is a Leap Year" },
  { name: "description", content: "Check if any year is a leap year and learn about leap year rules with our free Leap Year Calculator." },
  { name: "keywords", content: "leap year calculator, is leap year, leap year rules, february 29, leap day" },
  { property: "og:title", content: "Leap Year Calculator - Check if a Year is a Leap Year" },
  { property: "og:description", content: "Check if any year is a leap year and learn about leap year rules with our free Leap Year Calculator." },
  { property: "og:type", content: "website" },
  { property: "og:url", content: "https://agecalculator.app/leap-year-calculator" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "Leap Year Calculator - Check if a Year is a Leap Year" },
  { name: "twitter:description", content: "Check if any year is a leap year and learn about leap year rules with our free Leap Year Calculator." },
  { rel: "canonical", href: "https://agecalculator.app/leap-year-calculator" }
];
function loader3() {
  return {
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Leap Year Calculator",
      applicationCategory: "UtilityApplication",
      description: "Check if any year is a leap year and learn about leap year rules with our free Leap Year Calculator.",
      operatingSystem: "Any",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD"
      },
      url: "https://agecalculator.app/leap-year-calculator",
      screenshot: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe",
      featureList: "Check leap years, learn leap year rules, find next leap years. Easy to use. Free. Instant calculations.",
      inLanguage: "en",
      audience: {
        "@type": "Audience",
        audienceType: "Everyone"
      }
    },
    breadcrumbJsonLd: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://agecalculator.app"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Leap Year Calculator",
          item: "https://agecalculator.app/leap-year-calculator"
        }
      ]
    },
    faqJsonLd: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How often do leap years occur?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Leap years typically occur every 4 years. However, years divisible by 100 are not leap years unless they are also divisible by 400. This means that while 2000 was a leap year, 1900 was not, and 2100 will not be."
          }
        },
        {
          "@type": "Question",
          name: "What happens to people born on February 29?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "People born on February 29 typically celebrate their birthdays on February 28 or March 1 in non-leap years. Legally, most jurisdictions recognize March 1 as their official birthday in non-leap years."
          }
        },
        {
          "@type": "Question",
          name: "Why are centuries special in leap year calculations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Century years (those ending in 00) are not leap years unless they are divisible by 400. This refinement to the leap year rule makes the Gregorian calendar more accurate, as it accounts for the fact that the solar year is slightly less than 365.25 days."
          }
        }
      ]
    }
  };
}
async function action2({ request }) {
  let yearStr = (await request.formData()).get("year");
  if (!yearStr)
    return json3({ error: "Year is required" });
  let year = parseInt(yearStr, 10);
  if (isNaN(year) || year < 1 || year > 9999)
    return json3({ error: "Please enter a valid year between 1 and 9999" });
  let leapYearResult = isLeapYear(new Date(year, 1, 1)), nextLeapYear = year;
  for (; !isLeapYear(new Date(++nextLeapYear, 1, 1)) && !(nextLeapYear > year + 4); )
    ;
  let previousLeapYear = year;
  for (; previousLeapYear > 0 && !isLeapYear(new Date(--previousLeapYear, 1, 1)) && !(previousLeapYear < year - 4); )
    ;
  let result = {
    year,
    isLeapYear: leapYearResult,
    nextLeapYear,
    previousLeapYear: previousLeapYear > 0 ? previousLeapYear : 0,
    daysInFebruary: leapYearResult ? 29 : 28,
    daysInYear: leapYearResult ? 366 : 365
  };
  return json3({ result });
}
function LeapYearCalculator() {
  let actionData = useActionData2(), navigation = useNavigation2(), { jsonLd, breadcrumbJsonLd, faqJsonLd } = useLoaderData3(), isSubmitting = navigation.state === "submitting", currentYear = (/* @__PURE__ */ new Date()).getFullYear(), hasResult = actionData && typeof actionData == "object" && "result" in actionData && actionData.result;
  return /* @__PURE__ */ jsxDEV13("div", { className: "min-h-screen bg-gray-50 py-10", children: [
    /* @__PURE__ */ jsxDEV13("div", { className: "max-w-3xl mx-auto space-y-8", children: [
      /* @__PURE__ */ jsxDEV13("div", { className: "bg-white rounded-xl shadow p-10 mb-8", children: [
        /* @__PURE__ */ jsxDEV13("div", { className: "text-center space-y-4 mb-8", children: [
          /* @__PURE__ */ jsxDEV13("h1", { className: "text-4xl font-bold text-primary", children: "Leap Year Calculator" }, void 0, !1, {
            fileName: "app/routes/leap-year-calculator.tsx",
            lineNumber: 164,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV13("p", { className: "text-xl text-neutral-gray max-w-2xl mx-auto", children: "Check if a year is a leap year and learn about leap year rules." }, void 0, !1, {
            fileName: "app/routes/leap-year-calculator.tsx",
            lineNumber: 165,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/leap-year-calculator.tsx",
          lineNumber: 163,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV13(Form2, { method: "post", className: "space-y-6 max-w-md mx-auto", children: [
          /* @__PURE__ */ jsxDEV13("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxDEV13(Label, { htmlFor: "year", children: "Enter Year" }, void 0, !1, {
              fileName: "app/routes/leap-year-calculator.tsx",
              lineNumber: 171,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV13(
              "input",
              {
                type: "number",
                id: "year",
                name: "year",
                className: "w-full rounded-md border border-input bg-background px-3 py-2",
                defaultValue: currentYear,
                min: "1",
                max: "9999",
                required: !0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/leap-year-calculator.tsx",
                lineNumber: 172,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/leap-year-calculator.tsx",
            lineNumber: 170,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV13(Button, { type: "submit", className: "w-full", disabled: isSubmitting, children: isSubmitting ? "Checking..." : "Check Leap Year" }, void 0, !1, {
            fileName: "app/routes/leap-year-calculator.tsx",
            lineNumber: 183,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/leap-year-calculator.tsx",
          lineNumber: 169,
          columnNumber: 11
        }, this),
        hasResult && /* @__PURE__ */ jsxDEV13("div", { className: "mt-8", children: /* @__PURE__ */ jsxDEV13("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 animate-slideUp w-full", children: [
          /* @__PURE__ */ jsxDEV13(
            ResultCard,
            {
              title: "Year Status",
              value: actionData.result.isLeapYear ? "Leap Year" : "Not a Leap Year",
              description: `${actionData.result.year} has ${actionData.result.isLeapYear ? "366" : "365"} days`
            },
            void 0,
            !1,
            {
              fileName: "app/routes/leap-year-calculator.tsx",
              lineNumber: 190,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV13(
            ResultCard,
            {
              title: "Days in February",
              value: actionData.result.daysInFebruary.toString(),
              description: "Days in February for this year"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/leap-year-calculator.tsx",
              lineNumber: 195,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV13(
            ResultCard,
            {
              title: "Days in Year",
              value: actionData.result.daysInYear.toString(),
              description: "Total days in this year"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/leap-year-calculator.tsx",
              lineNumber: 200,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV13(
            ResultCard,
            {
              title: "Previous Leap Year",
              value: actionData.result.previousLeapYear ? actionData.result.previousLeapYear.toString() : "N/A",
              description: "Most recent leap year before this year"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/leap-year-calculator.tsx",
              lineNumber: 205,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV13(
            ResultCard,
            {
              title: "Next Leap Year",
              value: actionData.result.nextLeapYear.toString(),
              description: "First upcoming leap year"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/leap-year-calculator.tsx",
              lineNumber: 210,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/leap-year-calculator.tsx",
          lineNumber: 189,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/leap-year-calculator.tsx",
          lineNumber: 188,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV13("div", { className: "bg-white rounded-xl shadow p-8 mb-8 mt-8", children: [
          /* @__PURE__ */ jsxDEV13("h2", { className: "text-2xl font-bold text-center mb-6", children: "How It Works" }, void 0, !1, {
            fileName: "app/routes/leap-year-calculator.tsx",
            lineNumber: 221,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV13("div", { className: "flex flex-col md:flex-row justify-center items-center gap-8", children: [
            /* @__PURE__ */ jsxDEV13("div", { className: "flex flex-col items-center", children: [
              /* @__PURE__ */ jsxDEV13("div", { className: "bg-[#19b6e9] text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mb-2", children: "1" }, void 0, !1, {
                fileName: "app/routes/leap-year-calculator.tsx",
                lineNumber: 224,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV13("div", { className: "font-semibold mb-1", children: "Select a Year" }, void 0, !1, {
                fileName: "app/routes/leap-year-calculator.tsx",
                lineNumber: 225,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV13("div", { className: "text-gray-500 text-center text-sm", children: "Choose any year from the dropdown menu to check if it's a leap year" }, void 0, !1, {
                fileName: "app/routes/leap-year-calculator.tsx",
                lineNumber: 226,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/leap-year-calculator.tsx",
              lineNumber: 223,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV13("div", { className: "text-2xl text-[#19b6e9]", children: "\u2192" }, void 0, !1, {
              fileName: "app/routes/leap-year-calculator.tsx",
              lineNumber: 228,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV13("div", { className: "flex flex-col items-center", children: [
              /* @__PURE__ */ jsxDEV13("div", { className: "bg-[#19b6e9] text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mb-2", children: "2" }, void 0, !1, {
                fileName: "app/routes/leap-year-calculator.tsx",
                lineNumber: 230,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV13("div", { className: "font-semibold mb-1", children: "Get Results" }, void 0, !1, {
                fileName: "app/routes/leap-year-calculator.tsx",
                lineNumber: 231,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV13("div", { className: "text-gray-500 text-center text-sm", children: "View whether it's a leap year and see the next three upcoming leap years" }, void 0, !1, {
                fileName: "app/routes/leap-year-calculator.tsx",
                lineNumber: 232,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/leap-year-calculator.tsx",
              lineNumber: 229,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV13("div", { className: "text-2xl text-[#19b6e9]", children: "\u2192" }, void 0, !1, {
              fileName: "app/routes/leap-year-calculator.tsx",
              lineNumber: 234,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV13("div", { className: "flex flex-col items-center", children: [
              /* @__PURE__ */ jsxDEV13("div", { className: "bg-[#19b6e9] text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mb-2", children: "3" }, void 0, !1, {
                fileName: "app/routes/leap-year-calculator.tsx",
                lineNumber: 236,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV13("div", { className: "font-semibold mb-1", children: "Plan Ahead" }, void 0, !1, {
                fileName: "app/routes/leap-year-calculator.tsx",
                lineNumber: 237,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV13("div", { className: "text-gray-500 text-center text-sm", children: "Use the future leap year information for long-term date planning" }, void 0, !1, {
                fileName: "app/routes/leap-year-calculator.tsx",
                lineNumber: 238,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/leap-year-calculator.tsx",
              lineNumber: 235,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/leap-year-calculator.tsx",
            lineNumber: 222,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/leap-year-calculator.tsx",
          lineNumber: 220,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV13("div", { className: "bg-white rounded-xl shadow p-8 mb-8", children: [
          /* @__PURE__ */ jsxDEV13("h2", { className: "text-2xl font-bold text-center mb-6", children: "Why Use Our Leap Year Calculator" }, void 0, !1, {
            fileName: "app/routes/leap-year-calculator.tsx",
            lineNumber: 245,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV13("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxDEV13("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxDEV13("span", { className: "bg-[#19b6e9] w-6 h-6 rounded-full flex items-center justify-center text-white font-bold", children: "\u2713" }, void 0, !1, {
                fileName: "app/routes/leap-year-calculator.tsx",
                lineNumber: 248,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV13("div", { children: [
                /* @__PURE__ */ jsxDEV13("div", { className: "font-semibold", children: "Quick Year Verification" }, void 0, !1, {
                  fileName: "app/routes/leap-year-calculator.tsx",
                  lineNumber: 250,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV13("div", { className: "text-gray-500 text-sm", children: "Instantly check if any year is a leap year with our accurate calculator." }, void 0, !1, {
                  fileName: "app/routes/leap-year-calculator.tsx",
                  lineNumber: 251,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/leap-year-calculator.tsx",
                lineNumber: 249,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/leap-year-calculator.tsx",
              lineNumber: 247,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV13("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxDEV13("span", { className: "bg-[#19b6e9] w-6 h-6 rounded-full flex items-center justify-center text-white font-bold", children: "\u2713" }, void 0, !1, {
                fileName: "app/routes/leap-year-calculator.tsx",
                lineNumber: 255,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV13("div", { children: [
                /* @__PURE__ */ jsxDEV13("div", { className: "font-semibold", children: "Future Planning" }, void 0, !1, {
                  fileName: "app/routes/leap-year-calculator.tsx",
                  lineNumber: 257,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV13("div", { className: "text-gray-500 text-sm", children: "Find the next three upcoming leap years to help with long-term date planning." }, void 0, !1, {
                  fileName: "app/routes/leap-year-calculator.tsx",
                  lineNumber: 258,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/leap-year-calculator.tsx",
                lineNumber: 256,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/leap-year-calculator.tsx",
              lineNumber: 254,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV13("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxDEV13("span", { className: "bg-[#19b6e9] w-6 h-6 rounded-full flex items-center justify-center text-white font-bold", children: "\u2713" }, void 0, !1, {
                fileName: "app/routes/leap-year-calculator.tsx",
                lineNumber: 262,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV13("div", { children: [
                /* @__PURE__ */ jsxDEV13("div", { className: "font-semibold", children: "Educational Tool" }, void 0, !1, {
                  fileName: "app/routes/leap-year-calculator.tsx",
                  lineNumber: 264,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV13("div", { className: "text-gray-500 text-sm", children: "Learn about leap year rules and why they're important for our calendar system." }, void 0, !1, {
                  fileName: "app/routes/leap-year-calculator.tsx",
                  lineNumber: 265,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/leap-year-calculator.tsx",
                lineNumber: 263,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/leap-year-calculator.tsx",
              lineNumber: 261,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV13("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxDEV13("span", { className: "bg-[#19b6e9] w-6 h-6 rounded-full flex items-center justify-center text-white font-bold", children: "\u2713" }, void 0, !1, {
                fileName: "app/routes/leap-year-calculator.tsx",
                lineNumber: 269,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV13("div", { children: [
                /* @__PURE__ */ jsxDEV13("div", { className: "font-semibold", children: "Date Accuracy" }, void 0, !1, {
                  fileName: "app/routes/leap-year-calculator.tsx",
                  lineNumber: 271,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV13("div", { className: "text-gray-500 text-sm", children: "Ensure precise date calculations by knowing which years have 366 days." }, void 0, !1, {
                  fileName: "app/routes/leap-year-calculator.tsx",
                  lineNumber: 272,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/leap-year-calculator.tsx",
                lineNumber: 270,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/leap-year-calculator.tsx",
              lineNumber: 268,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/leap-year-calculator.tsx",
            lineNumber: 246,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/leap-year-calculator.tsx",
          lineNumber: 244,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/leap-year-calculator.tsx",
        lineNumber: 162,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV13("div", { className: "grid gap-8 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxDEV13(Card, { className: "p-6 space-y-4 bg-white/80 backdrop-blur-sm", children: [
          /* @__PURE__ */ jsxDEV13("h2", { className: "text-2xl font-bold", children: "Why Do We Need Leap Years?" }, void 0, !1, {
            fileName: "app/routes/leap-year-calculator.tsx",
            lineNumber: 280,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV13("p", { className: "text-gray-700", children: "The Earth takes approximately 365.2422 days to orbit the Sun. Without leap years, our calendar would drift about 6 hours each year, or about 24 days per century. Leap years help synchronize our calendar year with the solar year." }, void 0, !1, {
            fileName: "app/routes/leap-year-calculator.tsx",
            lineNumber: 281,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV13("p", { className: "text-gray-700", children: "The current leap year system was introduced by Pope Gregory XIII in 1582 when he reformed the Julian calendar. The Gregorian calendar is now the internationally accepted civil calendar." }, void 0, !1, {
            fileName: "app/routes/leap-year-calculator.tsx",
            lineNumber: 284,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/leap-year-calculator.tsx",
          lineNumber: 279,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV13(Card, { className: "p-6 space-y-4 bg-white/80 backdrop-blur-sm", children: [
          /* @__PURE__ */ jsxDEV13("h2", { className: "text-2xl font-bold", children: "Interesting Leap Year Facts" }, void 0, !1, {
            fileName: "app/routes/leap-year-calculator.tsx",
            lineNumber: 289,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV13("ul", { className: "space-y-3 text-gray-700", children: [
            /* @__PURE__ */ jsxDEV13("li", { children: [
              /* @__PURE__ */ jsxDEV13("span", { className: "font-semibold", children: "Leap Year Babies:" }, void 0, !1, {
                fileName: "app/routes/leap-year-calculator.tsx",
                lineNumber: 292,
                columnNumber: 17
              }, this),
              ' People born on February 29 are sometimes called "leaplings" or "leap year babies"'
            ] }, void 0, !0, {
              fileName: "app/routes/leap-year-calculator.tsx",
              lineNumber: 291,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV13("li", { children: [
              /* @__PURE__ */ jsxDEV13("span", { className: "font-semibold", children: "February 30:" }, void 0, !1, {
                fileName: "app/routes/leap-year-calculator.tsx",
                lineNumber: 295,
                columnNumber: 17
              }, this),
              " Sweden once had a February 30 (in 1712) due to a calendar correction"
            ] }, void 0, !0, {
              fileName: "app/routes/leap-year-calculator.tsx",
              lineNumber: 294,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV13("li", { children: [
              /* @__PURE__ */ jsxDEV13("span", { className: "font-semibold", children: "Tradition:" }, void 0, !1, {
                fileName: "app/routes/leap-year-calculator.tsx",
                lineNumber: 298,
                columnNumber: 17
              }, this),
              " In many European countries, women can traditionally propose marriage to men on leap days"
            ] }, void 0, !0, {
              fileName: "app/routes/leap-year-calculator.tsx",
              lineNumber: 297,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV13("li", { children: [
              /* @__PURE__ */ jsxDEV13("span", { className: "font-semibold", children: "Olympic Games:" }, void 0, !1, {
                fileName: "app/routes/leap-year-calculator.tsx",
                lineNumber: 301,
                columnNumber: 17
              }, this),
              " Summer Olympic Games are held during leap years"
            ] }, void 0, !0, {
              fileName: "app/routes/leap-year-calculator.tsx",
              lineNumber: 300,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/leap-year-calculator.tsx",
            lineNumber: 290,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/leap-year-calculator.tsx",
          lineNumber: 288,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/leap-year-calculator.tsx",
        lineNumber: 278,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV13("div", { className: "bg-white rounded-lg p-6 space-y-6", children: [
        /* @__PURE__ */ jsxDEV13("h2", { className: "text-2xl font-bold text-center", children: "Frequently Asked Questions" }, void 0, !1, {
          fileName: "app/routes/leap-year-calculator.tsx",
          lineNumber: 307,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV13("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxDEV13("div", { className: "space-y-2 p-4 border-b", children: [
            /* @__PURE__ */ jsxDEV13("h3", { className: "font-semibold text-lg text-primary", children: "How often do leap years occur?" }, void 0, !1, {
              fileName: "app/routes/leap-year-calculator.tsx",
              lineNumber: 310,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV13("p", { className: "text-gray-600", children: "Leap years typically occur every 4 years. However, years divisible by 100 are not leap years unless they are also divisible by 400. This means that while 2000 was a leap year, 1900 was not, and 2100 will not be." }, void 0, !1, {
              fileName: "app/routes/leap-year-calculator.tsx",
              lineNumber: 313,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/leap-year-calculator.tsx",
            lineNumber: 309,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV13("div", { className: "space-y-2 p-4 border-b", children: [
            /* @__PURE__ */ jsxDEV13("h3", { className: "font-semibold text-lg text-primary", children: "What happens to people born on February 29?" }, void 0, !1, {
              fileName: "app/routes/leap-year-calculator.tsx",
              lineNumber: 318,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV13("p", { className: "text-gray-600", children: "People born on February 29 typically celebrate their birthdays on February 28 or March 1 in non-leap years. Legally, most jurisdictions recognize March 1 as their official birthday in non-leap years." }, void 0, !1, {
              fileName: "app/routes/leap-year-calculator.tsx",
              lineNumber: 321,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/leap-year-calculator.tsx",
            lineNumber: 317,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV13("div", { className: "space-y-2 p-4", children: [
            /* @__PURE__ */ jsxDEV13("h3", { className: "font-semibold text-lg text-primary", children: "Why are centuries special in leap year calculations?" }, void 0, !1, {
              fileName: "app/routes/leap-year-calculator.tsx",
              lineNumber: 326,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV13("p", { className: "text-gray-600", children: "Century years (those ending in 00) are not leap years unless they are divisible by 400. This refinement to the leap year rule makes the Gregorian calendar more accurate, as it accounts for the fact that the solar year is slightly less than 365.25 days." }, void 0, !1, {
              fileName: "app/routes/leap-year-calculator.tsx",
              lineNumber: 329,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/leap-year-calculator.tsx",
            lineNumber: 325,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/leap-year-calculator.tsx",
          lineNumber: 308,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/leap-year-calculator.tsx",
        lineNumber: 306,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/leap-year-calculator.tsx",
      lineNumber: 161,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV13(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
          __html: JSON.stringify(jsonLd)
        }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/leap-year-calculator.tsx",
        lineNumber: 336,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV13(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
          __html: JSON.stringify(breadcrumbJsonLd)
        }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/leap-year-calculator.tsx",
        lineNumber: 342,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV13(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
          __html: JSON.stringify(faqJsonLd)
        }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/leap-year-calculator.tsx",
        lineNumber: 348,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/leap-year-calculator.tsx",
    lineNumber: 160,
    columnNumber: 5
  }, this);
}

// app/routes/pregnancy-calculator.tsx
var pregnancy_calculator_exports = {};
__export(pregnancy_calculator_exports, {
  action: () => action3,
  default: () => PregnancyCalculator,
  loader: () => loader4,
  meta: () => meta3
});
import { json as json4 } from "@remix-run/node";
import { Form as Form3, useActionData as useActionData3, useNavigation as useNavigation3, useLoaderData as useLoaderData4 } from "@remix-run/react";
import { addWeeks, format as format2 } from "date-fns";
import { useState as useState3 } from "react";

// app/components/ui/calendar.tsx
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
function Calendar2({
  className,
  classNames,
  showOutsideDays = !0,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV14(
    DayPicker,
    {
      showOutsideDays,
      className: cn("p-3", className),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames
      },
      components: {
        IconLeft: ({ ..._props }) => /* @__PURE__ */ jsxDEV14(ChevronLeft, { className: "h-4 w-4" }, void 0, !1, {
          fileName: "app/components/ui/calendar.tsx",
          lineNumber: 55,
          columnNumber: 38
        }, this),
        IconRight: ({ ..._props }) => /* @__PURE__ */ jsxDEV14(ChevronRight, { className: "h-4 w-4" }, void 0, !1, {
          fileName: "app/components/ui/calendar.tsx",
          lineNumber: 56,
          columnNumber: 39
        }, this)
      },
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/calendar.tsx",
      lineNumber: 17,
      columnNumber: 5
    },
    this
  );
}
Calendar2.displayName = "Calendar";

// app/routes/pregnancy-calculator.tsx
import { Check } from "lucide-react";

// app/components/pregnancy-calculator/PregnancyWeekRow.tsx
import { jsxDEV as jsxDEV15 } from "react/jsx-dev-runtime";
function PregnancyWeekRow({ week, currentWeek }) {
  let isCurrentWeek = week.week === currentWeek;
  return /* @__PURE__ */ jsxDEV15("tr", { className: `border-b hover:bg-gray-50 ${isCurrentWeek ? "bg-blue-50" : ""}`, children: [
    /* @__PURE__ */ jsxDEV15("td", { className: "px-4 py-3 text-center font-semibold", children: week.trimester }, void 0, !1, {
      fileName: "app/components/pregnancy-calculator/PregnancyWeekRow.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV15("td", { className: "px-4 py-3 text-center", children: week.date.toLocaleDateString() }, void 0, !1, {
      fileName: "app/components/pregnancy-calculator/PregnancyWeekRow.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV15("td", { className: "px-4 py-3 text-center", children: [
      "Week ",
      week.week
    ] }, void 0, !0, {
      fileName: "app/components/pregnancy-calculator/PregnancyWeekRow.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV15("td", { className: "px-4 py-3", children: week.fetalDevelopment }, void 0, !1, {
      fileName: "app/components/pregnancy-calculator/PregnancyWeekRow.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV15("td", { className: "px-4 py-3", children: week.babySize }, void 0, !1, {
      fileName: "app/components/pregnancy-calculator/PregnancyWeekRow.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV15("td", { className: "px-4 py-3", children: week.medicalProcedures }, void 0, !1, {
      fileName: "app/components/pregnancy-calculator/PregnancyWeekRow.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/pregnancy-calculator/PregnancyWeekRow.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/components/pregnancy-calculator/PregnancyTableHeader.tsx
import { jsxDEV as jsxDEV16 } from "react/jsx-dev-runtime";
function PregnancyTableHeader() {
  return /* @__PURE__ */ jsxDEV16("thead", { className: "bg-gray-50", children: /* @__PURE__ */ jsxDEV16("tr", { children: [
    /* @__PURE__ */ jsxDEV16("th", { className: "px-4 py-3 text-center font-semibold", children: "Trimester" }, void 0, !1, {
      fileName: "app/components/pregnancy-calculator/PregnancyTableHeader.tsx",
      lineNumber: 5,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV16("th", { className: "px-4 py-3 text-center font-semibold", children: "Date" }, void 0, !1, {
      fileName: "app/components/pregnancy-calculator/PregnancyTableHeader.tsx",
      lineNumber: 6,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV16("th", { className: "px-4 py-3 text-center font-semibold", children: "Week" }, void 0, !1, {
      fileName: "app/components/pregnancy-calculator/PregnancyTableHeader.tsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV16("th", { className: "px-4 py-3 text-left font-semibold", children: "Fetal Development" }, void 0, !1, {
      fileName: "app/components/pregnancy-calculator/PregnancyTableHeader.tsx",
      lineNumber: 8,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV16("th", { className: "px-4 py-3 text-left font-semibold", children: "Baby Size" }, void 0, !1, {
      fileName: "app/components/pregnancy-calculator/PregnancyTableHeader.tsx",
      lineNumber: 9,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV16("th", { className: "px-4 py-3 text-left font-semibold", children: "Medical Procedures" }, void 0, !1, {
      fileName: "app/components/pregnancy-calculator/PregnancyTableHeader.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/pregnancy-calculator/PregnancyTableHeader.tsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/pregnancy-calculator/PregnancyTableHeader.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/pregnancy-calculator.tsx
import { jsxDEV as jsxDEV17 } from "react/jsx-dev-runtime";
var meta3 = () => [
  { title: "Pregnancy Calculator - Calculate Due Date and Pregnancy Milestones" },
  { name: "description", content: "Calculate your due date, conception date, and pregnancy milestones with our free Pregnancy Calculator." },
  { name: "keywords", content: "pregnancy calculator, due date calculator, conception date, pregnancy milestones, trimester calculator" },
  { property: "og:title", content: "Pregnancy Calculator - Calculate Due Date and Pregnancy Milestones" },
  { property: "og:description", content: "Calculate your due date, conception date, and pregnancy milestones with our free Pregnancy Calculator." },
  { property: "og:type", content: "website" },
  { property: "og:url", content: "https://agecalculator.app/pregnancy-calculator" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "Pregnancy Calculator - Calculate Due Date and Pregnancy Milestones" },
  { name: "twitter:description", content: "Calculate your due date, conception date, and pregnancy milestones with our free Pregnancy Calculator." },
  { rel: "canonical", href: "https://agecalculator.app/pregnancy-calculator" }
];
function loader4() {
  return {
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Pregnancy Calculator",
      applicationCategory: "HealthApplication",
      description: "Calculate your due date, conception date, and pregnancy milestones with our free Pregnancy Calculator.",
      operatingSystem: "Any",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD"
      },
      url: "https://agecalculator.app/pregnancy-calculator",
      screenshot: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe",
      featureList: "Calculate due date, conception date, pregnancy milestones, trimester information. Easy to use. Free. Instant calculations.",
      inLanguage: "en",
      audience: {
        "@type": "Audience",
        audienceType: "Everyone"
      }
    },
    breadcrumbJsonLd: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://agecalculator.app"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Pregnancy Calculator",
          item: "https://agecalculator.app/pregnancy-calculator"
        }
      ]
    },
    faqJsonLd: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How is the due date calculated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The due date is calculated by adding 280 days (40 weeks) to the first day of your last menstrual period. This is known as Naegele's rule and is the standard method used by healthcare providers."
          }
        },
        {
          "@type": "Question",
          name: "What are the three trimesters of pregnancy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The three trimesters are: First trimester (weeks 1-13), Second trimester (weeks 14-26), and Third trimester (weeks 27-40). Each trimester has different developmental milestones and changes."
          }
        },
        {
          "@type": "Question",
          name: "How accurate is the pregnancy calculator?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The calculator provides an estimate based on the standard 40-week pregnancy. However, only about 5% of women deliver on their exact due date. Most babies are born within two weeks before or after the due date."
          }
        }
      ]
    }
  };
}
async function action3({ request }) {
  let lastPeriodStr = (await request.formData()).get("lastPeriod");
  if (!lastPeriodStr)
    return json4({ error: "Last menstrual period date is required" });
  let lastPeriod = new Date(lastPeriodStr), today = /* @__PURE__ */ new Date(), dueDate = addWeeks(lastPeriod, 40), conceptionDate = addWeeks(lastPeriod, 2), totalDays = Math.floor((today.getTime() - lastPeriod.getTime()) / (1e3 * 60 * 60 * 24)), currentWeek = Math.floor(totalDays / 7) + 1, trimester = "";
  currentWeek <= 0 ? trimester = "Not pregnant yet" : currentWeek <= 13 ? trimester = "First Trimester" : currentWeek <= 26 ? trimester = "Second Trimester" : currentWeek <= 40 ? trimester = "Third Trimester" : trimester = "Past due date";
  let daysRemaining = Math.max(0, Math.floor((dueDate.getTime() - today.getTime()) / (1e3 * 60 * 60 * 24))), result = {
    dueDate: format2(dueDate, "MMMM d, yyyy"),
    conceptionDate: format2(conceptionDate, "MMMM d, yyyy"),
    currentWeek: Math.max(0, currentWeek),
    trimester,
    daysRemaining
  };
  return json4({ result });
}
var weekDetails = [
  { trimester: "First", fetalDevelopment: "Conception and implantation.", babySize: "Size: 0.1-0.2 mm (zygote)", medicalProcedures: "Blood test (hCG levels), urine test to confirm pregnancy." },
  { trimester: "First", fetalDevelopment: "Conception and implantation continue.", babySize: "Size: 0.1-0.2 mm (zygote)", medicalProcedures: "Blood test (hCG levels), urine test to confirm pregnancy." },
  { trimester: "First", fetalDevelopment: "Blastocyst implants in the uterus; hCG production begins.", babySize: "Size: 0.1-0.2 mm.", medicalProcedures: "Blood test to confirm pregnancy." },
  { trimester: "First", fetalDevelopment: "Positive pregnancy test; placenta begins to form.", babySize: "Size: 1-2 mm (poppy seed).", medicalProcedures: "Home pregnancy test; first prenatal visit scheduled." },
  { trimester: "First", fetalDevelopment: "Embryo size: sesame seed; neural tube forms.", babySize: "Size: 2-3 mm (sesame seed).", medicalProcedures: "First prenatal visit (if not done earlier)." },
  { trimester: "First", fetalDevelopment: "Heartbeat begins; facial features start forming.", babySize: "Size: 4-5 mm (lentil).", medicalProcedures: "Dating ultrasound to confirm pregnancy and check heartbeat." },
  { trimester: "First", fetalDevelopment: "Brain, eyes, and ears develop; limb buds appear.", babySize: "Size: 8-10 mm (blueberry).", medicalProcedures: "Blood tests (blood type, Rh factor, infections)." },
  { trimester: "First", fetalDevelopment: "Major organs form; embryo now called a fetus.", babySize: "Size: 1.6 cm, Weight: 1 g (raspberry).", medicalProcedures: "Urine test (protein, glucose, infections)." },
  { trimester: "First", fetalDevelopment: "Fetal movements begin; facial features become distinct.", babySize: "Size: 2.3 cm, Weight: 2 g (cherry).", medicalProcedures: "Genetic screening options discussed (e.g., NIPT, CVS)." },
  { trimester: "First", fetalDevelopment: "Critical development ends; nails and hair begin to form.", babySize: "Size: 3.1 cm, Weight: 4 g (strawberry).", medicalProcedures: "Nuchal translucency (NT) scan scheduled (Weeks 11-14)." },
  { trimester: "First", fetalDevelopment: "Rapid growth; bones begin to harden.", babySize: "Size: 4.1 cm, Weight: 7 g (lime).", medicalProcedures: "First-trimester screening (NT scan + blood tests for PAPP-A and hCG)." },
  { trimester: "First", fetalDevelopment: "Reflexes develop; fetus can make sucking movements.", babySize: "Size: 5.4 cm, Weight: 14 g (plum).", medicalProcedures: "Chorionic villus sampling (CVS) if needed (Weeks 10-13)." },
  { trimester: "First", fetalDevelopment: "Vocal cords form; risk of miscarriage decreases.", babySize: "Size: 7.4 cm, Weight: 23 g (lemon).", medicalProcedures: "End of first trimester; routine checkup." },
  { trimester: "Second", fetalDevelopment: "Fetus can make facial expressions; fine hair (lanugo) covers the body.", babySize: "Size: 8.7 cm, Weight: 43 g (peach).", medicalProcedures: "Routine blood and urine tests." },
  { trimester: "Second", fetalDevelopment: "Fetus can move limbs; mother may feel flutters (quickening).", babySize: "Size: 10.1 cm, Weight: 70 g (apple).", medicalProcedures: "Quad screen scheduled (Weeks 15-20)." },
  { trimester: "Second", fetalDevelopment: "Facial expressions develop; eyes are sensitive to light.", babySize: "Size: 11.6 cm, Weight: 100 g (avocado).", medicalProcedures: "Anatomy ultrasound scheduled (Weeks 18-22)." },
  { trimester: "Second", fetalDevelopment: "Fat begins to accumulate under the skin.", babySize: "Size: 13 cm, Weight: 140 g (pear).", medicalProcedures: "Routine checkup; discuss amniocentesis if needed." },
  { trimester: "Second", fetalDevelopment: "Hearing develops; bones harden.", babySize: "Size: 14.2 cm, Weight: 190 g (sweet potato).", medicalProcedures: "Anatomy ultrasound to check fetal development and sex." },
  { trimester: "Second", fetalDevelopment: "Vernix caseosa (protective coating) forms on the skin.", babySize: "Size: 15.3 cm, Weight: 240 g (mango).", medicalProcedures: "Routine blood and urine tests." },
  { trimester: "Second", fetalDevelopment: "Halfway point; fetus is more active.", babySize: "Size: 16.4 cm, Weight: 300 g (banana).", medicalProcedures: "Glucose screening test scheduled (Weeks 24-28)." },
  { trimester: "Second", fetalDevelopment: "Taste buds develop; fetus can swallow amniotic fluid.", babySize: "Size: 26.7 cm, Weight: 360 g (carrot).", medicalProcedures: "Routine checkup." },
  { trimester: "Second", fetalDevelopment: "Hair grows on the head; fetus is more active.", babySize: "Size: 27.8 cm, Weight: 430 g (spaghetti squash).", medicalProcedures: "Routine blood and urine tests." },
  { trimester: "Second", fetalDevelopment: "Lungs develop; fetus practices breathing movements.", babySize: "Size: 28.9 cm, Weight: 500 g (grapefruit).", medicalProcedures: "Glucose screening test (if not done earlier)." },
  { trimester: "Second", fetalDevelopment: "Fetus reaches viability; could survive outside the womb with medical help.", babySize: "Size: 30 cm, Weight: 600 g (ear of corn).", medicalProcedures: "Rh antibody test for Rh-negative mothers." },
  { trimester: "Second", fetalDevelopment: "Fetus responds to touch and sound.", babySize: "Size: 34.6 cm, Weight: 660 g (rutabaga).", medicalProcedures: "Routine checkup." },
  { trimester: "Second", fetalDevelopment: "Eyes can open; lungs continue to mature.", babySize: "Size: 35.6 cm, Weight: 760 g (scallion).", medicalProcedures: "Routine blood and urine tests." },
  { trimester: "Second", fetalDevelopment: "Brain activity increases; lungs continue to mature.", babySize: "Size: 36.6 cm, Weight: 875 g (cauliflower).", medicalProcedures: "TDAP vaccine recommended (Weeks 27-36)." },
  { trimester: "Third", fetalDevelopment: "Fetus can blink and dream; third trimester begins.", babySize: "Size: 37.6 cm, Weight: 1 kg (eggplant).", medicalProcedures: "Routine checkup; discuss birth plan." },
  { trimester: "Third", fetalDevelopment: "Muscles and lungs mature; fetus gains weight.", babySize: "Size: 38.6 cm, Weight: 1.2 kg (butternut squash).", medicalProcedures: "Routine blood and urine tests." },
  { trimester: "Third", fetalDevelopment: "Fetus gains fat; eyes can perceive light and dark.", babySize: "Size: 39.9 cm, Weight: 1.3 kg (cabbage).", medicalProcedures: "Ultrasound to check fetal growth and amniotic fluid levels (if needed)." },
  { trimester: "Third", fetalDevelopment: "Fetus can perceive light and dark; rapid brain development.", babySize: "Size: 41.1 cm, Weight: 1.5 kg (coconut).", medicalProcedures: "Routine checkup." },
  { trimester: "Third", fetalDevelopment: "Fetus may move into a head-down position.", babySize: "Size: 42.4 cm, Weight: 1.7 kg (jicama).", medicalProcedures: "Group B Streptococcus (GBS) test scheduled (Weeks 35-37)." },
  { trimester: "Third", fetalDevelopment: "Bones harden; skull remains soft for delivery.", babySize: "Size: 43.7 cm, Weight: 1.9 kg (pineapple).", medicalProcedures: "Routine blood and urine tests." },
  { trimester: "Third", fetalDevelopment: "Immune system develops; fetus practices breathing.", babySize: "Size: 45 cm, Weight: 2.1 kg (cantaloupe).", medicalProcedures: "Non-stress test (NST) or biophysical profile (BPP) if high-risk." },
  { trimester: "Third", fetalDevelopment: "Lungs are nearly fully developed.", babySize: "Size: 46.2 cm, Weight: 2.4 kg (honeydew melon).", medicalProcedures: "GBS test performed." },
  { trimester: "Third", fetalDevelopment: "Fetus gains fat; may drop lower into the pelvis.", babySize: "Size: 47.4 cm, Weight: 2.6 kg (papaya).", medicalProcedures: "Pelvic exam to check cervical dilation and effacement." },
  { trimester: "Third", fetalDevelopment: "Fetus is considered full-term.", babySize: "Size: 48.6 cm, Weight: 2.9 kg (Swiss chard).", medicalProcedures: "Weekly checkups begin; NST or BPP if high-risk." },
  { trimester: "Third", fetalDevelopment: "Brain and lungs are fully developed; fetus is ready for birth.", babySize: "Size: 49.8 cm, Weight: 3.1 kg (pumpkin).", medicalProcedures: "Routine checkup; discuss induction if overdue." },
  { trimester: "Third", fetalDevelopment: "Fetus is fully developed; waiting for labor to begin.", babySize: "Size: 50.7 cm, Weight: 3.3 kg (mini watermelon).", medicalProcedures: "Membrane sweep offered if overdue." },
  { trimester: "Third", fetalDevelopment: "Due date arrives; labor could begin any day.", babySize: "Size: 51.2 cm, Weight: 3.5 kg (small pumpkin).", medicalProcedures: "Final checkup; discuss induction if labor hasn't started." }
];
function generatePregnancyTimeline(startDate) {
  return weekDetails.map((detail, i) => ({
    week: i + 1,
    date: addWeeks(startDate, i),
    ...detail
  }));
}
function PregnancyCalculator() {
  let actionData = useActionData3(), navigation = useNavigation3(), { jsonLd, breadcrumbJsonLd, faqJsonLd } = useLoaderData4(), isSubmitting = navigation.state === "submitting", [selectedDate, setSelectedDate] = useState3(), getDateForWeek = (weekNumber) => selectedDate ? addWeeks(selectedDate, weekNumber - 1) : /* @__PURE__ */ new Date();
  return /* @__PURE__ */ jsxDEV17("div", { className: "min-h-screen bg-gray-50 py-10", children: /* @__PURE__ */ jsxDEV17("div", { className: "max-w-3xl mx-auto", children: [
    /* @__PURE__ */ jsxDEV17("div", { className: "bg-white rounded-xl shadow p-10 mb-8", children: [
      /* @__PURE__ */ jsxDEV17("h1", { className: "text-4xl font-bold text-gray-900 text-center mb-2", children: "Pregnancy Calculator" }, void 0, !1, {
        fileName: "app/routes/pregnancy-calculator.tsx",
        lineNumber: 233,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV17("p", { className: "text-lg text-gray-600 text-center mb-8", children: "Track your pregnancy week by week and get your estimated due date" }, void 0, !1, {
        fileName: "app/routes/pregnancy-calculator.tsx",
        lineNumber: 234,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV17(Form3, { method: "post", className: "flex flex-col items-center gap-6", children: [
        /* @__PURE__ */ jsxDEV17("div", { className: "w-full max-w-xs mx-auto", children: [
          /* @__PURE__ */ jsxDEV17(Label, { className: "block text-center text-lg font-semibold mb-2", children: "First Day of Last Period" }, void 0, !1, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 237,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV17(
            Calendar2,
            {
              mode: "single",
              selected: selectedDate,
              onSelect: setSelectedDate,
              className: "rounded-lg border mx-auto"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/pregnancy-calculator.tsx",
              lineNumber: 238,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV17("input", { type: "hidden", name: "lastPeriod", value: selectedDate ? selectedDate.toISOString().slice(0, 10) : "", required: !0 }, void 0, !1, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 244,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/pregnancy-calculator.tsx",
          lineNumber: 236,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV17(Button, { type: "submit", className: "bg-[#19b6e9] hover:bg-[#15a3cc] text-white font-semibold px-8 py-2 rounded", disabled: isSubmitting, children: isSubmitting ? "Calculating..." : "Calculate" }, void 0, !1, {
          fileName: "app/routes/pregnancy-calculator.tsx",
          lineNumber: 246,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/pregnancy-calculator.tsx",
        lineNumber: 235,
        columnNumber: 11
      }, this),
      actionData && "result" in actionData && /* @__PURE__ */ jsxDEV17("div", { className: "mt-8 grid grid-cols-1 md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxDEV17("div", { className: "border-2 border-[#19b6e9] rounded-lg p-6 text-center", children: [
          /* @__PURE__ */ jsxDEV17("div", { className: "text-gray-500 mb-1", children: "Current Week" }, void 0, !1, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 253,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV17("div", { className: "text-3xl font-bold text-[#19b6e9] mb-1", children: [
            "Week ",
            actionData.result.currentWeek
          ] }, void 0, !0, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 254,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV17("div", { className: "text-gray-500", children: "of pregnancy" }, void 0, !1, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 255,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/pregnancy-calculator.tsx",
          lineNumber: 252,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV17("div", { className: "border-2 border-[#19b6e9] rounded-lg p-6 text-center", children: [
          /* @__PURE__ */ jsxDEV17("div", { className: "text-gray-500 mb-1", children: "Due Date" }, void 0, !1, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 258,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV17("div", { className: "text-2xl font-bold text-[#19b6e9] mb-1", children: actionData.result.dueDate }, void 0, !1, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 259,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV17("div", { className: "text-gray-500", children: "estimated delivery" }, void 0, !1, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 260,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/pregnancy-calculator.tsx",
          lineNumber: 257,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/pregnancy-calculator.tsx",
        lineNumber: 251,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/pregnancy-calculator.tsx",
      lineNumber: 232,
      columnNumber: 9
    }, this),
    selectedDate && /* @__PURE__ */ jsxDEV17("div", { className: "bg-white rounded-xl shadow p-8 mb-8", children: [
      /* @__PURE__ */ jsxDEV17("h2", { className: "text-2xl font-bold text-center mb-6", children: "Pregnancy Timeline" }, void 0, !1, {
        fileName: "app/routes/pregnancy-calculator.tsx",
        lineNumber: 268,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV17("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxDEV17("table", { className: "w-full text-sm border rounded-lg", children: [
        /* @__PURE__ */ jsxDEV17(PregnancyTableHeader, {}, void 0, !1, {
          fileName: "app/routes/pregnancy-calculator.tsx",
          lineNumber: 271,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV17("tbody", { children: generatePregnancyTimeline(selectedDate).map((week) => /* @__PURE__ */ jsxDEV17(
          PregnancyWeekRow,
          {
            week,
            currentWeek: actionData && "result" in actionData ? actionData.result.currentWeek : 0
          },
          week.week,
          !1,
          {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 274,
            columnNumber: 21
          },
          this
        )) }, void 0, !1, {
          fileName: "app/routes/pregnancy-calculator.tsx",
          lineNumber: 272,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/pregnancy-calculator.tsx",
        lineNumber: 270,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/pregnancy-calculator.tsx",
        lineNumber: 269,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/pregnancy-calculator.tsx",
      lineNumber: 267,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV17("div", { className: "bg-white rounded-xl shadow p-8 mb-8", children: [
      /* @__PURE__ */ jsxDEV17("h2", { className: "text-2xl font-bold text-center mb-6", children: "How It Works" }, void 0, !1, {
        fileName: "app/routes/pregnancy-calculator.tsx",
        lineNumber: 287,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV17("div", { className: "flex flex-col md:flex-row justify-center items-center gap-8", children: [
        /* @__PURE__ */ jsxDEV17("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsxDEV17("div", { className: "bg-[#19b6e9] text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mb-2", children: "1" }, void 0, !1, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 290,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV17("div", { className: "font-semibold mb-1", children: "Enter Last Period" }, void 0, !1, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 291,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV17("div", { className: "text-gray-500 text-center text-sm", children: "Input the first day of your last menstrual period to begin the calculation" }, void 0, !1, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 292,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/pregnancy-calculator.tsx",
          lineNumber: 289,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV17("div", { className: "text-2xl text-[#19b6e9]", children: "\u2192" }, void 0, !1, {
          fileName: "app/routes/pregnancy-calculator.tsx",
          lineNumber: 294,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV17("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsxDEV17("div", { className: "bg-[#19b6e9] text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mb-2", children: "2" }, void 0, !1, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 296,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV17("div", { className: "font-semibold mb-1", children: "Calculate" }, void 0, !1, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 297,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV17("div", { className: "text-gray-500 text-center text-sm", children: "Our calculator determines your current pregnancy week and estimated due date" }, void 0, !1, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 298,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/pregnancy-calculator.tsx",
          lineNumber: 295,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV17("div", { className: "text-2xl text-[#19b6e9]", children: "\u2192" }, void 0, !1, {
          fileName: "app/routes/pregnancy-calculator.tsx",
          lineNumber: 300,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV17("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsxDEV17("div", { className: "bg-[#19b6e9] text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mb-2", children: "3" }, void 0, !1, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 302,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV17("div", { className: "font-semibold mb-1", children: "View Results" }, void 0, !1, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 303,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV17("div", { className: "text-gray-500 text-center text-sm", children: "Follow your pregnancy journey with week-by-week development information" }, void 0, !1, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 304,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/pregnancy-calculator.tsx",
          lineNumber: 301,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/pregnancy-calculator.tsx",
        lineNumber: 288,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/pregnancy-calculator.tsx",
      lineNumber: 286,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV17("div", { className: "bg-white rounded-xl shadow p-8 mb-8", children: [
      /* @__PURE__ */ jsxDEV17("h2", { className: "text-2xl font-bold text-center mb-6", children: "Why Use Our Pregnancy Calculator" }, void 0, !1, {
        fileName: "app/routes/pregnancy-calculator.tsx",
        lineNumber: 310,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV17("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxDEV17("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxDEV17(Check, { className: "text-[#19b6e9] w-6 h-6 mt-1" }, void 0, !1, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 313,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV17("div", { children: [
            /* @__PURE__ */ jsxDEV17("div", { className: "font-semibold", children: "Accurate Due Date Calculation" }, void 0, !1, {
              fileName: "app/routes/pregnancy-calculator.tsx",
              lineNumber: 315,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV17("div", { className: "text-gray-500 text-sm", children: "Get a precise estimation of your due date based on your last menstrual period, using the same method healthcare providers use." }, void 0, !1, {
              fileName: "app/routes/pregnancy-calculator.tsx",
              lineNumber: 316,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 314,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/pregnancy-calculator.tsx",
          lineNumber: 312,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV17("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxDEV17(Check, { className: "text-[#19b6e9] w-6 h-6 mt-1" }, void 0, !1, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 320,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV17("div", { children: [
            /* @__PURE__ */ jsxDEV17("div", { className: "font-semibold", children: "Week-by-Week Development Tracking" }, void 0, !1, {
              fileName: "app/routes/pregnancy-calculator.tsx",
              lineNumber: 322,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV17("div", { className: "text-gray-500 text-sm", children: "Follow your baby's growth with detailed weekly updates about development milestones, size comparisons, and important medical procedures." }, void 0, !1, {
              fileName: "app/routes/pregnancy-calculator.tsx",
              lineNumber: 323,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 321,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/pregnancy-calculator.tsx",
          lineNumber: 319,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV17("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxDEV17(Check, { className: "text-[#19b6e9] w-6 h-6 mt-1" }, void 0, !1, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 327,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV17("div", { children: [
            /* @__PURE__ */ jsxDEV17("div", { className: "font-semibold", children: "Trimester Breakdown" }, void 0, !1, {
              fileName: "app/routes/pregnancy-calculator.tsx",
              lineNumber: 329,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV17("div", { className: "text-gray-500 text-sm", children: "Understand which trimester you're in and what to expect during each phase of your pregnancy journey." }, void 0, !1, {
              fileName: "app/routes/pregnancy-calculator.tsx",
              lineNumber: 330,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 328,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/pregnancy-calculator.tsx",
          lineNumber: 326,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV17("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxDEV17(Check, { className: "text-[#19b6e9] w-6 h-6 mt-1" }, void 0, !1, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 334,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV17("div", { children: [
            /* @__PURE__ */ jsxDEV17("div", { className: "font-semibold", children: "Medical Timeline" }, void 0, !1, {
              fileName: "app/routes/pregnancy-calculator.tsx",
              lineNumber: 336,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV17("div", { className: "text-gray-500 text-sm", children: "Access a comprehensive timeline of recommended medical check-ups, tests, and screenings throughout your pregnancy." }, void 0, !1, {
              fileName: "app/routes/pregnancy-calculator.tsx",
              lineNumber: 337,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 335,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/pregnancy-calculator.tsx",
          lineNumber: 333,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV17("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxDEV17(Check, { className: "text-[#19b6e9] w-6 h-6 mt-1" }, void 0, !1, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 341,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV17("div", { children: [
            /* @__PURE__ */ jsxDEV17("div", { className: "font-semibold", children: "Size Visualization" }, void 0, !1, {
              fileName: "app/routes/pregnancy-calculator.tsx",
              lineNumber: 343,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV17("div", { className: "text-gray-500 text-sm", children: "Visualize your baby's size with familiar fruit and vegetable comparisons that make it easy to understand their growth." }, void 0, !1, {
              fileName: "app/routes/pregnancy-calculator.tsx",
              lineNumber: 344,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 342,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/pregnancy-calculator.tsx",
          lineNumber: 340,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV17("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxDEV17(Check, { className: "text-[#19b6e9] w-6 h-6 mt-1" }, void 0, !1, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 348,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV17("div", { children: [
            /* @__PURE__ */ jsxDEV17("div", { className: "font-semibold", children: "Pregnancy Planning" }, void 0, !1, {
              fileName: "app/routes/pregnancy-calculator.tsx",
              lineNumber: 350,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV17("div", { className: "text-gray-500 text-sm", children: "Plan ahead with information about important milestones, helping you prepare for each stage of your pregnancy." }, void 0, !1, {
              fileName: "app/routes/pregnancy-calculator.tsx",
              lineNumber: 351,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 349,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/pregnancy-calculator.tsx",
          lineNumber: 347,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/pregnancy-calculator.tsx",
        lineNumber: 311,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/pregnancy-calculator.tsx",
      lineNumber: 309,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV17("div", { className: "bg-white rounded-xl shadow p-8 mb-8", children: [
      /* @__PURE__ */ jsxDEV17("h2", { className: "text-2xl font-bold text-center mb-6", children: "Frequently Asked Questions" }, void 0, !1, {
        fileName: "app/routes/pregnancy-calculator.tsx",
        lineNumber: 358,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV17("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxDEV17("div", { className: "border-b pb-4", children: [
          /* @__PURE__ */ jsxDEV17("div", { className: "font-semibold text-[#19b6e9] mb-1", children: "How is the due date calculated?" }, void 0, !1, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 361,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV17("div", { className: "text-gray-600 text-sm", children: "The due date is calculated by adding 280 days (40 weeks) to the first day of your last menstrual period. This is known as Naegele's rule and is the standard method used by healthcare providers." }, void 0, !1, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 362,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/pregnancy-calculator.tsx",
          lineNumber: 360,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV17("div", { className: "border-b pb-4", children: [
          /* @__PURE__ */ jsxDEV17("div", { className: "font-semibold text-[#19b6e9] mb-1", children: "What are the three trimesters of pregnancy?" }, void 0, !1, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 365,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV17("div", { className: "text-gray-600 text-sm", children: "The three trimesters are: First trimester (weeks 1-13), Second trimester (weeks 14-26), and Third trimester (weeks 27-40). Each trimester has different developmental milestones and changes." }, void 0, !1, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 366,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/pregnancy-calculator.tsx",
          lineNumber: 364,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV17("div", { children: [
          /* @__PURE__ */ jsxDEV17("div", { className: "font-semibold text-[#19b6e9] mb-1", children: "How accurate is the pregnancy calculator?" }, void 0, !1, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 369,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV17("div", { className: "text-gray-600 text-sm", children: "The calculator provides an estimate based on the standard 40-week pregnancy. However, only about 5% of women deliver on their exact due date. Most babies are born within two weeks before or after the due date." }, void 0, !1, {
            fileName: "app/routes/pregnancy-calculator.tsx",
            lineNumber: 370,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/pregnancy-calculator.tsx",
          lineNumber: 368,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/pregnancy-calculator.tsx",
        lineNumber: 359,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/pregnancy-calculator.tsx",
      lineNumber: 357,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/pregnancy-calculator.tsx",
    lineNumber: 231,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/pregnancy-calculator.tsx",
    lineNumber: 230,
    columnNumber: 5
  }, this);
}

// app/routes/birthday-countdown.tsx
var birthday_countdown_exports = {};
__export(birthday_countdown_exports, {
  action: () => action4,
  default: () => BirthdayCountdown,
  loader: () => loader5,
  meta: () => meta4
});
import { useState as useState4 } from "react";
import { json as json5 } from "@remix-run/node";
import { Form as Form4, useActionData as useActionData4, useNavigation as useNavigation4, useLoaderData as useLoaderData5 } from "@remix-run/react";
import {
  differenceInCalendarDays,
  differenceInYears as differenceInYears2,
  format as format3,
  isLeapYear as isLeapYear2
} from "date-fns";
import { CalendarDays, PartyPopper } from "lucide-react";
import { jsxDEV as jsxDEV18 } from "react/jsx-dev-runtime";
var meta4 = () => [
  { title: "Birthday Countdown Calculator - How Many Days Until My Birthday?" },
  { name: "description", content: "Find out exactly how many days, hours, and minutes until your next birthday with our free Birthday Countdown Calculator." },
  { name: "keywords", content: "birthday countdown, days until birthday, birthday calculator, next birthday, birthday timer" },
  { property: "og:title", content: "Birthday Countdown Calculator - How Many Days Until My Birthday?" },
  { property: "og:description", content: "Find out exactly how many days, hours, and minutes until your next birthday with our free Birthday Countdown Calculator." },
  { property: "og:type", content: "website" },
  { property: "og:url", content: "https://agecalculator.app/birthday-countdown" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "Birthday Countdown Calculator - How Many Days Until My Birthday?" },
  { name: "twitter:description", content: "Find out exactly how many days, hours, and minutes until your next birthday with our free Birthday Countdown Calculator." },
  { rel: "canonical", href: "https://agecalculator.app/birthday-countdown" }
];
function loader5() {
  return {
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Birthday Countdown Calculator",
      applicationCategory: "UtilityApplication",
      description: "Find out exactly how many days, hours, and minutes until your next birthday with our free Birthday Countdown Calculator.",
      operatingSystem: "Any",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD"
      },
      url: "https://agecalculator.app/birthday-countdown",
      screenshot: "https://images.unsplash.com/photo-1517842645767-c639042777db",
      featureList: "Calculate days until birthday, next birthday date, age at next birthday. Easy to use. Free. Instant calculations.",
      inLanguage: "en",
      audience: {
        "@type": "Audience",
        audienceType: "Everyone"
      }
    },
    breadcrumbJsonLd: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://agecalculator.app"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Birthday Countdown Calculator",
          item: "https://agecalculator.app/birthday-countdown"
        }
      ]
    },
    faqJsonLd: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How is my next birthday calculated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The calculator determines if your birthday has already passed this year. If it has, your next birthday will be next year. If not, your next birthday will be this year."
          }
        },
        {
          "@type": "Question",
          name: "What if I was born on February 29th (leap day)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For leap year birthdays (February 29th), the calculator will display your birthday as March 1st in non-leap years, but will correctly identify that you were born on a leap day."
          }
        },
        {
          "@type": "Question",
          name: "Can I use this for planning birthday events?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely! The birthday countdown is perfect for planning parties and celebrations, as it gives you the exact number of days remaining and even tells you what day of the week your birthday falls on."
          }
        }
      ]
    }
  };
}
async function action4({ request }) {
  let birthdayStr = (await request.formData()).get("birthday");
  if (!birthdayStr)
    return json5({ error: "Birthday is required" });
  let birthday = new Date(birthdayStr), today = /* @__PURE__ */ new Date(), nextBirthday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());
  nextBirthday < today && (nextBirthday = new Date(today.getFullYear() + 1, birthday.getMonth(), birthday.getDate()));
  let daysUntilBirthday = differenceInCalendarDays(nextBirthday, today), nextAge = differenceInYears2(nextBirthday, birthday), isLeapYearResult = isLeapYear2(nextBirthday), nextBirthdayDate = format3(nextBirthday, "MMMM d, yyyy"), dayOfWeek = format3(nextBirthday, "EEEE");
  return json5({ result: {
    daysUntilBirthday,
    nextBirthdayDate,
    nextAge,
    dayOfWeek,
    isLeapYear: isLeapYearResult
  } });
}
function BirthdayCountdown() {
  let actionData = useActionData4(), navigation = useNavigation4(), { jsonLd, breadcrumbJsonLd, faqJsonLd } = useLoaderData5(), isSubmitting = navigation.state === "submitting", months2 = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ], days = Array.from({ length: 31 }, (_, i) => i + 1), currentYear = (/* @__PURE__ */ new Date()).getFullYear(), years = Array.from({ length: 101 }, (_, i) => currentYear - i), [selectedMonth, setSelectedMonth] = useState4(""), [selectedDay, setSelectedDay] = useState4(""), [selectedYear, setSelectedYear] = useState4(""), birthdayStr = selectedYear && selectedMonth && selectedDay ? `${selectedYear}-${String(Number(selectedMonth) + 1).padStart(2, "0")}-${String(selectedDay).padStart(2, "0")}` : "";
  return /* @__PURE__ */ jsxDEV18("div", { className: "min-h-screen bg-gray-50 py-10", children: /* @__PURE__ */ jsxDEV18("div", { className: "max-w-2xl mx-auto", children: [
    /* @__PURE__ */ jsxDEV18("div", { className: "bg-white rounded-xl shadow p-8 mb-8", children: [
      /* @__PURE__ */ jsxDEV18("div", { className: "flex items-center gap-2 mb-6", children: [
        /* @__PURE__ */ jsxDEV18(CalendarDays, { className: "text-[#19b6e9] w-7 h-7" }, void 0, !1, {
          fileName: "app/routes/birthday-countdown.tsx",
          lineNumber: 191,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV18("h1", { className: "text-3xl font-bold text-gray-900 flex-1 text-center", children: "Birthday Countdown" }, void 0, !1, {
          fileName: "app/routes/birthday-countdown.tsx",
          lineNumber: 192,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV18(PartyPopper, { className: "text-[#19b6e9] w-7 h-7" }, void 0, !1, {
          fileName: "app/routes/birthday-countdown.tsx",
          lineNumber: 193,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/birthday-countdown.tsx",
        lineNumber: 190,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV18(Form4, { method: "post", className: "space-y-6", children: [
        /* @__PURE__ */ jsxDEV18("div", { className: "flex flex-col md:flex-row gap-4 mb-4", children: [
          /* @__PURE__ */ jsxDEV18("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxDEV18(Label, { className: "font-semibold flex items-center gap-1 mb-1", children: [
              /* @__PURE__ */ jsxDEV18(CalendarDays, { className: "w-4 h-4 mr-1" }, void 0, !1, {
                fileName: "app/routes/birthday-countdown.tsx",
                lineNumber: 198,
                columnNumber: 79
              }, this),
              "Month"
            ] }, void 0, !0, {
              fileName: "app/routes/birthday-countdown.tsx",
              lineNumber: 198,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV18(
              "select",
              {
                className: "w-full rounded-md border border-gray-300 px-3 py-2",
                value: selectedMonth,
                onChange: (e) => setSelectedMonth(e.target.value),
                required: !0,
                children: [
                  /* @__PURE__ */ jsxDEV18("option", { value: "", children: "Month" }, void 0, !1, {
                    fileName: "app/routes/birthday-countdown.tsx",
                    lineNumber: 205,
                    columnNumber: 19
                  }, this),
                  months2.map((m, idx) => /* @__PURE__ */ jsxDEV18("option", { value: idx, children: m }, m, !1, {
                    fileName: "app/routes/birthday-countdown.tsx",
                    lineNumber: 207,
                    columnNumber: 21
                  }, this))
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/birthday-countdown.tsx",
                lineNumber: 199,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/birthday-countdown.tsx",
            lineNumber: 197,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV18("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxDEV18(Label, { className: "font-semibold flex items-center gap-1 mb-1", children: [
              /* @__PURE__ */ jsxDEV18(CalendarDays, { className: "w-4 h-4 mr-1" }, void 0, !1, {
                fileName: "app/routes/birthday-countdown.tsx",
                lineNumber: 212,
                columnNumber: 79
              }, this),
              "Day"
            ] }, void 0, !0, {
              fileName: "app/routes/birthday-countdown.tsx",
              lineNumber: 212,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV18(
              "select",
              {
                className: "w-full rounded-md border border-gray-300 px-3 py-2",
                value: selectedDay,
                onChange: (e) => setSelectedDay(e.target.value),
                required: !0,
                children: [
                  /* @__PURE__ */ jsxDEV18("option", { value: "", children: "Day" }, void 0, !1, {
                    fileName: "app/routes/birthday-countdown.tsx",
                    lineNumber: 219,
                    columnNumber: 19
                  }, this),
                  days.map((d) => /* @__PURE__ */ jsxDEV18("option", { value: d, children: d }, d, !1, {
                    fileName: "app/routes/birthday-countdown.tsx",
                    lineNumber: 221,
                    columnNumber: 21
                  }, this))
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/birthday-countdown.tsx",
                lineNumber: 213,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/birthday-countdown.tsx",
            lineNumber: 211,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV18("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxDEV18(Label, { className: "font-semibold flex items-center gap-1 mb-1", children: [
              /* @__PURE__ */ jsxDEV18(CalendarDays, { className: "w-4 h-4 mr-1" }, void 0, !1, {
                fileName: "app/routes/birthday-countdown.tsx",
                lineNumber: 226,
                columnNumber: 79
              }, this),
              "Year"
            ] }, void 0, !0, {
              fileName: "app/routes/birthday-countdown.tsx",
              lineNumber: 226,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV18(
              "select",
              {
                className: "w-full rounded-md border border-gray-300 px-3 py-2",
                value: selectedYear,
                onChange: (e) => setSelectedYear(e.target.value),
                required: !0,
                children: [
                  /* @__PURE__ */ jsxDEV18("option", { value: "", children: "Year" }, void 0, !1, {
                    fileName: "app/routes/birthday-countdown.tsx",
                    lineNumber: 233,
                    columnNumber: 19
                  }, this),
                  years.map((y) => /* @__PURE__ */ jsxDEV18("option", { value: y, children: y }, y, !1, {
                    fileName: "app/routes/birthday-countdown.tsx",
                    lineNumber: 235,
                    columnNumber: 21
                  }, this))
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/birthday-countdown.tsx",
                lineNumber: 227,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/birthday-countdown.tsx",
            lineNumber: 225,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/birthday-countdown.tsx",
          lineNumber: 196,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV18("input", { type: "hidden", name: "birthday", value: birthdayStr }, void 0, !1, {
          fileName: "app/routes/birthday-countdown.tsx",
          lineNumber: 240,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV18(Button, { type: "submit", className: "w-full bg-[#19b6e9] hover:bg-[#15a3cc] text-white font-semibold py-2 rounded", disabled: isSubmitting, children: isSubmitting ? "Calculating..." : "Start Countdown" }, void 0, !1, {
          fileName: "app/routes/birthday-countdown.tsx",
          lineNumber: 241,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/birthday-countdown.tsx",
        lineNumber: 195,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/birthday-countdown.tsx",
      lineNumber: 189,
      columnNumber: 9
    }, this),
    actionData && "result" in actionData && /* @__PURE__ */ jsxDEV18("div", { className: "bg-white rounded-xl shadow p-6 mb-8", children: [
      /* @__PURE__ */ jsxDEV18("h2", { className: "text-2xl font-bold mb-4 text-center", children: "Your Birthday Countdown" }, void 0, !1, {
        fileName: "app/routes/birthday-countdown.tsx",
        lineNumber: 248,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV18("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: [
        /* @__PURE__ */ jsxDEV18(
          ResultCard,
          {
            title: "Days Until Birthday",
            value: actionData.result.daysUntilBirthday.toString(),
            description: "Your countdown has started!"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/birthday-countdown.tsx",
            lineNumber: 250,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV18(
          ResultCard,
          {
            title: "Next Birthday",
            value: actionData.result.nextBirthdayDate,
            description: `Falls on a ${actionData.result.dayOfWeek}`
          },
          void 0,
          !1,
          {
            fileName: "app/routes/birthday-countdown.tsx",
            lineNumber: 255,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV18(
          ResultCard,
          {
            title: "Your Age Then",
            value: actionData.result.nextAge.toString(),
            description: actionData.result.isLeapYear ? "Born in a leap year!" : ""
          },
          void 0,
          !1,
          {
            fileName: "app/routes/birthday-countdown.tsx",
            lineNumber: 260,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/birthday-countdown.tsx",
        lineNumber: 249,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/birthday-countdown.tsx",
      lineNumber: 247,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV18("div", { className: "bg-white rounded-xl shadow p-8 mb-8", children: [
      /* @__PURE__ */ jsxDEV18("h2", { className: "text-2xl font-bold text-center mb-6", children: "How It Works" }, void 0, !1, {
        fileName: "app/routes/birthday-countdown.tsx",
        lineNumber: 269,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV18("div", { className: "flex flex-col md:flex-row justify-center items-center gap-8", children: [
        /* @__PURE__ */ jsxDEV18("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsxDEV18("div", { className: "bg-[#19b6e9] text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mb-2", children: "1" }, void 0, !1, {
            fileName: "app/routes/birthday-countdown.tsx",
            lineNumber: 272,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV18("div", { className: "font-semibold mb-1", children: "Select Your Birthday" }, void 0, !1, {
            fileName: "app/routes/birthday-countdown.tsx",
            lineNumber: 273,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV18("div", { className: "text-gray-500 text-center text-sm", children: "Choose your birth date using the month, day, and year selectors" }, void 0, !1, {
            fileName: "app/routes/birthday-countdown.tsx",
            lineNumber: 274,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/birthday-countdown.tsx",
          lineNumber: 271,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV18("div", { className: "text-2xl text-[#19b6e9]", children: "\u2192" }, void 0, !1, {
          fileName: "app/routes/birthday-countdown.tsx",
          lineNumber: 276,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV18("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsxDEV18("div", { className: "bg-[#19b6e9] text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mb-2", children: "2" }, void 0, !1, {
            fileName: "app/routes/birthday-countdown.tsx",
            lineNumber: 278,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV18("div", { className: "font-semibold mb-1", children: "Start Countdown" }, void 0, !1, {
            fileName: "app/routes/birthday-countdown.tsx",
            lineNumber: 279,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV18("div", { className: "text-gray-500 text-center text-sm", children: "Click to start the real-time countdown to your next birthday" }, void 0, !1, {
            fileName: "app/routes/birthday-countdown.tsx",
            lineNumber: 280,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/birthday-countdown.tsx",
          lineNumber: 277,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV18("div", { className: "text-2xl text-[#19b6e9]", children: "\u2192" }, void 0, !1, {
          fileName: "app/routes/birthday-countdown.tsx",
          lineNumber: 282,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV18("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsxDEV18("div", { className: "bg-[#19b6e9] text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mb-2", children: "3" }, void 0, !1, {
            fileName: "app/routes/birthday-countdown.tsx",
            lineNumber: 284,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV18("div", { className: "font-semibold mb-1", children: "Watch Time Tick" }, void 0, !1, {
            fileName: "app/routes/birthday-countdown.tsx",
            lineNumber: 285,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV18("div", { className: "text-gray-500 text-center text-sm", children: "See days, hours, minutes, and seconds until your celebration" }, void 0, !1, {
            fileName: "app/routes/birthday-countdown.tsx",
            lineNumber: 286,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/birthday-countdown.tsx",
          lineNumber: 283,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/birthday-countdown.tsx",
        lineNumber: 270,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/birthday-countdown.tsx",
      lineNumber: 268,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV18("div", { className: "bg-white rounded-xl shadow p-8 mb-8", children: [
      /* @__PURE__ */ jsxDEV18("h2", { className: "text-2xl font-bold text-center mb-6", children: "Frequently Asked Questions" }, void 0, !1, {
        fileName: "app/routes/birthday-countdown.tsx",
        lineNumber: 291,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV18("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxDEV18("div", { className: "border-b pb-4", children: [
          /* @__PURE__ */ jsxDEV18("div", { className: "font-semibold text-[#19b6e9] mb-1", children: "How accurate is the birthday countdown?" }, void 0, !1, {
            fileName: "app/routes/birthday-countdown.tsx",
            lineNumber: 294,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV18("div", { className: "text-gray-600 text-sm", children: "Our countdown is precise to the second, continuously updating to show you exactly how long until your next birthday celebration." }, void 0, !1, {
            fileName: "app/routes/birthday-countdown.tsx",
            lineNumber: 295,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/birthday-countdown.tsx",
          lineNumber: 293,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV18("div", { className: "border-b pb-4", children: [
          /* @__PURE__ */ jsxDEV18("div", { className: "font-semibold text-[#19b6e9] mb-1", children: "Can I count down to someone else's birthday?" }, void 0, !1, {
            fileName: "app/routes/birthday-countdown.tsx",
            lineNumber: 298,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV18("div", { className: "text-gray-600 text-sm", children: "Yes! You can use any valid birth date to count down to anyone's birthday. Just make sure the date isn't in the future." }, void 0, !1, {
            fileName: "app/routes/birthday-countdown.tsx",
            lineNumber: 299,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/birthday-countdown.tsx",
          lineNumber: 297,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV18("div", { children: [
          /* @__PURE__ */ jsxDEV18("div", { className: "font-semibold text-[#19b6e9] mb-1", children: "What happens when it's my birthday?" }, void 0, !1, {
            fileName: "app/routes/birthday-countdown.tsx",
            lineNumber: 302,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV18("div", { className: "text-gray-600 text-sm", children: "The countdown will reset for the next year, so you can keep celebrating every year!" }, void 0, !1, {
            fileName: "app/routes/birthday-countdown.tsx",
            lineNumber: 303,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/birthday-countdown.tsx",
          lineNumber: 301,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/birthday-countdown.tsx",
        lineNumber: 292,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/birthday-countdown.tsx",
      lineNumber: 290,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/birthday-countdown.tsx",
    lineNumber: 188,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/birthday-countdown.tsx",
    lineNumber: 187,
    columnNumber: 5
  }, this);
}

// app/routes/generation-finder.tsx
var generation_finder_exports = {};
__export(generation_finder_exports, {
  action: () => action5,
  default: () => GenerationFinder,
  loader: () => loader6,
  meta: () => meta5
});
import { json as json6 } from "@remix-run/node";
import { Form as Form5, useActionData as useActionData5, useNavigation as useNavigation5, useLoaderData as useLoaderData6 } from "@remix-run/react";
import { Users2 } from "lucide-react";
import { jsxDEV as jsxDEV19 } from "react/jsx-dev-runtime";
var meta5 = () => [
  { title: "Generation Finder - What Generation Am I?" },
  { name: "description", content: "Find out which generation you belong to based on your birth year with our free Generation Finder tool." },
  { name: "keywords", content: "generation finder, what generation am i, generational cohort, baby boomer, gen x, millennial, gen z" },
  { property: "og:title", content: "Generation Finder - What Generation Am I?" },
  { property: "og:description", content: "Find out which generation you belong to based on your birth year with our free Generation Finder tool." },
  { property: "og:type", content: "website" },
  { property: "og:url", content: "https://agecalculator.app/generation-finder" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "Generation Finder - What Generation Am I?" },
  { name: "twitter:description", content: "Find out which generation you belong to based on your birth year with our free Generation Finder tool." },
  { rel: "canonical", href: "https://agecalculator.app/generation-finder" }
];
function loader6() {
  return {
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Generation Finder",
      applicationCategory: "UtilityApplication",
      description: "Find out which generation you belong to based on your birth year with our free Generation Finder tool.",
      operatingSystem: "Any",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD"
      },
      url: "https://agecalculator.app/generation-finder",
      screenshot: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe",
      featureList: "Find your generation, learn about generational characteristics, understand generational cohorts. Easy to use. Free. Instant results.",
      inLanguage: "en",
      audience: {
        "@type": "Audience",
        audienceType: "Everyone"
      }
    },
    breadcrumbJsonLd: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://agecalculator.app"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Generation Finder",
          item: "https://agecalculator.app/generation-finder"
        }
      ]
    },
    faqJsonLd: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What are the different generations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The main generations are: Silent Generation (1928-1945), Baby Boomers (1946-1964), Generation X (1965-1980), Millennials (1981-1996), Generation Z (1997-2011), and Generation Alpha (2012-Present)."
          }
        },
        {
          "@type": "Question",
          name: "How are generation boundaries determined?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Generation boundaries are determined by significant historical events, cultural shifts, and technological advancements that shape the experiences and characteristics of people born during those periods."
          }
        },
        {
          "@type": "Question",
          name: "Why do generation definitions matter?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Understanding generational cohorts helps us comprehend how different age groups experience and interact with the world. It's useful for marketing, social research, and understanding cultural trends."
          }
        }
      ]
    }
  };
}
async function action5({ request }) {
  let birthYearStr = (await request.formData()).get("birthYear");
  if (!birthYearStr)
    return json6({ error: "Birth year is required" });
  let birthYear = parseInt(birthYearStr, 10);
  if (isNaN(birthYear) || birthYear < 1900 || birthYear > (/* @__PURE__ */ new Date()).getFullYear())
    return json6({ error: "Please enter a valid birth year between 1900 and present" });
  let result = findGeneration(birthYear);
  return json6({ result });
}
function findGeneration(year) {
  return year >= 2012 ? {
    generation: "Generation Alpha",
    yearRange: "2012 - Present",
    description: "The first generation born entirely in the 21st century. Growing up with AI, smart devices, and advanced technology as a natural part of life."
  } : year >= 1997 ? {
    generation: "Generation Z",
    yearRange: "1997 - 2011",
    description: "Digital natives who have never known a world without the internet. Known for their tech-savvy nature and focus on social justice."
  } : year >= 1981 ? {
    generation: "Millennial",
    yearRange: "1981 - 1996",
    description: "Also known as Generation Y. Came of age during the internet boom and experienced significant technological advancement throughout their lives."
  } : year >= 1965 ? {
    generation: "Generation X",
    yearRange: "1965 - 1980",
    description: "The 'latchkey' generation, known for their independence and adaptability. Witnessed the transition from analog to digital."
  } : year >= 1946 ? {
    generation: "Baby Boomer",
    yearRange: "1946 - 1964",
    description: "Born during the post-World War II baby boom. Experienced significant social change and economic prosperity."
  } : {
    generation: "Silent Generation",
    yearRange: "1928 - 1945",
    description: "Grew up during the Great Depression and World War II. Known for their resilience and traditional values."
  };
}
function GenerationFinder() {
  let actionData = useActionData5(), navigation = useNavigation5(), { jsonLd, breadcrumbJsonLd, faqJsonLd } = useLoaderData6(), isSubmitting = navigation.state === "submitting", currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsxDEV19("div", { className: "min-h-screen bg-gray-50 py-10", children: /* @__PURE__ */ jsxDEV19("div", { className: "max-w-3xl mx-auto", children: [
    /* @__PURE__ */ jsxDEV19(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
          __html: JSON.stringify(jsonLd)
        }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/generation-finder.tsx",
        lineNumber: 176,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV19(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
          __html: JSON.stringify(breadcrumbJsonLd)
        }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/generation-finder.tsx",
        lineNumber: 182,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV19(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
          __html: JSON.stringify(faqJsonLd)
        }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/generation-finder.tsx",
        lineNumber: 188,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV19("div", { className: "text-center space-y-4", children: [
      /* @__PURE__ */ jsxDEV19("h1", { className: "text-4xl font-bold text-primary", children: "What Generation Am I?" }, void 0, !1, {
        fileName: "app/routes/generation-finder.tsx",
        lineNumber: 196,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV19("p", { className: "text-xl text-neutral-gray max-w-2xl mx-auto", children: "Enter your birth year to discover your generational cohort and learn about its characteristics." }, void 0, !1, {
        fileName: "app/routes/generation-finder.tsx",
        lineNumber: 197,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/generation-finder.tsx",
      lineNumber: 195,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV19(Card, { className: "p-6 bg-white/80 backdrop-blur-sm max-w-xl mx-auto", children: /* @__PURE__ */ jsxDEV19(Form5, { method: "post", className: "space-y-6", children: [
      /* @__PURE__ */ jsxDEV19("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxDEV19(Label, { htmlFor: "birthYear", children: "Birth Year" }, void 0, !1, {
          fileName: "app/routes/generation-finder.tsx",
          lineNumber: 205,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV19(
          "input",
          {
            type: "number",
            id: "birthYear",
            name: "birthYear",
            className: "w-full rounded-md border border-input bg-background px-3 py-2 text-lg",
            placeholder: "Enter your birth year (e.g., 1990)",
            min: "1900",
            max: currentYear,
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 206,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/generation-finder.tsx",
        lineNumber: 204,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV19(Button, { type: "submit", className: "w-full", disabled: isSubmitting, children: [
        /* @__PURE__ */ jsxDEV19(Users2, { className: "mr-2 h-5 w-5" }, void 0, !1, {
          fileName: "app/routes/generation-finder.tsx",
          lineNumber: 219,
          columnNumber: 15
        }, this),
        isSubmitting ? "Finding..." : "Find My Generation"
      ] }, void 0, !0, {
        fileName: "app/routes/generation-finder.tsx",
        lineNumber: 218,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/generation-finder.tsx",
      lineNumber: 203,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/generation-finder.tsx",
      lineNumber: 202,
      columnNumber: 9
    }, this),
    actionData?.result && /* @__PURE__ */ jsxDEV19(Card, { className: "p-6 bg-blue-50 border border-blue-100 max-w-xl mx-auto", children: /* @__PURE__ */ jsxDEV19("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxDEV19("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxDEV19("h2", { className: "text-2xl font-bold text-primary", children: [
          "You are part of ",
          actionData.result.generation
        ] }, void 0, !0, {
          fileName: "app/routes/generation-finder.tsx",
          lineNumber: 229,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV19("p", { className: "text-neutral-gray", children: [
          "Birth Years: ",
          actionData.result.yearRange
        ] }, void 0, !0, {
          fileName: "app/routes/generation-finder.tsx",
          lineNumber: 232,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/generation-finder.tsx",
        lineNumber: 228,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV19("p", { className: "text-neutral-dark", children: actionData.result.description }, void 0, !1, {
        fileName: "app/routes/generation-finder.tsx",
        lineNumber: 236,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/generation-finder.tsx",
      lineNumber: 227,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/generation-finder.tsx",
      lineNumber: 226,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV19(Card, { className: "p-6 space-y-6 bg-white/80 backdrop-blur-sm", children: [
      /* @__PURE__ */ jsxDEV19("h2", { className: "text-3xl font-bold text-center text-neutral-dark", children: "How It Works" }, void 0, !1, {
        fileName: "app/routes/generation-finder.tsx",
        lineNumber: 244,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV19("div", { className: "flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 relative", children: [
        /* @__PURE__ */ jsxDEV19("div", { className: "flex flex-col items-center text-center max-w-[250px] relative", children: [
          /* @__PURE__ */ jsxDEV19("div", { className: "w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4", children: "1" }, void 0, !1, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 249,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV19("h3", { className: "text-lg font-semibold text-neutral-dark mb-2", children: "Select Your Birth Year" }, void 0, !1, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 252,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV19("p", { className: "text-neutral-gray text-sm", children: "Enter your birth year in the calculator above" }, void 0, !1, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 255,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV19("div", { className: "hidden md:block absolute left-[calc(100%+1rem)] top-6 -translate-y-1/2", children: /* @__PURE__ */ jsxDEV19("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", className: "text-primary", children: /* @__PURE__ */ jsxDEV19("path", { d: "M5 12H19M19 12L12 5M19 12L12 19", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, void 0, !1, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 260,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 259,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 258,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/generation-finder.tsx",
          lineNumber: 248,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV19("div", { className: "flex flex-col items-center text-center max-w-[250px] relative", children: [
          /* @__PURE__ */ jsxDEV19("div", { className: "w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4", children: "2" }, void 0, !1, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 265,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV19("h3", { className: "text-lg font-semibold text-neutral-dark mb-2", children: "Get Your Generation" }, void 0, !1, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 268,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV19("p", { className: "text-neutral-gray text-sm", children: "Our tool identifies which generation you belong to based on your birth year" }, void 0, !1, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 271,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV19("div", { className: "hidden md:block absolute left-[calc(100%+1rem)] top-6 -translate-y-1/2", children: /* @__PURE__ */ jsxDEV19("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", className: "text-primary", children: /* @__PURE__ */ jsxDEV19("path", { d: "M5 12H19M19 12L12 5M19 12L12 19", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, void 0, !1, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 276,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 275,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 274,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/generation-finder.tsx",
          lineNumber: 264,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV19("div", { className: "flex flex-col items-center text-center max-w-[250px]", children: [
          /* @__PURE__ */ jsxDEV19("div", { className: "w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4", children: "3" }, void 0, !1, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 281,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV19("h3", { className: "text-lg font-semibold text-neutral-dark mb-2", children: "Learn More" }, void 0, !1, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 284,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV19("p", { className: "text-neutral-gray text-sm", children: "Discover characteristics and key events that shaped your generation" }, void 0, !1, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 287,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/generation-finder.tsx",
          lineNumber: 280,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/generation-finder.tsx",
        lineNumber: 247,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/generation-finder.tsx",
      lineNumber: 243,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV19(Card, { className: "p-6", children: [
      /* @__PURE__ */ jsxDEV19("h2", { className: "text-2xl font-bold text-center mb-6", children: [
        "Generation Overview (",
        currentYear,
        ")"
      ] }, void 0, !0, {
        fileName: "app/routes/generation-finder.tsx",
        lineNumber: 295,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV19("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxDEV19("table", { className: "w-full", children: [
        /* @__PURE__ */ jsxDEV19("thead", { children: /* @__PURE__ */ jsxDEV19("tr", { className: "bg-gray-100", children: [
          /* @__PURE__ */ jsxDEV19("th", { className: "p-3 text-left", children: "Generation" }, void 0, !1, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 300,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV19("th", { className: "p-3 text-left", children: "Time Frame" }, void 0, !1, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 301,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV19("th", { className: "p-3 text-left", children: [
            "Age in ",
            currentYear
          ] }, void 0, !0, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 302,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/generation-finder.tsx",
          lineNumber: 299,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/generation-finder.tsx",
          lineNumber: 298,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV19("tbody", { children: [
          /* @__PURE__ */ jsxDEV19("tr", { className: "border-b", children: [
            /* @__PURE__ */ jsxDEV19("td", { className: "p-3", children: "The Silent Generation" }, void 0, !1, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 307,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV19("td", { className: "p-3", children: "1928-1945" }, void 0, !1, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 308,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV19("td", { className: "p-3", children: [
              currentYear - 1928,
              "-",
              currentYear - 1945,
              " years old"
            ] }, void 0, !0, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 309,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 306,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV19("tr", { className: "border-b", children: [
            /* @__PURE__ */ jsxDEV19("td", { className: "p-3", children: "Baby Boomers" }, void 0, !1, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 312,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV19("td", { className: "p-3", children: "1946-1964" }, void 0, !1, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 313,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV19("td", { className: "p-3", children: [
              currentYear - 1964,
              "-",
              currentYear - 1946,
              " years old"
            ] }, void 0, !0, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 314,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 311,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV19("tr", { className: "border-b", children: [
            /* @__PURE__ */ jsxDEV19("td", { className: "p-3", children: "Gen X" }, void 0, !1, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 317,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV19("td", { className: "p-3", children: "1965-1980" }, void 0, !1, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 318,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV19("td", { className: "p-3", children: [
              currentYear - 1980,
              "-",
              currentYear - 1965,
              " years old"
            ] }, void 0, !0, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 319,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 316,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV19("tr", { className: "border-b", children: [
            /* @__PURE__ */ jsxDEV19("td", { className: "p-3", children: "Millennials" }, void 0, !1, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 322,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV19("td", { className: "p-3", children: "1981-1996" }, void 0, !1, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 323,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV19("td", { className: "p-3", children: [
              currentYear - 1996,
              "-",
              currentYear - 1981,
              " years old"
            ] }, void 0, !0, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 324,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 321,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV19("tr", { className: "border-b", children: [
            /* @__PURE__ */ jsxDEV19("td", { className: "p-3", children: "Gen Z" }, void 0, !1, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 327,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV19("td", { className: "p-3", children: "1997-2012" }, void 0, !1, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 328,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV19("td", { className: "p-3", children: [
              currentYear - 2012,
              "-",
              currentYear - 1997,
              " years old"
            ] }, void 0, !0, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 329,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 326,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV19("tr", { children: [
            /* @__PURE__ */ jsxDEV19("td", { className: "p-3", children: "Gen Alpha" }, void 0, !1, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 332,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV19("td", { className: "p-3", children: "2013-Present" }, void 0, !1, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 333,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV19("td", { className: "p-3", children: [
              "0-",
              currentYear - 2013,
              " years old"
            ] }, void 0, !0, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 334,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 331,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/generation-finder.tsx",
          lineNumber: 305,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/generation-finder.tsx",
        lineNumber: 297,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/generation-finder.tsx",
        lineNumber: 296,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV19("div", { className: "mt-8 space-y-6", children: [
        /* @__PURE__ */ jsxDEV19("h3", { className: "text-xl font-semibold", children: "Interesting Facts About Each Generation" }, void 0, !1, {
          fileName: "app/routes/generation-finder.tsx",
          lineNumber: 341,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV19("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxDEV19("div", { children: [
            /* @__PURE__ */ jsxDEV19("h4", { className: "font-semibold text-primary", children: "The Silent Generation" }, void 0, !1, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 345,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV19("ul", { className: "list-disc pl-5 space-y-1", children: [
              /* @__PURE__ */ jsxDEV19("li", { children: "They were the first generation to embrace television as a primary form of entertainment." }, void 0, !1, {
                fileName: "app/routes/generation-finder.tsx",
                lineNumber: 347,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV19("li", { children: "This generation has the highest rate of civic engagement and volunteerism among all living generations." }, void 0, !1, {
                fileName: "app/routes/generation-finder.tsx",
                lineNumber: 348,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 346,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 344,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV19("div", { children: [
            /* @__PURE__ */ jsxDEV19("h4", { className: "font-semibold text-primary", children: "Baby Boomers" }, void 0, !1, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 353,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV19("ul", { className: "list-disc pl-5 space-y-1", children: [
              /* @__PURE__ */ jsxDEV19("li", { children: "They witnessed and participated in significant cultural movements like Woodstock and the Civil Rights Movement." }, void 0, !1, {
                fileName: "app/routes/generation-finder.tsx",
                lineNumber: 355,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV19("li", { children: "This generation controls about 70% of all disposable income in the United States." }, void 0, !1, {
                fileName: "app/routes/generation-finder.tsx",
                lineNumber: 356,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 354,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 352,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV19("div", { children: [
            /* @__PURE__ */ jsxDEV19("h4", { className: "font-semibold text-primary", children: "Generation X" }, void 0, !1, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 361,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV19("ul", { className: "list-disc pl-5 space-y-1", children: [
              /* @__PURE__ */ jsxDEV19("li", { children: "They were the first generation to grow up with personal computers in their homes." }, void 0, !1, {
                fileName: "app/routes/generation-finder.tsx",
                lineNumber: 363,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV19("li", { children: "Gen X has the highest rate of startup founders among all generations." }, void 0, !1, {
                fileName: "app/routes/generation-finder.tsx",
                lineNumber: 364,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 362,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 360,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV19("div", { children: [
            /* @__PURE__ */ jsxDEV19("h4", { className: "font-semibold text-primary", children: "Millennials" }, void 0, !1, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 369,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV19("ul", { className: "list-disc pl-5 space-y-1", children: [
              /* @__PURE__ */ jsxDEV19("li", { children: "They are the most educated generation in history, with over 39% holding a bachelor's degree." }, void 0, !1, {
                fileName: "app/routes/generation-finder.tsx",
                lineNumber: 371,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV19("li", { children: "Millennials are the first generation to prioritize experiences over material possessions in their spending habits." }, void 0, !1, {
                fileName: "app/routes/generation-finder.tsx",
                lineNumber: 372,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 370,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 368,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV19("div", { children: [
            /* @__PURE__ */ jsxDEV19("h4", { className: "font-semibold text-primary", children: "Generation Z" }, void 0, !1, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 377,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV19("ul", { className: "list-disc pl-5 space-y-1", children: [
              /* @__PURE__ */ jsxDEV19("li", { children: "They are the most diverse generation in history and have never known a world without the internet." }, void 0, !1, {
                fileName: "app/routes/generation-finder.tsx",
                lineNumber: 379,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV19("li", { children: "Gen Z has an average attention span of 8 seconds, compared to 12 seconds for millennials." }, void 0, !1, {
                fileName: "app/routes/generation-finder.tsx",
                lineNumber: 380,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 378,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 376,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV19("div", { children: [
            /* @__PURE__ */ jsxDEV19("h4", { className: "font-semibold text-primary", children: "Generation Alpha" }, void 0, !1, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 385,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV19("ul", { className: "list-disc pl-5 space-y-1", children: [
              /* @__PURE__ */ jsxDEV19("li", { children: "They are the first generation to be born entirely in the 21st century." }, void 0, !1, {
                fileName: "app/routes/generation-finder.tsx",
                lineNumber: 387,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV19("li", { children: "Expected to be the most technologically immersed generation, with AI being a natural part of their daily lives." }, void 0, !1, {
                fileName: "app/routes/generation-finder.tsx",
                lineNumber: 388,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/generation-finder.tsx",
              lineNumber: 386,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 384,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/generation-finder.tsx",
          lineNumber: 343,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/generation-finder.tsx",
        lineNumber: 340,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/generation-finder.tsx",
      lineNumber: 294,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV19("div", { className: "bg-white rounded-lg p-6 space-y-6", children: [
      /* @__PURE__ */ jsxDEV19("h2", { className: "text-2xl font-bold text-center", children: "Frequently Asked Questions" }, void 0, !1, {
        fileName: "app/routes/generation-finder.tsx",
        lineNumber: 396,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV19("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxDEV19("div", { className: "space-y-2 p-4 border-b", children: [
          /* @__PURE__ */ jsxDEV19("h3", { className: "font-semibold text-lg text-primary", children: "How are generations defined?" }, void 0, !1, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 399,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV19("p", { className: "text-gray-600", children: "Generations are defined by birth year ranges that correspond to significant cultural, technological, and social changes. These cohorts often share common experiences and characteristics that shape their worldview." }, void 0, !1, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 402,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/generation-finder.tsx",
          lineNumber: 398,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV19("div", { className: "space-y-2 p-4 border-b", children: [
          /* @__PURE__ */ jsxDEV19("h3", { className: "font-semibold text-lg text-primary", children: "Why do generation dates sometimes overlap?" }, void 0, !1, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 407,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV19("p", { className: "text-gray-600", children: "Generation boundaries aren't always exact, and there can be some overlap between generations. People born on the cusp between two generations might identify with characteristics of both groups." }, void 0, !1, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 410,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/generation-finder.tsx",
          lineNumber: 406,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV19("div", { className: "space-y-2 p-4", children: [
          /* @__PURE__ */ jsxDEV19("h3", { className: "font-semibold text-lg text-primary", children: "What if I don't identify with my generation's characteristics?" }, void 0, !1, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 415,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV19("p", { className: "text-gray-600", children: "While generational categories can provide insights into shared experiences, they're broad generalizations. Individual experiences, values, and circumstances can vary significantly within each generation." }, void 0, !1, {
            fileName: "app/routes/generation-finder.tsx",
            lineNumber: 418,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/generation-finder.tsx",
          lineNumber: 414,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/generation-finder.tsx",
        lineNumber: 397,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/generation-finder.tsx",
      lineNumber: 395,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/generation-finder.tsx",
    lineNumber: 175,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/generation-finder.tsx",
    lineNumber: 174,
    columnNumber: 5
  }, this);
}

// app/routes/date-calculator.tsx
var date_calculator_exports = {};
__export(date_calculator_exports, {
  action: () => action6,
  default: () => DateCalculator,
  loader: () => loader7,
  meta: () => meta6
});
import { useState as useState5 } from "react";
import { json as json7 } from "@remix-run/node";
import { Form as Form6, useActionData as useActionData6, useNavigation as useNavigation6, useLoaderData as useLoaderData7 } from "@remix-run/react";

// app/components/ui/select.tsx
import * as React4 from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check as Check2, ChevronDown, ChevronUp } from "lucide-react";
import { jsxDEV as jsxDEV20 } from "react/jsx-dev-runtime";
var Select = SelectPrimitive.Root;
var SelectValue = SelectPrimitive.Value, SelectTrigger = React4.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV20(
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 ring-offset-background placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxDEV20(SelectPrimitive.Icon, { asChild: !0, children: /* @__PURE__ */ jsxDEV20(ChevronDown, { className: "h-4 w-4 opacity-50" }, void 0, !1, {
        fileName: "app/components/ui/select.tsx",
        lineNumber: 27,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/select.tsx",
        lineNumber: 26,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/ui/select.tsx",
    lineNumber: 17,
    columnNumber: 3
  },
  this
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectScrollUpButton = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV20(
  SelectPrimitive.ScrollUpButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxDEV20(ChevronUp, { className: "h-4 w-4" }, void 0, !1, {
      fileName: "app/components/ui/select.tsx",
      lineNumber: 45,
      columnNumber: 5
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/select.tsx",
    lineNumber: 37,
    columnNumber: 3
  },
  this
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
var SelectScrollDownButton = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV20(
  SelectPrimitive.ScrollDownButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxDEV20(ChevronDown, { className: "h-4 w-4" }, void 0, !1, {
      fileName: "app/components/ui/select.tsx",
      lineNumber: 62,
      columnNumber: 5
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/select.tsx",
    lineNumber: 54,
    columnNumber: 3
  },
  this
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
var SelectContent = React4.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsxDEV20(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxDEV20(
  SelectPrimitive.Content,
  {
    ref,
    className: cn(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-gray-300 bg-white text-gray-900 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsxDEV20(SelectScrollUpButton, {}, void 0, !1, {
        fileName: "app/components/ui/select.tsx",
        lineNumber: 84,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV20(
        SelectPrimitive.Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        },
        void 0,
        !1,
        {
          fileName: "app/components/ui/select.tsx",
          lineNumber: 85,
          columnNumber: 7
        },
        this
      ),
      /* @__PURE__ */ jsxDEV20(SelectScrollDownButton, {}, void 0, !1, {
        fileName: "app/components/ui/select.tsx",
        lineNumber: 94,
        columnNumber: 7
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/ui/select.tsx",
    lineNumber: 73,
    columnNumber: 5
  },
  this
) }, void 0, !1, {
  fileName: "app/components/ui/select.tsx",
  lineNumber: 72,
  columnNumber: 3
}, this));
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV20(
  SelectPrimitive.Label,
  {
    ref,
    className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/select.tsx",
    lineNumber: 104,
    columnNumber: 3
  },
  this
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectItem = React4.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV20(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxDEV20("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxDEV20(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsxDEV20(Check2, { className: "h-4 w-4" }, void 0, !1, {
        fileName: "app/components/ui/select.tsx",
        lineNumber: 126,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/select.tsx",
        lineNumber: 125,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/select.tsx",
        lineNumber: 124,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV20(SelectPrimitive.ItemText, { children }, void 0, !1, {
        fileName: "app/components/ui/select.tsx",
        lineNumber: 130,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/ui/select.tsx",
    lineNumber: 116,
    columnNumber: 3
  },
  this
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectSeparator = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV20(
  SelectPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/select.tsx",
    lineNumber: 139,
    columnNumber: 3
  },
  this
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

// app/components/date-calculator/Results.tsx
import { jsxDEV as jsxDEV21 } from "react/jsx-dev-runtime";
var Results = ({ result, calculationType }) => calculationType === "difference" || calculationType === "business" ? /* @__PURE__ */ jsxDEV21("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 animate-slideUp", children: [
  /* @__PURE__ */ jsxDEV21(
    ResultCard,
    {
      title: "Total Days",
      value: result.totalDays.toString(),
      description: "Including weekends and holidays"
    },
    void 0,
    !1,
    {
      fileName: "app/components/date-calculator/Results.tsx",
      lineNumber: 13,
      columnNumber: 9
    },
    this
  ),
  /* @__PURE__ */ jsxDEV21(
    ResultCard,
    {
      title: "Business Days",
      value: result.businessDays.toString(),
      description: "Excluding weekends"
    },
    void 0,
    !1,
    {
      fileName: "app/components/date-calculator/Results.tsx",
      lineNumber: 18,
      columnNumber: 9
    },
    this
  ),
  /* @__PURE__ */ jsxDEV21(
    ResultCard,
    {
      title: "End Date Details",
      value: result.dayOfWeek || "",
      description: "Day of the week"
    },
    void 0,
    !1,
    {
      fileName: "app/components/date-calculator/Results.tsx",
      lineNumber: 23,
      columnNumber: 9
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/components/date-calculator/Results.tsx",
  lineNumber: 12,
  columnNumber: 7
}, this) : /* @__PURE__ */ jsxDEV21("div", { className: "grid gap-4 sm:grid-cols-2 animate-slideUp", children: [
  /* @__PURE__ */ jsxDEV21(
    ResultCard,
    {
      title: "Result Date",
      value: result.formattedDate || "",
      description: result.dayOfWeek || ""
    },
    void 0,
    !1,
    {
      fileName: "app/components/date-calculator/Results.tsx",
      lineNumber: 34,
      columnNumber: 7
    },
    this
  ),
  /* @__PURE__ */ jsxDEV21(
    ResultCard,
    {
      title: "Days Changed",
      value: result.totalDays.toString(),
      description: `${calculationType === "add" ? "Added" : "Subtracted"} days`
    },
    void 0,
    !1,
    {
      fileName: "app/components/date-calculator/Results.tsx",
      lineNumber: 39,
      columnNumber: 7
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/components/date-calculator/Results.tsx",
  lineNumber: 33,
  columnNumber: 5
}, this);

// app/routes/date-calculator.tsx
import { addDays as addDays2, differenceInBusinessDays, differenceInCalendarDays as differenceInCalendarDays2, format as format4 } from "date-fns";
import { jsxDEV as jsxDEV22 } from "react/jsx-dev-runtime";
var meta6 = () => [
  { title: "Date Calculator - Calculate Days Between Dates" },
  { name: "description", content: "Calculate the number of days between two dates, add or subtract days, and find business days with our free online date calculator." },
  { name: "keywords", content: "date calculator, days between dates, add days, subtract days, business days calculator" },
  { property: "og:title", content: "Date Calculator - Calculate Days Between Dates" },
  { property: "og:description", content: "Calculate the number of days between two dates, add or subtract days, and find business days with our free online date calculator." },
  { property: "og:type", content: "website" },
  { property: "og:url", content: "https://agecalculator.app/date-calculator" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "Date Calculator - Calculate Days Between Dates" },
  { name: "twitter:description", content: "Calculate the number of days between two dates, add or subtract days, and find business days with our free online date calculator." },
  { rel: "canonical", href: "https://agecalculator.app/date-calculator" }
];
function loader7() {
  return {
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Date Calculator",
      applicationCategory: "UtilityApplication",
      description: "Calculate the number of days between two dates, add or subtract days, and find business days with our free online date calculator.",
      operatingSystem: "Any",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD"
      },
      url: "https://agecalculator.app/date-calculator",
      screenshot: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe",
      featureList: "Calculate date differences, add/subtract days, business days. Easy to use. Free. Instant calculations.",
      inLanguage: "en",
      audience: {
        "@type": "Audience",
        audienceType: "Everyone"
      }
    },
    breadcrumbJsonLd: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://agecalculator.app"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Date Calculator",
          item: "https://agecalculator.app/date-calculator"
        }
      ]
    },
    faqJsonLd: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I calculate the difference between two dates?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Select 'Date Difference' as the calculation type, enter your start and end dates, and click 'Calculate'. The calculator will show you the total number of days between the dates."
          }
        },
        {
          "@type": "Question",
          name: "How do I add or subtract days from a date?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Select either 'Add Days' or 'Subtract Days' as the calculation type, enter your start date and the number of days to add or subtract, then click 'Calculate'."
          }
        },
        {
          "@type": "Question",
          name: "What are business days?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Business days are weekdays (Monday through Friday) excluding weekends. This is useful for calculating work-related time periods."
          }
        }
      ]
    }
  };
}
async function action6({ request }) {
  let formData = await request.formData(), calculationType = formData.get("calculationType"), result = {
    totalDays: 0,
    businessDays: 0,
    formattedDate: "",
    dayOfWeek: ""
  };
  if (calculationType === "difference" || calculationType === "business") {
    let startDateStr = formData.get("startDate"), endDateStr = formData.get("endDate");
    if (!startDateStr || !endDateStr)
      return json7({ error: "Both dates are required" });
    let startDate = new Date(startDateStr), endDate = new Date(endDateStr), totalDays = differenceInCalendarDays2(endDate, startDate), businessDays = differenceInBusinessDays(endDate, startDate);
    result = {
      totalDays: Math.abs(totalDays),
      businessDays: Math.abs(businessDays),
      dayOfWeek: format4(endDate, "EEEE")
    };
  } else if (calculationType === "add" || calculationType === "subtract") {
    let startDateStr = formData.get("startDate"), daysToAddStr = formData.get("daysToAdd");
    if (!startDateStr || !daysToAddStr)
      return json7({ error: "Date and number of days are required" });
    let startDate = new Date(startDateStr), daysToAdd = parseInt(daysToAddStr, 10);
    calculationType === "subtract" && (daysToAdd = -daysToAdd);
    let resultDate = addDays2(startDate, daysToAdd);
    result = {
      totalDays: Math.abs(daysToAdd),
      businessDays: 0,
      // Not applicable for add/subtract
      formattedDate: format4(resultDate, "MMMM d, yyyy"),
      dayOfWeek: format4(resultDate, "EEEE")
    };
  }
  return json7({ result, calculationType });
}
function DateCalculator() {
  let actionData = useActionData6(), navigation = useNavigation6(), { jsonLd, breadcrumbJsonLd, faqJsonLd } = useLoaderData7(), isSubmitting = navigation.state === "submitting", [calculationType, setCalculationType] = useState5("difference"), [startDate, setStartDate] = useState5(), [endDate, setEndDate] = useState5(), [daysToAdd, setDaysToAdd] = useState5(1);
  return /* @__PURE__ */ jsxDEV22("div", { className: "min-h-screen bg-gray-50", children: /* @__PURE__ */ jsxDEV22("div", { className: "max-w-screen-lg mx-auto px-4 py-12", children: [
    /* @__PURE__ */ jsxDEV22("h1", { className: "text-5xl font-bold text-gray-900 text-center mb-2", children: "Date Calculator" }, void 0, !1, {
      fileName: "app/routes/date-calculator.tsx",
      lineNumber: 181,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV22("p", { className: "text-lg text-gray-600 text-center mb-8", children: [
      "Calculate days between dates, add or subtract days, and determine business days",
      /* @__PURE__ */ jsxDEV22("br", {}, void 0, !1, {
        fileName: "app/routes/date-calculator.tsx",
        lineNumber: 182,
        columnNumber: 142
      }, this),
      "with precision"
    ] }, void 0, !0, {
      fileName: "app/routes/date-calculator.tsx",
      lineNumber: 182,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV22("div", { className: "bg-white rounded-lg shadow p-8 max-w-2xl mx-auto mb-4", children: [
      /* @__PURE__ */ jsxDEV22(Form6, { method: "post", className: "space-y-6", children: [
        /* @__PURE__ */ jsxDEV22("div", { className: "mb-4 text-left", children: [
          /* @__PURE__ */ jsxDEV22(Label, { htmlFor: "calculationType", className: "font-semibold", children: "Calculation Type" }, void 0, !1, {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 186,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV22(
            Select,
            {
              name: "calculationType",
              defaultValue: "difference",
              onValueChange: (value) => setCalculationType(value),
              children: [
                /* @__PURE__ */ jsxDEV22(SelectTrigger, { children: /* @__PURE__ */ jsxDEV22(SelectValue, { placeholder: "Select calculation type" }, void 0, !1, {
                  fileName: "app/routes/date-calculator.tsx",
                  lineNumber: 193,
                  columnNumber: 19
                }, this) }, void 0, !1, {
                  fileName: "app/routes/date-calculator.tsx",
                  lineNumber: 192,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV22(SelectContent, { children: [
                  /* @__PURE__ */ jsxDEV22(SelectItem, { value: "difference", children: "Date Difference" }, void 0, !1, {
                    fileName: "app/routes/date-calculator.tsx",
                    lineNumber: 196,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV22(SelectItem, { value: "add", children: "Add Days" }, void 0, !1, {
                    fileName: "app/routes/date-calculator.tsx",
                    lineNumber: 197,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV22(SelectItem, { value: "subtract", children: "Subtract Days" }, void 0, !1, {
                    fileName: "app/routes/date-calculator.tsx",
                    lineNumber: 198,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV22(SelectItem, { value: "business", children: "Business Days" }, void 0, !1, {
                    fileName: "app/routes/date-calculator.tsx",
                    lineNumber: 199,
                    columnNumber: 19
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/date-calculator.tsx",
                  lineNumber: 195,
                  columnNumber: 17
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/date-calculator.tsx",
              lineNumber: 187,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/date-calculator.tsx",
          lineNumber: 185,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV22("div", { className: "flex flex-col md:flex-row gap-4", children: [
          /* @__PURE__ */ jsxDEV22("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxDEV22(Label, { className: "font-semibold mb-2 block", children: "Start Date" }, void 0, !1, {
              fileName: "app/routes/date-calculator.tsx",
              lineNumber: 205,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV22(
              Calendar2,
              {
                mode: "single",
                selected: startDate,
                onSelect: setStartDate,
                className: "rounded-lg border"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/date-calculator.tsx",
                lineNumber: 206,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ jsxDEV22("input", { type: "hidden", name: "startDate", value: startDate ? startDate.toISOString().slice(0, 10) : "", required: !0 }, void 0, !1, {
              fileName: "app/routes/date-calculator.tsx",
              lineNumber: 212,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 204,
            columnNumber: 15
          }, this),
          calculationType === "difference" || calculationType === "business" ? /* @__PURE__ */ jsxDEV22("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxDEV22(Label, { className: "font-semibold mb-2 block", children: "End Date" }, void 0, !1, {
              fileName: "app/routes/date-calculator.tsx",
              lineNumber: 216,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV22(
              Calendar2,
              {
                mode: "single",
                selected: endDate,
                onSelect: setEndDate,
                className: "rounded-lg border"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/date-calculator.tsx",
                lineNumber: 217,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ jsxDEV22("input", { type: "hidden", name: "endDate", value: endDate ? endDate.toISOString().slice(0, 10) : "", required: !0 }, void 0, !1, {
              fileName: "app/routes/date-calculator.tsx",
              lineNumber: 223,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 215,
            columnNumber: 17
          }, this) : /* @__PURE__ */ jsxDEV22("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxDEV22(Label, { htmlFor: "daysToAdd", className: "font-semibold", children: "Number of Days" }, void 0, !1, {
              fileName: "app/routes/date-calculator.tsx",
              lineNumber: 227,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV22(
              "input",
              {
                type: "number",
                id: "daysToAdd",
                name: "daysToAdd",
                className: "w-full rounded-md border border-gray-300 bg-white px-3 py-2",
                min: "1",
                value: daysToAdd,
                onChange: (e) => setDaysToAdd(Number(e.target.value)),
                required: !0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/date-calculator.tsx",
                lineNumber: 228,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 226,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/date-calculator.tsx",
          lineNumber: 203,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV22(Button, { type: "submit", className: "w-full bg-[#19b6e9] hover:bg-[#15a3cc] text-white font-semibold py-2 rounded", disabled: isSubmitting, children: isSubmitting ? "Calculating..." : "Calculate" }, void 0, !1, {
          fileName: "app/routes/date-calculator.tsx",
          lineNumber: 241,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/date-calculator.tsx",
        lineNumber: 184,
        columnNumber: 11
      }, this),
      actionData && "result" in actionData && /* @__PURE__ */ jsxDEV22("div", { className: "mt-8", children: [
        /* @__PURE__ */ jsxDEV22("h2", { className: "text-2xl font-bold mb-4", children: "Results" }, void 0, !1, {
          fileName: "app/routes/date-calculator.tsx",
          lineNumber: 247,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV22(
          Results,
          {
            result: actionData.result,
            calculationType: actionData.calculationType
          },
          void 0,
          !1,
          {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 248,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/date-calculator.tsx",
        lineNumber: 246,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/date-calculator.tsx",
      lineNumber: 183,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV22("div", { className: "bg-white rounded-lg shadow p-8 max-w-2xl mx-auto mb-8", children: [
      /* @__PURE__ */ jsxDEV22("h2", { className: "text-2xl font-bold text-center mb-6", children: "How It Works" }, void 0, !1, {
        fileName: "app/routes/date-calculator.tsx",
        lineNumber: 256,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV22("div", { className: "flex flex-col md:flex-row justify-center items-center gap-8", children: [
        /* @__PURE__ */ jsxDEV22("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsxDEV22("div", { className: "bg-[#19b6e9] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-2", children: "1" }, void 0, !1, {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 259,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV22("div", { className: "font-semibold mb-1", children: "Select Calculation Type" }, void 0, !1, {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 260,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV22("div", { className: "text-gray-500 text-center text-sm", children: "Choose between date difference, adding days, or business day calculation." }, void 0, !1, {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 261,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/date-calculator.tsx",
          lineNumber: 258,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV22("div", { className: "text-2xl text-[#19b6e9]", children: "\u2192" }, void 0, !1, {
          fileName: "app/routes/date-calculator.tsx",
          lineNumber: 263,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV22("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsxDEV22("div", { className: "bg-[#19b6e9] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-2", children: "2" }, void 0, !1, {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 265,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV22("div", { className: "font-semibold mb-1", children: "Enter Dates" }, void 0, !1, {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 266,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV22("div", { className: "text-gray-500 text-center text-sm", children: "Select your dates using the calendar or enter the number of days." }, void 0, !1, {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 267,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/date-calculator.tsx",
          lineNumber: 264,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV22("div", { className: "text-2xl text-[#19b6e9]", children: "\u2192" }, void 0, !1, {
          fileName: "app/routes/date-calculator.tsx",
          lineNumber: 269,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV22("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsxDEV22("div", { className: "bg-[#19b6e9] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-2", children: "3" }, void 0, !1, {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 271,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV22("div", { className: "font-semibold mb-1", children: "Get Results" }, void 0, !1, {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 272,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV22("div", { className: "text-gray-500 text-center text-sm", children: "View your calculated results in multiple formats." }, void 0, !1, {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 273,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/date-calculator.tsx",
          lineNumber: 270,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/date-calculator.tsx",
        lineNumber: 257,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/date-calculator.tsx",
      lineNumber: 255,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV22("div", { className: "bg-white rounded-lg shadow p-8 max-w-2xl mx-auto mb-8", children: [
      /* @__PURE__ */ jsxDEV22("h2", { className: "text-2xl font-bold text-center mb-6", children: "Why Use Our Date Calculator" }, void 0, !1, {
        fileName: "app/routes/date-calculator.tsx",
        lineNumber: 278,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV22("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxDEV22("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxDEV22("span", { className: "text-[#19b6e9] text-xl mt-1", children: "\u2714" }, void 0, !1, {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 281,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV22("div", { children: [
            /* @__PURE__ */ jsxDEV22("div", { className: "font-semibold", children: "Multiple Calculation Types" }, void 0, !1, {
              fileName: "app/routes/date-calculator.tsx",
              lineNumber: 283,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV22("div", { className: "text-gray-500 text-sm", children: "Calculate date differences, add or subtract days, and determine business days; all in one place." }, void 0, !1, {
              fileName: "app/routes/date-calculator.tsx",
              lineNumber: 284,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 282,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/date-calculator.tsx",
          lineNumber: 280,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV22("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxDEV22("span", { className: "text-[#19b6e9] text-xl mt-1", children: "\u2714" }, void 0, !1, {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 288,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV22("div", { children: [
            /* @__PURE__ */ jsxDEV22("div", { className: "font-semibold", children: "Business Day Calculations" }, void 0, !1, {
              fileName: "app/routes/date-calculator.tsx",
              lineNumber: 290,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV22("div", { className: "text-gray-500 text-sm", children: "Accurately calculate working days between dates, excluding weekends for professional planning." }, void 0, !1, {
              fileName: "app/routes/date-calculator.tsx",
              lineNumber: 291,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 289,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/date-calculator.tsx",
          lineNumber: 287,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV22("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxDEV22("span", { className: "text-[#19b6e9] text-xl mt-1", children: "\u2714" }, void 0, !1, {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 295,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV22("div", { children: [
            /* @__PURE__ */ jsxDEV22("div", { className: "font-semibold", children: "User-Friendly Interface" }, void 0, !1, {
              fileName: "app/routes/date-calculator.tsx",
              lineNumber: 297,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV22("div", { className: "text-gray-500 text-sm", children: "Interactive calendar selection and clear results make date calculations simple and intuitive." }, void 0, !1, {
              fileName: "app/routes/date-calculator.tsx",
              lineNumber: 298,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 296,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/date-calculator.tsx",
          lineNumber: 294,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV22("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxDEV22("span", { className: "text-[#19b6e9] text-xl mt-1", children: "\u2714" }, void 0, !1, {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 302,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV22("div", { children: [
            /* @__PURE__ */ jsxDEV22("div", { className: "font-semibold", children: "Comprehensive Results" }, void 0, !1, {
              fileName: "app/routes/date-calculator.tsx",
              lineNumber: 304,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV22("div", { className: "text-gray-500 text-sm", children: "Get detailed breakdowns including total days, business days and day of the week information." }, void 0, !1, {
              fileName: "app/routes/date-calculator.tsx",
              lineNumber: 305,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 303,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/date-calculator.tsx",
          lineNumber: 301,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/date-calculator.tsx",
        lineNumber: 279,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/date-calculator.tsx",
      lineNumber: 277,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV22("div", { className: "bg-white rounded-lg shadow p-8 max-w-2xl mx-auto mb-8", children: [
      /* @__PURE__ */ jsxDEV22("h2", { className: "text-2xl font-bold text-center mb-6", children: "Frequently Asked Questions" }, void 0, !1, {
        fileName: "app/routes/date-calculator.tsx",
        lineNumber: 311,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV22("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxDEV22("div", { children: [
          /* @__PURE__ */ jsxDEV22("div", { className: "text-[#19b6e9] font-semibold mb-2", children: "How does the date calculator handle weekends?" }, void 0, !1, {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 314,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV22("div", { className: "text-gray-600 text-sm", children: "The date calculator automatically identifies weekends when calculating business days. When using the business day calculation mode, Saturdays and Sundays are excluded from the count, giving you an accurate number of working days between dates." }, void 0, !1, {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 315,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/date-calculator.tsx",
          lineNumber: 313,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV22("div", { children: [
          /* @__PURE__ */ jsxDEV22("div", { className: "text-[#19b6e9] font-semibold mb-2", children: "Can I calculate dates across different years?" }, void 0, !1, {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 318,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV22("div", { className: "text-gray-600 text-sm", children: "Yes! The calculator can handle dates across any time period, including different years, months, and centuries. It automatically accounts for leap years and varying month lengths to ensure accurate calculations." }, void 0, !1, {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 319,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/date-calculator.tsx",
          lineNumber: 317,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV22("div", { children: [
          /* @__PURE__ */ jsxDEV22("div", { className: "text-[#19b6e9] font-semibold mb-2", children: "What's the difference between total days and business days?" }, void 0, !1, {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 322,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV22("div", { className: "text-gray-600 text-sm", children: "Total days include every calendar day between two dates, including weekends and holidays. Business days exclude weekends (Saturdays and Sundays) from the count, providing a more accurate measure for work and business planning purposes." }, void 0, !1, {
            fileName: "app/routes/date-calculator.tsx",
            lineNumber: 323,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/date-calculator.tsx",
          lineNumber: 321,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/date-calculator.tsx",
        lineNumber: 312,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/date-calculator.tsx",
      lineNumber: 310,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/date-calculator.tsx",
    lineNumber: 180,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/date-calculator.tsx",
    lineNumber: 179,
    columnNumber: 5
  }, this);
}

// app/routes/difference.tsx
var difference_exports = {};
__export(difference_exports, {
  action: () => action7,
  default: () => Difference,
  loader: () => loader8,
  meta: () => meta7
});
import { json as json8 } from "@remix-run/node";
import { useLoaderData as useLoaderData8 } from "@remix-run/react";

// app/components/age-difference/AgeDifferenceCalculator.tsx
import { useState as useState6 } from "react";
import { Form as Form7, useActionData as useActionData7, useNavigation as useNavigation7 } from "@remix-run/react";

// app/components/age-difference/DateSelector.tsx
import { format as format5 } from "date-fns";
import { jsxDEV as jsxDEV23 } from "react/jsx-dev-runtime";
var DateSelector = ({ label, date, setDate, namePrefix }) => {
  let currentYear = (/* @__PURE__ */ new Date()).getFullYear(), years = Array.from({ length: 150 }, (_, i) => currentYear - i), months2 = Array.from({ length: 12 }, (_, i) => i + 1), days = Array.from({ length: 31 }, (_, i) => i + 1);
  return /* @__PURE__ */ jsxDEV23("div", { className: "w-full max-w-2xl", children: /* @__PURE__ */ jsxDEV23("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxDEV23("h3", { className: "font-medium text-gray-700 text-center", children: label }, void 0, !1, {
      fileName: "app/components/age-difference/DateSelector.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV23("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
      /* @__PURE__ */ jsxDEV23("div", { children: [
        /* @__PURE__ */ jsxDEV23(
          Select,
          {
            onValueChange: (value) => setDate({ ...date, year: value }),
            value: date.year,
            children: [
              /* @__PURE__ */ jsxDEV23(SelectTrigger, { className: "w-[140px]", children: /* @__PURE__ */ jsxDEV23(SelectValue, { placeholder: "Year" }, void 0, !1, {
                fileName: "app/components/age-difference/DateSelector.tsx",
                lineNumber: 32,
                columnNumber: 17
              }, this) }, void 0, !1, {
                fileName: "app/components/age-difference/DateSelector.tsx",
                lineNumber: 31,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV23(SelectContent, { children: years.map((year) => /* @__PURE__ */ jsxDEV23(SelectItem, { value: year.toString(), children: year }, year, !1, {
                fileName: "app/components/age-difference/DateSelector.tsx",
                lineNumber: 36,
                columnNumber: 19
              }, this)) }, void 0, !1, {
                fileName: "app/components/age-difference/DateSelector.tsx",
                lineNumber: 34,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/age-difference/DateSelector.tsx",
            lineNumber: 27,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV23("input", { type: "hidden", name: `${namePrefix}Year`, value: date.year }, void 0, !1, {
          fileName: "app/components/age-difference/DateSelector.tsx",
          lineNumber: 42,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/age-difference/DateSelector.tsx",
        lineNumber: 26,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV23("div", { children: [
        /* @__PURE__ */ jsxDEV23(
          Select,
          {
            onValueChange: (value) => setDate({ ...date, month: value }),
            value: date.month,
            children: [
              /* @__PURE__ */ jsxDEV23(SelectTrigger, { className: "w-[140px]", children: /* @__PURE__ */ jsxDEV23(SelectValue, { placeholder: "Month" }, void 0, !1, {
                fileName: "app/components/age-difference/DateSelector.tsx",
                lineNumber: 51,
                columnNumber: 17
              }, this) }, void 0, !1, {
                fileName: "app/components/age-difference/DateSelector.tsx",
                lineNumber: 50,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV23(SelectContent, { children: months2.map((month) => /* @__PURE__ */ jsxDEV23(SelectItem, { value: month.toString(), children: format5(new Date(2024, month - 1), "MMMM") }, month, !1, {
                fileName: "app/components/age-difference/DateSelector.tsx",
                lineNumber: 55,
                columnNumber: 19
              }, this)) }, void 0, !1, {
                fileName: "app/components/age-difference/DateSelector.tsx",
                lineNumber: 53,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/age-difference/DateSelector.tsx",
            lineNumber: 46,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV23("input", { type: "hidden", name: `${namePrefix}Month`, value: date.month }, void 0, !1, {
          fileName: "app/components/age-difference/DateSelector.tsx",
          lineNumber: 61,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/age-difference/DateSelector.tsx",
        lineNumber: 45,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV23("div", { children: [
        /* @__PURE__ */ jsxDEV23(
          Select,
          {
            onValueChange: (value) => setDate({ ...date, day: value }),
            value: date.day,
            children: [
              /* @__PURE__ */ jsxDEV23(SelectTrigger, { className: "w-[140px]", children: /* @__PURE__ */ jsxDEV23(SelectValue, { placeholder: "Day" }, void 0, !1, {
                fileName: "app/components/age-difference/DateSelector.tsx",
                lineNumber: 70,
                columnNumber: 17
              }, this) }, void 0, !1, {
                fileName: "app/components/age-difference/DateSelector.tsx",
                lineNumber: 69,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV23(SelectContent, { children: days.map((day) => /* @__PURE__ */ jsxDEV23(SelectItem, { value: day.toString(), children: day }, day, !1, {
                fileName: "app/components/age-difference/DateSelector.tsx",
                lineNumber: 74,
                columnNumber: 19
              }, this)) }, void 0, !1, {
                fileName: "app/components/age-difference/DateSelector.tsx",
                lineNumber: 72,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/age-difference/DateSelector.tsx",
            lineNumber: 65,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV23("input", { type: "hidden", name: `${namePrefix}Day`, value: date.day }, void 0, !1, {
          fileName: "app/components/age-difference/DateSelector.tsx",
          lineNumber: 80,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/age-difference/DateSelector.tsx",
        lineNumber: 64,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/age-difference/DateSelector.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/age-difference/DateSelector.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/age-difference/DateSelector.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
};

// app/components/age-difference/Results.tsx
import { jsxDEV as jsxDEV24 } from "react/jsx-dev-runtime";
var Results2 = ({ result }) => /* @__PURE__ */ jsxDEV24("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 animate-slideUp w-full", children: [
  /* @__PURE__ */ jsxDEV24(
    ResultCard,
    {
      title: "Age Difference",
      value: `${result.years} years, ${result.months} months, ${result.days} days`,
      description: "Precise age difference"
    },
    void 0,
    !1,
    {
      fileName: "app/components/age-difference/Results.tsx",
      lineNumber: 16,
      columnNumber: 5
    },
    this
  ),
  /* @__PURE__ */ jsxDEV24(
    ResultCard,
    {
      title: "Total Days",
      value: result.totalDays.toLocaleString(),
      description: "Number of days between dates"
    },
    void 0,
    !1,
    {
      fileName: "app/components/age-difference/Results.tsx",
      lineNumber: 21,
      columnNumber: 5
    },
    this
  ),
  /* @__PURE__ */ jsxDEV24(
    ResultCard,
    {
      title: "Other Units",
      value: `${result.weeks.toLocaleString()} weeks`,
      description: `${result.hours.toLocaleString()} hours`
    },
    void 0,
    !1,
    {
      fileName: "app/components/age-difference/Results.tsx",
      lineNumber: 26,
      columnNumber: 5
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/components/age-difference/Results.tsx",
  lineNumber: 15,
  columnNumber: 3
}, this);

// app/components/age-difference/HowItWorks.tsx
import { jsxDEV as jsxDEV25 } from "react/jsx-dev-runtime";
var HowItWorks = () => /* @__PURE__ */ jsxDEV25("div", { className: "bg-white shadow-md rounded-lg p-6", children: [
  /* @__PURE__ */ jsxDEV25("h2", { className: "text-2xl font-bold mb-4", children: "How It Works" }, void 0, !1, {
    fileName: "app/components/age-difference/HowItWorks.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ jsxDEV25("p", { className: "mb-4", children: "Our age difference calculator is simple to use:" }, void 0, !1, {
    fileName: "app/components/age-difference/HowItWorks.tsx",
    lineNumber: 4,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ jsxDEV25("ol", { className: "list-decimal pl-5 space-y-2", children: [
    /* @__PURE__ */ jsxDEV25("li", { children: "Select the first date (birth date, event date, etc.)" }, void 0, !1, {
      fileName: "app/components/age-difference/HowItWorks.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV25("li", { children: "Select the second date to compare against" }, void 0, !1, {
      fileName: "app/components/age-difference/HowItWorks.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV25("li", { children: 'Click the "Calculate Difference" button' }, void 0, !1, {
      fileName: "app/components/age-difference/HowItWorks.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV25("li", { children: "View the precise difference in years, months, days, weeks, and hours" }, void 0, !1, {
      fileName: "app/components/age-difference/HowItWorks.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/age-difference/HowItWorks.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ jsxDEV25("p", { className: "mt-4", children: "The calculator automatically handles leap years, different month lengths, and ensures accurate results." }, void 0, !1, {
    fileName: "app/components/age-difference/HowItWorks.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/components/age-difference/HowItWorks.tsx",
  lineNumber: 2,
  columnNumber: 3
}, this);

// app/components/age-difference/WhyUseSection.tsx
import { jsxDEV as jsxDEV26 } from "react/jsx-dev-runtime";
var WhyUseSection = () => /* @__PURE__ */ jsxDEV26("div", { className: "bg-white shadow-md rounded-lg p-6", children: [
  /* @__PURE__ */ jsxDEV26("h2", { className: "text-2xl font-bold mb-4", children: "Why Use Our Age Difference Calculator" }, void 0, !1, {
    fileName: "app/components/age-difference/WhyUseSection.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ jsxDEV26("ul", { className: "list-disc pl-5 space-y-2", children: [
    /* @__PURE__ */ jsxDEV26("li", { children: "Accurate calculations that account for leap years and varying month lengths" }, void 0, !1, {
      fileName: "app/components/age-difference/WhyUseSection.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV26("li", { children: "Multiple units of measurement (years, months, days, weeks, hours)" }, void 0, !1, {
      fileName: "app/components/age-difference/WhyUseSection.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV26("li", { children: "Simple, user-friendly interface" }, void 0, !1, {
      fileName: "app/components/age-difference/WhyUseSection.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV26("li", { children: "Instant results with no page reloading" }, void 0, !1, {
      fileName: "app/components/age-difference/WhyUseSection.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV26("li", { children: "Free to use with no limitations" }, void 0, !1, {
      fileName: "app/components/age-difference/WhyUseSection.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/age-difference/WhyUseSection.tsx",
    lineNumber: 4,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/components/age-difference/WhyUseSection.tsx",
  lineNumber: 2,
  columnNumber: 3
}, this);

// app/components/age-difference/FAQ.tsx
import { jsxDEV as jsxDEV27 } from "react/jsx-dev-runtime";
var FAQ = () => /* @__PURE__ */ jsxDEV27("div", { className: "bg-white shadow-md rounded-lg p-6", children: [
  /* @__PURE__ */ jsxDEV27("h2", { className: "text-2xl font-bold mb-4", children: "Frequently Asked Questions" }, void 0, !1, {
    fileName: "app/components/age-difference/FAQ.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ jsxDEV27("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxDEV27("div", { children: [
      /* @__PURE__ */ jsxDEV27("h3", { className: "font-bold text-lg", children: "How do you calculate age difference?" }, void 0, !1, {
        fileName: "app/components/age-difference/FAQ.tsx",
        lineNumber: 7,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV27("p", { children: "Our calculator computes the exact difference between two dates in multiple units (years, months, days, weeks, hours). It accounts for leap years and varying month lengths to provide accurate results." }, void 0, !1, {
        fileName: "app/components/age-difference/FAQ.tsx",
        lineNumber: 8,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/age-difference/FAQ.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV27("div", { children: [
      /* @__PURE__ */ jsxDEV27("h3", { className: "font-bold text-lg", children: "Is this calculator free to use?" }, void 0, !1, {
        fileName: "app/components/age-difference/FAQ.tsx",
        lineNumber: 12,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV27("p", { children: "Yes, our age difference calculator is completely free with no usage limitations." }, void 0, !1, {
        fileName: "app/components/age-difference/FAQ.tsx",
        lineNumber: 13,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/age-difference/FAQ.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV27("div", { children: [
      /* @__PURE__ */ jsxDEV27("h3", { className: "font-bold text-lg", children: "What can I use this calculator for?" }, void 0, !1, {
        fileName: "app/components/age-difference/FAQ.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV27("p", { children: "You can use it to calculate age gaps between siblings, partners, or any two people. It's also useful for determining time elapsed between historical events or planning future events." }, void 0, !1, {
        fileName: "app/components/age-difference/FAQ.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/age-difference/FAQ.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV27("div", { children: [
      /* @__PURE__ */ jsxDEV27("h3", { className: "font-bold text-lg", children: "Does it work with all dates?" }, void 0, !1, {
        fileName: "app/components/age-difference/FAQ.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV27("p", { children: "The calculator works with dates from 1900 to the present year. For historical dates earlier than 1900, the calculation may not account for calendar changes." }, void 0, !1, {
        fileName: "app/components/age-difference/FAQ.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/age-difference/FAQ.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/age-difference/FAQ.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/components/age-difference/FAQ.tsx",
  lineNumber: 2,
  columnNumber: 3
}, this);

// app/components/age-difference/AgeDifferenceCalculator.tsx
import { jsxDEV as jsxDEV28 } from "react/jsx-dev-runtime";
var AgeDifferenceCalculator = () => {
  let [firstDate, setFirstDate] = useState6({
    year: "",
    month: "",
    day: ""
  }), [secondDate, setSecondDate] = useState6({
    year: "",
    month: "",
    day: ""
  }), navigation = useNavigation7(), actionData = useActionData7(), isCalculating = navigation.state === "submitting", isFormValid = firstDate.year && firstDate.month && firstDate.day && secondDate.year && secondDate.month && secondDate.day;
  return /* @__PURE__ */ jsxDEV28("div", { className: "min-h-screen bg-gray-50 py-12 px-4", children: /* @__PURE__ */ jsxDEV28("div", { className: "max-w-3xl mx-auto space-y-10", children: [
    /* @__PURE__ */ jsxDEV28("div", { className: "text-center space-y-4", children: [
      /* @__PURE__ */ jsxDEV28("h1", { className: "text-4xl sm:text-5xl font-bold tracking-tight", children: "Age Difference Calculator" }, void 0, !1, {
        fileName: "app/components/age-difference/AgeDifferenceCalculator.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV28("p", { className: "text-lg text-gray-600 max-w-2xl mx-auto", children: "Calculate the exact age difference between two dates with precision" }, void 0, !1, {
        fileName: "app/components/age-difference/AgeDifferenceCalculator.tsx",
        lineNumber: 54,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/age-difference/AgeDifferenceCalculator.tsx",
      lineNumber: 50,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV28(Card, { className: "p-10 bg-white shadow rounded-lg border border-gray-200", children: /* @__PURE__ */ jsxDEV28("div", { className: "space-y-8 flex flex-col items-center", children: [
      /* @__PURE__ */ jsxDEV28(Form7, { method: "post", className: "w-full space-y-8 flex flex-col items-center", children: [
        /* @__PURE__ */ jsxDEV28(
          DateSelector,
          {
            label: "First Date",
            date: firstDate,
            setDate: setFirstDate,
            namePrefix: "first"
          },
          void 0,
          !1,
          {
            fileName: "app/components/age-difference/AgeDifferenceCalculator.tsx",
            lineNumber: 62,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV28(
          DateSelector,
          {
            label: "Second Date",
            date: secondDate,
            setDate: setSecondDate,
            namePrefix: "second"
          },
          void 0,
          !1,
          {
            fileName: "app/components/age-difference/AgeDifferenceCalculator.tsx",
            lineNumber: 69,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV28(
          Button,
          {
            type: "submit",
            className: "bg-primary hover:bg-primary-light text-white",
            disabled: !isFormValid || isCalculating,
            children: isCalculating ? "Calculating..." : "Calculate Difference"
          },
          void 0,
          !1,
          {
            fileName: "app/components/age-difference/AgeDifferenceCalculator.tsx",
            lineNumber: 76,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/age-difference/AgeDifferenceCalculator.tsx",
        lineNumber: 61,
        columnNumber: 13
      }, this),
      actionData && !actionData.error && /* @__PURE__ */ jsxDEV28(Results2, { result: actionData }, void 0, !1, {
        fileName: "app/components/age-difference/AgeDifferenceCalculator.tsx",
        lineNumber: 86,
        columnNumber: 15
      }, this),
      actionData?.error && /* @__PURE__ */ jsxDEV28("div", { className: "text-red-500 text-center", children: actionData.error }, void 0, !1, {
        fileName: "app/components/age-difference/AgeDifferenceCalculator.tsx",
        lineNumber: 90,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/age-difference/AgeDifferenceCalculator.tsx",
      lineNumber: 60,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/age-difference/AgeDifferenceCalculator.tsx",
      lineNumber: 59,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV28(HowItWorks, {}, void 0, !1, {
      fileName: "app/components/age-difference/AgeDifferenceCalculator.tsx",
      lineNumber: 97,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV28(WhyUseSection, {}, void 0, !1, {
      fileName: "app/components/age-difference/AgeDifferenceCalculator.tsx",
      lineNumber: 98,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV28(FAQ, {}, void 0, !1, {
      fileName: "app/components/age-difference/AgeDifferenceCalculator.tsx",
      lineNumber: 99,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/age-difference/AgeDifferenceCalculator.tsx",
    lineNumber: 49,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/age-difference/AgeDifferenceCalculator.tsx",
    lineNumber: 48,
    columnNumber: 5
  }, this);
};

// app/routes/difference.tsx
import { jsxDEV as jsxDEV29 } from "react/jsx-dev-runtime";
var meta7 = () => [
  { title: "Age Difference Calculator - Calculate Age Gaps with Precision" },
  { name: "description", content: "Calculate the exact age difference between two dates. Perfect for finding age gaps between siblings, partners, or any two dates with our precise age difference calculator." },
  { name: "keywords", content: "age difference calculator, calculate age gap, age gap calculator, date difference calculator" },
  { property: "og:type", content: "website" },
  { property: "og:url", content: "https://agecalculator.app/difference" },
  { property: "og:title", content: "Age Difference Calculator - Calculate Age Gaps with Precision" },
  { property: "og:description", content: "Calculate the exact age difference between two dates. Perfect for finding age gaps between siblings, partners, or any two dates." },
  { property: "og:image", content: "https://images.unsplash.com/photo-1517842645767-c639042777db" },
  { property: "twitter:card", content: "summary_large_image" },
  { property: "twitter:url", content: "https://agecalculator.app/difference" },
  { property: "twitter:title", content: "Age Difference Calculator - Calculate Age Gaps with Precision" },
  { property: "twitter:description", content: "Calculate the exact age difference between two dates. Perfect for finding age gaps between siblings, partners, or any two dates." },
  { property: "twitter:image", content: "https://images.unsplash.com/photo-1517842645767-c639042777db" },
  { rel: "canonical", href: "https://agecalculator.app/difference" }
];
function loader8() {
  return {
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Age Difference Calculator",
      applicationCategory: "UtilityApplication",
      description: "Calculate the exact age difference between two dates. Perfect for finding age gaps between siblings, partners, or any two dates.",
      operatingSystem: "Any",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD"
      },
      url: "https://agecalculator.app/difference",
      screenshot: "https://images.unsplash.com/photo-1517842645767-c639042777db",
      featureList: "Calculate age differences in years, months, days. Easy to use. Free. Instant calculations.",
      inLanguage: "en",
      audience: {
        "@type": "Audience",
        audienceType: "Everyone"
      }
    },
    breadcrumbJsonLd: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://agecalculator.app"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Age Difference Calculator",
          item: "https://agecalculator.app/difference"
        }
      ]
    }
  };
}
var action7 = async ({ request }) => {
  let formData = await request.formData(), firstYear = formData.get("firstYear"), firstMonth = formData.get("firstMonth"), firstDay = formData.get("firstDay"), secondYear = formData.get("secondYear"), secondMonth = formData.get("secondMonth"), secondDay = formData.get("secondDay");
  if (!firstYear || !firstMonth || !firstDay || !secondYear || !secondMonth || !secondDay)
    return json8({ error: "All date fields are required" }, { status: 400 });
  let firstDate = new Date(
    parseInt(firstYear.toString()),
    parseInt(firstMonth.toString()) - 1,
    parseInt(firstDay.toString())
  ), secondDate = new Date(
    parseInt(secondYear.toString()),
    parseInt(secondMonth.toString()) - 1,
    parseInt(secondDay.toString())
  );
  if (isNaN(firstDate.getTime()) || isNaN(secondDate.getTime()))
    return json8({ error: "Invalid date values" }, { status: 400 });
  let _MS_PER_DAY = 1e3 * 60 * 60 * 24, differenceInYears3 = (date1, date2) => {
    let years2 = date1.getFullYear() - date2.getFullYear();
    return (date1.getMonth() < date2.getMonth() || date1.getMonth() === date2.getMonth() && date1.getDate() < date2.getDate()) && years2--, Math.abs(years2);
  }, differenceInMonths = (date1, date2) => {
    let months3 = (date1.getFullYear() - date2.getFullYear()) * 12;
    return months3 += date1.getMonth() - date2.getMonth(), date1.getDate() < date2.getDate() && months3--, Math.abs(months3);
  }, differenceInDays2 = (date1, date2) => {
    let utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate()), utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
    return Math.floor(Math.abs(utc1 - utc2) / _MS_PER_DAY);
  }, years = differenceInYears3(firstDate, secondDate), months2 = differenceInMonths(firstDate, secondDate) % 12, totalDays = differenceInDays2(firstDate, secondDate), days = totalDays % 30, weeks = Math.floor(totalDays / 7), hours = totalDays * 24;
  return json8({
    years,
    months: months2,
    days,
    totalDays,
    weeks,
    hours
  });
};
function Difference() {
  let { jsonLd, breadcrumbJsonLd } = useLoaderData8();
  return /* @__PURE__ */ jsxDEV29("div", { children: [
    /* @__PURE__ */ jsxDEV29(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
          __html: JSON.stringify(jsonLd)
        }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/difference.tsx",
        lineNumber: 155,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV29(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
          __html: JSON.stringify(breadcrumbJsonLd)
        }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/difference.tsx",
        lineNumber: 161,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV29(AgeDifferenceCalculator, {}, void 0, !1, {
      fileName: "app/routes/difference.tsx",
      lineNumber: 167,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/difference.tsx",
    lineNumber: 154,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  loader: () => loader9,
  meta: () => meta8
});
import { useMemo, useState as useState7 } from "react";
import { jsxDEV as jsxDEV30 } from "react/jsx-dev-runtime";
var meta8 = () => [
  { title: "Age Calculator App - Free Online Age Calculators & Tools" },
  { name: "description", content: "Collection of free online age calculation tools including age calculator, date calculator, birthday countdown, pregnancy calculator, and more." }
];
function loader9() {
  return {};
}
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
function calculateAge(year, month, day) {
  if (!year || !month || !day)
    return null;
  let birthDate = new Date(Number(year), Number(month) - 1, Number(day)), now = /* @__PURE__ */ new Date(), years = now.getFullYear() - birthDate.getFullYear(), monthsDiff = now.getMonth() - birthDate.getMonth(), daysDiff = now.getDate() - birthDate.getDate();
  if (daysDiff < 0) {
    monthsDiff--;
    let prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    daysDiff += prevMonth.getDate();
  }
  monthsDiff < 0 && (years--, monthsDiff += 12);
  let _MS_PER_DAY = 1e3 * 60 * 60 * 24, utc1 = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()), utc2 = Date.UTC(birthDate.getFullYear(), birthDate.getMonth(), birthDate.getDate()), totalDays = Math.floor((utc1 - utc2) / _MS_PER_DAY), weeks = Math.floor(totalDays / 7), hours = totalDays * 24;
  return { years, months: monthsDiff, days: daysDiff, totalDays, weeks, hours };
}
function Index() {
  let currentYear = (/* @__PURE__ */ new Date()).getFullYear(), years = useMemo(() => {
    let arr = [];
    for (let y = currentYear; y >= 1900; y--)
      arr.push(y);
    return arr;
  }, [currentYear]), days = Array.from({ length: 31 }, (_, i) => i + 1), [selectedYear, setSelectedYear] = useState7(""), [selectedMonth, setSelectedMonth] = useState7(""), [selectedDay, setSelectedDay] = useState7(""), [result, setResult] = useState7(null), [error, setError] = useState7(""), handleCalculate = () => {
    if (!selectedYear || !selectedMonth || !selectedDay) {
      setError("Please select year, month, and day."), setResult(null);
      return;
    }
    setError("");
    let res = calculateAge(selectedYear, selectedMonth, selectedDay);
    setResult(res);
  };
  return /* @__PURE__ */ jsxDEV30("div", { className: "min-h-screen bg-gray-50", children: /* @__PURE__ */ jsxDEV30("div", { className: "max-w-screen-xl mx-auto px-8 sm:px-4 py-16", children: [
    /* @__PURE__ */ jsxDEV30("div", { className: "bg-[#f1f6f8] rounded-lg p-12 max-w-4xl mx-auto text-center mb-8", children: [
      /* @__PURE__ */ jsxDEV30("h1", { className: "text-5xl font-bold text-gray-900 mb-4", children: "Age Calculator" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 77,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV30("p", { className: "text-xl text-gray-600 mb-8", children: "Calculate your exact age in years, months, days, and more" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 78,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV30("div", { className: "flex flex-col md:flex-row justify-center gap-4 mb-8", children: [
        /* @__PURE__ */ jsxDEV30("select", { className: "border rounded px-4 py-2", value: selectedYear, onChange: (e) => setSelectedYear(e.target.value), children: [
          /* @__PURE__ */ jsxDEV30("option", { value: "", children: "Year" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 81,
            columnNumber: 15
          }, this),
          years.map((y) => /* @__PURE__ */ jsxDEV30("option", { value: y, children: y }, y, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 83,
            columnNumber: 17
          }, this))
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 80,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV30("select", { className: "border rounded px-4 py-2", value: selectedMonth, onChange: (e) => setSelectedMonth(e.target.value), children: [
          /* @__PURE__ */ jsxDEV30("option", { value: "", children: "Month" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 87,
            columnNumber: 15
          }, this),
          months.map((m, idx) => /* @__PURE__ */ jsxDEV30("option", { value: idx + 1, children: m }, m, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 89,
            columnNumber: 17
          }, this))
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 86,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV30("select", { className: "border rounded px-4 py-2", value: selectedDay, onChange: (e) => setSelectedDay(e.target.value), children: [
          /* @__PURE__ */ jsxDEV30("option", { value: "", children: "Day" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 93,
            columnNumber: 15
          }, this),
          days.map((d) => /* @__PURE__ */ jsxDEV30("option", { value: d, children: d }, d, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 95,
            columnNumber: 17
          }, this))
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 92,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV30("button", { className: "bg-[#6ad0f7] text-white font-semibold px-6 py-2 rounded hover:bg-[#4bb8e6] transition", onClick: handleCalculate, children: "Calculate Age" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 98,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 79,
        columnNumber: 11
      }, this),
      error && /* @__PURE__ */ jsxDEV30("div", { className: "text-red-500 mb-4", children: error }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 100,
        columnNumber: 21
      }, this),
      result && /* @__PURE__ */ jsxDEV30("div", { className: "mt-6 bg-white rounded-lg shadow p-6 max-w-xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV30("h3", { className: "text-2xl font-bold mb-4 text-gray-900", children: "Your Age" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 103,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV30("div", { className: "text-lg text-gray-700 mb-2", children: [
          result.years,
          " years, ",
          result.months,
          " months, ",
          result.days,
          " days"
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 104,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV30("div", { className: "text-gray-500", children: [
          "Total days: ",
          result.totalDays
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 105,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV30("div", { className: "text-gray-500", children: [
          "Weeks: ",
          result.weeks
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 106,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV30("div", { className: "text-gray-500", children: [
          "Hours: ",
          result.hours
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 107,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 102,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 76,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV30("div", { className: "bg-white rounded-lg shadow p-12 max-w-4xl mx-auto mb-8", children: [
      /* @__PURE__ */ jsxDEV30("h2", { className: "text-3xl font-bold text-gray-900 text-center mb-8", children: "How It Works" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 113,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV30("div", { className: "flex flex-col md:flex-row justify-center items-center gap-8", children: [
        /* @__PURE__ */ jsxDEV30("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsxDEV30("div", { className: "bg-[#19b6e9] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-2", children: "1" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 116,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV30("div", { className: "font-semibold text-lg mb-1", children: "Select Your Birth Date" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 117,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV30("div", { className: "text-gray-500 text-center", children: "Choose your birth year, month, and day from the dropdown menus" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 118,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 115,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV30("div", { className: "text-3xl text-[#19b6e9]", children: "\u2192" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 120,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV30("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsxDEV30("div", { className: "bg-[#19b6e9] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-2", children: "2" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 122,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV30("div", { className: "font-semibold text-lg mb-1", children: "Calculate" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 123,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV30("div", { className: "text-gray-500 text-center", children: "Click the calculate button to process your age" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 124,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 121,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV30("div", { className: "text-3xl text-[#19b6e9]", children: "\u2192" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 126,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV30("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsxDEV30("div", { className: "bg-[#19b6e9] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-2", children: "3" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 128,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV30("div", { className: "font-semibold text-lg mb-1", children: "View Results" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 129,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV30("div", { className: "text-gray-500 text-center", children: "See your age in various formats and units" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 130,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 127,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 114,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 112,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV30("div", { className: "bg-white rounded-lg shadow p-12 max-w-4xl mx-auto mb-8", children: [
      /* @__PURE__ */ jsxDEV30("h2", { className: "text-3xl font-bold text-gray-900 text-center mb-8", children: "Why Use Our Age Calculator" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 136,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV30("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxDEV30("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsxDEV30("span", { className: "text-[#19b6e9] text-2xl mt-1", children: "\u2714" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 139,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV30("div", { children: [
            /* @__PURE__ */ jsxDEV30("div", { className: "font-semibold text-lg", children: "Precise Age Calculation" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 141,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV30("div", { className: "text-gray-500", children: "Get accurate calculations of your age in years, months, days, weeks, and even hours." }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 142,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 140,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 138,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV30("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsxDEV30("span", { className: "text-[#19b6e9] text-2xl mt-1", children: "\u2714" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 146,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV30("div", { children: [
            /* @__PURE__ */ jsxDEV30("div", { className: "font-semibold text-lg", children: "Multiple Time Units" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 148,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV30("div", { className: "text-gray-500", children: "View your age broken down into different units of time for a complete perspective." }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 149,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 147,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 145,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV30("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsxDEV30("span", { className: "text-[#19b6e9] text-2xl mt-1", children: "\u2714" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 153,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV30("div", { children: [
            /* @__PURE__ */ jsxDEV30("div", { className: "font-semibold text-lg", children: "Easy to Use" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 155,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV30("div", { className: "text-gray-500", children: "Simple interface with dropdown menus makes it easy to input your birth date and get instant results." }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 156,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 154,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 152,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV30("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsxDEV30("span", { className: "text-[#19b6e9] text-2xl mt-1", children: "\u2714" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 160,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV30("div", { children: [
            /* @__PURE__ */ jsxDEV30("div", { className: "font-semibold text-lg", children: "Instant Results" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 162,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV30("div", { className: "text-gray-500", children: "See your age calculations update immediately with detailed breakdowns and visualizations." }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 163,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 161,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 159,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 137,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 135,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV30("div", { className: "bg-white rounded-lg shadow p-12 max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxDEV30("h2", { className: "text-3xl font-bold text-gray-900 text-center mb-8", children: "Frequently Asked Questions" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 170,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV30("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxDEV30("div", { children: [
          /* @__PURE__ */ jsxDEV30("div", { className: "text-[#19b6e9] font-semibold text-xl mb-2", children: "How is the age calculated?" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 173,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV30("div", { className: "text-gray-600", children: "Our calculator uses precise date arithmetic to compute your exact age in various units, including years, months, days, weeks, and hours." }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 174,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 172,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV30("div", { children: [
          /* @__PURE__ */ jsxDEV30("div", { className: "text-[#19b6e9] font-semibold text-xl mb-2", children: "Why might this be useful?" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 177,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV30("div", { className: "text-gray-600", children: "Age calculations are useful for various purposes, including retirement planning, insurance calculations, and celebrating milestone birthdays." }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 178,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 176,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV30("div", { children: [
          /* @__PURE__ */ jsxDEV30("div", { className: "text-[#19b6e9] font-semibold text-xl mb-2", children: "How accurate is the calculation?" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 181,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV30("div", { className: "text-gray-600", children: "The calculator provides precise results down to the day, taking into account leap years and varying month lengths." }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 182,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 180,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 171,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 169,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 75,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 74,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-XLPOLMH6.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-X4KD56KE.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-G6VJL33X.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-WYD4HRJK.js", imports: ["/build/_shared/chunk-DCYVUSHA.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-JQBXNASL.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/birthday-countdown": { id: "routes/birthday-countdown", parentId: "root", path: "birthday-countdown", index: void 0, caseSensitive: void 0, module: "/build/routes/birthday-countdown-B6M7SV5E.js", imports: ["/build/_shared/chunk-IR7NGXFW.js", "/build/_shared/chunk-6HBMKAOW.js", "/build/_shared/chunk-VABJJFVO.js", "/build/_shared/chunk-NZ6NDNKU.js", "/build/_shared/chunk-UBSUZBCG.js", "/build/_shared/chunk-B43JI2TA.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/date-calculator": { id: "routes/date-calculator", parentId: "root", path: "date-calculator", index: void 0, caseSensitive: void 0, module: "/build/routes/date-calculator-GEK43AYK.js", imports: ["/build/_shared/chunk-4N5BII3N.js", "/build/_shared/chunk-OMKXYEXA.js", "/build/_shared/chunk-SWRLEF66.js", "/build/_shared/chunk-IR7NGXFW.js", "/build/_shared/chunk-6HBMKAOW.js", "/build/_shared/chunk-VABJJFVO.js", "/build/_shared/chunk-NZ6NDNKU.js", "/build/_shared/chunk-UBSUZBCG.js", "/build/_shared/chunk-B43JI2TA.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/difference": { id: "routes/difference", parentId: "root", path: "difference", index: void 0, caseSensitive: void 0, module: "/build/routes/difference-R2DKY2ZY.js", imports: ["/build/_shared/chunk-4N5BII3N.js", "/build/_shared/chunk-IR7NGXFW.js", "/build/_shared/chunk-6HBMKAOW.js", "/build/_shared/chunk-VABJJFVO.js", "/build/_shared/chunk-UBSUZBCG.js", "/build/_shared/chunk-B43JI2TA.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/generation-finder": { id: "routes/generation-finder", parentId: "root", path: "generation-finder", index: void 0, caseSensitive: void 0, module: "/build/routes/generation-finder-BITRACGC.js", imports: ["/build/_shared/chunk-VABJJFVO.js", "/build/_shared/chunk-NZ6NDNKU.js", "/build/_shared/chunk-UBSUZBCG.js", "/build/_shared/chunk-B43JI2TA.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/leap-year-calculator": { id: "routes/leap-year-calculator", parentId: "root", path: "leap-year-calculator", index: void 0, caseSensitive: void 0, module: "/build/routes/leap-year-calculator-4KOQ2IYJ.js", imports: ["/build/_shared/chunk-IR7NGXFW.js", "/build/_shared/chunk-VABJJFVO.js", "/build/_shared/chunk-NZ6NDNKU.js", "/build/_shared/chunk-UBSUZBCG.js", "/build/_shared/chunk-B43JI2TA.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/pregnancy-calculator": { id: "routes/pregnancy-calculator", parentId: "root", path: "pregnancy-calculator", index: void 0, caseSensitive: void 0, module: "/build/routes/pregnancy-calculator-B74SORVV.js", imports: ["/build/_shared/chunk-OMKXYEXA.js", "/build/_shared/chunk-SWRLEF66.js", "/build/_shared/chunk-6HBMKAOW.js", "/build/_shared/chunk-NZ6NDNKU.js", "/build/_shared/chunk-UBSUZBCG.js", "/build/_shared/chunk-B43JI2TA.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/retirement-calculator": { id: "routes/retirement-calculator", parentId: "root", path: "retirement-calculator", index: void 0, caseSensitive: void 0, module: "/build/routes/retirement-calculator-DD5WS7DD.js", imports: ["/build/_shared/chunk-SWRLEF66.js", "/build/_shared/chunk-6HBMKAOW.js", "/build/_shared/chunk-VABJJFVO.js", "/build/_shared/chunk-NZ6NDNKU.js", "/build/_shared/chunk-UBSUZBCG.js", "/build/_shared/chunk-B43JI2TA.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "2c5942a8", hmr: { runtime: "/build/_shared\\chunk-G6VJL33X.js", timestamp: 1747810472355 }, url: "/build/manifest-2C5942A8.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public\\build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/retirement-calculator": {
    id: "routes/retirement-calculator",
    parentId: "root",
    path: "retirement-calculator",
    index: void 0,
    caseSensitive: void 0,
    module: retirement_calculator_exports
  },
  "routes/leap-year-calculator": {
    id: "routes/leap-year-calculator",
    parentId: "root",
    path: "leap-year-calculator",
    index: void 0,
    caseSensitive: void 0,
    module: leap_year_calculator_exports
  },
  "routes/pregnancy-calculator": {
    id: "routes/pregnancy-calculator",
    parentId: "root",
    path: "pregnancy-calculator",
    index: void 0,
    caseSensitive: void 0,
    module: pregnancy_calculator_exports
  },
  "routes/birthday-countdown": {
    id: "routes/birthday-countdown",
    parentId: "root",
    path: "birthday-countdown",
    index: void 0,
    caseSensitive: void 0,
    module: birthday_countdown_exports
  },
  "routes/generation-finder": {
    id: "routes/generation-finder",
    parentId: "root",
    path: "generation-finder",
    index: void 0,
    caseSensitive: void 0,
    module: generation_finder_exports
  },
  "routes/date-calculator": {
    id: "routes/date-calculator",
    parentId: "root",
    path: "date-calculator",
    index: void 0,
    caseSensitive: void 0,
    module: date_calculator_exports
  },
  "routes/difference": {
    id: "routes/difference",
    parentId: "root",
    path: "difference",
    index: void 0,
    caseSensitive: void 0,
    module: difference_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=server.js.map
