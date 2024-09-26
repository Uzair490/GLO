import React from 'react'
import search from '../assets/search.svg'
import Export from '../assets/Export.svg'
import Date from '../assets/Date.svg'
import All from '../assets/All.svg'
const CustomerSearch = () => {
  return (
    <div>
       <div className='flex gap-8 mt-2 bg-white shadow-md rounded p-4 ' >
       
       <input
         type="text"
         className='border p-[6px] w-[90%] pl-3  bg-[#F0F1F3]  rounded placeholder:text-[13px]  '  
         placeholder='Search Campaigns'
         
       />
      
       <img
    
         src={search}
         alt="search icon"
         className='ml-[-60px]  w-[18px] '
       />
         <div className='flex gap-2 '>
    
     
    <p className='button-style'>  <img src={Export} alt="error" className='w-3 h-3'  /> <p className='text-[12px] text-black'>Export </p> </p>
    <p className='button-style'>  <img src={Date} alt="error" className='w-3 h-3'  /> <p className='text-[12px] text-black'>Date</p> </p>
    <p className='button-style'>  <img src={All} alt="error" className='w-3 h-3'  /> <p className='text-[12px] text-black'>All</p> </p>
 
  </div>
     </div>
    </div>
  )
}

export default CustomerSearch
