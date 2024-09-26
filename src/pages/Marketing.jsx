import React from 'react';
import Layout from '../components/Layout';
import avat from '../assets/avat.svg';
import Export from '../assets/Export.svg'
import {  TrashIcon, EyeIcon } from '@heroicons/react/24/outline';
import pencil from '../assets/pencil.svg'
import share from '../assets/share.svg'
const Marketing = () => {
  return (
    <Layout>
    <div className='flex justify-end mr-[50px] mt-4'>
       <button className="Add-button ">+ Add Campaign
    </button>
    </div>
     
      <div  className="mt-4 w-full  ">
       
        <div className='flex gap-2 mb-4 justify-between mt-4 '>
    
        <input
         type="text"
         className='border p-[6px] w-[30%]   rounded placeholder:text-[13px] pl-4  '  
         placeholder='Search Campaigns'
         
       />
    <div className='flex w-[70%] gap-4'>
   
     <p className=' my-1 button-style'>  <img src={Export}  alt="error" className='w-3 h-2'  /> <p className='text-[12px] text-black'>Export </p> </p>
     <p className=' my-1 button-style'>  <img src={Export}  alt="error" className='w-3 h-2'  /> <p className='text-[12px] text-black'>Filters</p> </p>
    
     <p className=' my-1 pl-3 w-[130px] button-style'>   <p className='text-[12px] text-black'>Customer Type</p> </p>
     <p className=' my-1 pl-3 button-style'>   <p className='text-[12px] text-black'>Date</p> </p>
     <p className=' my-1 pl-3 w-[130px] button-style'>   <p className='text-[12px] text-black'>Customer Type</p> </p>
     <p className=' my-1 pl-3 button-style'>   <p className='text-[12px] text-black'>Date</p> </p>
    
     </div>
     </div>
   
        <div className="hidden sm:flex border-b border-gray-300 py-2 bg-gray-100">
          <div className="w-[20%] pl-3">
            <p className="font-semibold">Campaign</p>
          </div>
          <div className="w-[14%]">
            <p className="font-semibold">Performance</p>
          </div>
          <div className="w-[14%]">
            <p className="font-semibold">Start Date</p>
          </div>
          <div className="w-[14%]">
            <p className="font-semibold">End Date</p>
          </div>
          <div className="w-[10%]">
            <p className="font-semibold">Status</p>
          </div>
          <div className="w-[14%] text-center">
            <p className="font-semibold">Actions</p>
          </div>
          <div className="w-[14%] ">
            <p className="font-semibold pl-[19px]">Shares</p>
          </div>
        </div>

        {/* Table Body */}
        {[...Array(10)].map((_, idx) => (
          <div key={idx} className="flex flex-wrap sm:flex-nowrap border-b border-gray-300 py-2">
            <div className="w-full pt-1 sm:w-[20%]">
              <div className="flex items-center gap-2 pl-3">
                <img src={avat} alt="avatar" className="h-6" />
                <span className="text-[14px] font-semibold">User Engagement</span>
              </div>
            </div>
            <div className="w-[50%] sm:w-[14%] mt-2 sm:mt-0">
              <p className="text-[14px] pt-1">10% i 1km imp</p>
            </div>
            <div className="w-[50%] sm:w-[14%] mt-2 sm:mt-0">
              <p className=" text-[14px] pt-1">20 Aug 2024</p>
            </div>
            <div className="w-[50%] sm:w-[14%] mt-2 sm:mt-0">
              <p className=" text-[14px] pt-1">20 Aug 2024</p>
            </div>
            <div className="w-[50%] sm:w-[10%] mt-2 sm:mt-0">
              <p className=" text-[14px] pt-1">Unpublish</p>
            </div>
            <div className="w-[50%] flex justify-center gap-2 sm:w-[14%] pl-1 pt-1 ">
            <img src={pencil} className="h-3 w-3 mt-[3px] text-gray-500 cursor-pointer" aria-hidden="true" />
                    
                    <EyeIcon className="h-4 w-4 text-gray-500 cursor-pointer" aria-hidden="true" />
                    <TrashIcon className="h-4 w-4 text-gray-500 cursor-pointer" aria-hidden="true" />

            </div>
            <div className="w-[50%]  flex justify-center   sm:w-[14%]">
              <div className='flex ml-[-24px]  py-[5px] px-2 gap-2 text-[#9854FF] border border-[#9854FF] rounded '>
              
              <img src={share} alt="error" className='h-3 w-3 mt-1' /> 
              <p className="font-semibold text-[12px]">Share </p>
              
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Marketing;
