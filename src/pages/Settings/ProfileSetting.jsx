import React from 'react'
import Layout from '../../components/Layout'
import Settingbread from './Settingbread'
import Avatar from '../../assets/Avatar.svg'
const ProfileSetting = () => {
  return (
    <Layout>
        <section>
            <div className='mt-4'>
        <Settingbread/>
        </div>
        <div className=' gap-4 p-2 mt-5'>
      <h1 className='text-[24px] font-semibold'>Profile Setting</h1>
      {/*  1st section*/}
      <section className='flex w-full gap-10'>
      <div className='mt-5 w-[28%]'>
        <div className='border shadow-md  rounded-2xl py-6 px-12'><img src={Avatar} alt="error" className='h-[95px] flex justify-center  w-full' />
        
        <h1 className='text-[24px] font-semibold'>Jay  Hargudson</h1>
        <p className='text-[16px] font-semibold pl-2'> info@geolanes.com</p>
        <div className='pl-2'>
        <p className='bg-[#9854FF] py-2 rounded-lg mt-5 px-4 text-center text-white font-semibold text-[16px]'>Edit Profile</p>
        </div>
       
        </div>
      </div>
      <div className="border w-[65%] mt-5 rounded-lg shadow-md p-3 px-5">
          <h1 className="font-semibold text-[18px] mb-2">General Information</h1>
          <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Name Input */}
            <div className="flex flex-col">
              <label className="font-medium mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="border border-gray-300 p-2 rounded-md "
                placeholder="Enter name"
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col">
              <label className="font-medium mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="border border-gray-300 p-2 rounded-md "
                placeholder="Enter email"
              />
            </div>

            {/* Customer ID Input */}
            <div className="flex flex-col">
              <label className="font-medium mb-2" htmlFor="customerID">Password</label>
              <input
                type="password"
                id="customerID"
                className="border border-gray-300 p-2 rounded-md "
                
              />
              <div className='flex mt-1 justify-between'>
              <p className='text-[12px] text-[#00DDEB] font-medium'>Reset Password</p>
              <p className='text-[12px] text-[#00DDEB] font-medium'>Forgot Password</p>
              </div>
            </div>

            <div className="flex flex-col">
              <label className="font-medium mb-2" htmlFor="customerRole">Admin Role</label>
              <input
                type="text"
                id="customerRole"
                className="border border-gray-300 p-2 rounded-md "
                placeholder="Super Admin"
              />
            </div>
          </form>
        </div>
        </section>
        {/* 2nd section*/}
      <section className='mb-10'>
      <div className="flex gap-10 mt-6 ">
  {/* Contact Information Container */}
  <div className="border rounded-lg shadow-lg p-6 bg-white w-1/2">
    <p className="text-lg font-semibold mb-4 text-gray-700">Contact Information</p>
    <div className="flex flex-col space-y-4">
      <div>
        <label className="font-medium text-gray-600 mb-1 block" htmlFor="name">Phone Number</label>
        <input
          type="text"
          id="name"
          className="border border-gray-300 p-3 rounded-lg w-full "
          placeholder=""
          required
        />
      </div>
    </div>
  </div>

  {/* Security Settings Container */}
  <div className="border rounded-lg shadow-lg p-6 bg-white  w-[43%]">
    <p className="text-lg font-semibold mb-4 text-gray-700">Security</p>
    <div className="flex flex-col ">
      <div className="flex gap-2">
        
        <input type="checkbox" className="form-checkbox w-4 h-4 mt-1 text-indigo-600 rounded" />
        <label className="font-normal text-[16px]  text-gray-600">Enable MFA</label>
       
      </div>

      <p className='text-[#00DDEB] text-[12px] font-semibold'>Reset MFA</p>
    </div>
  </div>
</div>


      </section>
      </div>
      
      </section>
    </Layout>
  )
}

export default ProfileSetting
