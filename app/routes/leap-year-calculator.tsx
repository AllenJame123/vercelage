import { json, type ActionFunctionArgs, type MetaFunction } from "@remix-run/node";
import { Form, useActionData, useNavigation, useLoaderData } from "@remix-run/react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { isLeapYear } from "date-fns";
import { ResultCard } from "../components/age-calculator/ResultCard";

export const meta: MetaFunction = () => {
  return [
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
    { rel: "canonical", href: "https://agecalculator.app/leap-year-calculator" },
  ];
};

export function loader() {
  return {
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Leap Year Calculator",
      "applicationCategory": "UtilityApplication",
      "description": "Check if any year is a leap year and learn about leap year rules with our free Leap Year Calculator.",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "url": "https://agecalculator.app/leap-year-calculator",
      "screenshot": "https://images.unsplash.com/photo-1506784983877-45594efa4cbe",
      "featureList": "Check leap years, learn leap year rules, find next leap years. Easy to use. Free. Instant calculations.",
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
          "name": "Leap Year Calculator",
          "item": "https://agecalculator.app/leap-year-calculator"
        }
      ]
    },
    faqJsonLd: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How often do leap years occur?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Leap years typically occur every 4 years. However, years divisible by 100 are not leap years unless they are also divisible by 400. This means that while 2000 was a leap year, 1900 was not, and 2100 will not be."
          }
        },
        {
          "@type": "Question",
          "name": "What happens to people born on February 29?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "People born on February 29 typically celebrate their birthdays on February 28 or March 1 in non-leap years. Legally, most jurisdictions recognize March 1 as their official birthday in non-leap years."
          }
        },
        {
          "@type": "Question",
          "name": "Why are centuries special in leap year calculations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Century years (those ending in 00) are not leap years unless they are divisible by 400. This refinement to the leap year rule makes the Gregorian calendar more accurate, as it accounts for the fact that the solar year is slightly less than 365.25 days."
          }
        }
      ]
    }
  };
}

interface LeapYearResult {
  year: number;
  isLeapYear: boolean;
  nextLeapYear: number;
  previousLeapYear: number;
  daysInFebruary: number;
  daysInYear: number;
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const yearStr = formData.get("year") as string;
  
  if (!yearStr) {
    return json({ error: "Year is required" });
  }

  const year = parseInt(yearStr, 10);
  
  if (isNaN(year) || year < 1 || year > 9999) {
    return json({ error: "Please enter a valid year between 1 and 9999" });
  }
  
  // Check if it's a leap year
  const leapYearResult = isLeapYear(new Date(year, 1, 1));
  
  // Find next leap year
  let nextLeapYear = year;
  while (!isLeapYear(new Date(++nextLeapYear, 1, 1))) {
    if (nextLeapYear > year + 4) break; // Safety check
  }
  
  // Find previous leap year
  let previousLeapYear = year;
  while (previousLeapYear > 0 && !isLeapYear(new Date(--previousLeapYear, 1, 1))) {
    if (previousLeapYear < year - 4) break; // Safety check
  }
  
  const result: LeapYearResult = {
    year,
    isLeapYear: leapYearResult,
    nextLeapYear,
    previousLeapYear: previousLeapYear > 0 ? previousLeapYear : 0,
    daysInFebruary: leapYearResult ? 29 : 28,
    daysInYear: leapYearResult ? 366 : 365
  };

  return json({ result });
}

