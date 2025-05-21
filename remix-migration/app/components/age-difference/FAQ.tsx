export const FAQ = () => (
  <div className="bg-white shadow-md rounded-lg p-6">
    <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
    
    <div className="space-y-4">
      <div>
        <h3 className="font-bold text-lg">How do you calculate age difference?</h3>
        <p>Our calculator computes the exact difference between two dates in multiple units (years, months, days, weeks, hours). It accounts for leap years and varying month lengths to provide accurate results.</p>
      </div>
      
      <div>
        <h3 className="font-bold text-lg">Is this calculator free to use?</h3>
        <p>Yes, our age difference calculator is completely free with no usage limitations.</p>
      </div>
      
      <div>
        <h3 className="font-bold text-lg">What can I use this calculator for?</h3>
        <p>You can use it to calculate age gaps between siblings, partners, or any two people. It's also useful for determining time elapsed between historical events or planning future events.</p>
      </div>
      
      <div>
        <h3 className="font-bold text-lg">Does it work with all dates?</h3>
        <p>The calculator works with dates from 1900 to the present year. For historical dates earlier than 1900, the calculation may not account for calendar changes.</p>
      </div>
    </div>
  </div>
); 