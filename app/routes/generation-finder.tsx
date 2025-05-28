import { useState } from "react";
import { json, type ActionFunctionArgs, type MetaFunction } from "@remix-run/node";
import { Form, useActionData, useNavigation, useLoaderData } from "@remix-run/react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Users2 } from "lucide-react";
import { ResultCard } from "../components/age-calculator/ResultCard";

export const meta: MetaFunction = () => {
  return [
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
    { rel: "canonical", href: "https://agecalculator.app/generation-finder" },
  ];
};

export function loader() {
  return {
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Generation Finder",
      "applicationCategory": "UtilityApplication",
      "description": "Find out which generation you belong to based on your birth year with our free Generation Finder tool.",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "url": "https://agecalculator.app/generation-finder",
      "screenshot": "https://images.unsplash.com/photo-1506784983877-45594efa4cbe",
      "featureList": "Find your generation, learn about generational characteristics, understand generational cohorts. Easy to use. Free. Instant results.",
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
          "name": "Generation Finder",
          "item": "https://agecalculator.app/generation-finder"
        }
      ]
    },
    faqJsonLd: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the different generations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The main generations are: Silent Generation (1928-1945), Baby Boomers (1946-1964), Generation X (1965-1980), Millennials (1981-1996), Generation Z (1997-2011), and Generation Alpha (2012-Present)."
          }
        },
        {
          "@type": "Question",
          "name": "How are generation boundaries determined?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Generation boundaries are determined by significant historical events, cultural shifts, and technological advancements that shape the experiences and characteristics of people born during those periods."
          }
        },
        {
          "@type": "Question",
          "name": "Why do generation definitions matter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Understanding generational cohorts helps us comprehend how different age groups experience and interact with the world. It's useful for marketing, social research, and understanding cultural trends."
          }
        }
      ]
    }
  };
}

interface GenerationResult {
  generation: string;
  yearRange: string;
  description: string;
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const birthYearStr = formData.get("birthYear") as string;
  
  if (!birthYearStr) {
    return json({ error: "Birth year is required" });
  }

  const birthYear = parseInt(birthYearStr, 10);
  
  if (isNaN(birthYear) || birthYear < 1900 || birthYear > new Date().getFullYear()) {
    return json({ error: "Please enter a valid birth year between 1900 and present" });
  }

  const result = findGeneration(birthYear);
  
  return json({ result });
}

function findGeneration(year: number): GenerationResult {
  if (year >= 2012) {
    return {
      generation: "Generation Alpha",
      yearRange: "2012 - Present",
      description: "The first generation born entirely in the 21st century. Growing up with AI, smart devices, and advanced technology as a natural part of life."
    };
  } else if (year >= 1997) {
    return {
      generation: "Generation Z",
      yearRange: "1997 - 2011",
      description: "Digital natives who have never known a world without the internet. Known for their tech-savvy nature and focus on social justice."
    };
  } else if (year >= 1981) {
    return {
      generation: "Millennial",
      yearRange: "1981 - 1996",
      description: "Also known as Generation Y. Came of age during the internet boom and experienced significant technological advancement throughout their lives."
    };
  } else if (year >= 1965) {
    return {
      generation: "Generation X",
      yearRange: "1965 - 1980",
      description: "The 'latchkey' generation, known for their independence and adaptability. Witnessed the transition from analog to digital."
    };
  } else if (year >= 1946) {
    return {
      generation: "Baby Boomer",
      yearRange: "1946 - 1964",
      description: "Born during the post-World War II baby boom. Experienced significant social change and economic prosperity."
    };
  } else {
    return {
      generation: "Silent Generation",
      yearRange: "1928 - 1945",
      description: "Grew up during the Great Depression and World War II. Known for their resilience and traditional values."
    };
  }
}

