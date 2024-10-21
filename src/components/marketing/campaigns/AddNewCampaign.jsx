
import { useState, useRef } from 'react'; // Import useRef
import { useMutation, gql } from '@apollo/client';
import Layout from '../../Layout';
import img from '../../../assets/img.svg';
import { FaVideo, FaMusic } from 'react-icons/fa'; // Importing icons from react-icons
import video from '../../../assets/video.svg';
import audio from '../../../assets/audio.svg';

import  {CREATE_CAMPAIGN_MUTATION} from './queries'

const CreateCampaign = () => {
  const [campaignData, setCampaignData] = useState({
    campaignName: '',
    targetAudience: '',
    description: '',
    startDate: '',
    endDate: '',
    campaignType: '',
    publishStatus: true,
    activeStatus: true,
    imageUrls: [],
    videoUrls: [],
    audioUrls: [],
  });

  const imageInputRef = useRef(null); // Create a ref for the image input
  const videoInputRef = useRef(null); // Create a ref for the video input
  const audioInputRef = useRef(null); // Create a ref for the audio input
  const [createCampaign, { data, loading, error }] = useMutation(CREATE_CAMPAIGN_MUTATION);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCampaignData({
      ...campaignData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleFileChange = (e, type) => {
    const files = Array.from(e.target.files);
    const fileURLs = files.map(file => URL.createObjectURL(file));

    setCampaignData((prevData) => ({
      ...prevData,
      [type]: fileURLs,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCampaign({ variables: { input: campaignData } });
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddImageClick = () => {
    if (imageInputRef.current) {
      imageInputRef.current.click();
    }
  };

  const handleAddVideoClick = () => {
    if (videoInputRef.current) {
      videoInputRef.current.click(); // Trigger video input click
    }
  };

  const handleAddAudioClick = () => {
    if (audioInputRef.current) {
      audioInputRef.current.click(); // Trigger audio input click
    }
  };

  return (
    <Layout className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h1 className='mt-12 font-semibold'>Marketing</h1>
      <form onSubmit={handleSubmit}>
        <main className='border shadow-md rounded-lg p-4'>
          <p className='text-[18px] font-semibold'>General Information</p>
          <section className='flex gap-4 w-full'>
            <div className='w-[33%] my-2'>
              <label className="block text-sm font-medium text-gray-700 mb-2">Campaign Name</label>
              <input
                type="text"
                name="campaignName"
                value={campaignData.campaignName}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className='w-[33%] my-2'>
              <label className="block text-sm font-medium text-gray-700 mb-2">Target Audience</label>
              <input
                type="text"
                name="targetAudience"
                value={campaignData.targetAudience}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className='w-[33%] my-2'>
              <label className="block text-sm font-medium text-gray-700 mb-2">Campaign Type</label>
              <input
                type="text"
                name="campaignType"
                value={campaignData.campaignType}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
          </section>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              name="description"
              value={campaignData.description}
              onChange={handleChange}
              className="mt-1 h-10 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              rows="4"
              required
            />
          </div>
          <section className='flex gap-4 mt-2'>
            <div className='w-[33%]'>
              <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={campaignData.startDate}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className='w-[33%]'>
              <label className="block text-sm font-medium mb-1 text-gray-700">End Date</label>
              <input
                type="date"
                name="endDate"
                value={campaignData.endDate}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
          </section>
        </main>

        <main className='border mt-7 shadow-md rounded-lg p-4'>
          <p className='text-[18px] font-semibold'>Media</p>
          <section className='flex gap-6 mt-2'>
            {/* Image Upload Section */}
            <div className="flex w-[50%] flex-col">
              <p className='pb-1 text-[16px] font-normal'>Photos</p>
              <div className="flex flex-col items-center border border-gray-300 p-2 rounded-md">
                <img
                  src={campaignData.imageUrls[0] || img}
                  alt="Uploaded Logo"
                  className="mb-2 w-10 h-10 object-cover"
                />
                <label htmlFor="imageLo" className="flex items-center justify-center h-full w-full cursor-pointer">
                  <input
                    type="file"
                    ref={imageInputRef} // Attach the ref here
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, 'imageUrls')}
                  />
                  <span className="text-[14px] font-normal">Drag and drop logo image here or click add <span className='flex justify-center'>image</span></span>
                </label>
                <button
                  type="button" // Change type to button
                  className="mt-2 bg-[#FAF5FF] text-[#9854FF] text-[14px] mb-2 px-[14px] py-[7px] rounded-md"
                  onClick={handleAddImageClick} // Trigger file input click
                >
                  Add Image
                </button>
              </div>
            </div>

            {/* Video Upload Section */}
            <div className="flex w-[50%] flex-col">
              <p className='pb-1 text-[16px] font-normal'>Videos</p>
              <div className="flex flex-col items-center border border-gray-300 p-2 rounded-md">
                <img
                  src={campaignData.videoUrls[0] || video}
                  alt="Uploaded Video"
                  className="mb-2 w-10 h-10 object-cover"
                />
                <label htmlFor="videoUpload" className="flex items-center justify-center h-full w-full cursor-pointer">
                  <input
                    type="file"
                    ref={videoInputRef} // Attach the ref here
                    className="hidden"
                    accept="video/*"
                    onChange={(e) => handleFileChange(e, 'videoUrls')}
                  />
                  <span className="text-[14px] font-normal">Drag and drop video here, or click add <span className='flex justify-center'>video</span></span>
                </label>
                <button
                  type="button" // Change type to button
                  className="mt-2 bg-[#FAF5FF] text-[#9854FF] text-[14px] mb-2 px-[14px] py-[7px] rounded-md"
                  onClick={handleAddVideoClick} // Trigger file input click
                >
                  Add Video
                </button>
              </div>
            </div>

            {/* Audio Upload Section */}
            <div className="flex w-[50%] flex-col">
              <p className='pb-1 text-[16px] font-normal'>Audio</p>
              <div className="flex flex-col items-center border border-gray-300 p-2 rounded-md">
                <img
                  src={campaignData.audioUrls[0] || audio}
                  alt="Uploaded Audio"
                  className="mb-2 w-10 h-10 object-cover"
                />
                <label htmlFor="audioUpload" className="flex items-center justify-center h-full w-full cursor-pointer">
                  <input
                    type="file"
                    ref={audioInputRef} // Attach the ref here
                    className="hidden"
                    accept="audio/*"
                    onChange={(e) => handleFileChange(e, 'audioUrls')}
                  />
                  <span className="text-[14px] font-normal">Drag and drop audio here, or click add <span className='flex justify-center'>audio</span></span>
                </label>
                <button
                  type="button" // Change type to button
                  className="mt-2 bg-[#FAF5FF] text-[#9854FF] text-[14px] mb-2 px-[14px] py-[7px] rounded-md"
                  onClick={handleAddAudioClick} // Trigger file input click
                >
                  Add Audio
                </button>
              </div>
            </div>
          </section>
        </main>

        <button
          type="submit"
          className="w-full mt-7 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Create Campaign
        </button>
      </form>
    </Layout>
  );
};

export default CreateCampaign;
