import { useQuery, useMutation, gql } from "@apollo/client";
import { useState } from "react";

const ALL_CAMPAIGNS_QUERY = gql`
  query AllCampaigns {
    allCampaigns(input: { campaignType: null }) {
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
          customerRef
          customerType
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
          customerRef
          customerType
        }
      }
    }
  }
`;

const UPDATE_CAMPAIGN_MUTATION = gql`
  mutation UpdateCampaign($id: ID!, $campaignName: String!) {
    glAdmin {
      updateCampaignById(input: { id: $id, campaignName: $campaignName }) {
        ... on CampaignByIdResponse {
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
            customerRef
            customerType
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

const CampaignManager = () => {
  const { loading, error, data, refetch } = useQuery(ALL_CAMPAIGNS_QUERY);
  const [updateCampaign] = useMutation(UPDATE_CAMPAIGN_MUTATION);

  const [campaignId, setCampaignId] = useState("");
  const [campaignName, setCampaignName] = useState("");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleUpdate = async () => {
    try {
      const result = await updateCampaign({
        variables: {
          id: campaignId,
          campaignName: campaignName,
        },
      });
      console.log("Updated Campaign:", result.data);
      refetch(); // Fetch the latest data after update
    } catch (updateError) {
      console.error("Update Error:", updateError);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Campaign Manager</h1>
      <div className="mb-4">
        <label className="block mb-2">Campaign ID:</label>
        <input
          type="text"
          value={campaignId}
          onChange={(e) => setCampaignId(e.target.value)}
          className="border rounded p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Campaign Name:</label>
        <input
          type="text"
          value={campaignName}
          onChange={(e) => setCampaignName(e.target.value)}
          className="border rounded p-2 w-full"
        />
      </div>
      <button
        onClick={handleUpdate}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Update Campaign
      </button>
      <h2 className="text-lg font-semibold mt-8">All Campaigns:</h2>
      <ul className="list-disc pl-5">
        {data.allCampaigns?.campaign.map((campaign) => (
          <li key={campaign.id}>
            {campaign.campaignName} ({campaign.id})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CampaignManager;
