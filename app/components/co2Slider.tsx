'use client'; // Marks this component as client-side

import React, { useState, useEffect } from 'react';
// import { ArrowUpIcon } from '@heroicons/react/solid'; // HeroIcon for the upward arrow

const CO2Slider = () => {
  const [year, setYear] = useState(1958); // Start from
  const [percentage, setPercentage] = useState(0); // Percentage change in CO2 concentration

  const years = [1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
  const co2 = [3152, 3792, 3803, 3812, 3821, 3828, 3835, 3840, 3856, 3866, 3877, 3895, 3908, 3916, 3929, 3956, 3962, 3974, 3984, 4006, 4025, 4042, 4065, 4081, 4098, 4118, 4138, 4156, 4171, 4192, 4220, 4238, 4253, 4268, 4279, 4287, 4308, 4332, 4353, 4367, 4402, 4422, 4436, 4456, 4481, 4512, 4532, 4560, 4585, 4608, 4630, 4652, 4681, 4702, 4729, 4761, 4786, 4812, 4853, 4881, 4905, 4940, 4971, 4997, 5022, 5053, 5095]
  
  const data = Object.fromEntries(years.map((year, index) => [year, co2[index]]));

  const baseYear = 1958

  // UseEffect to calculate the percentage change based on selected year
  useEffect(() => {
    console.log("year", year)
    const baseValue = data[baseYear];
    const currentValue = data[year]; // Get CO2 value for the selected year
    console.log("data", data)
    console.log(currentValue)
    const percentageChange = ((currentValue - baseValue) / baseValue) * 100;
    setPercentage(percentageChange);
  }, [year]);

  const getColor = (percent) => {
    const hue = ((100 - percent) * 120) / 100;
    return `hsl(${hue}, 100%, 50%)`;
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg flex flex-col items-center">
      {/* Title */}
      <h1 className="black text-2xl font-bold mb-6 text-center">
        Increase In CO2 Concentration Since 1958
      </h1>

      {/* Percentage Display with Animated Steam */}
      <div className="relative mb-6 flex flex-col items-center">
        <div 
          className="text-8xl font-bold text-center transition-all duration-300 ease-in-out"
          style={{ color: getColor(percentage) }}
        >
          {percentage.toFixed(1)}%
          {/* <ArrowUpIcon className="h-16 w-16 inline-block ml-2 animate-pulse" /> */}
        </div>

        {/* Steam and heat effect (animated ping) */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-20">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-16 h-16 rounded-full animate-ping"
              style={{ 
                backgroundColor: getColor(percentage),
                animationDelay: `${i * 0.2}s`,
                animationDuration: '1.5s',
                opacity: 0.5,
                transform: 'scale(1.2)', // Scale effect instead of translate for a more contained animation
              }}
            />
          ))}
        </div>
      </div>

      {/* Slider with space between percentage and slider */}
      <div className="mt-8 w-full">
        <input 
          type="range" 
          min="1958" 
          max="2024" 
          value={year}
          onChange={(e) => setYear(parseInt(e.target.value))}
          className="w-full"
        />
        <div className="black text-center mt-2 text-xl font-semibold">
          Year: {year}
        </div>
      </div>
    </div>
  );
};

export default CO2Slider;
