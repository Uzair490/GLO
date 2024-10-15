import React from 'react';
import ESidebar from '../EnterpriseComponent/ESidebar'
import Header from '../../components/Header'

const ELayout = ({ children }) => {
  return (
    <div className="flex">
      <div className='w-[20%]'> <ESidebar/></div>
     
      <div className="w-[80%] border-l">
        <Header />
        <div className="ml-8 mr-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ELayout;
