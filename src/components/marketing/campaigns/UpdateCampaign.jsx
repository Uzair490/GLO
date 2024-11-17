import React, { useEffect, useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";
import { UPDATE_CAMPAIGN, GET_ALL_CAMPAIGNS } from './queries'; 

import Layout from '../../Layout';

const CampaignUpdate = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_ALL_CAMPAIGNS);
  const [updateCampaign] = useMutation(UPDATE_CAMPAIGN);
  
  const [campaignType, setCampaignType] = useState('');
  const [campaignName, setCampaignName] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [imageUrls, setImageUrls] = useState([]);
  const [videoUrls, setVideoUrls] = useState([]);
  const [audioUrls, setAudioUrls] = useState([]);
  const [publishStatus, setPublishStatus] = useState(true);  
  const [activeStatus, setActiveStatus] = useState(true);    

  useEffect(() => {
    if (data) {
      const campaign = data.allCampaigns.data.find(camp => camp.id === id);
      if (campaign) {
        setCampaignName(campaign.campaignName);
        setTargetAudience(campaign.targetAudience);
        setDescription(campaign.description);
        setStartDate(campaign.startDate.split('T')[0]); 
        setEndDate(campaign.endDate.split('T')[0]);     
        setCampaignType(campaign.campaignType); 
        setImageUrls(campaign.imageUrls);
        setVideoUrls(campaign.videoUrls);
        setAudioUrls(campaign.audioUrls);
        setPublishStatus(campaign.publishStatus);
        setActiveStatus(campaign.activeStatus);   
      }
    }
  }, [data, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await updateCampaign({
        variables: {
          id,
          campaignType,
          campaignName,
          targetAudience,
          description,
          startDate: new Date(startDate).toISOString(),
          endDate: new Date(endDate).toISOString(),
          imageUrls: imageUrls.filter(url => url.trim() !== ''),
          videoUrls: videoUrls.filter(url => url.trim() !== ''),
          audioUrls: audioUrls.filter(url => url.trim() !== ''),
          publishStatus,
          activeStatus,
        },
      });
      console.log('Update successful:', data);

      // Show success notification using Toastify
      Toastify({
        text: "Campaign updated successfully!",
        duration: 3000, // Duration in milliseconds
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        backgroundColor: "#4caf50", // Green color for success
        stopOnFocus: true, // Prevents dismissing of toast on hover
      }).showToast();

    } catch (err) {
      console.error('Error updating campaign:', err);
      alert('An error occurred while updating the campaign. Please try again.'); // User-friendly error message
    }
  };

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (error) {
    console.error(error);
    return <p className="text-red-500 text-center">Error: {error.message}</p>;
  }

  return (
    <section>
      <Layout className="max-w-3xl mx-auto bg-white shadow-md rounded-lg mt-10">
        <h1 className='mt-12 font-semibold'>Marketing</h1>
        <div className="container mx-auto p-6 bg-white">
          <main className='border shadow-md rounded-lg p-4'>
            <p className='text-[18px] font-semibold'>General Information</p>
            <form onSubmit={handleSubmit}>
              <section className='flex gap-4 w-full'>
                <div className='w-[33%] my-2'>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Campaign Name</label>
                  <input
                    type="text"
                    name="campaignName"
                    value={campaignName} 
                    onChange={(e) => setCampaignName(e.target.value)} 
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className='w-[33%] my-2'>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Target Audience</label>
                  <input
                    type="text"
                    name="targetAudience"
                    value={targetAudience} 
                    onChange={(e) => setTargetAudience(e.target.value)} 
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className='w-[33%] my-2'>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Campaign Type</label>
                  <input
                    value={campaignType} 
                    onChange={(e) => setCampaignType(e.target.value)} 
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </section>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  name="description"
                  value={description} 
                  onChange={(e) => setDescription(e.target.value)} 
                  className="mt-1 h-10 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  rows="4"
                />
              </div>
              <section className='flex gap-4 mt-2'>
                <div className='w-[33%]'>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                  <input
                    type="date"
                    value={startDate} 
                    onChange={(e) => setStartDate(e.target.value)} 
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className='w-[33%]'>
                  <label className="block text-sm font-medium mb-1 text-gray-700">End Date</label>
                  <input
                    type="date"
                    value={endDate} 
                    onChange={(e) => setEndDate(e.target.value)} 
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </section>
             
              <button 
                type="submit" 
                className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-600"
              >
                Update Campaign
              </button>
            </form>
            <section className='flex gap-4 mt-4'>
              <div className="flex w-[50%] flex-col">
                <p className='pb-1 text-[16px] font-normal'>Images</p>
                <div className="flex flex-col items-center border border-gray-300 p-2 rounded-md">
                  <img
                    alt="Uploaded Logo"
                    className="mb-2 h-24 w-32 object-cover"
                    src={imageUrls.length > 0 ? imageUrls[0] : '/fallback-image.png'}
                  />
                  <input
                    type="text"
                    placeholder="Enter image URL"
                    value={imageUrls[0] || ''}
                    onChange={(e) => setImageUrls([e.target.value])}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="flex w-[50%] flex-col">
                <p className='pb-1 text-[16px] font-normal'>Videos</p>
                <div className="flex flex-col items-center border border-gray-300 p-2 rounded-md">
                  <img
                    alt="Uploaded Logo"
                    className="mb-2 h-24 w-32 object-cover"
                    src={videoUrls.length > 0 ? videoUrls[0] : '/fallback-image.png'}
                  />
                  <input
                    type="text"
                    placeholder="Enter video URL"
                    value={videoUrls[0] || ''}
                    onChange={(e) => setVideoUrls([e.target.value])}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </section>
          </main>
        </div>
      </Layout>
    </section>
  );
};

export default CampaignUpdate;
