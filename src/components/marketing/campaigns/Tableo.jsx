import React, { useState } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import { NavLink, useNavigate } from 'react-router-dom';
import pencil from '../../../assets/pencil.svg';
import { EyeIcon, TrashIcon } from '@heroicons/react/24/outline';
import share from '../../../assets/share.svg';
import Bulk from '../../../assets/Bulk.svg';

// GraphQL Queries and Mutations
const GET_ALL_CAMPAIGNS = gql`
  query AllCampaigns($date: String, $searchText: String, $campaignStatus: Boolean!, $campaignType: String!) {
    allCampaigns(input: { page: 1, date: $date, searchText: $searchText, campaignStatus: $campaignStatus, campaignType: $campaignType }) {
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
          publishedAt
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
          publishedAt
        }
      }
    }
  }
`;

const DELETE_CAMPAIGNS = gql`
  mutation DeleteCampaign($id: String!) {
    deleteCampaign(id: $id) {
      status
      message
    }
  }
`;

const Tableo = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState("");
  const [searchText, setSearchText] = useState("");
  const [campaignStatus, setCampaignStatus] = useState(true);
  const [campaignType, setCampaignType] = useState(""); 

  const { loading, error, data, refetch } = useQuery(GET_ALL_CAMPAIGNS, {
    variables: { date: selectedDate, searchText, campaignStatus, campaignType },
  });

  const [deleteCampaign] = useMutation(DELETE_CAMPAIGNS, {
    refetchQueries: [{ query: GET_ALL_CAMPAIGNS, variables: { date: selectedDate, searchText, campaignStatus, campaignType } }],
  });

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;

  const campaigns = data?.allCampaigns?.campaign || data?.allCampaigns?.data || [];

  const handleDelete = async (campaignId) => {
    const confirmed = window.confirm("Are you sure you want to delete this campaign?");
    if (!confirmed) return;

    try {
      const response = await deleteCampaign({ variables: { id: String(campaignId) } });
      const result = response?.data?.deleteCampaign;

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
    refetch();
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    refetch();
  };

  const handleStatusChange = (e) => {
    setCampaignStatus(e.target.value === "true");
    refetch();
  };

  const handleTypeChange = (e) => {
    setCampaignType(e.target.value);
    refetch();
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
        <label htmlFor="status" className="font-semibold ml-4">Status:</label>
        <select
          id="status"
          onChange={handleStatusChange}
          value={campaignStatus.toString()}
          className="border rounded p-1 ml-2"
        >
          <option value="true">Published</option>
          <option value="false">Unpublished</option>
        </select>

        <label htmlFor="type" className="font-semibold ml-4">Campaign Type:</label>
        <select
          id="type"
          onChange={handleTypeChange}
          value={campaignType}
          className="border rounded p-1 ml-2"
        >
          <option value="">All Campaigns</option>
          <option value="promotional">Promotional Campaign</option>
          <option value="user_engagement">User Engagement Campaign</option>
          <option value="advertising">Advertising Campaign</option>
          {/* Add more campaign types as needed */}
        </select>
      </div>
      {/* Table Header */}
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
            <p className={`bg-[#FFF0EA] rounded-md font-semibold pl-[8px] text-[#C45129]`}>
              {campaign.activeStatus ? 'Active' : 'Inactive'}
            </p>
          </div>
          <div className="w-[50%] sm:w-[14%] mt-2 sm:mt-0">
            <div className="flex justify-around">
              <button onClick={() => navigate(`/campaign/${campaign.id}`)}>
                <EyeIcon className="w-6 h-6 text-[#C45129]" />
              </button>
              <button onClick={() => handleDelete(campaign.id)}>
                <TrashIcon className="w-6 h-6 text-red-600" />
              </button>
              <NavLink to={`/edit-campaign/${campaign.id}`}>
                <img src={pencil} alt="edit" className="h-6" />
              </NavLink>
            </div>
          </div>
          <div className="w-[50%] sm:w-[14%] mt-2 sm:mt-0">
            <img src={share} alt="shares" className="h-6" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tableo;
