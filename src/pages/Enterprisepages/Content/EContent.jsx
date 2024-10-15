import React from 'react'
//import Layout from '../../components/Layout'
import { useEffect } from 'react'
import Contentbread from './Contentbread'
import { useNavigate } from 'react-router-dom'
import ELayout from '../../../components/EnterpriseComponent/ELayout'

const EContent = () => {
    const navigate = useNavigate();

  useEffect(() => {
 
    navigate('/all');
  }, [navigate]);
  return (
    <ELayout>
<Contentbread/>

    </ELayout>
  )
}

export default EContent
