import React, { useEffect, useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client'; 
import { UPDATE_CAMPAIGN } from './queries';
import { GET_ALL_CAMPAIGNS } from './queries';

import Layout from '../../Layout';
const CampaignUpdate = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_ALL_CAMPAIGNS);
  const [updateCampaign] = useMutation(UPDATE_CAMPAIGN);
const [campaignType,setCampaignType]=useState('')
  const [campaignName, setCampaignName] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  
 
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
        setCampaignType(campaign.setCampaignType)
        
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
          campaignType,
          campaignName,
          targetAudience,
          description,
          startDate: new Date(startDate).toISOString(),
          endDate: new Date(endDate).toISOString(),
         
         
          imageUrls: imageUrls.filter(url => url.trim() !== ''),
          videoUrls: videoUrls.filter(url => url.trim() !== ''),
          audioUrls: audioUrls.filter(url => url.trim() !== ''),
        },
      });
      console.log('Update successful:', data);
     
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
<section>
    <Layout className="max-w-3xl mx-auto  bg-white shadow-md rounded-lg mt-10">
      <h1 className='mt-12 font-semibold'>Marketing</h1>
      <div className="container mx-auto p-6 bg-white ">
        
        <main className='border shadow-md rounded-lg p-4'>
          <p className='text-[18px] font-semibold'>General Information</p>
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
     onChange={(e) =>setCampaignType(e.target.value)} 
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
               value={startDate} 
               onChange={(e) => setStartDate(e.target.value)} 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              
              />
            </div>
            <div className='w-[33%]'>
              <label className="block text-sm font-medium mb-1 text-gray-700">End Date</label>
              <input
                value={startDate} 
                onChange={(e) => setEndDate(e.target.value)} 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                
              />
            </div>
          </section>
        </main>

       

      </div>
      <main className='border mt-7 shadow-md rounded-lg p-4'>
          <p className='text-[18px] font-semibold'>Media</p>
          <section className='flex gap-6 mt-2'>
          
            <div className="flex w-[50%] flex-col">
              <p className='pb-1 text-[16px] font-normal'>Photos</p>
              <div className="flex flex-col items-center border border-gray-300 p-2 rounded-md">
                <img
                  
                  alt="Uploaded Logo"
                  className="mb-2 w-10 h-10 object-cover"
                />
                <label htmlFor="imageLo" className="flex items-center justify-center h-full w-full cursor-pointer">
                  <input
                    type="file"
                 
                    className="hidden"
                    accept="image/*"
                   
                  />
                  
                </label>
               
              </div>
            </div>

          
            <div className="flex w-[50%] flex-col">
              <p className='pb-1 text-[16px] font-normal'>Videos</p>
              <div className="flex flex-col items-center border border-gray-300 p-2 rounded-md">
                <img
                
                  alt="Uploaded Video"
                  className="mb-2 w-10 h-10 object-cover"
                />
                <label htmlFor="videoUpload" className="flex items-center justify-center h-full w-full cursor-pointer">
                  <input
                    type="file"
                   
                    className="hidden"
                    accept="video/*"
                   
                  />
                 
                </label>
               
              </div>
            </div>

         
            <div className="flex w-[50%] flex-col">
              <p className='pb-1 text-[16px] font-normal'>Audio</p>
              <div className="flex flex-col items-center border border-gray-300 p-2 rounded-md">
                <img
                
                  alt="Uploaded Audio"
                  className="mb-2 w-10 h-10 object-cover"
                />
                <label htmlFor="audioUpload" className="flex items-center justify-center h-full w-full cursor-pointer">
                  <input
                    type="file"
                  
                    className="hidden"
                    accept="audio/*"
                   
                  />
                 
                </label>
               
              </div>
            </div>
           
          </section>
          <button 
          type="submit" 
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Update Campaign
        </button>
        </main>
    </Layout>
  
    </section>
  );
};

export default CampaignUpdate;
