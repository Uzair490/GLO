import React, { useState } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import { NavLink, useNavigate } from 'react-router-dom';
import pencil from '../../../assets/pencil.svg';
import { EyeIcon, TrashIcon } from '@heroicons/react/24/outline';
import share from '../../../assets/share.svg';
import search from '../../../assets/search.svg'
import Bulk from '../../../assets/Bulk.svg'
import Filte from '../../../assets/Filte.svg'
import Filterto from '../../../assets/Filterto.svg'
import Export from '../../../assets/Export.svg'

import filter from '../../../assets/filter.svg'
import Dropdown from './Dropdown';
const GET_ALL_CAMPAIGNS = gql`
  query AllCampaigns($date: String,$campaignStatus: Boolean!, $searchText: String,$campaignType: String!) {
    allCampaigns(input: { page: 1, date: $date,campaignStatus: $campaignStatus, searchText: $searchText,campaignType: $campaignType }) {
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

const Tableo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState("");
  const [searchText, setSearchText] = useState("");
  const [campaignStatus, setCampaignStatus] = useState(true);
  const [campaignType, setCampaignType] = useState(""); 
  const { loading, error, data, refetch } = useQuery(GET_ALL_CAMPAIGNS, {
    variables: { date: selectedDate, searchText,campaignStatus,campaignType}, // Pass the selected date and search text as variables
  });

  const [deleteCampaign] = useMutation(DELETE_CAMPAIGNS, {
    refetchQueries: [{ query: GET_ALL_CAMPAIGNS, variables: { date: selectedDate, searchText,campaignStatus,campaignType } }],
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
     <div className='flex gap-2 mb-4 justify-between mt-4 '>
<div className="flex rounded-lg h-9  w-[27%] mt-1 items-center pr-2 border p-[6px] ">
  <input
    type="text"
    className="flex-1 placeholder:text-[15px] pl-2  outline-none "
    placeholder="Search Campaigns"
    value={searchText}
    onChange={handleSearchChange}
  />
  <img src={search} alt="error" className="w-[18px]   mt-1 h-[20px]" />
</div>

   
<div className='flex w-[70%] gap-4'>

 <p className=' my-1 button-style'>  <img src={Export}  alt="error" className='w-3 h-2'  /> <p className='text-[12px] text-black'>Export </p> </p>
 <p className=' my-1 button-style'>  <img src={filter}  alt="error" className='w-3 h-2'  /> <p className='text-[12px] text-black'>Filters</p> </p>

 <div className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          onChange={handleStatusChange}
  value={campaignStatus.toString()}
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Dropdown
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06 0L10 10.44l3.71-3.23a.75.75 0 011.04 1.14l-4.25 3.5a.75.75 0 01-1.04 0l-4.25-3.5a.75.75 0 010-1.14z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a
            value="true"
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Option 1
            </a>
            <a value="false"
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Option 2
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Option 3
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Option 4
            </a>
          </div>
        </div>
      )}
    </div>
<div>
 
 <select
  id="status"
  onChange={handleStatusChange}
  value={campaignStatus.toString()}
 
>
  
  <option value="" disabled>
    Status
  </option>
  <option value="true">Published</option>
  <option value="false">Unpublished</option>
</select>
</div>

 
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
<img src={Bulk} alt="Bulk" className='h-4 w-4' />
   
        <input
          type="date"
          id="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="border rounded p-1"
        />

 </div>
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
              onClick={() => navigate(`/campaign-detail/${campaign.id}`)} 
            />
            <TrashIcon
              className="h-4 w-4 text-gray-500 cursor-pointer"
              aria-hidden="true"
              onClick={() => handleDelete(campaign.id)} 
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

export default Tableo;
