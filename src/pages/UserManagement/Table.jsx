import React, { useState, useEffect } from 'react';
import { TrashIcon, EyeIcon } from '@heroicons/react/24/outline';
import pencil from '../../assets/pencil.svg';

const Table = () => {
  const [selectedIds, setSelectedIds] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const campaigns = [
    { id: 1, campaign: 'Spring Clearance', createdBy: 'Paul Walker', phoneNumber: '3456789', startDate: '2024-03-01', endDate: '2024-03-15', status: 'Active' },
    { id: 2, campaign: 'Spring Clearance', createdBy: 'Paul Walker', phoneNumber: '3456789', startDate: '2024-03-01', endDate: '2024-03-15', status: 'Active' },
    { id: 3, campaign: 'Spring Clearance', createdBy: 'Paul Walker', phoneNumber: '3456789', startDate: '2024-03-01', endDate: '2024-03-15', status: 'Active' },
    { id: 4, campaign: 'User t', createdBy: 'John Doe', phoneNumber: '1234577767', startDate: '2024-06-01', endDate: '2024-06-30', status: 'Active' },
    { id: 5, campaign: 'Winter Discount', createdBy: 'Jane Smith', phoneNumber: '2345678', startDate: '2024-11-01', endDate: '2024-12-31', status: 'Inactive' },
    { id: 6, campaign: 'Spring Clearance', createdBy: 'Paul Walker', phoneNumber: '3456789', startDate: '2024-03-01', endDate: '2024-03-15', status: 'Active' },
    { id: 7, campaign: 'Spring Clearance', createdBy: 'Paul Walker', phoneNumber: '3456789', startDate: '2024-03-01', endDate: '2024-03-15', status: 'Active' },
  ];

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setSelectedIds(!selectAll ? campaigns.map((campaign) => campaign.id) : []);
  };

  const handleSelect = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  useEffect(() => {
    if (selectedIds.length === campaigns.length) {
      setSelectAll(true);
    } else {
      setSelectAll(false);
    }
  }, [selectedIds, campaigns.length]);

  return (
    <div>
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
              <th className="reusable-table-header text-left">User Name</th>
              <th className="reusable-table-header text-left">Admin role</th>
              <th className="reusable-table-header text-left">Status</th>
              <th className="reusable-table-header text-left">Creation Date</th>
            
              
              <th className="reusable-table-header text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign) => (
              <tr key={campaign.id}>
                <td className="reusable-table-cell">
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(campaign.id)}
                      onChange={() => handleSelect(campaign.id)}
                      className="reusable-checkbox"
                    />
                    <p>{campaign.id}</p>
                  </div>
                </td>
                <td className="reusable-table-cell font-semibold">
                  {campaign.campaign}
                </td>
                <td className="reusable-table-cell">{campaign.createdBy}</td>
               <td className="reusable-table-cell">{campaign.startDate}</td>
              
                <td className="reusable-table-cell">
                  <span
                    className={`reusable-status ${
                      campaign.status === 'Active'
                        ? 'bg-green-100 text-[#1A9882]'
                        : 'bg-[#FFF0EA] text-[#F97316]'
                    }`}
                  >
                    {campaign.status}
                  </span>
                </td>
                <td className="reusable-table-cell">
                  <div className="reusable-actions">
                    <img
                      src={pencil}
                      className="h-4 w-4 mt-[3px] text-gray-500 cursor-pointer"
                      aria-hidden="true"
                    />
                    <EyeIcon
                      className="h-5 w-5 text-gray-500 cursor-pointer"
                      aria-hidden="true"
                    />
                    <TrashIcon
                      className="h-5 w-5 text-gray-500 cursor-pointer"
                      aria-hidden="true"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
