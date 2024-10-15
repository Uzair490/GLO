import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import Layout from "../../Layout";

// GraphQL Mutation for creating a campaign
const CREATE_CAMPAIGN_MUTATION = gql`
  mutation CreateCampaign($input: CreateCampaignInput!) {
    glAdmin {
      createCampaign(input: $input) {
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
      }
    }
  }
`;

const CreateCampaignForm = () => {
  const [formData, setFormData] = useState({
    campaignName: "",
    targetAudience: "",
    description: "",
    startDate: "",
    endDate: "",
    publishStatus: false,
    activeStatus: false,
    campaignType: "",
    imageUrls: [""],
    videoUrls: [""],
    audioUrls: [""],
  });

  const [createCampaign, { data, loading, error }] = useMutation(CREATE_CAMPAIGN_MUTATION);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const formattedData = {
      ...formData,
      startDate: new Date(formData.startDate).toISOString(),
      endDate: new Date(formData.endDate).toISOString(),
    };
    createCampaign({ variables: { input: formattedData } })
      .then((response) => {
        console.log("Campaign created:", response.data.glAdmin.createCampaign);
      })
      .catch((err) => {
        console.error("Error creating campaign:", err);
      });
  };

  return (

    <Layout>
    <div className="">
      <h2 className="text-2xl font-bold mb-4">Create Campaign</h2>
      <form onSubmit={handleSubmit}>
        <main className="border shadow-lg">
        <section className="flex gap-4 w-full"> 
        <div className="mb-4 w-[33%]">
          <label className="block text-gray-700">Campaign Name</label>
          <input
            type="text"
            name="campaignName"
            value={formData.campaignName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>
        <div className="mb-4 w-[33%]">
          <label className="block text-gray-700">Target Audience</label>
          <input
            type="text"
            name="targetAudience"
            value={formData.targetAudience}
            onChange={handleChange}
            className="mt-1 w-full p-2  border rounded"
            required
          />
        </div>
        <div className="mb-4 w-[33%]">
          <label className="block text-gray-700">Campaign Type</label>
          <input
            type="text"
            name="campaignType"
            value={formData.campaignType}
            onChange={handleChange}
            className="mt-1 p-2 w-full  border rounded"
            required
          />
        </div>
       
        </section>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>
        <section className="flex ">

        <div className="mb-4">
          <label className="block text-gray-700">Start Date</label>
          <input
            type="datetime-local"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">End Date</label>
          <input
            type="datetime-local"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Schedule Date</label>
          <input
            type="datetime-local"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>
        </section>
        </main>
        <div className="mb-4">
          <label className="block text-gray-700">Image URL</label>
          <input
            type="url"
            name="imageUrls"
            value={formData.imageUrls[0]}
            onChange={(e) =>
              setFormData({ ...formData, imageUrls: [e.target.value] })
            }
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>
      
        <div className="mb-4">
          <label className="block text-gray-700">Audio URL</label>
          <input
            type="url"
            name="audioUrls"
            value={formData.audioUrls[0]}
            onChange={(e) =>
              setFormData({ ...formData, audioUrls: [e.target.value] })
            }
            className="mt-1 p-2 w-full border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Publish Status</label>
          <input
            type="checkbox"
            name="publishStatus"
            checked={formData.publishStatus}
            onChange={handleChange}
            className="mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Active Status</label>
          <input
            type="checkbox"
            name="activeStatus"
            checked={formData.activeStatus}
            onChange={handleChange}
            className="mt-1"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
          disabled={loading}
        >
          {loading ? "Creating..." : "Create Campaign"}
        </button>
      </form>
      {error && (
        <p className="text-red-500 mt-4">
          Error: {error.graphQLErrors?.[0]?.message || error.message}
        </p>
      )}
      {data && (
        <p className="text-green-500 mt-4">{data.glAdmin.createCampaign.message}</p>
      )}
    </div>
    </Layout>
  );
};

export default CreateCampaignForm;



   
