import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { useQuery } from '@apollo/client';
import { GET_REVENUE } from '../graphql/queries'
//import view from '../assets/view.svg';
//import Enter from '../assets/Enter.svg';
//import z from '../assets/z.svg';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Barchart = () => {
  const { loading, error, data } = useQuery(GET_REVENUE);
  const [chartData, setChartData] = useState({ datasets: [] });

  useEffect(() => {
    if (data) {
      const monthlyRevenues = data.glAdmin.Revenue.monthlyRevenues;

      setChartData({
        labels: monthlyRevenues.map((item) => item.month),  // Extract months from API data
        datasets: [
          {
            data: monthlyRevenues.map((item) => item.total),  // Extract totals from API data
            backgroundColor: '#883DCF',
            borderRadius: 10,
            barThickness: 10,
          },
        ],
      });
    }
  }, [data]);

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
    },
    scales: {
      x: { stacked: false, grid: { display: false }, ticks: { autoSkip: false } },
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return '$' + value;
          },
        },
        grid: { color: '#64748B' },
      },
    },
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex my-8 space-x-4">
      <div className="flex-grow w-[70%] bg-white p-4 rounded-lg shadow-lg">
        <div className='w-full flex justify-between'>
          <div>
            <p className='text-[24px] font-semibold'>Revenue</p>
            <p className='text-[16px] font-normal'>Your Revenue This Year</p>
          </div>
          <div className='flex gap-4 border h-8 p-2 '>
            <p className='text-[12px] hover:text-[#883DCF] hover:bg-[#F4ECFB] font-semibold'>All</p>
            <p className='text-[12px] font-semibold'>Enterprise</p>
            <p className='text-[12px] font-semibold'>Advisor</p>
            <p className='text-[12px] font-semibold'>Orphan</p>
          </div>
        </div>
        <section className='flex gap-10'>
          {/* Your existing UI for displaying individual revenues */}
        </section>
        <Bar data={chartData} options={options} />
      </div>

      <div className="flex-none w-[30%] bg-[#FFFFFF] p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-[20px]">Recent Activities</h2>
        <p className='text-[13px] font-semibold'>Based on the recent activities by customers</p>
        {/* Recent activities content */}
      </div>
    </div>
  );
};

export default Barchart;
