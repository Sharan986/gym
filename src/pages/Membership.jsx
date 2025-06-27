import React from 'react';

const Membership= () => {
  const gymTiming = [
    { days: 'Monday to Saturday', hours: '5:30 am to 10:30 pm' },
    { days: 'Sunday', hours: '8:00 am to 6:00 pm' }
  ];

  const membershipRates = [
    { category: 'General', '1 Month': '1200', '3 Months': '2700', '6 Months': '5100', '9 Months': '6800', '12 Months': '7500' },
    { category: 'Group (4 or more per head)', '1 Month': '1050', '3 Months': '2500', '6 Months': '4800', '9 Months': '6500', '12 Months': '7000' },
    { category: 'Pair (per head)', '1 Month': '1100', '3 Months': '2600', '6 Months': '5000', '9 Months': '6700', '12 Months': '7200' },
    { category: 'Senior Citizen', '1 Month': '1000', '3 Months': '2700', '6 Months': '4900', '9 Months': '6600', '12 Months': '7100' },
    { category: 'Only Zumba', '1 Month': '1000', '3 Months': '2500', '6 Months': '3800', '9 Months': '4800', '12 Months': '6200' },
    { category: 'Only Yoga', '1 Month': '1000', '3 Months': '2500', '6 Months': '3800', '9 Months': '4800', '12 Months': '6200' },
    { category: 'Only Functional Training', '1 Month': '500', '3 Months': '1200', '6 Months': '2500', '9 Months': '3800', '12 Months': '5000' },
    { category: 'Personal Training', '1 Month': '5000', '3 Months': '10000', '6 Months': '', '9 Months': '', '12 Months': '' },
    { category: 'Nutrition (per month)', '1 Month': '1000', '3 Months': '', '6 Months': '', '9 Months': '', '12 Months': '' },
    { category: 'Locker', '1 Month': '400', '3 Months': '1000', '6 Months': '2000', '9 Months': '3200', '12 Months': '4000' },
    { category: 'Gym (per day)', '1 Month': '200', '3 Months': '', '6 Months': '', '9 Months': '', '12 Months': '' }
  ];

  const groupPTRates = [
    { persons: '2 Persons', rate: '9000' },
    { persons: '3 Persons', rate: '12000' },
    { persons: '4+ Persons', rate: '3500 each' }
  ];

  const facilities = [
    'Free WIFI',
    'Free coffee',
    'Separate changing and shower room for male and female',
    'Ample parking space',
    'Admiring room',
    'Open all days in week'
  ];

  const note = 'Membership freeze and transfer facilities available only on 9 months and 12 months package (charges applicable).';

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-red-600">ONE REP MAAAX</h1>
          <p className="text-lg text-gray-600">Where fitness meets fun!!</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-center mb-4">GYM TIMING</h2>
          <ul className="list-disc pl-5">
            {gymTiming.map((timing, index) => (
              <li key={index} className="text-gray-700">
                {timing.days}: {timing.hours}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-center mb-4">RATES</h2>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Category</th>
                <th className="py-2 px-4 border-b">1 Month</th>
                <th className="py-2 px-4 border-b">3 Months</th>
                <th className="py-2 px-4 border-b">6 Months</th>
                <th className="py-2 px-4 border-b">9 Months</th>
                <th className="py-2 px-4 border-b">12 Months</th>
              </tr>
            </thead>
            <tbody>
              {membershipRates.map((rate, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">{rate.category}</td>
                  <td className="py-2 px-4 border-b">{rate['1 Month']}</td>
                  <td className="py-2 px-4 border-b">{rate['3 Months']}</td>
                  <td className="py-2 px-4 border-b">{rate['6 Months']}</td>
                  <td className="py-2 px-4 border-b">{rate['9 Months']}</td>
                  <td className="py-2 px-4 border-b">{rate['12 Months']}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-center mb-4">GROUP PT RATES</h2>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Persons</th>
                <th className="py-2 px-4 border-b">Rate</th>
              </tr>
            </thead>
            <tbody>
              {groupPTRates.map((rate, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">{rate.persons}</td>
                  <td className="py-2 px-4 border-b">{rate.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-center mb-4">Our Facilities</h2>
          <ul className="list-disc pl-5">
            {facilities.map((facility, index) => (
              <li key={index} className="text-gray-700">{facility}</li>
            ))}
          </ul>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600">{note}</p>
        </div>
      </div>
    </div>
  );
};

export default Membership;
