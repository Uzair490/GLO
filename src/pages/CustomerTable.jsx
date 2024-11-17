import React from 'react';
import { useQuery, gql } from '@apollo/client';

// Define the GraphQL query
const ALL_CUSTOMERS_QUERY = gql`
  query AllCustomers {
    allCustomers(input: { page: 1 }) {
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

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString();
};

const CustomerTable = () => {
  const { loading, error, data } = useQuery(ALL_CUSTOMERS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const customers =
    data.allCustomers?.data || [data.allCustomers?.customer].filter(Boolean);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Customer List</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Avatar</th>
            <th className="py-2 px-4 border-b">Role</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Contact Name</th>
            <th className="py-2 px-4 border-b">Contact Number</th>
            <th className="py-2 px-4 border-b">Created At</th> {/* Added Created At Column */}
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{customer.id}</td>
              <td className="py-2 px-4 border-b">{customer.name}</td>
              <td className="py-2 px-4 border-b">{customer.email}</td>
              <td className="py-2 px-4 border-b">
                <img
                  src={customer.avatarUrl}
                  alt={customer.name}
                  className="w-10 h-10 rounded-full"
                />
              </td>
              <td className="py-2 px-4 border-b">{customer.role}</td>
              <td className={`py-2 px-4 border-b ${customer.customerStatus === 'active' ? 'text-green-500' : 'text-red-500'}`}>
                {customer.customerStatus}
              </td>
              <td className="py-2 px-4 border-b">
                {customer.otherContactInfo?.name}
              </td>
              <td className="py-2 px-4 border-b">
                {customer.otherContactInfo?.contactNumber}
              </td>
              <td className="py-2 px-4 border-b">{formatDate(customer.createdAt)}</td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
