import { json, type ActionFunctionArgs, type MetaFunction } from "@remix-run/node";
import { Form, useActionData, useNavigation, useLoaderData } from "@remix-run/react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { ResultCard } from "../components/age-calculator/ResultCard";
import { addDays, addWeeks, format, subWeeks } from "date-fns";
import { useState } from "react";
import { Calendar } from "../components/ui/calendar";
import { Check } from "lucide-react";
import { PregnancyWeekData } from "../components/pregnancy-calculator/pregnancyData";
import { PregnancyWeekRow } from "../components/pregnancy-calculator/PregnancyWeekRow";
import { PregnancyTableHeader } from "../components/pregnancy-calculator/PregnancyTableHeader";

export const meta: MetaFunction = () => {
  return [
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
    { rel: "canonical", href: "https://agecalculator.app/pregnancy-calculator" },
  ];
};

export function loader() {
  return {
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Pregnancy Calculator",
      "applicationCategory": "HealthApplication",
      "description": "Calculate your due date, conception date, and pregnancy milestones with our free Pregnancy Calculator.",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "url": "https://agecalculator.app/pregnancy-calculator",
      "screenshot": "https://images.unsplash.com/photo-1506784983877-45594efa4cbe",
      "featureList": "Calculate due date, conception date, pregnancy milestones, trimester information. Easy to use. Free. Instant calculations.",
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
          "name": "Pregnancy Calculator",
          "item": "https://agecalculator.app/pregnancy-calculator"
        }
      ]
    },
    faqJsonLd: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How is the due date calculated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The due date is calculated by adding 280 days (40 weeks) to the first day of your last menstrual period. This is known as Naegele's rule and is the standard method used by healthcare providers."
          }
        },
        {
          "@type": "Question",
          "name": "What are the three trimesters of pregnancy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The three trimesters are: First trimester (weeks 1-13), Second trimester (weeks 14-26), and Third trimester (weeks 27-40). Each trimester has different developmental milestones and changes."
          }
        },
        {
          "@type": "Question",
          "name": "How accurate is the pregnancy calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The calculator provides an estimate based on the standard 40-week pregnancy. However, only about 5% of women deliver on their exact due date. Most babies are born within two weeks before or after the due date."
          }
        }
      ]
    }
  };
}

interface PregnancyResult {
  dueDate: string;
  conceptionDate: string;
  currentWeek: number;
  trimester: string;
  daysRemaining: number;
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const lastPeriodStr = formData.get("lastPeriod") as string;
  
  if (!lastPeriodStr) {
    return json({ error: "Last menstrual period date is required" });
  }

  const lastPeriod = new Date(lastPeriodStr);
  const today = new Date();
  
  // Calculate due date (40 weeks from last period)
  const dueDate = addWeeks(lastPeriod, 40);
  
  // Estimate conception date (2 weeks after last period)
  const conceptionDate = addWeeks(lastPeriod, 2);
  
  // Calculate current week of pregnancy
  // Pregnancy is counted from the first day of the last period
  const totalDays = Math.floor((today.getTime() - lastPeriod.getTime()) / (1000 * 60 * 60 * 24));
  const currentWeek = Math.floor(totalDays / 7) + 1; // Adding 1 because weeks start at 1
  
  // Determine trimester
  let trimester = "";
  if (currentWeek <= 0) {
    trimester = "Not pregnant yet";
  } else if (currentWeek <= 13) {
    trimester = "First Trimester";
  } else if (currentWeek <= 26) {
    trimester = "Second Trimester";
  } else if (currentWeek <= 40) {
    trimester = "Third Trimester";
  } else {
    trimester = "Past due date";
  }
  
  // Calculate days remaining until due date
  const daysRemaining = Math.max(0, Math.floor((dueDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)));
  
  const result: PregnancyResult = {
    dueDate: format(dueDate, "MMMM d, yyyy"),
    conceptionDate: format(conceptionDate, "MMMM d, yyyy"),
    currentWeek: Math.max(0, currentWeek),
    trimester,
    daysRemaining
  };

  return json({ result });
}

// User-provided week-by-week data (trimester, fetalDevelopment, babySize, medicalProcedures)
const weekDetails = [
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
  { trimester: "Third", fetalDevelopment: "Due date arrives; labor could begin any day.", babySize: "Size: 51.2 cm, Weight: 3.5 kg (small pumpkin).", medicalProcedures: "Final checkup; discuss induction if labor hasn't started." },
];

function generatePregnancyTimeline(startDate: Date): PregnancyWeekData[] {
  return weekDetails.map((detail, i) => ({
    week: i + 1,
    date: addWeeks(startDate, i),
    ...detail,
  }));
}

