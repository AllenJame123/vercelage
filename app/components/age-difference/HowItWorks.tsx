export const HowItWorks = () => (
  <div className="bg-white shadow-md rounded-lg p-6">
    <h2 className="text-2xl font-bold mb-4">How It Works</h2>
    <p className="mb-4">Our age difference calculator is simple to use:</p>
    <ol className="list-decimal pl-5 space-y-2">
      <li>Select the first date (birth date, event date, etc.)</li>
      <li>Select the second date to compare against</li>
      <li>Click the "Calculate Difference" button</li>
      <li>View the precise difference in years, months, days, weeks, and hours</li>
    </ol>
    <p className="mt-4">
      The calculator automatically handles leap years, different month lengths, and ensures accurate results.
    </p>
  </div>
); 