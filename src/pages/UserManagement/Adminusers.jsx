import React from 'react'
import Layout from '../../components/Layout'
import Breadcrumbs from './Breadcrumbs'
import Export from '../../assets/Export.svg'
import Date from '../../assets/Date.svg'
import All from '../../assets/All.svg'
import search from '../../assets/search.svg'
import Table from './Table'
const Adminusers = () => {
  return (
    <Layout>
        <section className='mt-4'>
    <Breadcrumbs/>
    <section className='border shadow-lg bg-[#FFFFFF]  mt-5'>

<div className='flex justify-between mt-4 ' >
    <div >
    <button className='py-[10px] ml-3 rounded-md px-[14px] border text-[12px] font-semibold '>
    
    Bulk Actions
    </button>
    <button className='bg-[#FAF5FF] ml-4 rounded-lg  text-[#883DCF] py-[10px] px-[14px] font-semibold text-[12px]' >Apply</button>
    </div>
    <button className="Add-button mr-12 ">+ Add New user
    </button>
    </div>
    <section className='flex gap-4  border-white shadow-slate-500 py-4'>
       
       <div className='flex w-[65%] pl-3' >
       
       <input
         type="text"
         className='border p-[6px] w-full bg-[#FDFBFF]  rounded-lg placeholder:text-[13px] pl-4  '  
         placeholder='Search  Users'
         
       />
      
       <img
    
         src={search}
         alt="search icon"
         className='ml-[-40px]  w-[18px] '
       />
     </div>
     <div className='mt-1'>
     <div className='flex gap-5 '>
    
     
      <p className='button-style'>  <img src={Export} alt="error" className='w-3 h-3'  /> <p className='text-[12px] text-black'>Export </p> </p>
      <p className='button-style'>  <img src={Date} alt="error" className='w-3 h-3'  /> <p className='text-[12px] text-black'>Date</p> </p>
      <p className='button-style'>  <img src={All} alt="error" className='w-3 h-3'  /> <p className='text-[12px] text-black'>All</p> </p>
   
    </div>
    </div>
   
    </section>
    
    <Table/>
    </section>
    </section>
    </Layout>
  )
}

export default Adminusers
