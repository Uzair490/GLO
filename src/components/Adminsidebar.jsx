import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import dashboard from '../assets/dashboard.svg';
import activeDashboard from '../assets/activeDashboard.svg';
import contact from '../assets/contact.svg';
import activeContact from '../assets/activeContact.svg';
import analytic from '../assets/analytic.svg';
import activeAnalytic from '../assets/activeAnalytic.svg';
import marketing from '../assets/marketing.svg';
import activeMarketing from '../assets/activeMarketing.svg';
import content from '../assets/content.svg';
import activeContent from '../assets/activeContent.svg';
import setting from '../assets/setting.svg';
import activeSetting from '../assets/activeSetting.svg';
import sms from '../assets/sms.svg';
import geolan from '../assets/geolan.svg';
import user from '../assets/user.svg'
const Adminsidebar = () => {
  const location = useLocation();

  return (
    <section>
      <img src={geolan} className='m-5' alt="logo" />

      <div className='border-t-[1px] border-t-[#9854FFCC] pt-3 list-none flex gap-2 p-5 flex-col'>
        <Link to='/dashboard' className={`sidebar-link ${location.pathname === '/dashboard' ? 'active' : ''}`}>
          <img src={location.pathname === '/dashboard' ? activeDashboard : dashboard} alt="Dashboard" />
          <span>Dashboard</span>
        </Link>
        <Link to='/customers' className={`sidebar-link ${location.pathname === '/customers' ? 'active' : ''}`}>
          <img src={location.pathname === '/customers' ? activeContact : contact} alt="Customers" />
          <span>Customers</span>
        </Link>
        <Link to='/analytics' className={`sidebar-link ${location.pathname === '/analytics' ? 'active' : ''}`}>
          <img src={location.pathname === '/analytics' ? activeAnalytic : analytic} alt="Analytics" />
          <span>Analytics</span>
        </Link>
        <Link to='/marketing' className={`sidebar-link ${location.pathname === '/marketing' ? 'active' : ''}`}>
          <img src={location.pathname === '/marketing' ? activeMarketing : marketing} alt="Marketing" />
          <span>Marketing</span>
        </Link>
        <Link to='/content' className={`sidebar-link ${['/all','/publish','/unpublish','/republish'].includes(location.pathname) ? 'active' : ''}`}>
          <img src={location.pathname === '/content' ? activeContent : content} alt="Content" />
          <span>Content</span>
        </Link>
      </div>

      <div className='list-none border-t-[1px] pt-3 flex gap-2 flex-col p-5'>
      <Link 
  to='/user-management' 
  className={`sidebar-link ${['/user-management', '/adminusers','/permissions'].includes(location.pathname) ? 'active' : ''}`}
>
  <img src={['/user-management', '/adminusers','/permissions'].includes(location.pathname) ? activeSetting : user} alt="User Management" />
  <span>User Management</span>
</Link>
<Link 
  to='/settings' 
  className={`sidebar-link ${['/settings', '/ProfileSettings', '/CustomerSupport'].includes(location.pathname) ? 'active' : ''}`} // yahan other paths daal sakte hain
>
  <img src={['/settings', '/ProfileSettings', '/CustomerSupport'].includes(location.pathname) ? setting : setting} alt="Settings" />
  <span>Settings</span>
</Link>

        <Link to='/notification' className={`sidebar-link ${location.pathname === '/notification' ? 'active' : ''}`}>
          <img src={sms} className='mt-1' alt="Notifications" />
          <span>Notifications</span>
        </Link>
      </div>
    </section>
  );
};

export default Adminsidebar;
