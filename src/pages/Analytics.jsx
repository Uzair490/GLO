

import React from 'react'
import Layout from '../components/Layout'
import Badge from '../assets/Badge.svg'
import Green from '../assets/Green.svg'
import Cart from '../assets/Cart.svg'
import Campain from '../assets/Campain.svg'
import Export from '../assets/Export.svg'
import graph from '../assets/graph.svg'
import Piee from '../assets/Piee.svg'
import LineChart from '../components/Linechart'
const Analytics = () => {
  return (
    <Layout>
      <div className='flex gap-2 justify-between mt-4 w-full'>
    
    <h1 className='text-[24px] font-semibold'>All time Analytics</h1>
    <div className='flex gap-4'>
   
     <p className=' my-1 button-style'>  <img src={Export}  alt="error" className='w-3 h-2'  /> <p className='text-[12px] text-black'>Export </p> </p>
     <p className=' my-1 button-style'>  <img src={Export}  alt="error" className='w-3 h-2'  /> <p className='text-[12px] text-black'>All time</p> </p>
     </div>
     </div>
    <main className='flex gap-5 mt-4 '>
    <div className="border flex justify-between w-[33%] p-2  rounded-lg shadow-md">
    
    <div>
  <p className="text-gray-700 font-semibold">Total Pin/Post</p>
  <p className="text-xl  font-bold">20,000</p>
 
  <div className='flex gap-1 mt-2  '><p className='text-[#1A9882] text-sm font-semibold'>20</p><img src={Green} alt="error" /> <p className='text-[12px] mt-[1px] '>Added Today</p>
  </div>
  </div>
 
  <div><div><img src={Badge} alt="error"  /></div></div>
  </div>

  <div className="border flex justify-between w-[33%] p-2  rounded-lg shadow-md">
    
    <div>
  <p className="text-gray-700 font-semibold">Total Pin/Post</p>
  <p className="text-xl  font-bold">20,000</p>
 
  <div className='flex gap-1 mt-2  '><p className='text-[#1A9882] text-sm font-semibold'>20</p><img src={Green} alt="error" /> <p className='text-[12px] mt-[1px] '>Added Today</p>
  </div>
  </div>
 
  <div><div><img src={Badge} alt="error"  /></div></div>
  </div>
  <div className="border flex justify-between w-[33%] p-2  rounded-lg shadow-md">
    
    <div>
  <p className="text-gray-700 font-semibold">Total Pin/Post</p>
  <p className="text-xl  font-bold">20,000</p>
 
  <div className='flex gap-1 mt-2  '><p className='text-[#1A9882] text-sm font-semibold'>20</p><img src={Green} alt="error" /> <p className='text-[12px] mt-[1px] '>Added Today</p>
  </div>
  </div>
 
  <div><div><img src={Badge} alt="error"  /></div></div>
  </div>
  <div className="border flex justify-between w-[33%] p-2  rounded-lg shadow-md">
    
    <div>
  <p className="text-gray-700 font-semibold">Total Pin/Post</p>
  <p className="text-xl  font-bold">20,000</p>
 
  <div className='flex gap-1 mt-2  '><p className='text-[#1A9882] text-sm font-semibold'>20</p><img src={Green} alt="error" /> <p className='text-[12px] mt-[1px] '>Added Today</p>
  </div>
  </div>
 
  <div><div><img src={Badge} alt="error"  /></div></div>
  </div>
  
  
  
</main>


 
  
 

<div className='flex gap-2 justify-between mt-4 w-full'>
    
    <h1 className='text-[24px] font-semibold'>User Analytics</h1>
    <div className='flex gap-4'>
   
     <p className=' my-1 button-style'>  <img src={Export}  alt="error" className='w-3 h-2'  /> <p className='text-[12px] text-black'>Export </p> </p>
     <p className=' my-1 button-style'>  <img src={Export}  alt="error" className='w-3 h-2'  /> <p className='text-[12px] text-black'>Filters</p> </p>
    
     <p className=' my-1 pl-3 w-[130px] button-style'>   <p className='text-[12px] text-black'>Customer Type</p> </p>
     <p className=' my-1 pl-3 button-style'>   <p className='text-[12px] text-black'>Date</p> </p>
    
     </div>
     </div>

   
  { 
  // graph section 
  }
  <LineChart/>
  

  <div className='flex gap-2  justify-between mt-4 w-full'>
    
    <h1 className='text-[24px] font-semibold'>Revnue Analytics</h1>
    <div className='flex gap-4'>
   
     <p className=' my-1 button-style'>  <img src={Export}  alt="error" className='w-3 h-2'  /> <p className='text-[12px] text-black'>Export </p> </p>
     <p className=' my-1 button-style'>  <img src={Export}  alt="error" className='w-3 h-2'  /> <p className='text-[12px] text-black'>Filters</p> </p>
    
     <p className=' my-1 pl-3 w-[130px] button-style'>   <p className='text-[12px] text-black'>Customer Type</p> </p>
     <p className=' my-1 pl-3 button-style'>   <p className='text-[12px] text-black'>Date</p> </p>
    
     </div>
     </div>

     <main className='flex gap-5 mt-4 border-b p-6'>
    <div className="border flex justify-between w-[33%] p-2  rounded-lg shadow-md">
    
    <div>
  <p className="text-gray-700 font-semibold">Total Earnings</p>
  <p className="text-xl  font-bold">$100.00</p>
 
  <div className='flex gap-1 mt-2  '><p className='text-[#1A9882] font-semibold'>10%</p><img src={Green} alt="error" /> <p className='text-sm'>Earning Trends</p>
  </div>
  </div>
 
  <div><div><img src={Badge} alt="error"  /></div></div>
  </div>

  <div className="border flex justify-between w-[33%] p-2  rounded-lg shadow-md">
    
    <div>
  <p className="text-gray-700 font-semibold">Total Earnings</p>
  <p className="text-xl  font-bold">$100.00</p>
 
  <div className='flex gap-1 mt-2  '><p className='text-[#1A9882] font-semibold'>10%</p><img src={Green} alt="error" /> <p className='text-sm'>Earning Trends</p>
  </div>
  </div>
 
  <div><div><img src={Cart} alt="error"  /></div></div>
  </div>
  <div className="border flex justify-between w-[33%] p-2  rounded-lg shadow-md">
    
    <div>
  <p className="text-gray-700 font-semibold">Total Earnings</p>
  <p className="text-xl  font-bold">$100.00</p>
 
  <div className='flex gap-1 mt-2  '><p className='text-[#1A9882] font-semibold'>10%</p><img src={Green} alt="error" /> <p className='text-sm'>Earning Trends</p>
  </div>
  </div>
 
  <div><div><img src={Campain} alt="error"  /></div></div>
  </div>

  
  
</main>

    </Layout>
  )
}

export default Analytics
