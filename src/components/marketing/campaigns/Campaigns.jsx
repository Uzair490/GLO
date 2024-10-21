import { useState } from "react";


import Bulk from '../../../assets/Bulk.svg'
import Filte from '../../../assets/Filte.svg'
import Filterto from '../../../assets/Filterto.svg'
import Export from '../../../assets/Export.svg'

import filter from '../../../assets/filter.svg'


import Table from "./Table";
import { Link, useNavigate } from "react-router-dom";

import search from '../.././../assets/search.svg'
const Campaigns = () => {
 


  
  
  return (
    <div
      className="rounded-lg w-full "
      
    >
      
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
 <div className='flex justify-between   ml-3 mt-6  '>
           
         <Link to='/marketing/add-new-campaign' className="bg-[#9854FF]  font-semibold text-white py-2  px-3 rounded-xl">   
       <button   >+ Add Campaigns
    </button>
    </Link>
    </div>
</section>



<div className='flex gap-2 mb-4 justify-between mt-4 '>
<div className="flex rounded-lg h-9  w-[27%] mt-1 items-center pr-2 border p-[6px] ">
  <input
    type="text"
    className="flex-1 placeholder:text-[15px] pl-2  outline-none "
    placeholder="Search Campaigns"
  />
  <img src={search} alt="error" className="w-[18px]   mt-1 h-[20px]" />
</div>

   
<div className='flex w-[70%] gap-4'>

 <p className=' my-1 button-style'>  <img src={Export}  alt="error" className='w-3 h-2'  /> <p className='text-[12px] text-black'>Export </p> </p>
 <p className=' my-1 button-style'>  <img src={filter}  alt="error" className='w-3 h-2'  /> <p className='text-[12px] text-black'>Filters</p> </p>


 <p className=' my-1 pl-3 button-style'>   <span className='text-[12px] text-black'>Status</span> <img src={Bulk} alt="Bulk" className='h-4 w-4' /> </p>

 <p className=' my-1 pl-3 w-[130px] button-style'>   <span className='text-[12px] text-black'>Perfomance</span> <img src={Bulk} alt="Bulk" className='h-4 w-4' /></p>
 <p className=' my-1 px-3  flex gap-2  border items-center'>   <span className='text-[12px]  text-black'>Customer Type</span> <img src={Bulk} alt="Bulk" className='h-4 w-4 ' /></p>
 <p className=' my-1 pl-3 button-style'>   <span className='text-[12px] text-black'>Date</span> <img src={Bulk} alt="Bulk" className='h-4 w-4' /></p>

 </div>
 </div>
      <div> 
       <Table/>
      </div>
     
    </div>
  );
};

export default Campaigns;


