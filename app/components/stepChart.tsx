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
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
              {
                label: 'Year 2020',
                data: [12, 89, 197137, 876732, 717862, 831607, 1900614, 1456883, 1192693, 1892451, 4477140, 6323732],
                borderColor: 'rgb(144, 238, 144)',
                backgroundColor: 'rgba(144, 238, 144, 0.5)',
                fill: true,
                stepped: true
              },
              {
                label: 'Year 2021',
                data: [6112228, 2374539, 1848478, 1882867, 914742, 361638, 1379327, 4297698, 4141271, 2476019, 2586095, 6172089],
                borderColor: 'rgb(49, 143, 207)',
                backgroundColor: 'rgba(49, 143, 207, 0.5)',
                fill: true,
                stepped: true
              },
              {
                label: 'Year 2022',
                data: [20299258, 3951185, 1061316, 1255066, 2882379, 3325540, 3644246, 3216683, 1035470, 0, 0, 31136],
                borderColor: 'rgb(149, 100, 174)',
                backgroundColor: 'rgba(149, 100, 174, 0.5)',
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
                text: 'U.S. Covid-19 Pandemic Number of New Cases Over Time'
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                    callback: function(value, index, values) {
                    if (typeof value === "number") {
                        return (value / 1000000).toFixed(0) + 'M';  // Divide by 1 million and add "M"
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