import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { TrashIcon, EyeIcon } from '@heroicons/react/24/outline'; // Heroicons import
import '../global.css';
import Layout from '../components/Layout';
import search from '../assets/search.svg';
import Export from '../assets/Export.svg';
import All from '../assets/All.svg';
import pencil from '../assets/pencil.svg';
import Barchart from '../components/Barchart';
import { useQuery, useMutation, gql } from '@apollo/client';
//import Enter from './Enter';
//import RecentActivities from '../components/RecentActivities';
import Enter from './Enter';
import RecentActivity from '../components/RecentActivity';
const GET_ALL_ENTERPRISE_CUSTOMERS = gql`
  query AllEnterpriseCustomers {
    allEnterpriseCustomers(input: { page: 1 }) {
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
        data {
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
`;


const DELETE_CUSTOMER = gql`
  mutation DeleteCustomer($id: String!) {
    glAdmin {
      updateEnterpriseCustomer(input: { id: $id, isDeleted: true }) {
        ... on EnterpriseCustomerResponse {
          status
          message
        }
        ... on Error {
          status
          message
        }
      }
    }
  }
`;


const Customers = () => {
  const navigate = useNavigate();
  const { loading, error, data, refetch } = useQuery(GET_ALL_ENTERPRISE_CUSTOMERS);
  const [deleteCustomer] = useMutation(DELETE_CUSTOMER);
  const [deletingCustomerId, setDeletingCustomerId] = useState(null);
console.log(data)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

 

 

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const customers = data.allEnterpriseCustomers?.customer || data.allEnterpriseCustomers?.data || [];

  const handleDeleteCustomer = async (customerId) => {
    const confirmed = window.confirm('Are you sure you want to delete this customer?');
    if (confirmed) {
      try {
        setDeletingCustomerId(customerId); 
        const { data } = await deleteCustomer({ variables: { id: customerId } });
        const response = data.glAdmin.updateEnterpriseCustomer;

        if (response.status ==='success') {
          alert('Customer deleted successfully');
          refetch(); 
        } else {
          alert(` ${response.message}`);
        }
      } catch (err) {
        alert(`Error: ${err.message}`);
      } finally {
        setDeletingCustomerId(null); 
      }
    }
  };

  return (
    <div>
      <Layout>
        <main>
          <div className="flex justify-between ml-3 mt-4">
            <h1 className="font-semibold text-[28px]">Customers Accounts</h1>
            <Link to="/addnewcustomer">
              <button className="Add-button mr-12 p-2">+ Add Customer</button>
            </Link>
          </div>

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
            <div className="mt-1 flex gap-5">
              <p className="button-style">
                <img src={Export} alt="Export" className="w-3 h-3" />{' '}
                <span className="text-[12px] text-black">Export</span>
              </p>
              <p className="button-style">
                <img src={All} alt="All" className="w-3 h-3" />{' '}
                <span className="text-[12px] text-black">All</span>
              </p>
            </div>
          </section>

          <div className="mr-12">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="reusable-table-header">
                    <div className="flex gap-2">
                      <input type="checkbox" className="reusable-ch" />
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
                        <input type="checkbox" className="r" />
                        <p>{customer.customerId}</p>
                      </div>
                    </td>

                    <td className="reusable-table-cell font-semibold">
                      <div>
                        {customer.name}
                        <div className="text-sm text-[11px] text-black">
                          {customer.email}
                        </div>
                      </div>
                    </td>

                    <td className="reusable-table-cell">{customer.accountType}</td>
                    <td className="reusable-table-cell font-semibold">
                      <div>
                        {customer.otherContactInfo?.contactNumber}
                        <div className="text-sm text-[11px] text-black">
                          {customer.otherContactInfo?.name}
                        </div>
                      </div>
                    </td>
                    <td className="reusable-table-cell">
                      {customer.createdAt
                        ? new Date(customer.createdAt).toLocaleDateString('en-US')
                        : 'N/A'}
                    </td>

                    <td className="reusable-table-cell">
                      <span
                        className={`reusable-status ${
                          customer.customerStatus === 'Active'
                            ? 'bg-green-100 text-[#1A9882]'
                            : customer.customerStatus === 'Inactive'
                            ? 'bg-[#FFF0EA] text-[#F97316]'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {customer.customerStatus}
                      </span>
                    </td>

                    <td className="reusable-table-cell">
                      <div className="reusable-actions">
                        <img
  src={pencil}
  className="h-3 w-4 mt-[3px] text-gray-500 cursor-pointer"
  aria-hidden="true"
  onClick={() => navigate('/customers')} 
/>

                        <EyeIcon
                          className="h-4 w-4 text-gray-500 cursor-pointer"
                          aria-hidden="true"
                          onClick={() => navigate(`/account-details/${customer.id}`)}
                        />
                        <TrashIcon
                          className={`h-[14px] w-4 text-gray-500 cursor-pointer ${
                            deletingCustomerId === customer.id && 'opacity-50'
                          }`}
                          aria-hidden="true"
                          onClick={() => handleDeleteCustomer(customer.id)}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
        <Barchart />
    <RecentActivity/>
      </Layout>
    </div>
  );
};

export default Customers;
