import React, { useState, useEffect } from 'react';
import { PencilSquareIcon, TrashIcon, EyeIcon } from '@heroicons/react/24/outline'; // Heroicons import
 // Import the global CSS file where your reusable classes are defined
import '../global.css'
import Layout from '../components/Layout';
const Customers = () => {
  const [selectedIds, setSelectedIds] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const campaigns = [
    { id: 1, campaign: 'Summer Sale', createdBy: 'John Doe', startDate: '2024-06-01', endDate: '2024-06-30', status: 'Active' },
    { id: 2, campaign: 'Winter Discount', createdBy: 'Jane Smith', startDate: '2024-11-01', endDate: '2024-12-31', status: 'Inactive' },
    { id: 3, campaign: 'Spring Clearance', createdBy: 'Paul Walker', startDate: '2024-03-01', endDate: '2024-03-15', status: 'Active' },
  ];

  // Handle select all checkboxes
  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setSelectedIds(!selectAll ? campaigns.map((campaign) => campaign.id) : []);
  };

  // Handle individual checkbox select
  const handleSelect = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  // Automatically update the "Select All" checkbox status based on selected items
  useEffect(() => {
    if (selectedIds.length === campaigns.length) {
      setSelectAll(true);
    } else {
      setSelectAll(false);
    }
  }, [selectedIds]);

  return (
    <Layout className="container mx-auto mt-8">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                  className="reusable-checkbox"
                />
              </th>
              <th >ID</th>
              <th className="reusable-table-header text-left">Campaign</th>
              <th className="reusable-table-header text-left">Created By</th>
              <th className="reusable-table-header text-left">Start Date</th>
              <th className="reusable-table-header text-left">End Date</th>
              <th className="reusable-table-header text-left">Status</th>
              <th className="reusable-table-header text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign) => (
              <tr key={campaign.id}>
                <td className="">
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(campaign.id)}
                    onChange={() => handleSelect(campaign.id)}
                    className="reusable-checkbox"
                  />
                </td>
                <td className="py-4 border-b text-sm text-gray-900 text-center">{campaign.id}</td>
                <td className="reusable-table-cell">{campaign.campaign}</td>
                <td className="reusable-table-cell">{campaign.createdBy}</td>
                <td className="reusable-table-cell">{campaign.startDate}</td>
                <td className="reusable-table-cell">{campaign.endDate}</td>
                <td className="reusable-table-cell">
                  <span
                    className={`reusable-status ${
                      campaign.status === 'Active'
                        ? 'bg-green-100 text-green-800'
                        : campaign.status === 'Upcoming'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {campaign.status}
                  </span>
                </td>
                <td className="reusable-table-cell">
                  <div className="reusable-actions">
                    {/* Edit (Update) Icon */}
                    <PencilSquareIcon className="h-5 w-5 text-gray-500 cursor-pointer" aria-hidden="true" />
                    {/* View Icon */}
                    <EyeIcon className="h-5 w-5 text-gray-500 cursor-pointer" aria-hidden="true" />
                    {/* Delete Icon */}
                    <TrashIcon className="h-5 w-5 text-gray-500 cursor-pointer" aria-hidden="true" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Customers;
