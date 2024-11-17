import { useState } from 'react';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';

// Define the mutation with the correct input type
const REGISTER_ENTERPRISE_CUSTOMER = gql`
  mutation GlAdmin($input: CreateEnterpriseCustomerInput!) {
    glAdmin {
      registerEnterpriseCustomer(input: $input) {
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

const RegisterCustomer = () => {
  const [input, setInput] = useState({
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

  const [registerCustomer, { data, loading, error }] = useMutation(REGISTER_ENTERPRISE_CUSTOMER);

  const handleChange = (e) => {
    console.log(`${e.target.name}: ${e.target.value}`); // Debugging line to check the value
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await registerCustomer({ variables: { input } });
        if (response.data.glAdmin.registerEnterpriseCustomer.status === 'success') {
            alert('Customer created successfully!');
            // Optionally reset the form
            setInput({
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
        }
    } catch (err) {
        console.error(err);
        alert('An error occurred while creating the customer.');
    }
};

  return (
    <div className="max-w-lg mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-semibold mb-6 text-center">Register Enterprise Customer</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            name="name" // Ensure name attribute is present
            value={input.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={input.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="Enter your email"
          />
        </div>
        {/* The remaining fields stay the same */}
        <div>
          <label className="block text-sm font-medium mb-1">Customer ID</label>
          <input
            type="text"
            name="customerId"
            value={input.customerId}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="Enter customer ID"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Role</label>
          <input
            type="text"
            name="role"
            value={input.role}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="Enter role"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Other Contact Number</label>
          <input
            type="text"
            name="otherContactNumber"
            value={input.otherContactNumber}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="Enter other contact number"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Other Contact Name</label>
          <input
            type="text"
            name="otherContactName"
            value={input.otherContactName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="Enter other contact name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Address</label>
          <input
            type="text"
            name="address"
            value={input.address}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="Enter address"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Country State</label>
          <input
            type="text"
            name="countryState"
            value={input.countryState}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="Enter country/state"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Price Plan</label>
          <input
            type="text"
            name="pricePlan"
            value={input.pricePlan}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="Enter price plan"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>

      {error && <p className="text-red-600 mt-4">Error: {error.message}</p>}
      {data && (
        <div className="mt-4 p-4 bg-green-100 rounded-lg">
          <p>Status: {data.glAdmin.registerEnterpriseCustomer.status}</p>
          <p>Message: {data.glAdmin.registerEnterpriseCustomer.message}</p>
        </div>
      )}
    </div>
  );
};

export default RegisterCustomer;
