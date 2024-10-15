import React from 'react'
import { useEffect } from 'react'
import Layout from '../../components/Layout'
import Settingbread from './Settingbread'
import { useNavigate } from 'react-router-dom'
const Settings = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to admin users by default when the component mounts
    navigate('/ProfileSettings');
  }, [navigate]);

  return (
    <Layout>
    <Settingbread/>
    </Layout>
  )
}

export default Settings

