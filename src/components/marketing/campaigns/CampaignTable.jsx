import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';
import { PencilIcon, EyeIcon, TrashIcon } from '@heroicons/react/24/outline'; // Assuming you're using Heroicons for icons

// GraphQL Query
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
          isDeleted
          deletedAt
          updatedAt
          createdAt
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
          isDeleted
          deletedAt
          updatedAt
          createdAt
          imageUrls
          videoUrls
          audioUrls
        }
      }
    }
  }
`;

const CampaignTable = () => {
  const { loading, error, data } = useQuery(GET_ALL_CAMPAIGNS);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;

  const campaigns = data?.allCampaigns?.campaign || data?.allCampaigns?.data || [];

  return (
    <div className="container mx-auto p-4">
      <div className="hidden sm:flex border-b border-gray-300 py-2 bg-gray-100">
        <div className="w-[20%] pl-3">
          <p className="font-semibold">Campaign</p>
        </div>
        <div className="w-[14%]">
          <p className="font-semibold">Performance</p>
        </div>
        <div className="w-[14%]">
          <p className="font-semibold">Start Date</p>
        </div>
        <div className="w-[14%]">
          <p className="font-semibold">End Date</p>
        </div>
        <div className="w-[10%]">
          <p className="font-semibold">Status</p>
        </div>
        <div className="w-[14%] text-center">
          <p className="font-semibold">Actions</p>
        </div>
        <div className="w-[14%]">
          <p className="font-semibold pl-[19px]">Shares</p>
        </div>
      </div>
      {campaigns.map((campaign) => (
        <div
          key={campaign.id}
          className="flex flex-wrap sm:flex-nowrap border-b border-gray-300 py-2"
        >
          <div className="w-full pt-1 sm:w-[20%]">
            <div className="flex items-center gap-2 pl-3">
              {/* Placeholder for campaign image */}
              <img
                src={campaign.imageUrls?.[0] || 'default-avatar.png'}
                alt="campaign"
                className="h-6"
              />
              <span className="text-[14px] font-semibold">
                {campaign.campaignName}
              </span>
            </div>
          </div>
          <div className="w-[50%] sm:w-[14%] mt-2 sm:mt-0">
            <p className="text-[14px] pt-1">{campaign.impressionsCount} impressions</p>
          </div>
          <div className="w-[50%] sm:w-[14%] mt-2 sm:mt-0">
            <p className="text-[14px] pt-1">{new Date(campaign.startDate).toLocaleDateString()}</p>
          </div>
          <div className="w-[50%] sm:w-[14%] mt-2 sm:mt-0">
            <p className="text-[14px] pt-1">{new Date(campaign.endDate).toLocaleDateString()}</p>
          </div>
          <div className="w-[50%] sm:w-[10%] mt-2 sm:mt-0">
            <p
              className={`bg-[#FFF0EA] rounded-md font-semibold pl-[8px] text-[11px] pt-1 w-[68%] p-[2px] ${
                campaign.publishStatus ? 'text-green-700' : 'text-[#F97316]'
              }`}
            >
              {campaign.publishStatus ? 'Published' : 'Unpublished'}
            </p>
          </div>
          <div className="w-[50%] flex justify-center gap-2 sm:w-[14%] pl-1 pt-1">
            <PencilIcon className="h-4 w-4 text-gray-500 cursor-pointer" />
            <EyeIcon className="h-4 w-4 text-gray-500 cursor-pointer" />
            <TrashIcon className="h-4 w-4 text-gray-500 cursor-pointer" />
          </div>
          <div className="w-[50%] flex justify-center sm:w-[14%]">
            <Link to={`/marketing/${campaign.campaignName}`}>
              <div className="flex py-[5px] px-2 gap-2 text-[#9854FF] border border-[#9854FF] rounded">
                <img src="share-icon.png" alt="share" className="h-3 w-3 mt-1" />
                <p className="font-semibold text-[12px]">Share</p>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CampaignTable;