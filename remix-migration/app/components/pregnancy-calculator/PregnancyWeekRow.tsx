import { type PregnancyWeekData } from "./pregnancyData";

interface PregnancyWeekRowProps {
  week: PregnancyWeekData;
  currentWeek: number;
}

export function PregnancyWeekRow({ week, currentWeek }: PregnancyWeekRowProps) {
  const isCurrentWeek = week.week === currentWeek;
  return (
    <tr className={`border-b hover:bg-gray-50 ${isCurrentWeek ? 'bg-blue-50' : ''}`}>
      <td className="px-4 py-3 text-center font-semibold">{week.trimester}</td>
      <td className="px-4 py-3 text-center">{week.date.toLocaleDateString()}</td>
      <td className="px-4 py-3 text-center">Week {week.week}</td>
      <td className="px-4 py-3">{week.fetalDevelopment}</td>
      <td className="px-4 py-3">{week.babySize}</td>
      <td className="px-4 py-3">{week.medicalProcedures}</td>
    </tr>
  );
} 