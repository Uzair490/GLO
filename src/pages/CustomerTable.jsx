
import React, { useState, useEffect } from 'react';
import { TrashIcon, EyeIcon } from '@heroicons/react/24/outline';
import '../global.css';
import Layout from '../components/Layout';
import search from '../assets/search.svg';
import Export from '../assets/Export.svg';
import Date from '../assets/Date.svg';
import All from '../assets/All.svg';
import pencil from '../assets/pencil.svg';
import Bartow from '../components/Bartow';
import { useQuery } from '@apollo/client';
import { GET_ALL_CUSTOMERS } from '../queries';

const Customers = () => {
  const { loading, error, data } = useQuery(GET_ALL_CUSTOMERS);
  const [selectedIds, setSelectedIds] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  // Declare 'customers' before using it
  const allCustomers = data?.glAdmin?.AllCustomers;
  const customers = allCustomers?.items || [];

  useEffect(() => {
    if (customers.length > 0 && selectedIds.length === customers.length) {
      setSelectAll(true);
    } else {
      setSelectAll(false);
    }
  }, [selectedIds, customers.length]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: Unable to fetch data. {error.message}</p>;

  if (!allCustomers) {
    return <p>No data received from the server.</p>;
  }

  if ('status' in allCustomers) {
    return <p>Error: {allCustomers.message}</p>;
  }

  if (customers.length === 0) {
    return <p>No customers available.</p>;
  }

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setSelectedIds(!selectAll ? customers.map((campaign) => campaign.id) : []);
  };

  const handleSelect = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  return (
    <div>
      <Layout className="">
        <main className="">
          <div className="flex justify-between ml-3 mt-4">
            <h1 className="font-semibold text-[28px]">Customers Accounts</h1>
            <button className="Add-button mr-12">+ Add Customer</button>
          </div>
          <section className="">
            <section className="flex gap-4 border-white shadow-slate-500 py-4">
              <div className="flex w-[65%]">
                <input
                  type="text"
                  className="border p-[8px] w-full bg-[#FDFBFF] rounded placeholder:text-[13px] pl-4"
                  placeholder="Search Accounts"
                />
                <img
                  src={search}
                  alt="search icon"
                  className="ml-[-40px] w-[18px]"
                />
              </div>
              <div className="mt-1">
                <div className="flex gap-5">
                  <p className="button-style">
                    <img src={Export} alt="error" className="w-3 h-3" />
                    <p className="text-[12px] text-black">Export</p>
                  </p>
                  <p className="button-style">
                    <img src={Date} alt="error" className="w-3 h-3" />
                    <p className="text-[12px] text-black">Date</p>
                  </p>
                  <p className="button-style">
                    <img src={All} alt="error" className="w-3 h-3" />
                    <p className="text-[12px] text-black">All</p>
                  </p>
                </div>
              </div>
            </section>
            <div className="overflow-x-auto mr-12">
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
                    <th className="reusable-table-header text-left">Account Name</th>
                    <th className="reusable-table-header text-left">Account Type</th>
                    <th className="reusable-table-header text-left">Contact Person</th>
                    <th className="reusable-table-header text-left">Join Date</th>
                    <th className="reusable-table-header text-left">Status</th>
                    <th className="reusable-table-header text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((customer) => (
                    <tr key={customer.id}>
                      <td className="reusable-table-cell">
                        <div className="flex gap-2">
                          <input
                            type="checkbox"
                            checked={selectedIds.includes(customer.id)}
                            onChange={() => handleSelect(customer.id)}
                            className="reusable-checkbox"
                          />
                          <p>{customer.id}</p>
                        </div>
                      </td>
                      <td className="reusable-table-cell font-semibold">
                        <div>
                          {customer.createdBy}
                          <div className="text-sm text-[11px] text-black">{customer.email}</div>
                        </div>
                      </td>
                      <td className="reusable-table-cell font-semibold">
                        <div>
                          {customer.createdBy}
                          <div className="text-sm text-[11px] text-black">{customer.phone}</div>
                        </div>
                      </td>
                      <td className="reusable-table-cell">{customer.startDate}</td>
                      <td className="reusable-table-cell">{customer.endDate}</td>
                      <td className="reusable-table-cell">
                        <span
                          className={`reusable-status ${
                            customer.status === 'Active'
                              ? 'bg-green-100 text-[#1A9882]'
                              : customer.status === 'Inactive'
                              ? 'bg-[#FFF0EA] text-[#F97316]'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {customer.status}
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
        </main>
        <Bartow />
      </Layout>
    </div>
  );
};

export default Customers;
