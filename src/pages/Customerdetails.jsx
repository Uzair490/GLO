import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { useParams } from 'react-router-dom'
import idd from '../assets/idd.svg'
import Email from '../assets/Email.svg'
import address from '../assets/address.svg'
import customerss from '../assets/customerss.svg'
import phone from '../assets/phone.svg'
import type from '../assets/type.svg'
import gold from '../assets/gold.svg'



const GET_ALL_ENTERPRISE_CUSTOMERS = gql`
    query AllEnterpriseCustomers($id: String!) {
        allEnterpriseCustomers(input: { id: $id }) {
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
            ... on Error {
                status
                message
            }
            ... on PaginatedEntCustomerList {
                status
                message
                page
                totalCount
            }
        }
    }
`;



const Customerdetails = () => {
    const { id } = useParams(); 
  const { loading, error, data } = useQuery(GET_ALL_ENTERPRISE_CUSTOMERS, {
    variables: { id }, 
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const customer = data?.allEnterpriseCustomers?.customer;

  if (!customer) return <p className="text-center">No customer found.</p>;
  
  return (
    <div>
      <section className='mt-8  bg-white rounded-lg shadow-md '>
        <div className='pb-2'>
          <div className='w-full  py-4 flex flex-col items-center justify-center'>
            <img src={customer.avatarUrl} alt="Customer Avatar" className='w-[40%]' />
            <h1 className='text-[25px] font-bold'>{customer.name }</h1>
          </div>
          <div className='flex gap-4 items-center justify-center border-b-2 pb-4'>
            <p className='text-[#9854FF] font-semibold'>20k</p>
            <p>Users</p>
            <button className='text-[#1A9882] bg-[#E9FAF7] px-[17px] py-[2px] rounded '>
              {customer.customerStatus || 'Active'}
            </button>
            <button className='text-white bg-[#9854FF] px-[20px] py-[2px] rounded '>
              Edit
            </button>
          </div>
        </div>

        <section className='pl-6 '>
          <div className='reuse-traveler'>
            <img src={idd} alt='ID Icon' className='img-width' />
            <div>
              <p className='traveler-text'>Customer ID</p>
              <p className='traveler-text'>{customer.customerId}</p>
            </div>
          </div>
          <div className='reuse-traveler'>
            <img src={Email} alt='Email Icon' className='img-width' />
            <div>
              <p className='traveler-text'>Email</p>
              <p className='traveler-text'>{customer.email}</p>
            </div>
          </div>
          <div className='reuse-traveler'>
            <img src={address} alt='Address Icon' className='img-width' />
            <div>
              <p className='traveler-text'>Address</p>
              <p className='traveler-text'>{customer.countryState}</p>
            </div>
          </div>
          <div className='reuse-traveler'>
            <img src={phone} alt='Phone Icon' className='img-width' />
            <div>
              <p className='traveler-text'>Phone Number</p>
              <p className='traveler-text'>
                {customer.otherContactInfo?.contactNumber}
              </p>
            </div>
          </div>
          <div className='reuse-traveler'>
            <img src={type} alt='Type Icon' className='img-width' />
            <div>
              <p className='traveler-text'>Account Type</p>
              <p className='traveler-text'>{customer.accountType}</p>
            </div>
          </div>
          <div className='reuse-traveler'>
            <img src={customerss} alt='Customer Since Icon' className='img-width' />
            <div>
              <p className='traveler-text'>Customer Since</p>
              <p className='traveler-text'>{new Date(customer.createdAt).toLocaleDateString()}</p>
            </div>
          </div>
          <div className='reuse-traveler'>
            <img src={gold} alt='Pricing Plan Icon' className='img-width' />
            <div>
              <p className='traveler-text'>Current Pricing Plan</p>
              <p className='traveler-text'>{customer.pricePlan}</p>
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}

export default Customerdetails
