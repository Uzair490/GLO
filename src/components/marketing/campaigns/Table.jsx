import React, { useState } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import { NavLink, useNavigate } from 'react-router-dom';
import pencil from '../../../assets/pencil.svg';
import { EyeIcon, TrashIcon } from '@heroicons/react/24/outline';
import share from '../../../assets/share.svg';

const GET_ALL_CAMPAIGNS = gql`
  query AllCampaigns($date: String, $searchText: String) {
    allCampaigns(input: { page: 1, date: $date, searchText: $searchText }) {
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

const DELETE_CAMPAIGNS = gql`
  mutation DeleteCampaign($id: String!) {
    glAdmin {
      updateCampaign(input: { id: $id, isDeleted: true }) {
        ... on CampaignResponse {
          status
          message
          campaign {
            id
            isDeleted
            deletedAt
          }
        }
        ... on Error {
          status
          message
        }
      }
    }
  }
`;

const Table = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState("");
  const [searchText, setSearchText] = useState("");
  const { loading, error, data, refetch } = useQuery(GET_ALL_CAMPAIGNS, {
    variables: { date: selectedDate, searchText }, // Pass the selected date and search text as variables
  });

  const [deleteCampaign] = useMutation(DELETE_CAMPAIGNS, {
    refetchQueries: [{ query: GET_ALL_CAMPAIGNS, variables: { date: selectedDate, searchText } }],
  });

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;

  const campaigns = data?.allCampaigns?.campaign || data?.allCampaigns?.data || [];

  const handleDelete = async (campaignId) => {
    const confirmed = window.confirm("Are you sure you want to delete this campaign?");
    if (!confirmed) return;

    try {
      const response = await deleteCampaign({ variables: { id: String(campaignId) } });
      const result = response?.data?.glAdmin?.updateCampaign;

      if (result?.status) {
        console.log("Campaign deleted successfully:", result.message);
      } else {
        console.error("Error:", result?.message);
      }
    } catch (error) {
      console.error("Error deleting campaign:", error);
    }
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    refetch(); // Refetch campaigns with the new date
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    refetch(); // Refetch campaigns with the new search text
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-4">
        <label htmlFor="date" className="font-semibold">Filter by Date:</label>
        <input
          type="date"
          id="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="border rounded p-1"
        />
        <label htmlFor="search" className="font-semibold ml-4">Search:</label>
        <input
          type="text"
          id="search"
          value={searchText}
          onChange={handleSearchChange}
          placeholder="Search by name"
          className="border rounded p-1 ml-2"
        />
      </div>
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
        <div key={campaign.id} className="flex flex-wrap sm:flex-nowrap border-b border-gray-300 py-2">
          <div className="w-full pt-1 sm:w-[20%]">
            <div className="flex items-center gap-2 pl-3">
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
            <p className={`bg-[#FFF0EA] rounded-md font-semibold pl-[8px] text-[11px] pt-1 w-[83%] p-[2px] ${campaign.publishStatus ? 'text-green-700' : 'text-[#F97316]'}`}>
              {campaign.publishStatus ? 'Published' : 'Unpublished'}
            </p>
          </div>
          <div className="w-[50%] flex justify-center gap-2 sm:w-[14%] pl-1 pt-1">
            <img
              src={pencil}
              className="h-3 w-3 mt-[3px] text-gray-500 cursor-pointer"
              aria-hidden="true"
              onClick={() => navigate(`/update-campaign/${campaign.id}`)}
            />
            <EyeIcon
              className="h-4 w-4 text-gray-500 cursor-pointer"
              aria-hidden="true"
              onClick={() => navigate(`/campaign-detail/${campaign.id}`)} // Navigate to campaign details
            />
            <TrashIcon
              className="h-4 w-4 text-gray-500 cursor-pointer"
              aria-hidden="true"
              onClick={() => handleDelete(campaign.id)} // Call the delete function
            />
          </div>
          <div className="w-[50%] flex justify-center sm:w-[14%]">
            <NavLink to="/marketing/user-engagement">
              <div className="flex ml-[-24px] py-[5px] px-2 gap-2 text-[#9854FF] border border-[#9854FF] rounded">
                <img src={share} alt="error" className="h-3 w-3 mt-1" />
                <p className="font-semibold text-[12px]">Share</p>
              </div>
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Table;
