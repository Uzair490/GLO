import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartComponent = () => {
  const data = {
    labels: ['Male Users', 'Female Users', ],
    datasets: [
      {
        label: 'User Distribution',
        data: [20, 10], 
        backgroundColor: ['#9854FF', '#00DDEB', '#EFF4FB'],
        borderColor: ['#9854FF', '#00DDEB', '#EFF4FB'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // Disable the built-in legend
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const label = tooltipItem.label || '';
            const value = tooltipItem.raw;
            return `${label}: ${value}%`;
          },
        },
      },
    },
  };

  const labels = [
    { label: 'Male Users', color: '#A3AED0',fontSize:'12px'},
    { label: 'Female Users', color: '#A3AED0',  },
   
  ];

  return (




    
    <div  className=' bg-[#FFFFFF]  px-4 '>
      <div className='flex w-full justify-between mt-3'>
      <p className='text-[16px] font-bold text-[#2B3674] '>User by gender</p>
      <div className='flex gap-2'>
     
        <p className='text-[#9854FF] text-[18px]   font-bold'>20k</p>
        <p className='text-[#22173D] font-semibold text-[18px] ' >Users</p>
        </div>
      </div>
      <section>
      <div style={{ height: '150px', width: 'w-[20%]' }} className='mt-4 flex justify-center items-center'>
          <Pie data={data} options={options} />
        </div>
      <div className='flex gap-4  shadow-lg px-10 rounded-lg mt-2 w-full justify-between p-2'>
        <div>
 <p className='text-[12px] font-bold text-[#A3AED0]'>Male Users</p>
 <p className='text-[#2B3674] font-bold text-[20px] mt-[-4px]'>63%</p>
 </div>
 <div>
 <p className='text-[12px] font-bold text-[#A3AED0]'>Female Users</p>
 <p className='text-[#2B3674] font-bold text-[20px] mt-[-4px]'>63%</p>
 </div>

</div>

</section>
    </div>
  );
};

export default PieChartComponent;
