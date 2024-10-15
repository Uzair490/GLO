import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import UserManagement from './pages/UserManagement/UserManagement'
import Campaign from './pages/Campaign'
import Content from  '../src/pages/Content/Content'
import Analytics from './pages/Analytics'
import Marketing from './pages/Marketing'
import MarketingComponent from "./components/marketing/campaigns/AddNewCampaign";
import ShareCampaign from "./components/marketing/campaigns/ShareCampaign";
import Table from '../src/pages/UserManagement/Table'

import Signin from './pages/Signin'
import Earnings from './pages/Earnings'
import AccountDetails from './pages/AccountDetails'
import AccountUsers from './pages/AccountUsers'
import Addnewcustomer from './pages/Addnewcustomer'
import Customers from './pages/Customers'
import Settings from './pages/Settings/Settings'
import Adminusers from './pages/UserManagement/Adminusers'
import Permissions from './pages/UserManagement/Permissions'
import AddNewAdmin from './pages/UserManagement/AddNewAdmin'
import PricePackage from './pages/Settings/PricePackage'
import ProfileSetting from './pages/Settings/ProfileSetting'
import CustomerSupport from './pages/Settings/CustomerSupport'
import All from './pages/Content/All'
import Published from './pages/Content/Published'
import Unpublished from './pages/Content/Unpublished'
import Republished from './pages/Content/Republished'
import EDashboard from './pages/Enterprisepages/EDashboard'

import Eanalytics from './pages/Enterprisepages/Eanalytics'
import Emarketing from './pages/Enterprisepages/Emarketing'
//import Econtent from './pages/Enterprisepages/Econtent'
import Eusermanagement from './pages/Enterprisepages/Eusermanagement'
import Esetting from './pages/Enterprisepages/Esetting'
import Enotification from './pages/Enterprisepages/Enotification'
import EContent from './pages/Enterprisepages/Content/EContent'
import MarketingMain  from '../src/components/marketing/MarketingMain'
import NotificationsComponent from './components/notifications/NotificationsComponent'
const App = () => {
  return (
    <>

 
    <Routes>

<Route path='/campaign' element={<Campaign/>}/>
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/'  element={<Signin/>}/>
      
      <Route path='/analytics' element={<Analytics />}/>
      <Route path="/marketing/user-engagement" element={<ShareCampaign />} />
      <Route path='/settings' element={<Settings/>}/>
      <Route path='/addnewadmin' element={<AddNewAdmin/>}/>
      <Route path='/earnings' element={<Earnings/>}/>
     
      <Route path='/accountdetails'  element={<AccountDetails/>}/>
      <Route path='/accountusers' element={<AccountUsers/>}/>
      <Route path='/addnewcustomer' element={<Addnewcustomer/>}  />
      <Route path='/customers' element={<Customers/>} />
      <Route path='/table' element={<Table/>} />
      <Route path='/content' element={<Content />}/>
      <Route path='/all' element={<All/>}/>
      <Route path='/publish' element={<Published/>}/>
      <Route path='/unpublish' element={<Unpublished />}/>
      <Route path='/republish' element={<Republished/>}/>
<Route path='/user-management' element={<UserManagement/>} />
<Route path ='/adminusers'element={<Adminusers/>}/>
<Route path ='/permissions'element={<Permissions/>}/>
<Route path='/settings' element={<Settings/>}/>
<Route path='/PricePackagesManagement' element={<PricePackage/>}/>
<Route path='/Profilesettings' element={<ProfileSetting/>}/>
<Route path='/CustomerSupport' element={<CustomerSupport/>}/>
{/*Enterprise Admin */}


<Route
          path="/marketing/add-new-campaign"
          element={<MarketingComponent />}
        />
<Route path="/Edashboard" element={< EDashboard/>}/>

<Route path='/marketing' element={<MarketingMain/>}/>
<Route path="/Eanalytics" element={< Eanalytics/>}/>
<Route path="/Emarketing" element={< Emarketing/>}/>
<Route path="/Econtent" element={< EContent/>}/>
<Route path="/Emarketiing" element={<Emarketing/>}/>

<Route path="/Eusermanagement" element={<Eusermanagement/>}/>
<Route path="/Esetting" element={<Esetting/>}/>
<Route path="/Enotification" element={<Enotification/>}/>
<Route path="/notification" element={<NotificationsComponent/>}/>

    </Routes>
  
    </>
  )
}

export default App