export default function GenerationFinder() {
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const { jsonLd, breadcrumbJsonLd, faqJsonLd } = useLoaderData<typeof loader>();
  const isSubmitting = navigation.state === "submitting";
  
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-3xl mx-auto">
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
        
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-primary">What Generation Am I?</h1>
          <p className="text-xl text-neutral-gray max-w-2xl mx-auto">
            Enter your birth year to discover your generational cohort and learn about its characteristics.
          </p>
        </div>
        
        <Card className="p-6 bg-white/80 backdrop-blur-sm max-w-xl mx-auto">
          <Form method="post" className="space-y-6">
            <div className="space-y-4">
              <Label htmlFor="birthYear">Birth Year</Label>
              <input
                type="number"
                id="birthYear"
                name="birthYear"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-lg"
                placeholder="Enter your birth year (e.g., 1990)"
                min="1900"
                max={currentYear}
                required
              />
            </div>
            
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              <Users2 className="mr-2 h-5 w-5" />
              {isSubmitting ? "Finding..." : "Find My Generation"}
            </Button>
          </Form>
        </Card>
        
        {actionData?.result && (
          <Card className="p-6 bg-blue-50 border border-blue-100 max-w-xl mx-auto">
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-primary">
                  You are part of {actionData.result.generation}
                </h2>
                <p className="text-neutral-gray">
                  Birth Years: {actionData.result.yearRange}
                </p>
              </div>
              <p className="text-neutral-dark">
                {actionData.result.description}
              </p>
            </div>
          </Card>
        )}
        
        <Card className="p-6 space-y-6 bg-white/80 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-center text-neutral-dark">
            How It Works
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 relative">
            <div className="flex flex-col items-center text-center max-w-[250px] relative">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-neutral-dark mb-2">
                Select Your Birth Year
              </h3>
              <p className="text-neutral-gray text-sm">
                Enter your birth year in the calculator above
              </p>
              <div className="hidden md:block absolute left-[calc(100%+1rem)] top-6 -translate-y-1/2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col items-center text-center max-w-[250px] relative">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-neutral-dark mb-2">
                Get Your Generation
              </h3>
              <p className="text-neutral-gray text-sm">
                Our tool identifies which generation you belong to based on your birth year
              </p>
              <div className="hidden md:block absolute left-[calc(100%+1rem)] top-6 -translate-y-1/2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col items-center text-center max-w-[250px]">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-neutral-dark mb-2">
                Learn More
              </h3>
              <p className="text-neutral-gray text-sm">
                Discover characteristics and key events that shaped your generation
              </p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <h2 className="text-2xl font-bold text-center mb-6">Generation Overview ({currentYear})</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 text-left">Generation</th>
                  <th className="p-3 text-left">Time Frame</th>
                  <th className="p-3 text-left">Age in {currentYear}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">The Silent Generation</td>
                  <td className="p-3">1928-1945</td>
                  <td className="p-3">{currentYear - 1928}-{currentYear - 1945} years old</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Baby Boomers</td>
                  <td className="p-3">1946-1964</td>
                  <td className="p-3">{currentYear - 1964}-{currentYear - 1946} years old</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Gen X</td>
                  <td className="p-3">1965-1980</td>
                  <td className="p-3">{currentYear - 1980}-{currentYear - 1965} years old</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Millennials</td>
                  <td className="p-3">1981-1996</td>
                  <td className="p-3">{currentYear - 1996}-{currentYear - 1981} years old</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Gen Z</td>
                  <td className="p-3">1997-2012</td>
                  <td className="p-3">{currentYear - 2012}-{currentYear - 1997} years old</td>
                </tr>
                <tr>
                  <td className="p-3">Gen Alpha</td>
                  <td className="p-3">2013-Present</td>
                  <td className="p-3">0-{currentYear - 2013} years old</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 space-y-6">
            <h3 className="text-xl font-semibold">Interesting Facts About Each Generation</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-primary">The Silent Generation</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>They were the first generation to embrace television as a primary form of entertainment.</li>
                  <li>This generation has the highest rate of civic engagement and volunteerism among all living generations.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-primary">Baby Boomers</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>They witnessed and participated in significant cultural movements like Woodstock and the Civil Rights Movement.</li>
                  <li>This generation controls about 70% of all disposable income in the United States.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-primary">Generation X</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>They were the first generation to grow up with personal computers in their homes.</li>
                  <li>Gen X has the highest rate of startup founders among all generations.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-primary">Millennials</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>They are the most educated generation in history, with over 39% holding a bachelor's degree.</li>
                  <li>Millennials are the first generation to prioritize experiences over material possessions in their spending habits.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-primary">Generation Z</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>They are the most diverse generation in history and have never known a world without the internet.</li>
                  <li>Gen Z has an average attention span of 8 seconds, compared to 12 seconds for millennials.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-primary">Generation Alpha</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>They are the first generation to be born entirely in the 21st century.</li>
                  <li>Expected to be the most technologically immersed generation, with AI being a natural part of their daily lives.</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
        
        <div className="bg-white rounded-lg p-6 space-y-6">
          <h2 className="text-2xl font-bold text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="space-y-2 p-4 border-b">
              <h3 className="font-semibold text-lg text-primary">
                How are generations defined?
              </h3>
              <p className="text-gray-600">
                Generations are defined by birth year ranges that correspond to significant cultural, technological, and social changes. These cohorts often share common experiences and characteristics that shape their worldview.
              </p>
            </div>
            <div className="space-y-2 p-4 border-b">
              <h3 className="font-semibold text-lg text-primary">
                Why do generation dates sometimes overlap?
              </h3>
              <p className="text-gray-600">
                Generation boundaries aren't always exact, and there can be some overlap between generations. People born on the cusp between two generations might identify with characteristics of both groups.
              </p>
            </div>
            <div className="space-y-2 p-4">
              <h3 className="font-semibold text-lg text-primary">
                What if I don't identify with my generation's characteristics?
              </h3>
              <p className="text-gray-600">
                While generational categories can provide insights into shared experiences, they're broad generalizations. Individual experiences, values, and circumstances can vary significantly within each generation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 