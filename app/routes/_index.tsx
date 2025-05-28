import type { MetaFunction } from "@remix-run/node";
import { useMemo, useState } from "react";

export const meta: MetaFunction = () => [
  { title: "Age Calculator App - Free Online Age Calculators & Tools" },
  { name: "description", content: "Collection of free online age calculation tools including age calculator, date calculator, birthday countdown, pregnancy calculator, and more." },
];

export function loader() {
  return {};
}

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function calculateAge(year: string, month: string, day: string) {
  if (!year || !month || !day) return null;
  const birthDate = new Date(Number(year), Number(month) - 1, Number(day));
  const now = new Date();

  let years = now.getFullYear() - birthDate.getFullYear();
  let monthsDiff = now.getMonth() - birthDate.getMonth();
  let daysDiff = now.getDate() - birthDate.getDate();

  if (daysDiff < 0) {
    monthsDiff--;
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    daysDiff += prevMonth.getDate();
  }
  if (monthsDiff < 0) {
    years--;
    monthsDiff += 12;
  }

  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  const utc1 = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  const utc2 = Date.UTC(birthDate.getFullYear(), birthDate.getMonth(), birthDate.getDate());
  const totalDays = Math.floor((utc1 - utc2) / _MS_PER_DAY);
  const weeks = Math.floor(totalDays / 7);
  const hours = totalDays * 24;

  return { years, months: monthsDiff, days: daysDiff, totalDays, weeks, hours };
}

export default function Index() {
  const currentYear = new Date().getFullYear();
  const years = useMemo(() => {
    const arr = [];
    for (let y = currentYear; y >= 1900; y--) arr.push(y);
    return arr;
  }, [currentYear]);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [result, setResult] = useState<ReturnType<typeof calculateAge> | null>(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    if (!selectedYear || !selectedMonth || !selectedDay) {
      setError("Please select year, month, and day.");
      setResult(null);
      return;
    }
    setError("");
    const res = calculateAge(selectedYear, selectedMonth, selectedDay);
    setResult(res);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-8 sm:px-4 py-16">
        <div className="bg-[#f1f6f8] rounded-lg p-12 max-w-4xl mx-auto text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Age Calculator</h1>
          <p className="text-xl text-gray-600 mb-8">Calculate your exact age in years, months, days, and more</p>
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
            <select className="border rounded px-4 py-2" value={selectedYear} onChange={e => setSelectedYear(e.target.value)}>
              <option value="">Year</option>
              {years.map(y => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
            <select className="border rounded px-4 py-2" value={selectedMonth} onChange={e => setSelectedMonth(e.target.value)}>
              <option value="">Month</option>
              {months.map((m, idx) => (
                <option key={m} value={idx + 1}>{m}</option>
              ))}
            </select>
            <select className="border rounded px-4 py-2" value={selectedDay} onChange={e => setSelectedDay(e.target.value)}>
              <option value="">Day</option>
              {days.map(d => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
            <button className="bg-[#6ad0f7] text-white font-semibold px-6 py-2 rounded hover:bg-[#4bb8e6] transition" onClick={handleCalculate}>Calculate Age</button>
          </div>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          {result && (
            <div className="mt-6 bg-white rounded-lg shadow p-6 max-w-xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Your Age</h3>
              <div className="text-lg text-gray-700 mb-2">{result.years} years, {result.months} months, {result.days} days</div>
              <div className="text-gray-500">Total days: {result.totalDays}</div>
              <div className="text-gray-500">Weeks: {result.weeks}</div>
              <div className="text-gray-500">Hours: {result.hours}</div>
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow p-12 max-w-4xl mx-auto mb-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-[#19b6e9] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-2">1</div>
              <div className="font-semibold text-lg mb-1">Select Your Birth Date</div>
              <div className="text-gray-500 text-center">Choose your birth year, month, and day from the dropdown menus</div>
            </div>
            <div className="text-3xl text-[#19b6e9]">→</div>
            <div className="flex flex-col items-center">
              <div className="bg-[#19b6e9] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-2">2</div>
              <div className="font-semibold text-lg mb-1">Calculate</div>
              <div className="text-gray-500 text-center">Click the calculate button to process your age</div>
            </div>
            <div className="text-3xl text-[#19b6e9]">→</div>
            <div className="flex flex-col items-center">
              <div className="bg-[#19b6e9] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-2">3</div>
              <div className="font-semibold text-lg mb-1">View Results</div>
              <div className="text-gray-500 text-center">See your age in various formats and units</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-12 max-w-4xl mx-auto mb-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Why Use Our Age Calculator</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <span className="text-[#19b6e9] text-2xl mt-1">✔</span>
              <div>
                <div className="font-semibold text-lg">Precise Age Calculation</div>
                <div className="text-gray-500">Get accurate calculations of your age in years, months, days, weeks, and even hours.</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-[#19b6e9] text-2xl mt-1">✔</span>
              <div>
                <div className="font-semibold text-lg">Multiple Time Units</div>
                <div className="text-gray-500">View your age broken down into different units of time for a complete perspective.</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-[#19b6e9] text-2xl mt-1">✔</span>
              <div>
                <div className="font-semibold text-lg">Easy to Use</div>
                <div className="text-gray-500">Simple interface with dropdown menus makes it easy to input your birth date and get instant results.</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-[#19b6e9] text-2xl mt-1">✔</span>
              <div>
                <div className="font-semibold text-lg">Instant Results</div>
                <div className="text-gray-500">See your age calculations update immediately with detailed breakdowns and visualizations.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <div className="text-[#19b6e9] font-semibold text-xl mb-2">How is the age calculated?</div>
              <div className="text-gray-600">Our calculator uses precise date arithmetic to compute your exact age in various units, including years, months, days, weeks, and hours.</div>
            </div>
            <div>
              <div className="text-[#19b6e9] font-semibold text-xl mb-2">Why might this be useful?</div>
              <div className="text-gray-600">Age calculations are useful for various purposes, including retirement planning, insurance calculations, and celebrating milestone birthdays.</div>
            </div>
            <div>
              <div className="text-[#19b6e9] font-semibold text-xl mb-2">How accurate is the calculation?</div>
              <div className="text-gray-600">The calculator provides precise results down to the day, taking into account leap years and varying month lengths.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 