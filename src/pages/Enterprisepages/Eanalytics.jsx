

import React from 'react'
import ELayout from '../../components/EnterpriseComponent/ELayout'
import Badge from '../../assets/Badge.svg'
import Green from '../../assets/Green.svg'
import Cart from '../../assets/Cart.svg'
import Campain from '../../assets/Campain.svg'
import Export from '../../assets/Export.svg'
import graph from '../../assets/graph.svg'
import Piee from '../../assets/Piee.svg'
import up from '../../assets/up.svg'
import LineChart from '../../components/Linechart'
const Eanalytics = () => {
  return (
    <ELayout>
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

     <main className='flex gap-5 mt-4 border-b '>
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
<div className='flex gap-2  justify-between mt-4 w-full'>
    
    <h1 className='text-[24px] font-semibold'>Tours Analytics</h1>
    <div className='flex gap-4'>
   
     <p className=' my-1 button-style'>  <img src={Export}  alt="error" className='w-3 h-2'  /> <p className='text-[12px] text-black'>Export </p> </p>
     <p className=' my-1 button-style'>  <img src={Export}  alt="error" className='w-3 h-2'  /> <p className='text-[12px] text-black'>Filters</p> </p>
    
     <p className=' my-1 pl-3 w-[130px] button-style'>   <p className='text-[12px] text-black'>Customer Type</p> </p>
     <p className=' my-1 pl-3 button-style'>   <p className='text-[12px] text-black'>Date</p> </p>
    
     </div>
     </div>


{/*  4 cards  */}
    <section className='w-full flex gap-4'>
<div className='w-[20%] p-4 border rounded-lg shadow-md '>
    <div className=''>
        <p className='text-[18px] font-semibold text-[#777980]'>Total Tours</p>
        <div className='flex gap-1'>
        <p className='text-[#22173D] text-[24px] font-semibold'>70   </p>

        <div className='flex mt-1'>
        <p className='text-[#1A9882] text-[16px] font-bold'>10%</p> <img src={up} alt="up"  className='h-3 mt-1 w-4' />
        </div>
        </div>
    </div>
</div>
<div className='w-[20%] p-4 border rounded-lg shadow-md '>
    <div className=''>
        <p className='text-[18px] font-semibold text-[#777980]'>Impressions</p>
        <div className='flex gap-1'>
        <p className='text-[#22173D] text-[24px] font-semibold'>70   </p>

        <div className='flex mt-1'>
        <p className='text-[#1A9882] text-[16px] font-bold'>10%</p> <img src={up} alt="up"  className='h-3 mt-1 w-4' />
        </div>
        </div>
    </div>
</div>
<div className='w-[20%] p-4 border rounded-lg shadow-md '>
    <div className=''>
        <p className='text-[18px] font-semibold text-[#777980]'>Likes</p>
        <div className='flex gap-1'>
        <p className='text-[#22173D] text-[24px] font-semibold'>70   </p>

        <div className='flex mt-1'>
        <p className='text-[#1A9882] text-[16px] font-bold'>10%</p> <img src={up} alt="up"  className='h-3 mt-1 w-4' />
        </div>
        </div>
    </div>
</div>
<div className='w-[20%] p-4 border rounded-lg shadow-md '>
    <div className=''>
        <p className='text-[18px] font-semibold text-[#777980]'>Views</p>
        <div className='flex gap-1'>
        <p className='text-[#22173D] text-[24px] font-semibold'>70   </p>

        <div className='flex mt-1'>
        <p className='text-[#1A9882] text-[16px] font-bold'>10%</p> <img src={up} alt="up"  className='h-3 mt-1 w-4' />
        </div>
        </div>
    </div>
</div>
<div className='w-[20%] p-4 border rounded-lg shadow-md '>
    <div className=''>
        <p className='text-[18px] font-semibold text-[#777980]'>Watch Time</p>
        <div className='flex gap-1'>
        <p className='text-[#22173D] text-[24px] font-semibold'>70   </p>

        <div className='flex mt-1'>
        <p className='text-[#1A9882] text-[16px] font-bold'>10%</p> <img src={up} alt="up"  className='h-3 mt-1 w-4' />
        </div>
        </div>
    </div>
</div>
    </section>
     <main className='flex gap-5 mt-4 border-b '>
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
    </ELayout>
  )
}

export default Eanalytics
