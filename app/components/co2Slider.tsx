'use client'; // Marks this component as client-side

import React, { useState, useEffect } from 'react';

const CO2Slider = () => {
  const [year, setYear] = useState(1960); // Start from
  const [percentage, setPercentage] = useState(0); // Percentage change in CO2 concentration

  const years = [1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
  const co2 = [317, 318, 318, 319, 320, 320, 321, 322, 323, 325, 326, 326, 327, 330, 330, 331, 332, 334, 335, 337, 339, 340, 341, 343, 345, 346, 348, 349, 352, 353, 354, 356, 357, 357, 359, 361, 363, 364, 367, 369, 370, 371, 373, 376, 378, 380, 382, 384, 386, 388, 390, 392, 394, 397, 399, 401, 404, 407, 409, 412, 414, 416, 419, 421, 425]
  
  const data = Object.fromEntries(years.map((year, index) => [year, co2[index]]));

  const baseYear = 1960

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
    let hue;
  
    if (percent <= 6) {
      // Green to Orange (only a little green at the beginning)
      hue = 110 - (percent * 90) / 33;  // From green (120) to orange (30)
    } else if (percent <= 30) {
      // Orange to Crimson Red (dominant transition)
      hue = 30 - ((percent - 33) * 30) / 57;  // From orange (30) to crimson red (around 350)
    } else {
      // Crimson Red (after 90%, we stay in the crimson red range)
      hue = 350;
    }
  
    return `hsl(${hue}, 100%, 45%)`; // Slightly darker (45%) for a richer look
  };

  // Let's get it done!!!!!
  const getEmoji = (year) => {
    if (year < 1975) return '😶'; // Flat face
    if (year < 1990) return '😮'; // Slightly surprised
    if (year < 2013) return '😧'; // Slightly worried
    return '🚨'; // Scared
  };


  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg flex flex-col items-center">
      {/* Title */}
      <h1 className="black text-2xl font-bold mb-6 text-center">
        Percent Increase in Atmospheric CO₂ Concentration Since 1960 🌎
      </h1>

      {/* Percentage Display with Animated Steam */}
      <div className="relative mb-6 flex flex-col items-center">
      <span 
        className="text-8xl font-bold text-center transition-all duration-300 ease-in-out flex items-center"
        style={{ color: getColor(percentage) }}
      >
       {year !== baseYear ? (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-2 w-20 h-20">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
        </svg>
      ) : null}

        {percentage.toFixed(1)}%
      </span>


      {/* Steam and heat effect (animated ping with dynamic size) */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-20">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-ping"
            style={{
              backgroundColor: getColor(percentage),
              animationDelay: `${i * 0.2}s`,
              animationDuration: '1.5s',
              opacity: 0.5,
              transform: `scale(${1 + (percentage / 200)})`, // Linear scale increase
              width: `${(percentage / 5) + 100}px`, // Linear size increase
              height: `${(percentage / 5) + 100}px`, // Linear size increase
            }}
          />
        ))}
      </div>

      </div>

      {/* Slider with space between percentage and slider */}
      <div className="mt-8 w-full relative">
        <input 
          type="range" 
          min="1960" 
          max="2024" 
          value={year}
          onChange={(e) => setYear(parseInt(e.target.value))}
          className="w-full"
          style={{
            background: `linear-gradient(to right,rgb(220, 78, 78) ${((year - baseYear) / (2024 - baseYear)) * 100}%, #ccc 0%)`,
            appearance: 'none',
            height: '8px',
            borderRadius: '4px',
            outline: 'none',
          }}
        />

        {/* Emoji Slider Thumb */}
        <div 
          style={{
            position: 'absolute',
            left: `${(((year - baseYear) / (2024 - baseYear))) * 100 + 2}%`,
            transform: 'translateX(-60%)',
            bottom: '85%',
            fontSize: '2rem', // Emoji size
            zIndex: 1, // To make sure it stays on top of the slider
          }}
        >
          {getEmoji(year)}
        </div>

        {/* Year Display */}
        <div className="black text-center mt-2 text-xl font-semibold">
          Year: {year}
          <div className="subtext">Average Monthly CO₂ Concentration (measured in parts per million - ppm): {data[year]}</div>
        </div>
      </div>



    </div>
  );
};

export default CO2Slider;
