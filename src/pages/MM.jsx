import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import Layout from '../components/Layout';
import Customerbar from '../components/Customerbar';
import photo from '../assets/photo.svg';
import idd from '../assets/idd.svg';
import Email from '../assets/Email.svg';
import address from '../assets/address.svg';
import phone from '../assets/phone.svg';
import type from '../assets/type.svg';
import gold from '../assets/gold.svg';
import Badge from '../assets/Badge.svg';
import Cart from '../assets/Cart.svg';
import Campain from '../assets/Campain.svg';
import Green from '../assets/Green.svg';
import Export from '../assets/Export.svg';
import { GET_ALL_CUSTOMERS } from '../queries';

const AccountDetails = () => {
  const { loading, error, data } = useQuery(GET_ALL_CUSTOMERS);
  
  const [selectedIds, setSelectedIds] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    if (!loading && data) {
      const allCustomers = data?.glAdmin?.AllCustomers;
      if (allCustomers && !('status' in allCustomers)) {
        setCustomers(allCustomers.items || []);
      } else {
        console.error('Error fetching customers:', allCustomers?.message || 'No data received');
      }
    }
  }, [loading, data]);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setSelectedIds(!selectAll ? customers.map((customer) => customer.id) : []);
  };

  const handleSelect = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  useEffect(() => {
    setSelectAll(selectedIds.length === customers.length);
  }, [selectedIds, customers.length]);

  const customer = customers[0]; // Use the first customer for display

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: Unable to fetch data. {error.message}</p>;
  if (customers.length === 0) {
    return <p>No customers available.</p>;
  }

  return (
    <Layout>
      <Customerbar />
      <section className='flex gap-10'>
        <section className='w-[30%] mt-8 bg-white rounded-lg shadow-md'>
          <div className='pb-2'>
            <div className='w-full py-4 flex flex-col items-center justify-center'>
              <img src={photo} alt="error" className='w-[40%]' />
              <h1 className='text-[25px] font-bold'>Global Travelers</h1>
            </div>
            <div className='flex gap-4 items-center justify-center border-b-2 pb-4'>
              <p className='text-[#9854FF] font-semibold'>{customers.length}k</p>
              <p>Users</p>
              <button className='text-[#1A9882] bg-[#E9FAF7] px-[17px] py-[2px] rounded'>Active</button>
              <button className='text-white bg-[#9854FF] px-[20px] py-[2px] rounded'>Edit</button>
            </div>
          </div>
          <section className='pl-6 '>
            <div className='reuse-traveler'>
              <img src={idd} alt='error' className='img-width' />
              <div>
                <p className='traveler-text'>Customer ID</p>
                <p className='traveler-text'>{customer.id}</p>
              </div>
            </div>
            <div className='reuse-traveler'>
              <img src={Email} alt='error' className='img-width' />
              <div>
                <p className='traveler-text'>Email</p>
                <p className='traveler-text'>{customer.email}</p>
              </div>
            </div>
            <div className='reuse-traveler'>
              <img src={address} alt='error' className='img-width' />
              <div>
                <p className='traveler-text'>Address</p>
                <p className='traveler-text'>{customer.address}</p> 
              </div>
            </div>
            <div className='reuse-traveler'>
              <img src={phone} alt='error' className='img-width' />
              <div>
                <p className='traveler-text'>Phone Number</p>
                <p className='traveler-text'>{customer.phone}</p> 
              </div>
            </div>
            <div className='reuse-traveler'>
              <img src={type} alt='error' className='img-width' />
              <div>
                <p className='traveler-text'>Account Type</p>
                <p className='traveler-text'>{customer.gender}</p>
              </div>
            </div>
            <div className='reuse-traveler'>
              <img src={gold} alt='error' className='img-width' />
              <div>
                <p className='traveler-text'>Current Pricing Plan</p>
                <p className='traveler-text'>{customer.pricingPlan}</p>
              </div>
            </div>
          </section>
        </section>

        <div className='mt-6 w-full'>
          <main className='flex gap-5'>
            <div className="border flex justify-between p-2 rounded-lg shadow-md">
              <div>
                <p className="text-gray-700 font-semibold">Total Earnings</p>
                <p className="text-xl font-bold">$100.00</p>
                <div className='flex gap-1 mt-2'>
                  <p className='text-[#1A9882] font-semibold'>10%</p>
                  <img src={Green} alt="error" />
                  <p className='text-sm'>Earning Trends</p>
                </div>
              </div>
              <div>
                <div><img src={Badge} alt="error" /></div>
              </div>
            </div>

            <div className="border flex justify-between p-2 rounded-lg shadow-md">
              <div>
                <p className="text-gray-700 font-semibold">Total Earnings</p>
                <p className="text-xl font-bold">$100.00</p>
                <div className='flex gap-1 mt-2'>
                  <p className='text-[#1A9882] font-semibold'>10%</p>
                  <img src={Green} alt="error" />
                  <p className='text-sm'>Earning Trends</p>
                </div>
              </div>
              <div>
                <div><img src={Cart} alt="error" /></div>
              </div>
            </div>
            <div className="border flex justify-between p-2 rounded-lg shadow-md">
              <div>
                <p className="text-gray-700 font-semibold">Total Earnings</p>
                <p className="text-xl font-bold">$100.00</p>
                <div className='flex gap-1 mt-2'>
                  <p className='text-[#1A9882] font-semibold'>10%</p>
                  <img src={Green} alt="error" />
                  <p className='text-sm'>Earning Trends</p>
                </div>
              </div>
              <div>
                <div><img src={Campain} alt="error" /></div>
              </div>
            </div>
          </main>

          <div>
            <section className='flex w-full border rounded p-3 shadow-sm mt-4 justify-between'>
              <div>
                <h1 className='font-bold'>Transaction History</h1>
              </div>
              <div className='flex gap-2 justify-end'>
                <p className='border rounded-md font-semibold p-[6px] flex items-center gap-2'>
                  <img src={Export} alt="error" className='w-3 h-3' />
                  <p className='text-[12px] text-black'>Export</p>
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AccountDetails;
