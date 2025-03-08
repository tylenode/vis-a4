'use client'; // this marks this component as client side

import { useEffect, useRef } from 'react';
import { Chart, ChartConfiguration } from 'chart.js/auto';

const StepChart = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      
      if (ctx) {
        const config: ChartConfiguration = {
          type: 'line',
          data: {
            labels: [1964, 1974, 1984, 1994, 2004, 2024],
            datasets: [
              {
                label: 'Dataset',
                data: [3835, 3962, 4138, 4308, 4532, 5095],
                borderColor: 'rgb(144, 238, 144)',
                backgroundColor: 'rgba(144, 238, 144, 0.5)',
                fill: true,
                stepped: true
              }
            ]
          },
          options: {
            responsive: true,
            interaction: {
              intersect: false,
              axis: 'x'
            },
            plugins: {
              title: {
                display: true,
                text: 'CO2 Concentration in PPM per decade, 1954-2024'
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                    callback: function(value, index, values) {
                    if (typeof value === "number") {
                        return (value / 1).toFixed(0)  // Divide by 1 million and add "M"
                    }
                  }
                }
              }
            }
          }
        };

        new Chart(ctx, config);
      }
    }
  }, []);

  return <canvas ref={chartRef} />;
};

export default StepChart;