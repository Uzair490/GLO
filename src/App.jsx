import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import UserManagement from './pages/UserManagement/UserManagement'
import Campaign from './pages/Campaign'
import Content from './pages/Content'
import Analytics from './pages/Analytics'
import Marketing from './pages/Marketing'

import Notification from './pages/Notification'
import Signin from './pages/Signin'
import Earnings from './pages/Earnings'
import AccountDetails from './pages/AccountDetails'
import AccountUsers from './pages/AccountUsers'
import Addnewcustomer from './pages/Addnewcustomer'
import Customers from './pages/Customers'
import Settings from './pages/Settings/Settings'
const App = () => {
  return (
    <>

 
    <Routes>

<Route path='/campaign' element={<Campaign/>}/>
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/'  element={<Signin/>}/>
      <Route path='/content' element={<Content />}/>
      <Route path='/analytics' element={<Analytics />}/>
      <Route path='/marketing' element={<Marketing />}/>
      <Route path='/settings' element={<Settings/>}/>
      <Route path='/earnings' element={<Earnings/>}/>
      <Route path='/notification' element={<Notification />}/>
      <Route path='/accountdetails'  element={<AccountDetails/>}/>
      <Route path='/accountusers' element={<AccountUsers/>}/>
      <Route path='/addnewcustomer' element={<Addnewcustomer/>}  />
      <Route path='/customers' element={<Customers/>} />

<Route path='/user-management' element={<UserManagement/>} />
    </Routes>
  
    </>
  )
}

export default App
