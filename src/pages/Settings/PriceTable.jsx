import React from 'react';

const PriceTable = () => {
  // Data array for different permissions
  const features = [
    { label: 'Add Users' },
    { label: 'Delete Users' },
    { label: 'Add Customer' },
    { label: 'Edit Customer' },
    { label: 'Delete Customer' },
    { label: 'View Reports' },
    { label: 'Generate Invoices' },
    { label: 'Manage Payments' },
    { label: 'Access Dashboard' },
    { label: 'Manage Orders' },
    { label: 'Customer Support' },
    { label: 'Analytics' },
    { label: 'Custom Permissions' },
    // Add more permissions as needed
  ];

  return (
    <div>
      {/* Table Heading */}
      <div className='flex mt-6 w-full py-3 px-6 bg-[#F0F1F3] font-semibold border-b-2 text-xs text-[#22173D] gap-4'>
        <div className='w-[55%]'>
          <p className='text-[16px]'>Features</p>
        </div>
        <div className='flex gap-10 w-[45%]'>
          <p className='w-[25%] text-[16px]'>Free</p>
          <p className='w-[25%] text-[16px]'>Premium</p>
          <p className='w-[25%] text-[16px]'>Agent</p>
          <p className='w-[25%] text-[16px]'>Business</p>
        </div>
      </div>

      {/* Dynamically Generated Rows */}
      {features.map((permission, index) => (
        <div key={index} className='flex reusable-table-cell w-full gap-4'>
          <div className='w-[55%]'>
            <p className='text-[16px]'>{permission.label}</p>
          </div>
          <div className='flex gap-10 w-[45%]'>
            <div className='w-[25%]'>
              <input type='checkbox' />
            </div>
            <div className='w-[25%]'>
              <input type='checkbox' />
            </div>
            <div className='w-[25%]'>
              <input type='checkbox' />
            </div>
            <div className='w-[25%]'>
              <input type='checkbox' />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PriceTable;
