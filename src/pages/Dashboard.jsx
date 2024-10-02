import React from 'react'
import Layout from '../components/Layout'
 import Badge from '../assets/Badge.svg'
 import Green from '../assets/Green.svg'
const Dashboard = () => {
  return (
    <Layout>
      <h1>Welcome Jay</h1>
      <p>here is what happening at Geolane  </p>
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
<section className='flex gap-2 flex-col'  >

<div className='w-[26%] border shadow-lg mt-6 p-4'>
  <h1 className='font-semibold text-[22px]'>Enterprise Users</h1>
  <div className='flex justify-between '><p className='text-[#9854FF] text-[25px] font-semibold'>150</p>
  <p className='text-[#32D583]  font-semibold '>20%</p></div>
</div>
<div className='w-[26%] border shadow-lg p-4'>
  <h1 className='font-semibold text-[22px]'>Enterprise Users</h1>
  <div className='flex justify-between '><p className='text-[#9854FF] text-[25px] font-semibold'>150</p>
  <p className='text-[#32D583]  font-semibold '>20%</p></div>
</div>
<div className='w-[26%] border shadow-lg p-4'>
  <h1 className='font-semibold text-[22px]'>Enterprise Users</h1>
  <div className='flex justify-between '><p className='text-[#9854FF] text-[25px] font-semibold'>150</p>
  <p className='text-[#32D583]  font-semibold '>20%</p></div>
</div>

</section>
    </Layout>
  )
}

export default Dashboard
