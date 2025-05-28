import { useState } from "react";
import { json, type ActionFunctionArgs, type MetaFunction } from "@remix-run/node";
import { Form, useActionData, useNavigation, useLoaderData } from "@remix-run/react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { ResultCard } from "../components/age-calculator/ResultCard";
import { 
  differenceInDays, 
  differenceInCalendarDays,
  differenceInYears,
  addYears,
  format,
  isLeapYear,
  parse
} from "date-fns";
import { CalendarDays, PartyPopper } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
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
    { rel: "canonical", href: "https://agecalculator.app/birthday-countdown" },
  ];
};

export function loader() {
  return {
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Birthday Countdown Calculator",
      "applicationCategory": "UtilityApplication",
      "description": "Find out exactly how many days, hours, and minutes until your next birthday with our free Birthday Countdown Calculator.",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "url": "https://agecalculator.app/birthday-countdown",
      "screenshot": "https://images.unsplash.com/photo-1517842645767-c639042777db",
      "featureList": "Calculate days until birthday, next birthday date, age at next birthday. Easy to use. Free. Instant calculations.",
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
          "name": "Birthday Countdown Calculator",
          "item": "https://agecalculator.app/birthday-countdown"
        }
      ]
    },
    faqJsonLd: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How is my next birthday calculated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The calculator determines if your birthday has already passed this year. If it has, your next birthday will be next year. If not, your next birthday will be this year."
          }
        },
        {
          "@type": "Question",
          "name": "What if I was born on February 29th (leap day)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For leap year birthdays (February 29th), the calculator will display your birthday as March 1st in non-leap years, but will correctly identify that you were born on a leap day."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use this for planning birthday events?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! The birthday countdown is perfect for planning parties and celebrations, as it gives you the exact number of days remaining and even tells you what day of the week your birthday falls on."
          }
        }
      ]
    }
  };
}

interface BirthdayResult {
  daysUntilBirthday: number;
  nextBirthdayDate: string;
  nextAge: number;
  dayOfWeek: string;
  isLeapYear: boolean;
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const birthdayStr = formData.get("birthday") as string;
  
  if (!birthdayStr) {
    return json({ error: "Birthday is required" });
  }

  const birthday = new Date(birthdayStr);
  const today = new Date();
  
  // Calculate next birthday
  let nextBirthday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());
  
  // If the birthday has already occurred this year, set it to next year
  if (nextBirthday < today) {
    nextBirthday = new Date(today.getFullYear() + 1, birthday.getMonth(), birthday.getDate());
  }
  
  // Calculate days until next birthday
  const daysUntilBirthday = differenceInCalendarDays(nextBirthday, today);
  
  // Calculate age at next birthday
  const nextAge = differenceInYears(nextBirthday, birthday);
  
  // Check if next birthday is in a leap year
  const isLeapYearResult = isLeapYear(nextBirthday);
  
  // Format next birthday date
  const nextBirthdayDate = format(nextBirthday, "MMMM d, yyyy");
  
  // Get day of week for next birthday
  const dayOfWeek = format(nextBirthday, "EEEE");
  
  const result: BirthdayResult = {
    daysUntilBirthday,
    nextBirthdayDate,
    nextAge,
    dayOfWeek,
    isLeapYear: isLeapYearResult
  };

  return json({ result });
}

