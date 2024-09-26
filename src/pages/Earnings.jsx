import React, { useState, useEffect } from 'react';


import avat from '../assets/avat.svg';
import search from '../assets/search.svg'
import Export from '../assets/Export.svg'
import Date from '../assets/Date.svg'
import All from '../assets/All.svg'
import Vector from '../assets/Vector.svg'
import Green from '../assets/Green.svg'
import Badge from '../assets/Badge.svg'
import Cart from '../assets/Cart.svg'
import Campain from '../assets/Campain.svg'
import { PencilSquareIcon, TrashIcon, EyeIcon } from '@heroicons/react/24/outline'; // Heroicons import
import '../global.css';
import Layout from '../components/Layout';




import pencil from '../assets/pencil.svg'
import Customerbar from '../components/Customerbar';
const Earnings = () => {
  const [selectedIds, setSelectedIds] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const campaigns = [
    { id: 1, TransactionDetails: 'User Engagement', Total: '1234$', Date: '12-sep',  },
    { id: 2, TransactionDetails: 'User Engagement', Total: '1234$', Date: '12-sep',  },
    { id: 3, TransactionDetails: 'User Engagement', Total: '1234$', Date: '12-sep',  }
   
  ];

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setSelectedIds(!selectAll ? campaigns.map((campaign) => campaign.id) : []);
  };

  const handleSelect = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  useEffect(() => {
    if (selectedIds.length === campaigns.length) {
      setSelectAll(true);
    } else {
      setSelectAll(false);
    }
  }, [selectedIds]);

  return (
    <Layout className="">
<section className=''>
     <Customerbar/>
      <section className=' border-white shadow-slate-500 py-4'>
       
       
     <div className='mt-1'>
     <div className='flex gap-2 justify-end'>
    
     
      <p className='button-style'>  <img src={Export} alt="error" className='w-3 h-3'  /> <p className='text-[12px] text-black'>Export </p> </p>
      <p className='button-style'>  <img src={Date} alt="error" className='w-3 h-3'  /> <p className='text-[12px] text-black'>Date</p> </p>
      <p className='button-style'>  <img src={All} alt="error" className='w-3 h-3'  /> <p className='text-[12px] text-black'>All</p> </p>
   
    </div>
    </div>
   
    </section>
    <main className='flex gap-5  '>
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
      </section>

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
                    checked={selectAll}
                    onChange={handleSelectAll}
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
                      checked={selectedIds.includes(campaign.id)}
                      onChange={() => handleSelect(campaign.id)}
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

  
    </Layout>
   );
};

export default Earnings;
