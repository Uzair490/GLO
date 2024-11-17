import React, { useState } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import { NavLink, useNavigate } from 'react-router-dom';
import pencil from '../../../assets/pencil.svg';
import { EyeIcon, TrashIcon } from '@heroicons/react/24/outline';
import share from '../../../assets/share.svg';
import search from '../../../assets/search.svg'

import CampaignFilter from './CampaignFilter'
import Export from '../../../assets/Export.svg'

import filter from '../../../assets/filter.svg'

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
  const handleStatusChange = (status) => {
    setCampaignStatus(status);
    setIsOpen(false); 
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const[isDropdownOpen,setDropdownOpen]=useState(false)
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState("");
  const [searchText, setSearchText] = useState("");
  const [campaignStatus, setCampaignStatus] = useState(true);
  const [campaignType, setCampaignType] = useState(""); 
  const { loading, error, data, refetch } = useQuery(GET_ALL_CAMPAIGNS, {
    variables: { date: selectedDate, searchText,campaignStatus,campaignType}, 
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
 <p className='  p-[6px] w-[75px] flex items-center gap-2;'>  <img src={filter}  alt="error" className='w-3 h-2'  /> <p className='text-[12px] text-black'>Filters</p> </p>

<div className="relative inline-block text-left">
      <div  className='mt-1 '>
        <button
          onClick={toggleDropdown} 
         className="flex border py-[6px] text-[14px] text-[#667085] rounded-lg px-3"
        >
          Status
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
            <p
           
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
           
              onClick={() => handleStatusChange(true)}
            >
            Active Campaigns
            </p>
            <p
           
              className="block px-4 py-2 hover:bg-black text-sm text-gray-700"
           
              onClick={() => handleStatusChange(true)}
            >
              Published Campaigns
            </p>
            <p
            
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            
              onClick={() => handleStatusChange(false)}
            >
              Unpublished Campaigns
            </p>
          </div>
        </div>
      )}

     
    </div>


 
    <div>
      <div className="relative inline-block text-left">
        <div>
          <button
            onClick={() => setDropdownOpen(!isDropdownOpen)}
             className="flex border py-[6px] text-[14px] text-[#667085] rounded-lg px-3 mt-1"
          >
            {campaignType || "Select Campaign"}
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

        {isDropdownOpen && (
          <div className="absolute right-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <p
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => handleTypeChange({ target: { value: "promotional" } })}
              >
                Promotional Campaign
              </p>
              <p
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => handleTypeChange({ target: { value: "user_engagement" } })}
              >
                User Engagement Campaign
              </p>
              <p
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => handleTypeChange({ target: { value: "advertising" } })}
              >
                Advertising Campaign
              </p>
             
            </div>
          </div>
        )}
      </div>

    
    </div>
    
    <div className="relative inline-block text-left">
      <div  className='mt-1 '>
        <button
          onClick={toggleDropdown} 
         className="flex border py-[6px] text-[14px] text-[#667085] rounded-lg px-3"
        >
          Date
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
           
            
            <p
            
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onChange={handleDateChange}
              value={selectedDate}
            >
            Select date
            </p>
          </div>
        </div>
      )}

     
    </div>
  
      { /* <input
          type="date"
          id="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="border rounded p-1"
        />*/ }

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
            <p className={`bg-[#E9FAF7] rounded-md font-semibold pl-[8px] text-[11px] pt-1 w-[73%] p-[4px] ${campaign.publishStatus ? 'text-[#1A9882]' : 'text-[#F97316]'}`}>
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
      <CampaignFilter/>
    </div>
  );
};

export default Tableo;
