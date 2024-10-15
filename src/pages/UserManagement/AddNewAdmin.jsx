import React from 'react';
import Layout from '../../components/Layout'

import img from '../../assets/img.svg';

const AddNewAdmin= () => {
  return (
    <Layout>
     
      <section className="">
        <h1 className="font-semibold text-[24px] p-4 ">Add New Customer</h1>

        {/* Add New Customer Fields with Border */}
        <div className="border rounded-lg shadow-md p-3 px-5">
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
              <label className="font-medium mb-2" htmlFor="customerID">User ID</label>
              <input
                type="text"
                id="customerID"
                className="border border-gray-300 p-2 rounded-md "
                placeholder="Enter User ID"
              />
            </div>

            {/* Customer Role Input */}
            <div className="flex flex-col">
              <label className="font-medium mb-2" htmlFor="customerRole">Define Admin Role</label>
              <input
                type="text"
                id="customerRole"
                className="border border-gray-300 p-2 rounded-md "
                placeholder="Enter customer role"
              />
            </div>
          </form>
        </div>

        {/* Personalization Section with Border */}
        <section className="mt-8">
          <h2 className="font-semibold text-[20px] mb-4">Personalization</h2>

          <div className="border border-gray-300 rounded-md p-6">
            <form className="flex gap-8 w-full">
              {/* Enter Image/Logo Input */}
              <div className="flex w-[50%] flex-col">
                <p className='pb-1 text-[#727A90]'>Photo</p>
                <div className="flex flex-col items-center border border-gray-300 p-2 rounded-md ">
                  <img 
                    src={img}
                    alt="error"
                    className="mb-2 w-10 h-10" // Adjust size as needed
                  />
                  <label htmlFor="imageLo" className="flex items-center justify-center h-full w-full cursor-pointer">
                    <input
                      type="file"
                      id="imageLo"
                      className="hidden"
                      accept="image/*"
                      onChange={(e) => {
                        // Handle the image upload here
                      }}
                    />
                    <span className="text-gray-400">Drag and drop logo image here, or click to add image</span>
                  </label>
                  <button
                    onClick={() => document.getElementById('imageLo').click()}
                    className="mt-2 bg-[#FAF5FF] text-[#9854FF] mb-2 px-4 py-2 rounded-md"
                  >
                    Add Image
                  </button>
                </div>
              </div>
              <section className='flex flex-col justify-center w-[50%] '>
                {/* Pricing Plan Input */}
                <div className="flex flex-col col-span-1">
                  <label className="font-medium mb-2" htmlFor="pricingPlan">Set Admin Status</label>
                  <input
                    type="text"
                    id="pricingPlan"
                    className="border border-gray-300 p-2  rounded-md focus:outline-none focus:ring-2 "
                    placeholder="Enter pricing plan"
                  />
                </div>

               
                <div className="flex flex-col col-span-1">
                  <label className="font-medium mt-2 mb-2" htmlFor="countryState">Assocaited With</label>
                  <input
                    type="text"
                    id="countryState"
                    className="border border-gray-300 p-2  rounded-md focus:outline-none focus:ring-2"
                    placeholder="Enter country/state"
                  />
                </div>
              </section>
            </form>
          </div>
          <div className="border mt-6 border-gray-300 rounded-2xl p-6">
            <form className="flex gap-8 w-full">
            
              
              <section className='  w-full'>
             
                

               
                <div className="flex flex-col col-span-1">
                  <label className="font-medium mt-2 mb-2" htmlFor="countryState">Location</label>
                  <label className="font-medium mt-2 mb-2" htmlFor="countryState">Select City/State</label>
                  <input
                    type="text"
                    id="countryState"
                    className="border border-gray-300 p-2  rounded-md focus:outline-none focus:ring-2"
                    placeholder="Select City/State"
                  />
                </div>
              </section>
            </form>
          </div>
          
        </section>

      
        <div className="flex pb-8 justify-end mt-6">
          <button className=" bg-slate-100 text-[#9854FF] font-semibold px-2 py-[3px] text-[16px]  rounded-md mr-4">
           X Cancel
          </button>
          <button className="bg-[#9854FF] text-white font-semibold px-2 py-[3px] text-[16px]  rounded-md">
            Submit
          </button>
        </div>
       
      </section>
    </Layout>
  );
};

export default AddNewAdmin;
