import React, { useState } from 'react';
import Layout from '../../components/Layout';
import Contentbread from './Contentbread';
import Pagination from '../../components/Pagination'; // Import Pagination component
import Filte from '../../assets/Filte.svg';
import Filterto from '../../assets/Filterto.svg';
import Bulk from '../../assets/Bulk.svg';
import Export from '../../assets/Export.svg';
import { TrashIcon, EyeIcon } from '@heroicons/react/24/outline';
import pencil from '../../assets/pencil.svg';
import share from '../../assets/share.svg';
import avat from '../../assets/avat.svg';

const All = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; 
  const totalItems = 20; 
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
  
      
      
      <Layout>
      <div className='mt-4 '>
     <Contentbread/>
     
     </div>
     <section className='flex w-full  justify-between'>
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
<div className='flex items-center justify-center gap-3 mt-6 text-[12px] mr-10 border border-gray-300 rounded-md p-2'>
  <p className='cursor-pointer hover:text-blue-500'>All</p>
  <p className='cursor-pointer hover:text-blue-500'>Campaigns</p>
  <p className='cursor-pointer hover:text-blue-500'>Travel logs</p>
  <p className='cursor-pointer hover:text-blue-500'>Pins/Post</p>
  <p className='cursor-pointer hover:text-blue-500'>Tours</p>
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
 <div className='flex justify-between mb-3  ml-3 mt-4  '>
            <h1 className='font-semibold text-[24px]'>Campaigns
            </h1>
       <button className="bg-[#9854FF]  font-semibold text-white py-1  px-3 rounded-xl ">+ Add Campaigns
    </button>
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
    {[...Array(totalItems)].slice(startIndex, endIndex).map((_, idx) =>(
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
            <div className='text-[#1A9882] bg-[#E9FAF7] rounded-md font-semibold pl-[8px] w-[68%] p-[2px]'> <p className=" text-[13px] text-[#1A9882] bg-[#E9FAF7] pt-1">Publish</p> </div> 
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
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        <div className='flex justify-between mb-3  ml-3 mt-4  '>
            <h1 className='font-semibold text-[24px]'>Itineraries
            </h1>
       <button className="bg-[#9854FF]  font-semibold text-white py-1  px-3 rounded-xl ">+ Add Itineraries
    </button>
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
    
    {[...Array(5)].map((_, idx) => (
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
            <div className='text-[#1A9882] bg-[#E9FAF7] rounded-md font-semibold pl-[8px] w-[68%] p-[2px]'> <p className=" text-[13px] text-[#1A9882] bg-[#E9FAF7] pt-1">Publish</p> </div> 
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
    </Layout>

    
      
    
  );
};

export default All;
