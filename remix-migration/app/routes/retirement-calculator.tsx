import { useState } from "react";
import { json, type ActionFunctionArgs, type MetaFunction } from "@remix-run/node";
import { Form, useActionData, useNavigation, useLoaderData } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Label } from "~/components/ui/label";
import { addYears, differenceInYears, format } from "date-fns";
import { ResultCard } from "~/components/age-calculator/ResultCard";

export const meta: MetaFunction = () => {
  return [
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
    { rel: "canonical", href: "https://agecalculator.app/retirement-calculator" },
  ];
};

export function loader() {
  return {
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Retirement Calculator",
      "applicationCategory": "FinanceApplication",
      "description": "Calculate your retirement date, projected savings, and monthly contributions needed with our free Retirement Calculator.",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "url": "https://agecalculator.app/retirement-calculator",
      "screenshot": "https://images.unsplash.com/photo-1506784983877-45594efa4cbe",
      "featureList": "Calculate retirement date, projected savings, monthly contributions. Easy to use. Free. Instant calculations.",
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
          "name": "Retirement Calculator",
          "item": "https://agecalculator.app/retirement-calculator"
        }
      ]
    },
    faqJsonLd: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How is my retirement date calculated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The calculator adds your chosen retirement age to your birth date to determine when you'll reach retirement age. It then calculates the number of years until retirement and uses compound interest formulas to project your savings."
          }
        },
        {
          "@type": "Question",
          "name": "What factors affect my retirement savings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Key factors include your current savings, monthly contributions, expected return on investment, and your retirement goal amount. The calculator uses compound interest to project how these factors will affect your retirement savings over time."
          }
        },
        {
          "@type": "Question",
          "name": "How accurate are the retirement projections?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The projections are based on the information you provide and assume consistent returns. Real-world factors like market fluctuations, inflation, and changes in contribution amounts can affect actual results. It's recommended to review and adjust your retirement plan regularly."
          }
        }
      ]
    }
  };
}

interface RetirementResult {
  currentAge: number;
  retirementAge: number;
  yearsUntilRetirement: number;
  retirementDate: string;
  monthlySavingsNeeded: number;
  projectedSavings: number;
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const birthDateStr = formData.get("birthDate") as string;
  const retirementAgeStr = formData.get("retirementAge") as string;
  const currentSavingsStr = formData.get("currentSavings") as string;
  const monthlySavingsStr = formData.get("monthlySavings") as string;
  const retirementGoalStr = formData.get("retirementGoal") as string;
  const expectedReturnStr = formData.get("expectedReturn") as string;
  
  if (!birthDateStr || !retirementAgeStr) {
    return json({ error: "Birth date and retirement age are required" });
  }

  const birthDate = new Date(birthDateStr);
  const retirementAge = parseInt(retirementAgeStr, 10);
  const currentSavings = parseFloat(currentSavingsStr || "0");
  const monthlySavings = parseFloat(monthlySavingsStr || "0");
  const retirementGoal = parseFloat(retirementGoalStr || "0");
  const expectedReturn = parseFloat(expectedReturnStr || "7") / 100; // Convert percentage to decimal
  
  const today = new Date();
  const currentAge = differenceInYears(today, birthDate);
  
  // Calculate retirement date
  const retirementDate = addYears(birthDate, retirementAge);
  
  // Calculate years until retirement
  const yearsUntilRetirement = Math.max(0, retirementAge - currentAge);
  
  // Calculate projected savings at retirement
  // Using compound interest formula: FV = PV(1+r)^n + PMT*((1+r)^n-1)/r
  let projectedSavings = currentSavings * Math.pow(1 + expectedReturn, yearsUntilRetirement);
  
  // Add monthly contributions (converted to annual for simplicity)
  const annualSavings = monthlySavings * 12;
  if (expectedReturn > 0) {
    projectedSavings += annualSavings * (Math.pow(1 + expectedReturn, yearsUntilRetirement) - 1) / expectedReturn;
  } else {
    projectedSavings += annualSavings * yearsUntilRetirement;
  }
  
