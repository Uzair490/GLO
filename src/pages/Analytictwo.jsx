import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale
);

const Analytictwo = ({ chartData }) => {
  const config = {
    type: "line",
    data: chartData,
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: false,
          text: "Chart",
        },
        tooltip: {
          mode: "index",
          intersect: false,
          callbacks: {
            label: function (context) {
              let label = context.dataset.label || "";
              if (label) label += ": ";
              if (context.parsed.y !== null) label += context.parsed.y;
              return label;
            },
          },
          usePointStyle: true,
          boxPadding: 4,
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          grid: {
            drawBorder: true,
            borderDash: [5, 5],
            color: "#ccc",
            drawTicks: true,
          },
        },
      },
    },
  };

  return (
    <div>
      {chartData && <Line data={chartData} options={config.options} />}
    </div>
  );
};

export default Analytictwo;
