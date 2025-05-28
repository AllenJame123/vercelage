import type { MetaFunction, ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { AgeDifferenceCalculator } from "../components/age-difference/AgeDifferenceCalculator";

export const meta: MetaFunction = () => {
  return [
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
    { rel: "canonical", href: "https://agecalculator.app/difference" },
  ];
};

export function loader() {
  return {
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Age Difference Calculator",
      "applicationCategory": "UtilityApplication",
      "description": "Calculate the exact age difference between two dates. Perfect for finding age gaps between siblings, partners, or any two dates.",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "url": "https://agecalculator.app/difference",
      "screenshot": "https://images.unsplash.com/photo-1517842645767-c639042777db",
      "featureList": "Calculate age differences in years, months, days. Easy to use. Free. Instant calculations.",
      "inLanguage": "en",
      "audience": {
        "@type": "Audience",
        "audienceType": "Everyone"
      }
    },
    breadcrumbJsonLd: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://agecalculator.app"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Age Difference Calculator",
          "item": "https://agecalculator.app/difference"
        }
      ]
    }
  };
}

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  
  // Extract form values
  const firstYear = formData.get("firstYear");
  const firstMonth = formData.get("firstMonth");
  const firstDay = formData.get("firstDay");
  const secondYear = formData.get("secondYear");
  const secondMonth = formData.get("secondMonth"); 
  const secondDay = formData.get("secondDay");

  // Validate inputs
  if (!firstYear || !firstMonth || !firstDay || !secondYear || !secondMonth || !secondDay) {
    return json({ error: "All date fields are required" }, { status: 400 });
  }

  // Create Date objects
  const firstDate = new Date(
    parseInt(firstYear.toString()),
    parseInt(firstMonth.toString()) - 1,
    parseInt(firstDay.toString())
  );
  
  const secondDate = new Date(
    parseInt(secondYear.toString()),
    parseInt(secondMonth.toString()) - 1,
    parseInt(secondDay.toString())
  );

  // Validate dates
  if (isNaN(firstDate.getTime()) || isNaN(secondDate.getTime())) {
    return json({ error: "Invalid date values" }, { status: 400 });
  }

  // Calculate the difference
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  
  const differenceInYears = (date1: Date, date2: Date) => {
    let years = date1.getFullYear() - date2.getFullYear();
    if (
      date1.getMonth() < date2.getMonth() ||
      (date1.getMonth() === date2.getMonth() && date1.getDate() < date2.getDate())
    ) {
      years--;
    }
    return Math.abs(years);
  };

  const differenceInMonths = (date1: Date, date2: Date) => {
    let months = (date1.getFullYear() - date2.getFullYear()) * 12;
    months += date1.getMonth() - date2.getMonth();
    if (date1.getDate() < date2.getDate()) {
      months--;
    }
    return Math.abs(months);
  };

  const differenceInDays = (date1: Date, date2: Date) => {
    const utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
    const utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
    return Math.floor(Math.abs(utc1 - utc2) / _MS_PER_DAY);
  };

  const years = differenceInYears(firstDate, secondDate);
  const totalMonths = differenceInMonths(firstDate, secondDate);
  const months = totalMonths % 12;
  const totalDays = differenceInDays(firstDate, secondDate);
  const days = totalDays % 30;
  const weeks = Math.floor(totalDays / 7);
  const hours = totalDays * 24;

  return json({
    years,
    months,
    days,
    totalDays,
    weeks,
    hours,
  });
};

export default function Difference() {
  const { jsonLd, breadcrumbJsonLd } = useLoaderData<typeof loader>();
  
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd)
        }}
      />
      <AgeDifferenceCalculator />
    </div>
  );
} 