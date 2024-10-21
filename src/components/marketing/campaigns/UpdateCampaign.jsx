import React, { useEffect, useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client'; // Import useQuery for fetching campaign data
import { UPDATE_CAMPAIGN } from './queries';
import { GET_ALL_CAMPAIGNS } from './queries';


const CampaignUpdate = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_ALL_CAMPAIGNS);
  const [updateCampaign] = useMutation(UPDATE_CAMPAIGN);

  const [campaignName, setCampaignName] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [publishStatus, setPublishStatus] = useState('');
  const [activeStatus, setActiveStatus] = useState('');
  const [imageUrls, setImageUrls] = useState([]);
  const [videoUrls, setVideoUrls] = useState([]);
  const [audioUrls, setAudioUrls] = useState([]);

  useEffect(() => {
    if (data) {
      const campaign = data.allCampaigns.data.find(camp => camp.id === id);
      if (campaign) {
        setCampaignName(campaign.campaignName);
        setTargetAudience(campaign.targetAudience);
        setDescription(campaign.description);
        setStartDate(campaign.startDate.split('T')[0]); // Format to YYYY-MM-DD
        setEndDate(campaign.endDate.split('T')[0]);     // Format to YYYY-MM-DD
        setPublishStatus(campaign.publishStatus.toString()); // Convert boolean to string
        setActiveStatus(campaign.activeStatus.toString());   // Convert boolean to string
        setImageUrls(campaign.imageUrls);
        setVideoUrls(campaign.videoUrls);
        setAudioUrls(campaign.audioUrls);
      }
    }
  }, [data, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await updateCampaign({
        variables: {
          id,
          campaignName,
          targetAudience,
          description,
          startDate: new Date(startDate).toISOString(),
          endDate: new Date(endDate).toISOString(),
          publishStatus: publishStatus.toLowerCase() === 'true',
          activeStatus: activeStatus.toLowerCase() === 'true',
          imageUrls: imageUrls.filter(url => url.trim() !== ''),
          videoUrls: videoUrls.filter(url => url.trim() !== ''),
          audioUrls: audioUrls.filter(url => url.trim() !== ''),
        },
      });
      console.log('Update successful:', data);
      // Optionally: handle success (e.g., redirect or show a success message)
    } catch (err) {
      console.error('Error updating campaign:', err);
    }
  };

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (error) {
    console.error(error);
    return <p className="text-red-500 text-center">Error: {error.message}</p>;
  }

  return (
    <div className="container mx-auto p-6 bg-white rounded shadow-lg">
      <h2 className="text-3xl font-bold mb-4">Update Campaign</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Campaign Name:</label>
          <input 
            type="text" 
            value={campaignName} 
            onChange={(e) => setCampaignName(e.target.value)} 
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Target Audience:</label>
          <input 
            type="text" 
            value={targetAudience} 
            onChange={(e) => setTargetAudience(e.target.value)} 
            className="mt-1 block w-full border border-gray-300 rounded p-2"
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description:</label>
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            className="mt-1 block w-full border border-gray-300 rounded p-2"
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Start Date:</label>
          <input 
            type="date" 
            value={startDate} 
            onChange={(e) => setStartDate(e.target.value)} 
            className="mt-1 block w-full border border-gray-300 rounded p-2"
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">End Date:</label>
          <input 
            type="date" 
            value={endDate} 
            onChange={(e) => setEndDate(e.target.value)} 
            className="mt-1 block w-full border border-gray-300 rounded p-2"
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Publish Status (true/false):</label>
          <input 
            type="text" 
            value={publishStatus} 
            onChange={(e) => setPublishStatus(e.target.value)} 
            className="mt-1 block w-full border border-gray-300 rounded p-2"
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Active Status (true/false):</label>
          <input 
            type="text" 
            value={activeStatus} 
            onChange={(e) => setActiveStatus(e.target.value)} 
            className="mt-1 block w-full border border-gray-300 rounded p-2"
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Image URLs (comma separated):</label>
          <input 
            type="text" 
            value={imageUrls.join(',')} 
            onChange={(e) => setImageUrls(e.target.value.split(','))} 
            className="mt-1 block w-full border border-gray-300 rounded p-2"
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Video URLs (comma separated):</label>
          <input 
            type="text" 
            value={videoUrls.join(',')} 
            onChange={(e) => setVideoUrls(e.target.value.split(','))} 
            className="mt-1 block w-full border border-gray-300 rounded p-2"
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Audio URLs (comma separated):</label>
          <input 
            type="text" 
            value={audioUrls.join(',')} 
            onChange={(e) => setAudioUrls(e.target.value.split(','))} 
            className="mt-1 block w-full border border-gray-300 rounded p-2"
            required 
          />
        </div>
        <button 
          type="submit" 
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Update Campaign
        </button>
      </form>
    </div>
  );
};

export default CampaignUpdate;
