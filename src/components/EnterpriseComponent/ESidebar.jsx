import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import dashboard from '../../assets/dashboard.svg';
import activeDashboard from '../../assets/activeDashboard.svg';
import contact from '../../assets/contact.svg';
import activeContact from '../../assets/activeContact.svg';
import analytic from '../../assets/analytic.svg';
import activeAnalytic from '../../assets/activeAnalytic.svg';
import marketing from '../../assets/marketing.svg';
import activeMarketing from '../../assets/activeMarketing.svg';
import content from '../../assets/content.svg';
import activeContent from '../../assets/activeContent.svg';
import setting from '../../assets/setting.svg';
import activeSetting from '../../assets/activeSetting.svg';
import sms from '../../assets/sms.svg';
import geolan from '../../assets/geolan.svg';

const ESidebar = () => {
  const location = useLocation();

  return (
    <section>
      <img src={geolan} className='m-5' alt="logo" />

      <div className='border-t-[1px] border-t-[#9854FFCC] pt-3 list-none flex gap-2 p-5 flex-col'>
        <Link to='/Edashboard' className={`sidebar-link ${location.pathname === '/Edashboard' ? 'active' : ''}`}>
          <img src={location.pathname === '/Edashboard' ? activeDashboard : dashboard} alt="Dashboard" />
          <span>Dashboard</span>
        </Link>
      
        <Link to='/Eanalytics' className={`sidebar-link ${location.pathname === '/Eanalytics' ? 'active' : ''}`}>
          <img src={location.pathname === '/Eanalytics' ? activeAnalytic : analytic} alt="Analytics" />
          <span>Analytics</span>
        </Link>
        <Link to='/Emarketing' className={`sidebar-link ${location.pathname === '/Emarketing' ? 'active' : ''}`}>
          <img src={location.pathname === '/Emarketing' ? activeMarketing : marketing} alt="Marketing" />
          <span>Marketing</span>
        </Link>
        <Link to='/Econtent' className={`sidebar-link ${['/all','/Econtent' ,'/publish','/unpublish','/republish'].includes(location.pathname) ? 'active' : ''}`}>
          <img src={location.pathname === '/Econtent' ? activeContent : content} alt="Content" />
          <span>Content</span>
        </Link>
      </div>

      <div className='list-none border-t-[1px] pt-3 flex gap-2 flex-col p-5'>
      <Link 
  to='/Eusermanagement' 
  className={`sidebar-link ${['/Eusermanagement', '/adminusers','/permissions'].includes(location.pathname) ? 'active' : ''}`}
>
  <img src={['/Eusermanagement', '/adminusers','/permissions'].includes(location.pathname) ? activeSetting : setting} alt="User Management" />
  <span>User Management</span>
</Link>
<Link 
  to='/Esetting' 
  className={`sidebar-link ${['/Esetting', '/ProfileSettings', '/CustomerSupport'].includes(location.pathname) ? 'active' : ''}`} // yahan other paths daal sakte hain
>
  <img src={['/Esetting', '/ProfileSettings', '/CustomerSupport'].includes(location.pathname) ? activeSetting : setting} alt="Settings" />
  <span>Settings</span>
</Link>

        <Link to='/Enotification' className={`sidebar-link ${location.pathname === '/Enotification' ? 'active' : ''}`}>
          <img src={sms} className='mt-1' alt="Notifications" />
          <span>Notifications</span>
        </Link>
      </div>
    </section>
  );
};

export default ESidebar;
