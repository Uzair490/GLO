import React from 'react'
import { useState,useEffect } from 'react'
import Layout from '../components/Layout'
import Customerbar from '../components/Customerbar'
import photo from '../assets/photo.svg'
import idd from '../assets/idd.svg'
import Email from '../assets/Email.svg'
import address from '../assets/address.svg'
import customerss from '../assets/customerss.svg'
import phone from '../assets/phone.svg'
import type from '../assets/type.svg'
import gold from '../assets/gold.svg'
import Badge from '../assets/Badge.svg'
import Cart from '../assets/Cart.svg'
import Campain from  '../assets/Campain.svg'
import Green from '../assets/Green.svg'
import Export from '../assets/Export.svg'

import { useQuery } from '@apollo/client';
import Customerdetails from './Customerdetails'
const AccountDetails = () => {
  const campaigns = [
    { id: 1, TransactionDetails: 'User Engagement', Total: '1234$', Date: '12-sep',  },
    { id: 2, TransactionDetails: 'User Engagement', Total: '1234$', Date: '12-sep',  },
    { id: 3, TransactionDetails: 'User Engagement', Total: '1234$', Date: '12-sep',  }
   
  ];

 
  
  

  
  

  

   

  
  

  return (
    <Layout>
     <Customerbar/>
    <section className='flex gap-10'>

     <div className='w-[30%]'>
<Customerdetails/>
</div>

<div className='mt-6'>



 
   <main className='flex gap-5   '>
    <div className="border flex justify-between  p-2  rounded-lg shadow-md">
    
    <div>
  <p className="text-gray-700 font-semibold">Total Earnings</p>
  <p className="text-xl  font-bold">$100.00</p>
 
  <div className='flex gap-1 mt-2  '><p className='text-[#1A9882] font-semibold'>10%</p><img src={Green} alt="error" /> <p className='text-sm'>Earning Trends</p>
  </div>
  </div>
 
  <div><div><img src={Badge} alt="error"  /></div></div>
  </div>

  <div className="border flex justify-between  p-2  rounded-lg shadow-md">
    
    <div>
  <p className="text-gray-700 font-semibold">Total Earnings</p>
  <p className="text-xl  font-bold">$100.00</p>
 
  <div className='flex gap-1 mt-2  '><p className='text-[#1A9882] font-semibold'>10%</p><img src={Green} alt="error" /> <p className='text-sm'>Earning Trends</p>
  </div>
  </div>
 
  <div><div><img src={Cart} alt="error"  /></div></div>
  </div>
  <div className="border flex justify-between  p-2  rounded-lg shadow-md">
    
    <div>
  <p className="text-gray-700 font-semibold">Total Earnings</p>
  <p className="text-xl  font-bold">$100.00</p>
 
  <div className='flex gap-1 mt-2  '><p className='text-[#1A9882] font-semibold'>10%</p><img src={Green} alt="error" /> <p className='text-sm'>Earning Trends</p>
  </div>
  </div>
 
  <div><div><img src={Campain} alt="error"  /></div></div>
  </div>

</main>
<sidebar>

<section className='flex w-full border rounded p-3 shadow-sm mt-4 justify-between'>
  
  <div>
  
   <h1 className='font-bold'>Transaction History</h1>

   </div>
<div className='flex gap-2 justify-end'>
    
     
    <p className='border rounded-md font-semibold p-[6px]  flex items-center gap-2'>  <img src={Export} alt="error" className='w-3 h-3'  /> <p className='text-[12px] text-black'>Export </p> </p>
    <p className='border rounded-md  font-semibold p-[6px] flex items-center gap-2'>  <img src={Date} alt="error" className='w-3 h-3'  /> <p className='text-[12px] text-black'>Selected Date</p> </p>
    
 
  </div>

 
</section>
<main className='earning-head '>
<div className='flex w-[50%]   '>
<div className="flex w-[50%] pl-3 gap-2">
                  <input
                    type="checkbox"
                    
                    className="reusable-checkbox mt-1"
                  />
                  <p>Id</p>
                </div>

  <p className='w-[50%]'>Transaction Details</p>
  </div>
  <div className='flex w-[50%]  '>
  <p className='w-[70%] text-end'>
Total 
  </p>

  <p className='w-[30%] text-center'>Date</p>
  </div>
</main>

<main className=''>
  {campaigns.map((campaign) => (
    <div key={campaign.id} className='flex w-[100%] '>
<div className='w-[50%] flex '>
  <div className='w-[50%] flex gap-3 pl-3 earning-table'>
<input
                      type="checkbox"
                      
                      className="reusable-earnings"
                    />
                    
      <p >{campaign.id}</p>
      </div>
      <p className='w-[50%] earning-table'>{campaign.TransactionDetails}</p>
      </div>
      <div className='w-[50%] flex ' >
      <p className='w-[76%] earning-table text-end'>{campaign.Total}</p>
      <p className='w-[30%] earning-table text-center'>{campaign.Date}</p>
      </div>
    </div>
  ))}
</main>
</sidebar>
</div>
    </section> 
   

    </Layout>
  )
}

export default AccountDetails