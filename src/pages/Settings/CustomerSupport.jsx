import React from 'react'
import Settingbread from './Settingbread'
import Layout from '../../components/Layout'
const CustomerSupport = () => {
  return (
    <Layout>
      <div className='mt-4'>
         <Settingbread/>
         </div>
   <section className='mt-4 w-full ' >

    <div className='border rounded-2xl shadow-custom'>
<h1 className='pl-6 py-3 text-[18px] font-semibold text-[#0C0D0F]'>Customer Support Configuration</h1>
<div className='flex px-6 gap-6 '>


<div className='w-[50%]'>
        <label className="font-medium text-[#22173D] text-[16px] mb-[6px] block" htmlFor="name">Response Time</label>
        <input
          type="text"
          id="name"
          className="border border-gray-300 p-2 rounded-lg w-full "
          placeholder="Choose Response Time"
          required
        />
      </div>
      <div className='w-[50%]'>
        <label className="font-medium text-[#22173D] mb-[6px] text-[16px] block" htmlFor="name">Support Channel</label>
        <input
          type="text"
          id="name"
          className="border border-gray-300 p-2 w-full rounded-lg  "
          placeholder="Select Support Channel e.g email, messages"
          required
        />
      </div>
    </div>
    <div className="flex pb-4 justify-end mt-6 mr-8 ">
          <button className="  border border-[#9854FF] text-[#9854FF] font-semibold px-2 py-[3px] text-[14px]  rounded-md mr-4">
           X Cancel
          </button>
          <button className="bg-[#9854FF] text-white font-semibold px-[17px] py-[3px] text-[14px]  rounded-md">
            Save
          </button>
        </div>
    </div>
   </section>
    </Layout>
  )
}

export default CustomerSupport
