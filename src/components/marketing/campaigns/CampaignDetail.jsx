import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';
import Layout from '../../Layout';

const GET_ALL_CAMPAIGNS = gql`
  query AllCampaigns {
    allCampaigns(input: { page: 1 }) {
      ... on CampaignResponse {
        status
        message
        campaign {
          id
          campaignName
          targetAudience
          description
          startDate
          endDate
          publishStatus
          activeStatus
          impressionsCount
          clicksCount
          earning
          campaignType
          imageUrls
          videoUrls
          audioUrls
        }
      }
      ... on Error {
        status
        message
      }
      ... on PaginatedCampaignList {
        status
        message
        page
        totalCount
        data {
          id
          campaignName
          targetAudience
          description
          startDate
          endDate
          publishStatus
          activeStatus
          impressionsCount
          clicksCount
          earning
          campaignType
          imageUrls
          videoUrls
          audioUrls
        }
      }
    }
  }
`;

const CampaignDetail = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_ALL_CAMPAIGNS);

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (error) {
    console.error(error);
    return <p className="text-red-500 text-center">Error: {error.message}</p>;
  }

  const campaign = data.allCampaigns.data.find(camp => camp.id === id);

  if (!campaign) return <p className="text-center">No campaign found.</p>;

  return (
    <Layout className="max-w-3xl mx-auto  bg-white shadow-md rounded-lg mt-10">
      <h1 className='mt-12 font-semibold'>Marketing</h1>
      <div className="container mx-auto  bg-white ">
        
        <main className='border shadow-md rounded-lg p-4'>
          <p className='text-[18px] font-semibold'>General Information</p>
          <section className='flex gap-4 w-full'>
            <div className='w-[33%] my-2'>
              <label className="block text-sm font-medium text-gray-700 mb-2">Campaign Name</label>
              <input
                type="text"
                name="campaignName"
                value={campaign.campaignName}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
                readOnly
              />
            </div>
            <div className='w-[33%] my-2'>
              <label className="block text-sm font-medium text-gray-700 mb-2">Target Audience</label>
              <input
                type="text"
                name="targetAudience"
                value={campaign.targetAudience}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
                readOnly
              />
            </div>
            <div className='w-[33%] my-2'>
              <label className="block text-sm font-medium text-gray-700 mb-2">Campaign Type</label>
              <input
                value={campaign.campaignType}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                readOnly
              />
            </div>
          </section>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              name="description"
              value={campaign.description}
              className="mt-1 h-10 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              rows="4"
              required
              readOnly
            />
          </div>
          <section className='flex gap-4 mt-2'>
            <div className='w-[50%]'>
              <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
              <input
                value={new Date(campaign.startDate).toLocaleDateString()}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
                readOnly
              />
            </div>
            <div className='w-[50%]'>
              <label className="block text-sm font-medium mb-1 text-gray-700">End Date</label>
              <input
                value={new Date(campaign.endDate).toLocaleDateString()}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
                readOnly
              />
            </div>
          </section>
        </main>

       

      </div>
      <main className='border mt-7 shadow-md rounded-lg p-4'>
          <p className='text-[18px] font-semibold'>Media</p>
          <section className='flex gap-6 mt-2'>
          
            <div className="flex w-[50%] flex-col">
              <p className='pb-1 text-[16px] font-normal'>Photos</p>
              <div className="flex flex-col items-center border border-gray-300 p-2 rounded-md">
                <img
                  
                  alt="Uploaded Logo"
                  className="mb-2 w-10 h-10 object-cover"
                />
                <label htmlFor="imageLo" className="flex items-center justify-center h-full w-full cursor-pointer">
                  <input
                    type="file"
                 
                    className="hidden"
                    accept="image/*"
                   
                  />
                  
                </label>
               
              </div>
            </div>

          
            <div className="flex w-[50%] flex-col">
              <p className='pb-1 text-[16px] font-normal'>Videos</p>
              <div className="flex flex-col items-center border border-gray-300 p-2 rounded-md">
                <img
                
                  alt="Uploaded Video"
                  className="mb-2 w-10 h-10 object-cover"
                />
                <label htmlFor="videoUpload" className="flex items-center justify-center h-full w-full cursor-pointer">
                  <input
                    type="file"
                   
                    className="hidden"
                    accept="video/*"
                   
                  />
                 
                </label>
               
              </div>
            </div>

            {/* Audio Upload Section */}
            <div className="flex w-[50%] flex-col">
              <p className='pb-1 text-[16px] font-normal'>Audio</p>
              <div className="flex flex-col items-center border border-gray-300 p-2 rounded-md">
                <img
                
                  alt="Uploaded Audio"
                  className="mb-2 w-10 h-10 object-cover"
                />
                <label htmlFor="audioUpload" className="flex items-center justify-center h-full w-full cursor-pointer">
                  <input
                    type="file"
                  
                    className="hidden"
                    accept="audio/*"
                   
                  />
                 
                </label>
               
              </div>
            </div>
          </section>
        </main>
    </Layout>
  );
};

export default CampaignDetail;