export default function PregnancyCalculator() {
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const { jsonLd, breadcrumbJsonLd, faqJsonLd } = useLoaderData<typeof loader>();
  const isSubmitting = navigation.state === "submitting";
  
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();

  // Helper to get the date for a given week number
  const getDateForWeek = (weekNumber: number) => {
    if (!selectedDate) return new Date();
    return addWeeks(selectedDate, weekNumber - 1);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow p-10 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-2">Pregnancy Calculator</h1>
          <p className="text-lg text-gray-600 text-center mb-8">Track your pregnancy week by week and get your estimated due date</p>
          <Form method="post" className="flex flex-col items-center gap-6">
            <div className="w-full max-w-xs mx-auto">
              <Label className="block text-center text-lg font-semibold mb-2">First Day of Last Period</Label>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-lg border mx-auto"
              />
              <input type="hidden" name="lastPeriod" value={selectedDate ? selectedDate.toISOString().slice(0, 10) : ""} required />
            </div>
            <Button type="submit" className="bg-[#19b6e9] hover:bg-[#15a3cc] text-white font-semibold px-8 py-2 rounded" disabled={isSubmitting}>
              {isSubmitting ? "Calculating..." : "Calculate"}
            </Button>
          </Form>
          {actionData && 'result' in actionData && (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-2 border-[#19b6e9] rounded-lg p-6 text-center">
                <div className="text-gray-500 mb-1">Current Week</div>
                <div className="text-3xl font-bold text-[#19b6e9] mb-1">Week {actionData.result.currentWeek}</div>
                <div className="text-gray-500">of pregnancy</div>
              </div>
              <div className="border-2 border-[#19b6e9] rounded-lg p-6 text-center">
                <div className="text-gray-500 mb-1">Due Date</div>
                <div className="text-2xl font-bold text-[#19b6e9] mb-1">{actionData.result.dueDate}</div>
                <div className="text-gray-500">estimated delivery</div>
              </div>
            </div>
          )}
        </div>
        {/* Pregnancy Timeline Table */}
        {selectedDate && (
          <div className="bg-white rounded-xl shadow p-8 mb-8">
            <h2 className="text-2xl font-bold text-center mb-6">Pregnancy Timeline</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border rounded-lg">
                <PregnancyTableHeader />
                <tbody>
                  {generatePregnancyTimeline(selectedDate).map((week) => (
                    <PregnancyWeekRow
                      key={week.week}
                      week={week}
                      currentWeek={actionData && 'result' in actionData ? actionData.result.currentWeek : 0}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        {/* How It Works Section */}
        <div className="bg-white rounded-xl shadow p-8 mb-8">
          <h2 className="text-2xl font-bold text-center mb-6">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-[#19b6e9] text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mb-2">1</div>
              <div className="font-semibold mb-1">Enter Last Period</div>
              <div className="text-gray-500 text-center text-sm">Input the first day of your last menstrual period to begin the calculation</div>
            </div>
            <div className="text-2xl text-[#19b6e9]">→</div>
            <div className="flex flex-col items-center">
              <div className="bg-[#19b6e9] text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mb-2">2</div>
              <div className="font-semibold mb-1">Calculate</div>
              <div className="text-gray-500 text-center text-sm">Our calculator determines your current pregnancy week and estimated due date</div>
            </div>
            <div className="text-2xl text-[#19b6e9]">→</div>
            <div className="flex flex-col items-center">
              <div className="bg-[#19b6e9] text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mb-2">3</div>
              <div className="font-semibold mb-1">View Results</div>
              <div className="text-gray-500 text-center text-sm">Follow your pregnancy journey with week-by-week development information</div>
            </div>
          </div>
        </div>
        {/* Why Use Our Pregnancy Calculator Section */}
        <div className="bg-white rounded-xl shadow p-8 mb-8">
          <h2 className="text-2xl font-bold text-center mb-6">Why Use Our Pregnancy Calculator</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <Check className="text-[#19b6e9] w-6 h-6 mt-1" />
              <div>
                <div className="font-semibold">Accurate Due Date Calculation</div>
                <div className="text-gray-500 text-sm">Get a precise estimation of your due date based on your last menstrual period, using the same method healthcare providers use.</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="text-[#19b6e9] w-6 h-6 mt-1" />
              <div>
                <div className="font-semibold">Week-by-Week Development Tracking</div>
                <div className="text-gray-500 text-sm">Follow your baby's growth with detailed weekly updates about development milestones, size comparisons, and important medical procedures.</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="text-[#19b6e9] w-6 h-6 mt-1" />
              <div>
                <div className="font-semibold">Trimester Breakdown</div>
                <div className="text-gray-500 text-sm">Understand which trimester you're in and what to expect during each phase of your pregnancy journey.</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="text-[#19b6e9] w-6 h-6 mt-1" />
              <div>
                <div className="font-semibold">Medical Timeline</div>
                <div className="text-gray-500 text-sm">Access a comprehensive timeline of recommended medical check-ups, tests, and screenings throughout your pregnancy.</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="text-[#19b6e9] w-6 h-6 mt-1" />
              <div>
                <div className="font-semibold">Size Visualization</div>
                <div className="text-gray-500 text-sm">Visualize your baby's size with familiar fruit and vegetable comparisons that make it easy to understand their growth.</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="text-[#19b6e9] w-6 h-6 mt-1" />
              <div>
                <div className="font-semibold">Pregnancy Planning</div>
                <div className="text-gray-500 text-sm">Plan ahead with information about important milestones, helping you prepare for each stage of your pregnancy.</div>
              </div>
            </div>
          </div>
        </div>
        {/* FAQ Section */}
        <div className="bg-white rounded-xl shadow p-8 mb-8">
          <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border-b pb-4">
              <div className="font-semibold text-[#19b6e9] mb-1">How is the due date calculated?</div>
              <div className="text-gray-600 text-sm">The due date is calculated by adding 280 days (40 weeks) to the first day of your last menstrual period. This is known as Naegele's rule and is the standard method used by healthcare providers.</div>
            </div>
            <div className="border-b pb-4">
              <div className="font-semibold text-[#19b6e9] mb-1">What are the three trimesters of pregnancy?</div>
              <div className="text-gray-600 text-sm">The three trimesters are: First trimester (weeks 1-13), Second trimester (weeks 14-26), and Third trimester (weeks 27-40). Each trimester has different developmental milestones and changes.</div>
            </div>
            <div>
              <div className="font-semibold text-[#19b6e9] mb-1">How accurate is the pregnancy calculator?</div>
              <div className="text-gray-600 text-sm">The calculator provides an estimate based on the standard 40-week pregnancy. However, only about 5% of women deliver on their exact due date. Most babies are born within two weeks before or after the due date.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 