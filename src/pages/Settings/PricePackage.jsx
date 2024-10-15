import React from 'react'
import Settingbread from './Settingbread'
import Layout from '../../components/Layout'
import PriceTable from './PriceTable'
const PricePackage = () => {
  return (
    <Layout>
      <div className='mt-4'>
        <Settingbread/>

        </div>
      <PriceTable/>
    </Layout>
  )
}

export default PricePackage
