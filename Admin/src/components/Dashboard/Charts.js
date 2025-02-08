import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const Charts = () => {
  const chartRef = useRef();

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Create gradient for line
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(75, 192, 192, 0.7)");
    gradient.addColorStop(1, "rgba(75, 192, 192, 0.1)");

    const chartConfig = {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Premium Amount (₹)",
            data: [10000, 15000, 12000, 18000, 20000, 25000],
            borderColor: "rgb(75, 192, 192)",
            backgroundColor: gradient,
            fill: true,
            tension: 0.4,
            pointRadius: 5,
            pointBackgroundColor: "rgb(255, 99, 132)",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          tooltip: {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            titleFont: { size: 16 },
            bodyFont: { size: 14 },
            padding: 10,
            displayColors: false,
            callbacks: {
              label: (context) => `₹${context.parsed.y.toLocaleString()}`,
            },
          },
          legend: {
            labels: {
              font: {
                size: 14,
                weight: "bold",
              },
              color: "#333",
            },
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            beginAtZero: true,
            ticks: {
              callback: function (value) {
                return "₹" + value.toLocaleString();
              },
            },
          },
        },
      },
    };

    new Chart(ctx, chartConfig);
  }, []);

  return (
    <div className="mt-6 p-4 bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
        Premium Amount Trends
      </h2>
      <div className="relative h-80">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default Charts;
