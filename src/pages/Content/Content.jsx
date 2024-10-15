import React from 'react'
import Layout from '../../components/Layout'
import { useEffect } from 'react'
import Contentbread from './Contentbread'
import { useNavigate } from 'react-router-dom'
const Content = () => {
    const navigate = useNavigate();

  useEffect(() => {
 
    navigate('/all');
  }, [navigate]);
  return (
    <Layout>
<Contentbread/>

    </Layout>
  )
}

export default Content
