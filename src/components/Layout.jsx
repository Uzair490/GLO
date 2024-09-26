import React from 'react';
import Adminsidebar from '../components/Adminsidebar';
import Header from '../components/Header';

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <div className='w-[20%]'> <Adminsidebar  /></div>
     
      <div className="w-[80%] border">
        <Header />
        <div className="ml-8 mr-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
