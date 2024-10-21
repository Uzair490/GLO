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
    <Layout>
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center">{campaign.campaignName}</h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Target Audience:</label>
          <p className="mt-1 text-gray-800">{campaign.targetAudience}</p>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Description:</label>
          <p className="mt-1 text-gray-800">{campaign.description}</p>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Start Date:</label>
          <p className="mt-1 text-gray-800">{new Date(campaign.startDate).toLocaleDateString()}</p>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">End Date:</label>
          <p className="mt-1 text-gray-800">{new Date(campaign.endDate).toLocaleDateString()}</p>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Campaign Type:</label>
          <p className="mt-1 text-gray-800">{campaign.campaignType}</p>
        </div>
        <div className="flex w-[50%] flex-col"     onChange={(e) => handleFileChange(e, 'imageUrls')}>
            <p className='pb-1 text-[16px] font-normal'>Photos</p>
            <div className="flex flex-col items-center border border-gray-300 p-2 rounded-md">
            {campaign.imageUrls.length > 0 ? (
            <div className="flex gap-4 mt-2">
              {campaign.imageUrls.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`Campaign Image ${index + 1}`}
                  className="h-40 w-40 object-cover rounded-lg shadow"
                />
              ))}
            </div>
          ) : (
            <p className="mt-2 text-gray-600">No images available.</p>
          )}
              <label htmlFor="imageLo" className="flex items-center justify-center h-full w-full cursor-pointer">
                <input
                  type="file"
                  id="imageLo"
                  className="hidden"
                  accept="image/*" 
                
                />
                <span className=" text-[14px] font-normal ">Drag and drop logo image here or click add <span className='flex justify-center'>image</span></span>
              </label>
              <button
                   
                    className="mt-2 bg-[#FAF5FF] text-[#9854FF] text-[14px] mb-2 px-[14px] py-[7px] rounded-md"
                  >
                    Add Image
                  </button>
            </div>
          </div>
        {/* Displaying Images */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Images:</label>
          {campaign.imageUrls.length > 0 ? (
            <div className="flex gap-4 mt-2">
              {campaign.imageUrls.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`Campaign Image ${index + 1}`}
                  className="h-40 w-40 object-cover rounded-lg shadow"
                />
              ))}
            </div>
          ) : (
            <p className="mt-2 text-gray-600">No images available.</p>
          )}
        </div>

        {/* Displaying Videos */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Videos:</label>
          {campaign.videoUrls.length > 0 ? (
            <div className="flex gap-4 mt-2">
              {campaign.videoUrls.map((url, index) => (
                <video key={index} controls className="h-40 w-40 rounded-lg shadow">
                  <source src={url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ))}
            </div>
          ) : (
            <p className="mt-2 text-gray-600">No videos available.</p>
          )}
        </div>

        {/* Displaying Audios */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Audio:</label>
          {campaign.audioUrls.length > 0 ? (
            <div className="flex gap-4 mt-2">
              {campaign.audioUrls.map((url, index) => (
                <audio key={index} controls className="h-20 rounded-lg shadow">
                  <source src={url} type="audio/mpeg" />
                  Your browser does not support the audio tag.
                </audio>
              ))}
            </div>
          ) : (
            <p className="mt-2 text-gray-600">No audio files available.</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CampaignDetail;
