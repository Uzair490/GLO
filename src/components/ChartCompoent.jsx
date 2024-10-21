// import React from "react";
// import { Line } from "react-chartjs-2";
// import Piee from '../assets/Piee.svg'
// import {
//   Chart as ChartJS,
//   Title,
//   Tooltip,
//   Legend,
//   LineElement,
//   PointElement,
//   LinearScale,
//   CategoryScale,
// } from "chart.js";

// // Register Chart.js components
// ChartJS.register(
//   Title,
//   Tooltip,
//   Legend,
//   LineElement,
//   PointElement,
//   LinearScale,
//   CategoryScale
// );

// // Utility functions (mocked)
// const Utils = {
//   numbers: ({ count, min, max }) =>
//     Array.from(
//       { length: count },
//       () => Math.floor(Math.random() * (max - min + 1)) + min
//     ),
//   months: ({ count }) =>
//     [
//       "Jan",
//       "Feb",
//       "Mar",
//       "Apr",
//       "May",
//       "Jun",
//       "Jul",
//       "Aug",
//       "Sep",
//       "Oct",
//       "Nov",
//       "Dec",
//     ].slice(0, count),
//   namedColor: (index) => ["red", "blue", "green", "yellow"][index % 4],
//   transparentize: (color) => `${color === "red" ? "#883DCF" : "#00DDEB"}`,
//   rand: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
// };

// // Initial Data
// const DATA_COUNT = 12;
// const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 25 };
// const initialLabels = Utils.months({ count: 12 });
// const initialData = {
//   labels: initialLabels,
//   datasets: [
//     {
//       label: "Enterprise",
//       data: Utils.numbers(NUMBER_CFG),
//       borderColor: "#883DCF",
//       backgroundColor: Utils.transparentize("red"),
//       borderCapStyle: "round",
//       borderJoinStyle: "round",
//       pointRadius: 0,
//       tension: 0.4,
//     },
//     {
//       label: "Individuals",
//       data: Utils.numbers(NUMBER_CFG),
//       borderColor: "#00DDEB",
//       backgroundColor: Utils.transparentize("blue"),
//       borderCapStyle: "round",
//       borderJoinStyle: "round",
//       pointRadius: 0,
//       tension: 0.4,
//     },
//   ],
// };

// const ChartComponent = () => {
//   const [chartData, setChartData] = React.useState(initialData);

//   const config = {
//     type: "line",
//     data: chartData,
//     options: {
//       responsive: true,
//       plugins: {
//         legend: {
//           display: false,
//         },
//         title: {
//           display: false,
//           text: "Chart",
//         },
//         tooltip: {
//           mode: "index",
//           intersect: false,
//           callbacks: {
//             label: function (context) {
//               let label = context.dataset.label || "";

//               if (label) {
//                 label += ": ";
//               }
//               if (context.parsed.y !== null) {
//                 label += context.parsed.y;
//               }
//               return label;
//             },
//           },
//           usePointStyle: true,
//           boxPadding: 4,
//         },
//       },
//       hover: {
//         mode: "index",
//         intersect: false,
//         onHover: (event, chartElement) => {
//           if (chartElement.length) {
//             const chart = chartElement[0].element.chart;
//             if (chart) {
//               const datasets = chart.data.datasets;
//               const index = chartElement[0].index;
//               let maxDatasetIndex = 0;
//               let maxValue = -Infinity;

//               datasets.forEach((dataset, datasetIndex) => {
//                 const value = dataset.data[index];
//                 if (value > maxValue) {
//                   maxValue = value;
//                   maxDatasetIndex = datasetIndex;
//                 }
//               });

//               // Set pointRadius and pointBorderWidth only for the highest value dataset
//               datasets.forEach((dataset, datasetIndex) => {
//                 dataset.pointRadius = datasetIndex === maxDatasetIndex ? 5 : 0;
//                 dataset.pointBorderWidth =
//                   datasetIndex === maxDatasetIndex ? 2 : 0;
//                 dataset.pointBorderColor =
//                   datasetIndex === maxDatasetIndex ? "white" : "";
//               });
//               chart.update();
//             }
//           }
//         },
//       },
//       scales: {
//         x: {
//           grid: {
//             display: false,
//           },
//         },
//         y: {
//           grid: {
//             drawBorder: true,
//             borderDash: [5, 5],
//             color: "#ccc",
//             drawTicks: true,
//           },
//         },
//       },
//     },
//     plugins: [
//       {
//         afterDraw: (chart) => {
//           const ctx = chart.ctx;
//           const datasets = chart.data.datasets;
//           const xAxis = chart.scales.x;
//           const yAxis = chart.scales.y;

//           let maxDatasetIndex = 0;
//           let maxValue = -Infinity;
//           let hoverIndex = -1;

//           // Find the hovered point and the dataset with the highest value
//           datasets.forEach((dataset, datasetIndex) => {
//             dataset.data.forEach((value, index) => {
//               const meta = chart.getDatasetMeta(datasetIndex);
//               if (meta.data[index]?.active) {
//                 hoverIndex = index; // Save the hover index

//                 // Find the highest value dataset for the hovered index
//                 if (value > maxValue) {
//                   maxValue = value;
//                   maxDatasetIndex = datasetIndex;
//                 }
//               }
//             });
//           });

//           if (hoverIndex !== -1) {
//             const meta = chart.getDatasetMeta(maxDatasetIndex);
//             const x = meta.data[hoverIndex].x;
//             const y = meta.data[hoverIndex].y;

//             // Draw the dotted line for the highest value dataset
//             ctx.save();
//             ctx.beginPath();
//             ctx.setLineDash([5, 5]);
//             ctx.moveTo(x, y);
//             ctx.lineTo(x, yAxis.bottom);
//             ctx.strokeStyle = datasets[maxDatasetIndex].borderColor;
//             ctx.stroke();
//             ctx.restore();
//           }
//         },
//       },
//     ],
//   };

//   return (
//     <div className="flex">
//     <div>
//       <Line
       
//         data={chartData}
//         options={config.options}
//         plugins={config.plugins}
//       />
//     </div>
//     <div><img src={Piee} alt="" /></div>
//     </div>
//   );
// };

// export default ChartComponent;
import React from 'react'
import Piee from '../assets/Piee.svg'
import AS from '../assets/AS.svg'
const ChartCompoent = () => {
  return (
    <div>
      <section>
      
       <div className='border shadow-sm rounded-lg'><img src={AS} alt="Piee"  /></div> 
      </section>
    </div>
  )
}

export default ChartCompoent