  // Calculate monthly savings needed to reach retirement goal
  let monthlySavingsNeeded = 0;
  if (retirementGoal > 0 && yearsUntilRetirement > 0) {
    // Rearrange formula to solve for PMT
    const goalMinusCurrentSavings = retirementGoal - (currentSavings * Math.pow(1 + expectedReturn, yearsUntilRetirement));
    
    if (expectedReturn > 0) {
      const annualSavingsNeeded = goalMinusCurrentSavings * expectedReturn / (Math.pow(1 + expectedReturn, yearsUntilRetirement) - 1);
      monthlySavingsNeeded = annualSavingsNeeded / 12;
    } else {
      monthlySavingsNeeded = goalMinusCurrentSavings / (yearsUntilRetirement * 12);
    }
    
    monthlySavingsNeeded = Math.max(0, monthlySavingsNeeded);
  }
  
  const result: RetirementResult = {
    currentAge,
    retirementAge,
    yearsUntilRetirement,
    retirementDate: format(retirementDate, "MMMM d, yyyy"),
    monthlySavingsNeeded: Math.round(monthlySavingsNeeded),
    projectedSavings: Math.round(projectedSavings)
  };

  return json({ result });
}

export default function RetirementCalculator() {
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const { jsonLd, breadcrumbJsonLd, faqJsonLd } = useLoaderData<typeof loader>();
  const isSubmitting = navigation.state === "submitting";
  
  const [showAdvanced, setShowAdvanced] = useState(false);
  
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
          <h1 className="text-4xl font-bold text-primary">Retirement Calculator</h1>
          <p className="text-xl text-neutral-gray max-w-2xl mx-auto">
            Plan your financial future and calculate when you can retire.
          </p>
        </div>
        
        <Card className="p-6 bg-white/80 backdrop-blur-sm">
          <Form method="post" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <Label htmlFor="birthDate">Your Birth Date</Label>
                <input
                  type="date"
                  id="birthDate"
                  name="birthDate"
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                  required
                />
              </div>
              
              <div className="space-y-4">
                <Label htmlFor="retirementAge">Planned Retirement Age</Label>
                <input
                  type="number"
                  id="retirementAge"
                  name="retirementAge"
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                  defaultValue={65}
                  min="1"
                  max="120"
                  required
                />
              </div>
            </div>
            
            <div className="pt-2">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="w-full md:w-auto"
              >
                {showAdvanced ? "Hide Advanced Options" : "Show Advanced Options"}
              </Button>
            </div>
            
            {showAdvanced && (
              <div className="grid gap-6 md:grid-cols-2 pt-2">
                <div className="space-y-4">
                  <Label htmlFor="currentSavings">Current Retirement Savings ($)</Label>
                  <input
                    type="number"
                    id="currentSavings"
                    name="currentSavings"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                    defaultValue={0}
                    min="0"
                  />
                </div>
                
                <div className="space-y-4">
                  <Label htmlFor="monthlySavings">Current Monthly Contributions ($)</Label>
                  <input
                    type="number"
                    id="monthlySavings"
                    name="monthlySavings"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                    defaultValue={0}
                    min="0"
                  />
                </div>
                
                <div className="space-y-4">
                  <Label htmlFor="retirementGoal">Retirement Savings Goal ($)</Label>
                  <input
                    type="number"
                    id="retirementGoal"
                    name="retirementGoal"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                    defaultValue={1000000}
                    min="0"
                  />
                </div>
                
                <div className="space-y-4">
                  <Label htmlFor="expectedReturn">Expected Annual Return (%)</Label>
                  <input
                    type="number"
                    id="expectedReturn"
                    name="expectedReturn"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                    defaultValue={7}
                    min="0"
                    max="30"
                    step="0.1"
                  />
                </div>
              </div>
            )}
            
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Calculating..." : "Calculate Retirement Plan"}
            </Button>
          </Form>
        </Card>
        
        {actionData?.result && (
          <div className="py-4">
            <h2 className="text-2xl font-bold mb-4">Your Retirement Projection</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 animate-slideUp">
              <Card className="p-4 bg-white/80 backdrop-blur-sm">
                <h3 className="text-lg font-medium text-primary mb-2">Retirement Timeline</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Current Age:</span>
                    <span className="font-semibold">{actionData.result.currentAge} years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Years Until Retirement:</span>
                    <span className="font-semibold">{actionData.result.yearsUntilRetirement} years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Retirement Date:</span>
                    <span className="font-semibold">{actionData.result.retirementDate}</span>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4 bg-white/80 backdrop-blur-sm">
                <h3 className="text-lg font-medium text-primary mb-2">Savings Projection</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Projected Savings:</span>
                    <span className="font-semibold">${actionData.result.projectedSavings.toLocaleString()}</span>
                  </div>
                  {actionData.result.monthlySavingsNeeded > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monthly Savings Needed:</span>
                      <span className="font-semibold">${actionData.result.monthlySavingsNeeded.toLocaleString()}</span>
                    </div>
                  )}
                </div>
              </Card>
              
              <Card className="p-4 bg-white/80 backdrop-blur-sm">
                <h3 className="text-lg font-medium text-primary mb-2">Retirement Age</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Planned Retirement Age:</span>
                    <span className="font-semibold">{actionData.result.retirementAge} years</span>
                  </div>
                  <div className="pt-2 text-sm text-gray-500">
                    Adjust your retirement age to see how it affects your financial projections.
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}
        
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="p-6 space-y-4 bg-white/80 backdrop-blur-sm">
            <h2 className="text-2xl font-bold">Retirement Planning Tips</h2>
            <ul className="space-y-3 list-disc pl-5 text-gray-700">
              <li><strong>Start Early:</strong> The power of compound interest means the earlier you start saving, the less you'll need to save each month.</li>
              <li><strong>Max Out Tax-Advantaged Accounts:</strong> Contribute to 401(k)s and IRAs to reduce taxable income and grow investments tax-free.</li>
              <li><strong>Diversify Investments:</strong> Spread your investments across different asset classes to manage risk.</li>
              <li><strong>Adjust for Inflation:</strong> Remember that inflation will reduce purchasing power over time.</li>
              <li><strong>Create a Budget:</strong> Track expenses and identify areas where you can increase savings.</li>
            </ul>
          </Card>
          
          <Card className="p-6 space-y-4 bg-white/80 backdrop-blur-sm">
            <h2 className="text-2xl font-bold">Understanding the Results</h2>
            <p className="text-gray-700">
              Our retirement calculator provides estimates based on the information you provide. The projected savings uses a compound interest calculation that factors in your current savings, monthly contributions, and expected investment returns.
            </p>
            <p className="text-gray-700">
              The "Monthly Savings Needed" shows how much you should save each month to reach your retirement goal, based on your current age, retirement age, and expected return rate.
            </p>
            <p className="text-gray-700 font-semibold">
              Note: These projections are estimates and do not account for taxes, inflation, or market volatility. Consult with a financial advisor for personalized retirement planning.
            </p>
          </Card>
        </div>
        
        <div className="bg-white rounded-lg p-6 space-y-6">
          <h2 className="text-2xl font-bold text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="space-y-2 p-4 border-b">
              <h3 className="font-semibold text-lg text-primary">
                How much should I save for retirement?
              </h3>
              <p className="text-gray-600">
                Financial experts often recommend saving 10-15% of your income for retirement. However, the ideal amount varies based on your lifestyle, expected expenses in retirement, and when you start saving. Our calculator can help you estimate a target based on your retirement goals.
              </p>
            </div>
            <div className="space-y-2 p-4 border-b">
              <h3 className="font-semibold text-lg text-primary">
                What retirement accounts should I use?
              </h3>
              <p className="text-gray-600">
                Consider tax-advantaged accounts like 401(k)s, 403(b)s, or IRAs. Many employers offer matching contributions to 401(k) plans, which is essentially free money. After maximizing any employer match, you might consider a Roth IRA for tax-free growth if you're eligible.
              </p>
            </div>
            <div className="space-y-2 p-4">
              <h3 className="font-semibold text-lg text-primary">
                How does inflation affect my retirement savings?
              </h3>
              <p className="text-gray-600">
                Inflation reduces the purchasing power of your money over time. For example, with 3% annual inflation, $100,000 today would only buy about $55,000 worth of goods in 20 years. This calculator doesn't explicitly account for inflation, so consider that your retirement goal may need to be higher to maintain your desired lifestyle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 