export default function BirthdayCountdown() {
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const { jsonLd, breadcrumbJsonLd, faqJsonLd } = useLoaderData<typeof loader>();
  const isSubmitting = navigation.state === "submitting";
  
  // Dropdown state
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 101 }, (_, i) => currentYear - i);

  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  // Compose birthday string for form submission
  const birthdayStr = selectedYear && selectedMonth && selectedDay
    ? `${selectedYear}-${String(Number(selectedMonth) + 1).padStart(2, "0")}-${String(selectedDay).padStart(2, "0")}`
    : "";

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow p-8 mb-8">
          <div className="flex items-center gap-2 mb-6">
            <CalendarDays className="text-[#19b6e9] w-7 h-7" />
            <h1 className="text-3xl font-bold text-gray-900 flex-1 text-center">Birthday Countdown</h1>
            <PartyPopper className="text-[#19b6e9] w-7 h-7" />
          </div>
          <Form method="post" className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex-1">
                <Label className="font-semibold flex items-center gap-1 mb-1"><CalendarDays className="w-4 h-4 mr-1" />Month</Label>
                <select
                  className="w-full rounded-md border border-gray-300 px-3 py-2"
                  value={selectedMonth}
                  onChange={e => setSelectedMonth(e.target.value)}
                  required
                >
                  <option value="">Month</option>
                  {months.map((m, idx) => (
                    <option key={m} value={idx}>{m}</option>
                  ))}
                </select>
              </div>
              <div className="flex-1">
                <Label className="font-semibold flex items-center gap-1 mb-1"><CalendarDays className="w-4 h-4 mr-1" />Day</Label>
                <select
                  className="w-full rounded-md border border-gray-300 px-3 py-2"
                  value={selectedDay}
                  onChange={e => setSelectedDay(e.target.value)}
                  required
                >
                  <option value="">Day</option>
                  {days.map(d => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>
              <div className="flex-1">
                <Label className="font-semibold flex items-center gap-1 mb-1"><CalendarDays className="w-4 h-4 mr-1" />Year</Label>
                <select
                  className="w-full rounded-md border border-gray-300 px-3 py-2"
                  value={selectedYear}
                  onChange={e => setSelectedYear(e.target.value)}
                  required
                >
                  <option value="">Year</option>
                  {years.map(y => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>
            </div>
            <input type="hidden" name="birthday" value={birthdayStr} />
            <Button type="submit" className="w-full bg-[#19b6e9] hover:bg-[#15a3cc] text-white font-semibold py-2 rounded" disabled={isSubmitting}>
              {isSubmitting ? "Calculating..." : "Start Countdown"}
            </Button>
          </Form>
        </div>
        {actionData && 'result' in actionData && (
          <div className="bg-white rounded-xl shadow p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Your Birthday Countdown</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <ResultCard
                title="Days Until Birthday"
                value={actionData.result.daysUntilBirthday.toString()}
                description={`Your countdown has started!`}
              />
              <ResultCard
                title="Next Birthday"
                value={actionData.result.nextBirthdayDate}
                description={`Falls on a ${actionData.result.dayOfWeek}`}
              />
              <ResultCard
                title="Your Age Then"
                value={actionData.result.nextAge.toString()}
                description={actionData.result.isLeapYear ? "Born in a leap year!" : ""}
              />
            </div>
          </div>
        )}
        <div className="bg-white rounded-xl shadow p-8 mb-8">
          <h2 className="text-2xl font-bold text-center mb-6">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-[#19b6e9] text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mb-2">1</div>
              <div className="font-semibold mb-1">Select Your Birthday</div>
              <div className="text-gray-500 text-center text-sm">Choose your birth date using the month, day, and year selectors</div>
            </div>
            <div className="text-2xl text-[#19b6e9]">→</div>
            <div className="flex flex-col items-center">
              <div className="bg-[#19b6e9] text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mb-2">2</div>
              <div className="font-semibold mb-1">Start Countdown</div>
              <div className="text-gray-500 text-center text-sm">Click to start the real-time countdown to your next birthday</div>
            </div>
            <div className="text-2xl text-[#19b6e9]">→</div>
            <div className="flex flex-col items-center">
              <div className="bg-[#19b6e9] text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mb-2">3</div>
              <div className="font-semibold mb-1">Watch Time Tick</div>
              <div className="text-gray-500 text-center text-sm">See days, hours, minutes, and seconds until your celebration</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow p-8 mb-8">
          <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border-b pb-4">
              <div className="font-semibold text-[#19b6e9] mb-1">How accurate is the birthday countdown?</div>
              <div className="text-gray-600 text-sm">Our countdown is precise to the second, continuously updating to show you exactly how long until your next birthday celebration.</div>
            </div>
            <div className="border-b pb-4">
              <div className="font-semibold text-[#19b6e9] mb-1">Can I count down to someone else's birthday?</div>
              <div className="text-gray-600 text-sm">Yes! You can use any valid birth date to count down to anyone's birthday. Just make sure the date isn't in the future.</div>
            </div>
            <div>
              <div className="font-semibold text-[#19b6e9] mb-1">What happens when it's my birthday?</div>
              <div className="text-gray-600 text-sm">The countdown will reset for the next year, so you can keep celebrating every year!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 