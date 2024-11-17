import React from 'react'
import Layout from '../components/Layout'
 import Badge from '../assets/Badge.svg'
 import Green from '../assets/Green.svg'
 import LineChart from '../components/Linechart'
 import analytics from '../assets/analytics.svg'
 import Export from '../assets/Export.svg'
 import Date from '../assets/Date.svg'
 import All from '../assets/All.svg'
 import search from '../assets/search.svg'
 import Map from '../assets/Map.svg'
 import Growth from '../assets/Growth.svg'
 import TR from '../assets/TR.svg'
 import Activeuser from '../assets/Activeuser.svg'
 import Camp from '../assets/Camp.svg'
 import Totals from '../assets/Totals.svg'
 import DashboardDataComponent from '../components/DashboardDataComponent'
 import { gql,useQuery } from '@apollo/client'
import Analytic from './Analytic'
 const GET_DASHBOARD_DATA = gql`
    query GlAdmin {
        glAdmin {
            DashboardData {
                ... on TotalCountsResponse {
                    totalIndividualCustomers
                    percentageIndividualCustomerChange
                    totalEnterpriseCustomers
                    percentageEntCustomerChange
                    totalAdvisorCustomers
                    percentageAdvisorChange
                    todaysTotalAmount
                    percentageTotalAmountChange
                    totalActiveCustomers
                    percentageChange
                    totalActiveCampaigns
                    activeCampaignsPercentageChange
                    totalPosts
                    postChangePercentage
                }
                ... on Error {
                    status
                    message
                }
            }
        }
    }
`;
const Dashboard = () => {
  const { loading, error, data } = useQuery(GET_DASHBOARD_DATA);

  if (loading) return <p className="text-blue-600">Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  const dashboardData = data?.glAdmin?.DashboardData;

  if (dashboardData.__typename === "Error") {
      return (
          <div className="bg-red-100 p-4 rounded-lg text-red-600">
              <h3>Error {dashboardData.status}</h3>
              <p>{dashboardData.message}</p>
          </div>
      );
  }
  return (
    <Layout>
      <h1 className='text-[30px] font-semibold'>Welcome Jay</h1>
      <p className='text-[16px] font-normal'>here is what happening at Geolane  </p>
      <main className='flex gap-5 mt-4 '>
    <div className="border flex justify-between w-[33%] p-2  rounded-lg shadow-md">
    
    <div>
  <p className="text-gray-700 font-semibold">Total Revenue</p>
  <p className="text-xl  font-bold">{dashboardData.todaysTotalAmount}</p>
 
  <div className='flex gap-1 mt-2  '><p className='text-[#1A9882] text-sm font-semibold'>{dashboardData.percentageIndividualCustomerChange}</p><img src={Green} alt="error" /> <p className='text-[12px] mt-[1px] '>Added Today</p>
  </div>
  </div>
 
  <div><div><img src={TR} alt="error" className='w-[28px] h-[28px]'   /></div></div>
  </div>

  <div className="border flex justify-between w-[33%] p-2  rounded-lg shadow-md">
    
    <div>
  <p className="text-gray-700 font-semibold">Active Users</p>
  <p className="text-xl  font-bold">{dashboardData.totalActiveCustomers}</p>
 
  <div className='flex gap-1 mt-2  '><p className='text-[#1A9882] text-sm font-semibold'> {dashboardData.percentageChange}</p><img src={Green} alt="error" /> <p className='text-[12px] mt-[1px] '>Added Today</p>
  </div>
  </div>
 
  <div><div><img src={Activeuser} alt="error" className='w-[24px] h-[24px]'  /></div></div>
  </div>
  <div className="border flex justify-between w-[33%] p-2  rounded-lg shadow-md">
    
    <div>
  <p className="text-gray-700 font-semibold">Total Pin/Post</p>
  <p className="text-xl  font-bold">{dashboardData.totalPosts}</p>
 
  <div className='flex gap-1 mt-2  '><p className='text-[#1A9882] text-sm font-semibold'>{dashboardData.postChangePercentage}</p><img src={Green} alt="error" /> <p className='text-[12px] mt-[1px] '>Added Today</p>
  </div>
  </div>
 
  <div><div><img src={Totals} alt="error" className='w-[28px] h-[28px]'   /></div></div>
  </div>
  <div className="border flex justify-between w-[33%] p-2  rounded-lg shadow-md">
    
    <div>
  <p className="text-gray-700 font-semibold">Campaigns</p>
  <p className="text-xl  font-bold">{dashboardData.totalActiveCampaigns}</p>
 
  <div className='flex gap-1 mt-2  '><p className='text-[#1A9882] text-sm font-semibold'>{dashboardData.activeCampaignsPercentageChange}</p><img src={Green} alt="error" /> <p className='text-[12px] mt-[1px] '>Added Today</p>
  </div>
  </div>
 
  <div>
    <div>
    <img src={Camp} alt="error" className='w-[28px] h-[28px]'   />
  </div>
  <p></p>

  
  </div>
  </div>
  
  
  
</main>
<div className='flex w-full mt-6 gap-4'>
<section className='flex gap-4 w-[27%] flex-col'  >

<div className=' border shadow-lg p-4'>
  <h1 className='font-semibold text-[22px]'>Enterprise Users</h1>
  <div className='flex justify-between '><p className='text-[#9854FF] text-[25px] font-semibold'>{dashboardData.totalEnterpriseCustomers}</p>
  <p className='text-[#32D583] text font-semibold '>{dashboardData.percentageEntCustomerChange}</p></div>
</div>
<div className=' border shadow-lg p-4'>
  <h1 className='font-semibold text-[22px]'>Individual Users  </h1>
  <div className='flex justify-between '><p className='text-[#9854FF] text-[25px] font-semibold'>{dashboardData.totalIndividualCustomers}</p>
  <p className='text-[#32D583]  font-semibold '> {dashboardData.percentageIndividualCustomerChange}</p></div>
</div>
<div className=' border shadow-lg p-4'>
  <h1 className='font-semibold text-[22px]'>Advisors</h1>
  <div className='flex justify-between '><p className='text-[#9854FF] text-[25px] font-semibold'>{dashboardData.totalAdvisorCustomers}</p>
  <p className='text-[#FF675B]  font-semibold '> {dashboardData.percentageAdvisorChange}</p></div>
</div>
</section>

<div className='w-[70%]'>
<Analytic/>
</div>
<div>

</div>
</div>


   
    
<div className='flex w-full gap-10 justify-between'>
<div className='w-[70%]'>
<main className='flex  gap-10'>
<section className='flex  justify-between w-full border-white shadow-slate-500 py-4'>
       
       <div className='flex   pl-3' >
       
       <p className='text-[#22173D] text-[24px]'>Purchase History</p>
     </div>
     <div className='mt-1'>
     <div className='flex gap-5 '>
    
     
      <p className='button-style'>  <img src={Export} alt="error" className='w-3 h-3'  /> <p className='text-[12px] text-black'>Export </p> </p>
      <p className='button-style'>  <img src={Date} alt="error" className='w-3 h-3'  /> <p className='text-[12px] text-black'>Date</p> </p>
      <p className='button-style'>  <img src={All} alt="error" className='w-3 h-3'  /> <p className='text-[12px] text-black'>All</p> </p>
   
    </div>
    </div>
   
    </section>

   
    </main>

  <div className='w-full'>
    <div className='flex justify-between  reusable-table-header  '>
      <div className='w-full flex'>
      <p className='w-[35%]'>Customer </p>
      <p  className='w-[25%]'>Start Date</p>
      <p  className='w-[25%]'>End Date</p>
      <p  className='w-[15%] text-center'>Status</p>
      </div>
    </div>
    <div className='flex justify-between  reusable-table-cell  '>
      <div className='w-full flex'>
      <p className='w-[35%]'>John doe</p>
      <p className='w-[25%]'>20-sep-2000</p>
      <p className='w-[25%]'>20-sep-2000</p>
      <p className='w-[15%] text-center text-[14px] h-[25px] font-semibold bg-[#E9FAF7] text-[#1A9882]'>Active</p>
      </div>
      
    </div>
    
    </div>
    </div>
    <section className='border p-4  shadow-md  '>
      <div>
        <div className='flex gap-10'>
        <p className='text-[24px] font-semibold'>Customer Growth</p>
        <p className='text-[24px] font-semibold text-[#9854FF] '>1.5k</p>
        </div>
        <div className='flex gap-10'>
        <p className='mt-[-6px] w-[70%] text-[16px] font-normal'>Based on country</p>
        <p className='text-[16px] font-semibold text-[#9854FF] bg-[]'>20%</p>
        </div>

      </div>
      <img src={Map} alt="map" />
      <div className='flex w-full mt-3 justify-between'>
      <div className='flex gap-2'>
      <div>
        <img src={Growth} alt="error" />
      </div>

     <div>
      <p className='font-semibold text-[16px]'>USA</p>
      <p className='text-[12px] font-normal'>1240 Comments</p>

     </div>
     </div>
     <div className='mt-1'>80%</div>
     </div>
     
     <div className='flex w-full mt-3 justify-between'>
      <div className='flex gap-2'>
      <div>
        <img src={Growth} alt="error" />
      </div>

     <div>
      <p className='font-semibold text-[16px]'>Japan</p>
      <p className='text-[12px] font-normal'>1240 Comments</p>

     </div>
     </div>
     <div className='mt-1'>60%</div>
     </div>
     <div className='flex w-full mt-3 justify-between'>
      <div className='flex gap-2'>
      <div>
        <img src={Growth} alt="error" />
      </div>

     <div>
      <p className='font-semibold text-[16px]'>France</p>
      <p className='text-[12px] font-normal'>1240 Comments</p>

     </div>
     </div>
     <div className='mt-1'>50%</div>
     </div>
     
    </section>
   
    </div>
   
    
    </Layout>
  )
}

export default Dashboard
