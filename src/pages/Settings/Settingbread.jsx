import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Vector from '../../assets/Vector.svg';

const Settingbread = () => {
  const location = useLocation();

  const getLinkClasses = (path) => {
    return location.pathname === path
      ? 'text-[#9854FF] border-b-2 pb-2 border-[#9854FF]'
      : 'text-black';
  };

  // Generate the path segments for breadcrumbs
  const pathSegments = location.pathname.split('/').filter(Boolean);

  return (
    <div>
      {/* Breadcrumbs */}
      <div className='flex items-center gap-3'>
        <p className='text-[11px]'>Settings</p>
        <img src={Vector} alt="arrow" />
       
        
        {pathSegments.map((segment, index) => {
          const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
          const isLast = index === pathSegments.length - 1;

          return (
            <React.Fragment key={path}>
              {!isLast ? (
                <>
                  <Link to={path} className='text-[11px] text-black'>
                    {segment.charAt(0).toUpperCase() + segment.slice(1)}
                  </Link>
                  <img src={Vector} alt="arrow" />
                </>
              ) : (
                <p className='text-[11px] '>
                  {segment.charAt(0).toUpperCase() + segment.slice(1)}
                </p>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Navigation Links */}
      <div className='flex gap-3 border-b-2 '>
        <Link to='/ProfileSettings' className={`text-[14px] font-semibold ${getLinkClasses('/ProfileSettings')}`}>
          Profile Settings
        </Link>
        <Link to='/CustomerSupport' className={`text-[14px] font-semibold ${getLinkClasses('/CustomerSupport')}`}>
          Customer Support Configurations
        </Link>
       
        <Link to='/PricePackagesManagement' className={`text-[14px] font-semibold ${getLinkClasses('/PricePackagesManagement')}`}>
          Price Packages Management
        </Link>
      </div>
    </div>
  );
};

export default Settingbread;
