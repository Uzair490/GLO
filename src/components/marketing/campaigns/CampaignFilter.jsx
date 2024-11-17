
import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";

const GET_ALL_CAMPAIGNS = gql`
  query AllCampaigns($date: String, $campaignStatus: Boolean!, $searchText: String, $campaignType: String!) {
    allCampaigns(input: { page: 1, date: $date, campaignStatus: $campaignStatus, searchText: $searchText, campaignType: $campaignType }) {
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

function CampaignFilter() {
  const [campaignType, setCampaignType] = useState("");
  const[isDropdownOpen,setDropdownOpen]=useState(false)

  const { loading, error, data } = useQuery(GET_ALL_CAMPAIGNS, {
    variables: { date: "", campaignStatus: true, searchText: "", campaignType },
  });

  const handleTypeChange = (event) => {
    setCampaignType(event.target.value);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <div className="relative inline-block text-left">
        <div>
          <button
            onClick={() => setDropdownOpen(!isDropdownOpen)}
            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {campaignType || "Select Campaign Type"}
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
              {/* Add more campaign types as needed */}
            </div>
          </div>
        )}
      </div>

      <ul>
        {data.allCampaigns.data.map((campaign) => (
          <li key={campaign.id}>
            <h2>{campaign.campaignName}</h2>
            <p>{campaign.description}</p>
            <p>Start Date: {campaign.startDate}</p>
            <p>End Date: {campaign.endDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CampaignFilter;
