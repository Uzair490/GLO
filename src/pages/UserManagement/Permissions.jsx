import React from 'react'
import Layout from '../../components/Layout'
import Breadcrumbs from './Breadcrumbs'
import Pagecheckbox from './Pagecheckbox'
const Permissions = () => {
  return (
    <Layout>
    <section className='mt-4'>
     <Breadcrumbs/>
     <Pagecheckbox/>
    </section>
    </Layout>
  )
}

export default Permissions
