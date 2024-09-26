import React, { useState, useEffect } from 'react';
import { PencilSquareIcon, TrashIcon, EyeIcon } from '@heroicons/react/24/outline'; // Heroicons import
import '../global.css';
import Layout from '../components/Layout';
import avat from '../assets/avat.svg';
import search from '../assets/search.svg'
import Export from '../assets/Export.svg'
import Date from '../assets/Date.svg'
import All from '../assets/All.svg'
import Vector from '../assets/Vector.svg'
import pencil from '../assets/pencil.svg'
import Customerbar from '../components/Customerbar';
// bread crums
const Customers = () => {
  const [selectedIds, setSelectedIds] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const campaigns = [
    { id: 7, campaign: 'User Engagement', createdBy: 'John Doe', phoneNumber: '1234577767', startDate: '2024-06-01', endDate: '2024-06-30', status: 'Active' },
    { id: 2, campaign: 'Winter Discount', createdBy: 'Jane Smith', phoneNumber: '2345678', startDate: '2024-11-01', endDate: '2024-12-31', status: 'Inactive' },
    { id: 3, campaign: 'Spring Clearance', createdBy: 'Paul Walker', phoneNumber: '3456789', startDate: '2024-03-01', endDate: '2024-03-15', status: 'Active' },
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
      <section className='flex gap-4 border-white shadow-slate-500 py-4'>
       
       <div className='flex w-[65%]' >
       
       <input
         type="text"
         className='border p-[6px] w-full bg-[#F0F1F3]  rounded placeholder:text-[13px] placeholder:pl-2  '  
         placeholder='Search Campaigns'
         
       />
      
       <img
    
         src={search}
         alt="search icon"
         className='ml-[-40px]  w-[18px] '
       />
     </div>
     <div className='mt-1'>
     <div className='flex gap-2 '>
    
     
      <p className='button-style'>  <img src={Export} alt="error" className='w-3 h-3'  /> <p className='text-[12px] text-black'>Export </p> </p>
      <p className='button-style'>  <img src={Date} alt="error" className='w-3 h-3'  /> <p className='text-[12px] text-black'>Date</p> </p>
      <p className='button-style'>  <img src={All} alt="error" className='w-3 h-3'  /> <p className='text-[12px] text-black'>All</p> </p>
   
    </div>
    </div>
   
    </section>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="reusable-table-header">
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAll}
                    className="reusable-checkbox"
                  />
                  <p>Id</p>
                </div>
              </th>
              <th className="reusable-table-header text-left">Campaign</th>
              <th className="reusable-table-header text-left">Created By</th>
              <th className="reusable-table-header text-left">Start Date</th>
              <th className="reusable-table-header text-left">End Date</th>
              <th className="reusable-table-header text-left">Status</th>
              <th className="reusable-table-header text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign) => (
              <tr key={campaign.id}>
                <td className="reusable-table-cell">
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(campaign.id)}
                      onChange={() => handleSelect(campaign.id)}
                      className="reusable-checkbox"
                    />
                    <p>{campaign.id}</p>
                  </div>
                </td>

                <td className="reusable-table-cell font-semibold">
                  <div className="flex items-center gap-4">
                    <img src={avat} alt="avatar" className="h-8" />
                    <span>{campaign.campaign}</span>
                  </div>
                </td>

                <td className="reusable-table-cell font-semibold">
                  <div>
                    {campaign.createdBy}
                    <div className="text-sm text-[11px]  text-black">{campaign.phoneNumber}</div> 
                  </div>
                </td>
                
                <td className="reusable-table-cell">{campaign.startDate}</td>
                <td className="reusable-table-cell">{campaign.endDate}</td>

                <td className="reusable-table-cell">
                  <span
                    className={`reusable-status ${
                      campaign.status === 'Active'
                        ? 'bg-green-100 text-[#1A9882]'
                        : campaign.status === 'Inactive'
                        ? 'bg-[#FFF0EA] text-[#F97316]'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {campaign.status}
                  </span>
                </td>

                <td className="reusable-table-cell">
                  <div className="reusable-actions">
                  <img src={pencil} className="h-4 w-4 mt-[3px] text-gray-500 cursor-pointer" aria-hidden="true" />
                    
                    <EyeIcon className="h-5 w-5 text-gray-500 cursor-pointer" aria-hidden="true" />
                    <TrashIcon className="h-5 w-5 text-gray-500 cursor-pointer" aria-hidden="true" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </section>
    </Layout>
   );
};

export default Customers;
