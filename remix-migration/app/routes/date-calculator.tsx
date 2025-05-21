import { useState } from "react";
import { json, type ActionFunctionArgs, type MetaFunction } from "@remix-run/node";
import { Form, useActionData, useNavigation, useLoaderData } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Label } from "~/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import { HowItWorks } from "~/components/date-calculator/HowItWorks";
import { WhyUseSection } from "~/components/date-calculator/WhyUseSection";
import { FAQ } from "~/components/date-calculator/FAQ";
import { Results } from "~/components/date-calculator/Results";
import { DateResult, CalculationType } from "~/components/date-calculator/types";
import { addDays, differenceInBusinessDays, differenceInCalendarDays, format, isWeekend } from "date-fns";
import { Calendar } from "~/components/ui/calendar";

export const meta: MetaFunction = () => {
  return [
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
    { rel: "canonical", href: "https://agecalculator.app/date-calculator" },
  ];
};

export function loader() {
  return {
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Date Calculator",
      "applicationCategory": "UtilityApplication",
      "description": "Calculate the number of days between two dates, add or subtract days, and find business days with our free online date calculator.",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "url": "https://agecalculator.app/date-calculator",
      "screenshot": "https://images.unsplash.com/photo-1506784983877-45594efa4cbe",
      "featureList": "Calculate date differences, add/subtract days, business days. Easy to use. Free. Instant calculations.",
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
          "name": "Date Calculator",
          "item": "https://agecalculator.app/date-calculator"
        }
      ]
    },
    faqJsonLd: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I calculate the difference between two dates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Select 'Date Difference' as the calculation type, enter your start and end dates, and click 'Calculate'. The calculator will show you the total number of days between the dates."
          }
        },
        {
          "@type": "Question",
          "name": "How do I add or subtract days from a date?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Select either 'Add Days' or 'Subtract Days' as the calculation type, enter your start date and the number of days to add or subtract, then click 'Calculate'."
          }
        },
        {
          "@type": "Question",
          "name": "What are business days?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Business days are weekdays (Monday through Friday) excluding weekends. This is useful for calculating work-related time periods."
          }
        }
      ]
    }
  };
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const calculationType = formData.get("calculationType") as CalculationType;
  
  let result: DateResult = {
    totalDays: 0,
    businessDays: 0,
    formattedDate: "",
    dayOfWeek: ""
  };

  if (calculationType === "difference" || calculationType === "business") {
    const startDateStr = formData.get("startDate") as string;
    const endDateStr = formData.get("endDate") as string;
    
    if (!startDateStr || !endDateStr) {
      return json({ error: "Both dates are required" });
    }

    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);
    
    // Calculate total days between the dates
    const totalDays = differenceInCalendarDays(endDate, startDate);
    
    // Calculate business days (excluding weekends)
    const businessDays = differenceInBusinessDays(endDate, startDate);
    
    result = {
      totalDays: Math.abs(totalDays),
      businessDays: Math.abs(businessDays),
      dayOfWeek: format(endDate, "EEEE")
    };
  } else if (calculationType === "add" || calculationType === "subtract") {
    const startDateStr = formData.get("startDate") as string;
    const daysToAddStr = formData.get("daysToAdd") as string;
    
    if (!startDateStr || !daysToAddStr) {
      return json({ error: "Date and number of days are required" });
    }

    const startDate = new Date(startDateStr);
    let daysToAdd = parseInt(daysToAddStr, 10);
    
    if (calculationType === "subtract") {
      daysToAdd = -daysToAdd;
    }
    
    const resultDate = addDays(startDate, daysToAdd);
    
    result = {
      totalDays: Math.abs(daysToAdd),
      businessDays: 0, // Not applicable for add/subtract
      formattedDate: format(resultDate, "MMMM d, yyyy"),
      dayOfWeek: format(resultDate, "EEEE")
    };
  }

  return json({ result, calculationType });
}

