import React from 'react';

const Pagecheckbox = () => {
  // Data array for different permissions
  const permissions = [
    { label: 'Add Users' },
    { label: 'Delete Users' },
    { label: 'Add Customer' },
    { label: 'Add Customer' },
    { label: 'Add Customer' },
    { label: 'Add Customer' },
    { label: 'Add Customer' },
    { label: 'Add Customer' },
    { label: 'Add Customer' },
    { label: 'Add Customer' },
    { label: 'Add Customer' },
    { label: 'Add Customer' },
    { label: 'Add Customer' },
    // Add more permissions as needed
  ];

  return (
    <div>
      {/* Table Heading */}
      <div className='flex mt-6 w-full py-3 px-6 bg-[#F0F1F3] font-semibold border-b-2 text-xs text-[#22173D] gap-4'>
        <div className='w-[55%]'>
          <p className='text-[16px]'>Permissions</p>
        </div>
        <div className='flex gap-10 w-[45%]'>
          <p className='w-[30%] text-[16px]'>Super</p>
          <p className='w-[30%] text-[16px]'>Customer</p>
          <p className='w-[30%] text-[16px]'>Personal</p>
        </div>
      </div>

      {/* Dynamically Generated Rows */}
      {permissions.map((permission, index) => (
        <div key={index} className='flex reusable-table-cell w-full gap-4'>
          <div className='w-[55%]'>
            <p className='text-[16px]'>{permission.label}</p>
          </div>
          <div className='flex gap-10 w-[45%]'>
            <div className='w-[30%]'>
              <input type='checkbox' className='w-[30%]' />
            </div>
            <div className='w-[30%]'>
              <input type='checkbox' />
            </div>
            <div className='w-[30%]'>
              <input type='checkbox' />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pagecheckbox;
