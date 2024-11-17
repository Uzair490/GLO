import React, { useState } from 'react';
import Layout from '../components/Layout';
import img from '../assets/img.svg';
import { useMutation } from '@apollo/client';
import { gql } from 'graphql-tag';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const REGISTER_ENTERPRISE_CUSTOMER = gql`
  mutation GlAdmin(
    $name: String!
    $email: String!
    $customerId: String!
    $role: String!
    $otherContactNumber: String!        
    $otherContactName: String!          
    $address: String!                    
    $countryState: String!               
    $pricePlan: String!                
  ) {
    glAdmin {
      registerEnterpriseCustomer(
        input: {
          name: $name
          email: $email
          customerId: $customerId
          role: $role
          otherContactNumber: $otherContactNumber
          otherContactName: $otherContactName
          address: $address
          countryState: $countryState
          pricePlan: $pricePlan
        }
      ) {
        ... on Error {
          status
          message
        }
        ... on EnterpriseCustomerResponse {
          status
          message
          customer {
            id
            name
            email
            avatarUrl
            customerId
            role
            customerStatus
            accountType
            pricePlan
            countryState
            isDeleted
            deletedAt
            updatedAt
            createdAt
            otherContactInfo {
              name
              contactNumber
            }
          }
        }
      }
    }
  }
`;

const Addnewcustomer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    customerId: '',
    role: '',
    otherContactNumber: '',
    otherContactName: '',
    address: '',
    countryState: '',
    pricePlan: '',
  });

  const [loading, setLoading] = useState(false); 
  const [registerEnterpriseCustomer] = useMutation(REGISTER_ENTERPRISE_CUSTOMER);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await registerEnterpriseCustomer({
        variables: { ...formData },
      });

      if (data && data.glAdmin.registerEnterpriseCustomer.status === 'success') {
        toast.success('Customer added successfully!');
      } else {
        toast.error(data.glAdmin.registerEnterpriseCustomer.message);
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred while adding the customer.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <ToastContainer />
      <section>
        <h1 className="font-semibold text-[24px] p-4">Add New Customer</h1>

        <div className="border rounded-lg shadow-md p-3 px-5">
          <h1 className="font-semibold text-[18px] mb-2">General Information</h1>
          <form className="grid grid-cols-1 gap-6 md:grid-cols-2" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label className="font-medium mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="border border-gray-300 p-2 rounded-md"
                placeholder="Enter name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col">
              <label className="font-medium mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="border border-gray-300 p-2 rounded-md"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col">
              <label className="font-medium mb-2" htmlFor="customerId">Customer ID</label>
              <input
                type="text"
                id="customerId"
                className="border border-gray-300 p-2 rounded-md"
                placeholder="Enter customer ID"
                value={formData.customerId}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col">
              <label className="font-medium mb-2" htmlFor="role">Customer Role</label>
              <input
                type="text"
                id="role"
                className="border border-gray-300 p-2 rounded-md"
                placeholder="Enter customer role"
                value={formData.role}
                onChange={handleChange}
              />
            </div>
          </form>
        </div>

        <div className="border mt-6 rounded-lg shadow-md p-3 px-5">
          <h1 className="font-semibold text-[18px] mb-2">Contact Information</h1>
          <form className="grid grid-cols-1 gap-6 md:grid-cols-2" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label className="font-medium mb-2" htmlFor="otherContactName">Other Contact Name</label>
              <input
                type="text"
                id="otherContactName"
                className="border border-gray-300 p-2 rounded-md"
                placeholder="Enter Other Contact Name"
                value={formData.otherContactName}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col">
              <label className="font-medium mb-2" htmlFor="otherContactNumber">Phone Number</label>
              <input
                type="text"
                id="otherContactNumber"
                className="border border-gray-300 p-2 rounded-md"
                placeholder="Enter Phone Number"
                value={formData.otherContactNumber}
                onChange={handleChange}
              />
            </div>
          </form>
        </div>

        <section className="mt-8">
          <div className="border border-gray-300 rounded-md p-6">
            <h2 className="font-semibold text-[20px] mb-4">Personalization</h2>
            <form className="" onSubmit={handleSubmit}>
              <div className='flex gap-8 w-full'>
                <div className="flex w-[50%] flex-col">
                  <p className='pb-1 text-[#727A90]'>Logo/Photo</p>
                  <div className="flex flex-col items-center border border-gray-300 p-2 rounded-md">
                    <img
                      src={img}
                      alt="error"
                      className="mb-2 w-10 h-10"
                    />
                    <label htmlFor="imageLo" className="flex items-center justify-center h-full w-full cursor-pointer">
                      <input
                        type="file"
                        id="imageLo"
                        className="hidden"
                        accept="image/*"
                        onChange={(e) => {}}
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
                <section className='flex flex-col justify-center w-[50%]'>
                  <div className="flex flex-col col-span-1">
                    <label className="font-medium mb-2" htmlFor="pricePlan">Pricing Plan</label>
                    <input
                      type="text"
                      id="pricePlan"
                      className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2"
                      placeholder="Enter pricing plan"
                      value={formData.pricePlan}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="flex flex-col col-span-1">
                    <label className="font-medium mt-2 mb-2" htmlFor="countryState">Country/State</label>
                    <input
                      type="text"
                      id="countryState"
                      className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2"
                      placeholder="Enter country/state"
                      value={formData.countryState}
                      onChange={handleChange}
                    />
                  </div>
                </section>
              </div>
              <div className="flex justify-end mt-4">
                <button
                  type="submit"
                  className="bg-[#9854FF] text-white px-4 py-2 rounded-md"
                  disabled={loading}
                >
                  {loading ? 'Creating' : 'Create Customer'}
                </button>
              </div>
            </form>
          </div>
        </section>
      </section>
    </Layout>
  );
};

export default Addnewcustomer;
