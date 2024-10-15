import { useState } from "react";

import Bulk from '../../../assets/Bulk.svg'
import Filte from '../../../assets/Filte.svg'
import Filterto from '../../../assets/Filterto.svg'
import Export from '../../../assets/Export.svg'

import pencil from "../../../assets/pencil.svg";
import avat from "../../../assets/avat.svg";
import { TrashIcon, EyeIcon } from "@heroicons/react/24/outline";
import share from "../../../assets/share.svg";

import { Link, useNavigate } from "react-router-dom";

const TravelLogs = () => {
 
  
  

  

  
  
  return (
    <div
      className="rounded-lg w-full "
      
    >
      
      <section className="flex w-full justify-between"  >
        <div className='flex  '>
     <div className='flex mt-6 gap-4 items-center'>
    <button className='flex items-center space-x-2 py-[8px] rounded-md px-[12px] border text-[12px] font-semibold h-[40px]'>
        <span className='text-[#667085]'>Bulk Actions</span>
        <img src={Bulk} alt="Bulk" className='h-4 w-4' />
    </button>

    <p className='bg-[#FAF5FF] rounded-lg text-[#883DCF] py-[10px] px-[14px] font-semibold text-[12px] h-[40px] flex items-center'>
        Apply
    </p>

    <img src={Filte} alt="error" className='h-[32px]' />
    <img src={Filterto} alt="error" className='h-[32px]' />


    
</div>
</div>
<div className="flex">
<div className='flex items-center justify-center gap-3 mt-6 text-[12px]  border border-gray-300 rounded-md p-2'>
  <p className='cursor-pointer hover:text-blue-500'>All</p>
  <p className='cursor-pointer hover:text-blue-500'>Published</p>
  <p className='cursor-pointer hover:text-blue-500'>Republished</p>
  <p className='cursor-pointer hover:text-blue-500'>Unpublished</p>

</div>
 <div className='flex justify-between   ml-3 mt-6  '>
           
            
       <button className="bg-[#9854FF]  font-semibold text-white py-1  px-3 rounded-xl ">+ Add Itenraries
    </button>
    
    </div>
    </div>
    </section>

<div className='flex gap-2 mb-4 justify-between mt-4 '>
    
    <input
     type="text"
     className='border p-[6px] w-[30%]   rounded placeholder:text-[13px] pl-4  '  
     placeholder='Search Campaigns'
     
   />
   
<div className='flex w-[70%] gap-4'>

 <p className=' my-1 button-style'>  <img src={Export}  alt="error" className='w-3 h-2'  /> <p className='text-[12px] text-black'>Export </p> </p>
 <p className=' my-1 button-style'>  <img src={Export}  alt="error" className='w-3 h-2'  /> <p className='text-[12px] text-black'>Filters</p> </p>

 <p className=' my-1 pl-3 w-[130px] button-style'>   <span className='text-[12px] text-black'>Customer Type</span>  <img src={Bulk} alt="Bulk" className='h-4 w-4' /> </p>
 <p className=' my-1 pl-3 button-style'>   <span className='text-[12px] text-black'>Date</span> <img src={Bulk} alt="Bulk" className='h-4 w-4' /> </p>
 <p className=' my-1 pl-3 w-[130px] button-style'>   <span className='text-[12px] text-black'>Customer Type</span> <img src={Bulk} alt="Bulk" className='h-4 w-4' /></p>
 <p className=' my-1 pl-3 button-style'>   <span className='text-[12px] text-black'>Date</span> <img src={Bulk} alt="Bulk" className='h-4 w-4' /></p>

 </div>
 </div>

      <div>
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
        {[...Array(5)].map((_, idx) => (
          <div
            key={idx}
            className="flex flex-wrap sm:flex-nowrap border-b border-gray-300 py-2"
          >
            <div className="w-full pt-1 sm:w-[20%]">
              <div className="flex items-center gap-2 pl-3">
                <img src={avat} alt="avatar" className="h-6" />
                <span className="text-[14px] font-semibold">
                  User Engagement
                </span>
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
              <p className=" text-[13px]  text-[#1A9882] bg-[#E9FAF7] rounded-md font-semibold pl-[8px] w-[68%] p-[2px]">Publish</p>
            </div>
            <div className="w-[50%] flex justify-center gap-2 sm:w-[14%] pl-1 pt-1 ">
              <img
                src={pencil}
                className="h-3 w-3 mt-[3px] text-gray-500 cursor-pointer"
                aria-hidden="true"
              />

              <EyeIcon
                className="h-4 w-4 text-gray-500 cursor-pointer"
                aria-hidden="true"
              />
              <TrashIcon
                className="h-4 w-4 text-gray-500 cursor-pointer"
                aria-hidden="true"
              />
            </div>
            <div className="w-[50%]  flex justify-center   sm:w-[14%]">
              <Link to="/marketing/user-engagement">
                <div className="flex ml-[-24px]  py-[5px] px-2 gap-2 text-[#9854FF] border border-[#9854FF] rounded ">
                  <img src={share} alt="error" className="h-3 w-3 mt-1" />
                  <p className="font-semibold text-[12px]">Share</p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination */}
     
      {/* Modal */}
   
    </div>
  );
};

export default TravelLogs;