export default function LeapYearCalculator() {
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const { jsonLd, breadcrumbJsonLd, faqJsonLd } = useLoaderData<typeof loader>();
  const isSubmitting = navigation.state === "submitting";
  
  const currentYear = new Date().getFullYear();
  
  const hasResult = actionData && typeof actionData === 'object' && 'result' in actionData && actionData.result;
  
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="bg-white rounded-xl shadow p-10 mb-8">
          <div className="text-center space-y-4 mb-8">
            <h1 className="text-4xl font-bold text-primary">Leap Year Calculator</h1>
            <p className="text-xl text-neutral-gray max-w-2xl mx-auto">
              Check if a year is a leap year and learn about leap year rules.
            </p>
          </div>
          <Form method="post" className="space-y-6 max-w-md mx-auto">
            <div className="space-y-4">
              <Label htmlFor="year">Enter Year</Label>
              <input
                type="number"
                id="year"
                name="year"
                className="w-full rounded-md border border-input bg-background px-3 py-2"
                defaultValue={currentYear}
                min="1"
                max="9999"
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Checking..." : "Check Leap Year"}
            </Button>
          </Form>
          {hasResult && (
            <div className="mt-8">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 animate-slideUp w-full">
                <ResultCard
                  title="Year Status"
                  value={actionData.result.isLeapYear ? "Leap Year" : "Not a Leap Year"}
                  description={`${actionData.result.year} has ${actionData.result.isLeapYear ? "366" : "365"} days`}
                />
                <ResultCard
                  title="Days in February"
                  value={actionData.result.daysInFebruary.toString()}
                  description="Days in February for this year"
                />
                <ResultCard
                  title="Days in Year"
                  value={actionData.result.daysInYear.toString()}
                  description="Total days in this year"
                />
                <ResultCard
                  title="Previous Leap Year"
                  value={actionData.result.previousLeapYear ? actionData.result.previousLeapYear.toString() : "N/A"}
                  description="Most recent leap year before this year"
                />
                <ResultCard
                  title="Next Leap Year"
                  value={actionData.result.nextLeapYear.toString()}
                  description="First upcoming leap year"
                />
              </div>
            </div>
          )}

          {/* How It Works Section */}
          <div className="bg-white rounded-xl shadow p-8 mb-8 mt-8">
            <h2 className="text-2xl font-bold text-center mb-6">How It Works</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="flex flex-col items-center">
                <div className="bg-[#19b6e9] text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mb-2">1</div>
                <div className="font-semibold mb-1">Select a Year</div>
                <div className="text-gray-500 text-center text-sm">Choose any year from the dropdown menu to check if it's a leap year</div>
              </div>
              <div className="text-2xl text-[#19b6e9]">→</div>
              <div className="flex flex-col items-center">
                <div className="bg-[#19b6e9] text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mb-2">2</div>
                <div className="font-semibold mb-1">Get Results</div>
                <div className="text-gray-500 text-center text-sm">View whether it's a leap year and see the next three upcoming leap years</div>
              </div>
              <div className="text-2xl text-[#19b6e9]">→</div>
              <div className="flex flex-col items-center">
                <div className="bg-[#19b6e9] text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mb-2">3</div>
                <div className="font-semibold mb-1">Plan Ahead</div>
                <div className="text-gray-500 text-center text-sm">Use the future leap year information for long-term date planning</div>
              </div>
            </div>
          </div>

          {/* Why Use Our Leap Year Calculator Section */}
          <div className="bg-white rounded-xl shadow p-8 mb-8">
            <h2 className="text-2xl font-bold text-center mb-6">Why Use Our Leap Year Calculator</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <span className="bg-[#19b6e9] w-6 h-6 rounded-full flex items-center justify-center text-white font-bold">✓</span>
                <div>
                  <div className="font-semibold">Quick Year Verification</div>
                  <div className="text-gray-500 text-sm">Instantly check if any year is a leap year with our accurate calculator.</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-[#19b6e9] w-6 h-6 rounded-full flex items-center justify-center text-white font-bold">✓</span>
                <div>
                  <div className="font-semibold">Future Planning</div>
                  <div className="text-gray-500 text-sm">Find the next three upcoming leap years to help with long-term date planning.</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-[#19b6e9] w-6 h-6 rounded-full flex items-center justify-center text-white font-bold">✓</span>
                <div>
                  <div className="font-semibold">Educational Tool</div>
                  <div className="text-gray-500 text-sm">Learn about leap year rules and why they're important for our calendar system.</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-[#19b6e9] w-6 h-6 rounded-full flex items-center justify-center text-white font-bold">✓</span>
                <div>
                  <div className="font-semibold">Date Accuracy</div>
                  <div className="text-gray-500 text-sm">Ensure precise date calculations by knowing which years have 366 days.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="p-6 space-y-4 bg-white/80 backdrop-blur-sm">
            <h2 className="text-2xl font-bold">Why Do We Need Leap Years?</h2>
            <p className="text-gray-700">
              The Earth takes approximately 365.2422 days to orbit the Sun. Without leap years, our calendar would drift about 6 hours each year, or about 24 days per century. Leap years help synchronize our calendar year with the solar year.
            </p>
            <p className="text-gray-700">
              The current leap year system was introduced by Pope Gregory XIII in 1582 when he reformed the Julian calendar. The Gregorian calendar is now the internationally accepted civil calendar.
            </p>
          </Card>
          <Card className="p-6 space-y-4 bg-white/80 backdrop-blur-sm">
            <h2 className="text-2xl font-bold">Interesting Leap Year Facts</h2>
            <ul className="space-y-3 text-gray-700">
              <li>
                <span className="font-semibold">Leap Year Babies:</span> People born on February 29 are sometimes called "leaplings" or "leap year babies"
              </li>
              <li>
                <span className="font-semibold">February 30:</span> Sweden once had a February 30 (in 1712) due to a calendar correction
              </li>
              <li>
                <span className="font-semibold">Tradition:</span> In many European countries, women can traditionally propose marriage to men on leap days
              </li>
              <li>
                <span className="font-semibold">Olympic Games:</span> Summer Olympic Games are held during leap years
              </li>
            </ul>
          </Card>
        </div>
        <div className="bg-white rounded-lg p-6 space-y-6">
          <h2 className="text-2xl font-bold text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="space-y-2 p-4 border-b">
              <h3 className="font-semibold text-lg text-primary">
                How often do leap years occur?
              </h3>
              <p className="text-gray-600">
                Leap years typically occur every 4 years. However, years divisible by 100 are not leap years unless they are also divisible by 400. This means that while 2000 was a leap year, 1900 was not, and 2100 will not be.
              </p>
            </div>
            <div className="space-y-2 p-4 border-b">
              <h3 className="font-semibold text-lg text-primary">
                What happens to people born on February 29?
              </h3>
              <p className="text-gray-600">
                People born on February 29 typically celebrate their birthdays on February 28 or March 1 in non-leap years. Legally, most jurisdictions recognize March 1 as their official birthday in non-leap years.
              </p>
            </div>
            <div className="space-y-2 p-4">
              <h3 className="font-semibold text-lg text-primary">
                Why are centuries special in leap year calculations?
              </h3>
              <p className="text-gray-600">
                Century years (those ending in 00) are not leap years unless they are divisible by 400. This refinement to the leap year rule makes the Gregorian calendar more accurate, as it accounts for the fact that the solar year is slightly less than 365.25 days.
              </p>
            </div>
          </div>
        </div>
      </div>
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd)
        }}
      />
    </div>
  );
}