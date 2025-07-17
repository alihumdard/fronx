import React from 'react';

const StatsSection = () => {
  // Data for each statistic item
  const statsData = [
    {
      id: 1,
      number: '2000+',
      label: 'Delivered Projects',
    },
    {
      id: 2,
      number: '500+',
      label: 'Companies Served',
    },
    {
      id: 3,
      number: '5+',
      label: 'Award Won',
    },
    {
      id: 4,
      number: '1200+',
      label: 'Employees Worldwide',
    },
  ];

  return (
    <div className="bg-white py-16 px-4 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {statsData.map((stat, index) => (
            <div key={stat.id} className="flex flex-col items-center relative">
              <svg width="200" height="200" viewBox="0 0 200 200" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {/* Outer dashed circle */}
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="none"
                  stroke="#E0E7FF" // Light blue/purple color for the dash
                  strokeWidth="2"
                  strokeDasharray="5 5"
                />
                {/* Inner solid circle (background of number/text) */}
                <circle
                  cx="100"
                  cy="100"
                  r="88" // Slightly smaller to create a border effect
                  fill="white"
                  stroke="#F3F4F6" // Very light gray border
                  strokeWidth="2"
                />
              </svg>

              <div className="relative z-10 flex flex-col items-center justify-center h-40 w-40 text-center">
                <p className="text-gray-900 text-3xl font-bold">{stat.number}</p>
                <p className="text-gray-600 text-sm mt-1 px-4">{stat.label}</p>
              </div>

              {/* Connecting line with small circle */}
              {index < statsData.length - 1 && ( // Render for all except the last item
                <>
                  {/* The visible line, adjust length and position based on gap/container */}
                  <div
                    className="hidden lg:block absolute h-0.5 bg-gray-200 z-0"
                    style={{
                      width: 'calc(100% + 24px)', // Adjust based on gap-x-6 (24px)
                      left: '50%',
                      transform: 'translateX(-50%)',
                      bottom: '-40px' // Position it below the circle
                    }}
                  ></div>
                   {/* Small circle at the end of the connecting line - positioned absolutely related to the container not the circle*/}
                   <div className="hidden lg:block absolute right-0 bottom-[-42px] -translate-x-1/2 z-10"> {/* Adjust based on parent width */}
                    <div className="w-3 h-3 rounded-full bg-blue-400 border border-blue-200"></div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;