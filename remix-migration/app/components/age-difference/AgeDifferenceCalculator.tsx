import { useState } from "react";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { DateSelector } from "./DateSelector";
import { Results } from "./Results";
import { HowItWorks } from "./HowItWorks";
import { WhyUseSection } from "./WhyUseSection";
import { FAQ } from "./FAQ";

interface DateState {
  year: string;
  month: string;
  day: string;
}

interface AgeResult {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  weeks: number;
  hours: number;
  error?: string;
}

export const AgeDifferenceCalculator = () => {
  const [firstDate, setFirstDate] = useState<DateState>({
    year: "",
    month: "",
    day: "",
  });
  const [secondDate, setSecondDate] = useState<DateState>({
    year: "",
    month: "",
    day: "",
  });
  
  const navigation = useNavigation();
  const actionData = useActionData<AgeResult>();
  const isCalculating = navigation.state === "submitting";

  const isFormValid = 
    firstDate.year && firstDate.month && firstDate.day && 
    secondDate.year && secondDate.month && secondDate.day;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto space-y-10">
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Age Difference Calculator
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Calculate the exact age difference between two dates with precision
          </p>
        </div>

        <Card className="p-10 bg-white shadow rounded-lg border border-gray-200">
          <div className="space-y-8 flex flex-col items-center">
            <Form method="post" className="w-full space-y-8 flex flex-col items-center">
              <DateSelector 
                label="First Date" 
                date={firstDate} 
                setDate={setFirstDate}
                namePrefix="first" 
              />
              
              <DateSelector 
                label="Second Date" 
                date={secondDate} 
                setDate={setSecondDate}
                namePrefix="second" 
              />

              <Button
                type="submit"
                className="bg-primary hover:bg-primary-light text-white"
                disabled={!isFormValid || isCalculating}
              >
                {isCalculating ? "Calculating..." : "Calculate Difference"}
              </Button>
            </Form>

            {actionData && !actionData.error && (
              <Results result={actionData} />
            )}
            
            {actionData?.error && (
              <div className="text-red-500 text-center">
                {actionData.error}
              </div>
            )}
          </div>
        </Card>

        <HowItWorks />
        <WhyUseSection />
        <FAQ />
      </div>
    </div>
  );
}; 