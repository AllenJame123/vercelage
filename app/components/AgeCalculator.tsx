import { useState } from "react";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import { format, differenceInYears, differenceInMonths, differenceInDays, differenceInWeeks, differenceInHours } from "date-fns";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { ResultCard } from "./age-calculator/ResultCard";

// These components will be implemented later
const HowItWorks = () => (
  <div className="bg-white shadow-md rounded-lg p-6">
    <h2 className="text-2xl font-bold mb-4">How It Works</h2>
    <p>This section will explain how the age calculator works.</p>
  </div>
);

const WhyUseSection = () => (
  <div className="bg-white shadow-md rounded-lg p-6">
    <h2 className="text-2xl font-bold mb-4">Why Use Our Age Calculator</h2>
    <p>This section will explain the benefits of using our calculator.</p>
  </div>
);

const FAQ = () => (
  <div className="bg-white shadow-md rounded-lg p-6">
    <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
    <p>This section will address common questions about age calculation.</p>
  </div>
);

interface AgeResult {
  years?: number;
  months?: number;
  days?: number;
  totalDays?: number;
  weeks?: number;
  hours?: number;
  error?: string;
}

export default function AgeCalculator() {
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [selectedMonth, setSelectedMonth] = useState<string>("");
  const [selectedDay, setSelectedDay] = useState<string>("");
  const navigation = useNavigation();
  const actionData = useActionData<AgeResult>();
  const isCalculating = navigation.state === "submitting";

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 150 }, (_, i) => currentYear - i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-soft-gray p-4 sm:p-6 lg:p-8 animate-fadeIn">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Age Calculator
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Calculate your exact age in years, months, days, and more
          </p>
        </div>

        <Card className="p-6 backdrop-blur-sm bg-white/80 shadow-lg">
          <div className="space-y-6">
            <Form method="post" className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <div>
                  <Select 
                    name="year" 
                    onValueChange={(value) => {
                      setSelectedYear(value);
                    }} 
                    value={selectedYear}
                  >
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                      {years.map((year) => (
                        <SelectItem key={year} value={year.toString()}>
                          {year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <input type="hidden" name="year" value={selectedYear} />
                </div>

                <div>
                  <Select 
                    name="month" 
                    onValueChange={(value) => {
                      setSelectedMonth(value);
                    }} 
                    value={selectedMonth}
                  >
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Month" />
                    </SelectTrigger>
                    <SelectContent>
                      {months.map((month) => (
                        <SelectItem key={month} value={month.toString()}>
                          {format(new Date(2024, month - 1), "MMMM")}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <input type="hidden" name="month" value={selectedMonth} />
                </div>

                <div>
                  <Select 
                    name="day" 
                    onValueChange={(value) => {
                      setSelectedDay(value);
                    }} 
                    value={selectedDay}
                  >
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Day" />
                    </SelectTrigger>
                    <SelectContent>
                      {days.map((day) => (
                        <SelectItem key={day} value={day.toString()}>
                          {day}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <input type="hidden" name="day" value={selectedDay} />
                </div>

                <Button
                  type="submit"
                  className="w-full sm:w-auto bg-primary hover:bg-primary-light text-primary-foreground"
                  disabled={!selectedYear || !selectedMonth || !selectedDay || isCalculating}
                >
                  {isCalculating ? "Calculating..." : "Calculate Age"}
                </Button>
              </div>
            </Form>

            {actionData && !actionData.error && (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 animate-slideUp">
                <ResultCard
                  title="Your Age"
                  value={`${actionData.years} years, ${actionData.months} months, ${actionData.days} days`}
                  description="Precise age calculation"
                />
                <ResultCard
                  title="Total Days"
                  value={(actionData.totalDays || 0).toLocaleString()}
                  description="Number of days you've lived"
                />
                <ResultCard
                  title="Other Units"
                  value={`${(actionData.weeks || 0).toLocaleString()} weeks`}
                  description={`${(actionData.hours || 0).toLocaleString()} hours`}
                />
              </div>
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
} 