export default function DateCalculator() {
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const { jsonLd, breadcrumbJsonLd, faqJsonLd } = useLoaderData<typeof loader>();
  const isSubmitting = navigation.state === "submitting";
  
  const [calculationType, setCalculationType] = useState<CalculationType>("difference");
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();
  const [daysToAdd, setDaysToAdd] = useState(1);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-screen-lg mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-gray-900 text-center mb-2">Date Calculator</h1>
        <p className="text-lg text-gray-600 text-center mb-8">Calculate days between dates, add or subtract days, and determine business days<br/>with precision</p>
        <div className="bg-white rounded-lg shadow p-8 max-w-2xl mx-auto mb-4">
          <Form method="post" className="space-y-6">
            <div className="mb-4 text-left">
              <Label htmlFor="calculationType" className="font-semibold">Calculation Type</Label>
              <Select 
                name="calculationType"
                defaultValue="difference"
                onValueChange={(value) => setCalculationType(value as CalculationType)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select calculation type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="difference">Date Difference</SelectItem>
                  <SelectItem value="add">Add Days</SelectItem>
                  <SelectItem value="subtract">Subtract Days</SelectItem>
                  <SelectItem value="business">Business Days</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Label className="font-semibold mb-2 block">Start Date</Label>
                <Calendar
                  mode="single"
                  selected={startDate}
                  onSelect={setStartDate}
                  className="rounded-lg border"
                />
                <input type="hidden" name="startDate" value={startDate ? startDate.toISOString().slice(0, 10) : ""} required />
              </div>
              {(calculationType === "difference" || calculationType === "business") ? (
                <div className="flex-1">
                  <Label className="font-semibold mb-2 block">End Date</Label>
                  <Calendar
                    mode="single"
                    selected={endDate}
                    onSelect={setEndDate}
                    className="rounded-lg border"
                  />
                  <input type="hidden" name="endDate" value={endDate ? endDate.toISOString().slice(0, 10) : ""} required />
                </div>
              ) : (
                <div className="flex-1">
                  <Label htmlFor="daysToAdd" className="font-semibold">Number of Days</Label>
                  <input
                    type="number"
                    id="daysToAdd"
                    name="daysToAdd"
                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2"
                    min="1"
                    value={daysToAdd}
                    onChange={e => setDaysToAdd(Number(e.target.value))}
                    required
                  />
                </div>
              )}
            </div>
            <Button type="submit" className="w-full bg-[#19b6e9] hover:bg-[#15a3cc] text-white font-semibold py-2 rounded" disabled={isSubmitting}>
              {isSubmitting ? "Calculating..." : "Calculate"}
            </Button>
          </Form>
          {actionData && 'result' in actionData && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Results</h2>
              <Results 
                result={actionData.result} 
                calculationType={actionData.calculationType} 
              />
            </div>
          )}
        </div>
        <div className="bg-white rounded-lg shadow p-8 max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl font-bold text-center mb-6">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-[#19b6e9] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-2">1</div>
              <div className="font-semibold mb-1">Select Calculation Type</div>
              <div className="text-gray-500 text-center text-sm">Choose between date difference, adding days, or business day calculation.</div>
            </div>
            <div className="text-2xl text-[#19b6e9]">→</div>
            <div className="flex flex-col items-center">
              <div className="bg-[#19b6e9] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-2">2</div>
              <div className="font-semibold mb-1">Enter Dates</div>
              <div className="text-gray-500 text-center text-sm">Select your dates using the calendar or enter the number of days.</div>
            </div>
            <div className="text-2xl text-[#19b6e9]">→</div>
            <div className="flex flex-col items-center">
              <div className="bg-[#19b6e9] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-2">3</div>
              <div className="font-semibold mb-1">Get Results</div>
              <div className="text-gray-500 text-center text-sm">View your calculated results in multiple formats.</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-8 max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl font-bold text-center mb-6">Why Use Our Date Calculator</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <span className="text-[#19b6e9] text-xl mt-1">✔</span>
              <div>
                <div className="font-semibold">Multiple Calculation Types</div>
                <div className="text-gray-500 text-sm">Calculate date differences, add or subtract days, and determine business days; all in one place.</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#19b6e9] text-xl mt-1">✔</span>
              <div>
                <div className="font-semibold">Business Day Calculations</div>
                <div className="text-gray-500 text-sm">Accurately calculate working days between dates, excluding weekends for professional planning.</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#19b6e9] text-xl mt-1">✔</span>
              <div>
                <div className="font-semibold">User-Friendly Interface</div>
                <div className="text-gray-500 text-sm">Interactive calendar selection and clear results make date calculations simple and intuitive.</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#19b6e9] text-xl mt-1">✔</span>
              <div>
                <div className="font-semibold">Comprehensive Results</div>
                <div className="text-gray-500 text-sm">Get detailed breakdowns including total days, business days and day of the week information.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-8 max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <div className="text-[#19b6e9] font-semibold mb-2">How does the date calculator handle weekends?</div>
              <div className="text-gray-600 text-sm">The date calculator automatically identifies weekends when calculating business days. When using the business day calculation mode, Saturdays and Sundays are excluded from the count, giving you an accurate number of working days between dates.</div>
            </div>
            <div>
              <div className="text-[#19b6e9] font-semibold mb-2">Can I calculate dates across different years?</div>
              <div className="text-gray-600 text-sm">Yes! The calculator can handle dates across any time period, including different years, months, and centuries. It automatically accounts for leap years and varying month lengths to ensure accurate calculations.</div>
            </div>
            <div>
              <div className="text-[#19b6e9] font-semibold mb-2">What's the difference between total days and business days?</div>
              <div className="text-gray-600 text-sm">Total days include every calendar day between two dates, including weekends and holidays. Business days exclude weekends (Saturdays and Sundays) from the count, providing a more accurate measure for work and business planning purposes.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 