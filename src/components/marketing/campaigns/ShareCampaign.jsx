import { useState } from "react";
import BreadCrumb from "../../../components/shared/breadcrumb/BreadCrumb";
import { useMutation, gql } from "@apollo/client";
import BgIcon from "../../../assets/images/notifications/bgIcon.svg";
import CloseIcon from "../../../assets/images/notifications/close.svg";
import MusicIcon from "../../../assets/images/notifications/headphones-light.svg";
import EditIcon from "../../../assets/images/marketing/EditIcon.svg";
import CrossIcon from "../../../assets/images/marketing/cancel.svg";
import Layout from "../../Layout";
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
const ShareCampaign = () => {
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

  const [ShareCampaign, { data, loading, error }] = useMutation(CREATE_CAMPAIGN_MUTATION);

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
    ShareCampaign({ variables: { input: formattedData } })
      .then((response) => {
        console.log("Campaign created:", response.data.glAdmin.ShareCampaign);
      })
      .catch((err) => {
        console.error("Error creating campaign:", err);
      });
  };
  return (
    <Layout>
      <div className="flex flex-col justify-between gap-8"   onSubmit={handleSubmit}>
        <p className="flex gap-2 font-semibold items-center text-[#0C0D0F] text-lg">
          Share Campaign
          <img src={EditIcon} alt="" />
        </p>
        <BreadCrumb />
        {/* general info section */}
        <div
          className="flex flex-col w-full p-6 border border-[#DCDEE3] rounded-2xl"
          style={{ boxShadow: "0px 4px 30px 0px #4D54640D" }}
        >
          <h1 className="text-lg font-semibold text-[#22173D]">
            General Information
          </h1>
          {/* row 1 */}
          <div className="w-full flex-wrap flex justify-between">
            <div
              className="flex flex-col mt-2"
             
            >
              <h2 className="text-base font-normal text-[#22173D]">
                Campaign Name*
              </h2>
              <input
              value={formData.campaignName}
              onChange={handleChange}
                type="text"
               
                className="w-full h-12 mt-2 border outline-none border-[#E0E5F2] rounded-xl px-4"
              />
            </div>
            <div
              className="flex flex-col mt-2"
              
            >
              <h2 className="text-base font-normal text-[#22173D]">
                Target Audiance
              </h2>
              <input
                value={formData.targetAudience}
                onChange={handleChange}
                type="text"
               
                className="w-full h-12 mt-2 border outline-none border-[#E0E5F2] rounded-xl px-4"
              />
            </div>
            <div
              className="flex flex-col mt-2"
              style={{ flexBasis: "calc(50% - 16px)" }}
            >
              <h2 className="text-base font-normal text-[#22173D]">
              
              </h2>
              <select className="w-full h-12 mt-2 border outline-none border-[#E0E5F2] rounded-xl px-4">
                <option value="" disabled selected>
                Campaign Type*
                </option>
                <option value="user1">User 1</option>
                <option value="user2">User 2</option>
                <option value="user3">User 3</option>
              </select>
            </div>
          </div>
          {/* row 2 */}
          <div className="w-full flex-wrap flex justify-between">
            <div className="flex flex-col basis-full">
              <div
                className="flex flex-col mt-2"
                style={{ flexBasis: "calc(50% - 16px)" }}
              >
                <h2 className="text-base font-normal text-[#22173D]">
                  Description
                </h2>
                <input
                  
                  value={formData.description}
            onChange={handleChange}
                  placeholder="Description goes here"
                  className="w-full h-12 mt-2 border outline-none border-[#E0E5F2] rounded-xl px-4"
                />
              </div>
            </div>
          </div>
          {/* row 3 */}
          <div className="w-full flex-wrap flex justify-between">
            <div
              className="flex flex-col mt-2"
              style={{ flexBasis: "calc(33.33% - 16px)" }}
            >
              <h2 className="text-base font-normal text-[#22173D]">
                Start Date*
              </h2>
              <input
                value={formData.startDate}
                onChange={handleChange}
                type="date"
                placeholder="MM-DD-YYYY"
                className="w-full h-12 mt-2 border outline-none border-[#E0E5F2] rounded-xl px-4"
              />
            </div>
            <div
              className="flex flex-col mt-2"
              style={{ flexBasis: "calc(33.33% - 16px)" }}
            >
              <h2 className="text-base font-normal text-[#22173D]">
                End date*
              </h2>
              <input
                value={formData.endDate}
                onChange={handleChange}
                type="date"
                placeholder="MM-DD-YYYY"
                className="w-full h-12 mt-2 border outline-none border-[#E0E5F2] rounded-xl px-4"
              />
            </div>
            <div
              className="flex flex-col mt-2"
              style={{ flexBasis: "calc(33.33% - 16px)" }}
            >
              <h2 className="text-base font-normal text-[#22173D]">
                Schedule Date
              </h2>
              <input
                value={value}
                onChange={handleInputChange}
                type="date"
                placeholder="MM-DD-YYYY"
                className="w-full h-12 mt-2 border outline-none border-[#E0E5F2] rounded-xl px-4"
              />
            </div>
          </div>
        </div>
        {/* media section */}
        <div
          className="flex flex-col w-full p-6 border border-[#DCDEE3] rounded-2xl"
          style={{ boxShadow: "0px 4px 30px 0px #4D54640D" }}
        >
          <h1 className="text-lg font-semibold text-[#22173D]">Media</h1>
          <div className="flex flex-wrap justify-between w-full">
            {/* row 1 */}
            <div className="flex flex-col gap-1 min-w-[300px] basis-[32.5%]">
              <h1 className="text-sm font-medium text-[#727A90]">Photos</h1>
              <div className="border flex flex-col justify-between w-full h-[213px] border-[#DCDEE3] rounded-[10px] p-4">
                <div className="flex justify-between">
                  <div className="flex justify-between items-center relative rounded-xl overflow-hidden w-20 h-[53px]">
                    <img src={BgIcon} alt="bg" className="bg-cover" />
                    <img
                      src={CloseIcon}
                      alt="bg"
                      className="top-0 right-0 absolute"
                    />
                  </div>
                  <div className="flex justify-between items-center relative rounded-xl overflow-hidden w-20 h-[53px]">
                    <img src={BgIcon} alt="bg" className="bg-cover" />
                    <img
                      src={CloseIcon}
                      alt="bg"
                      className="top-0 right-0 absolute"
                    />
                  </div>
                  <div className="flex justify-between items-center relative rounded-xl overflow-hidden w-20 h-[53px]">
                    <img src={BgIcon} alt="bg" className="bg-cover" />
                    <img
                      src={CloseIcon}
                      alt="bg"
                      className="top-0 right-0 absolute"
                    />
                  </div>
                </div>
                <p className="text-sm text-center w-full font-normal text-[#727A90]">
                  Drag and drop image here, or click add image
                </p>
                <div className="flex justify-center items-center w-full">
                  <button className="bg-[#FAF5FF] text-[#9854FF] px-4 py-2 rounded-[10px]">
                    Add Image
                  </button>
                </div>
              </div>
            </div>
            {/* row 2 */}
            <div className="flex flex-col gap-1 min-w-[300px] basis-[32.5%]">
              <h1 className="text-sm font-medium text-[#727A90]">Videos</h1>
              <div className="border flex flex-col justify-between w-full h-[213px] border-[#DCDEE3] rounded-[10px] p-4">
                <div className="flex justify-between">
                  <div className="flex justify-between items-center relative rounded-xl overflow-hidden w-20 h-[53px]">
                    <img src={BgIcon} alt="bg" className="bg-cover" />
                    <img
                      src={CloseIcon}
                      alt="bg"
                      className="top-0 right-0 absolute"
                    />
                  </div>
                  <div className="flex justify-between items-center relative rounded-xl overflow-hidden w-20 h-[53px]">
                    <img src={BgIcon} alt="bg" className="bg-cover" />
                    <img
                      src={CloseIcon}
                      alt="bg"
                      className="top-0 right-0 absolute"
                    />
                  </div>
                  <div className="flex justify-between items-center relative rounded-xl overflow-hidden w-20 h-[53px]">
                    <img src={BgIcon} alt="bg" className="bg-cover" />
                    <img
                      src={CloseIcon}
                      alt="bg"
                      className="top-0 right-0 absolute"
                    />
                  </div>
                </div>
                <p className="text-sm text-center w-full font-normal text-[#727A90]">
                  Drag and drop video here, or click add video
                </p>
                <div className="flex justify-center items-center w-full">
                  <button className="bg-[#FAF5FF] text-[#9854FF] px-4 py-2 rounded-[10px]">
                    Add Video
                  </button>
                </div>
              </div>
            </div>
            {/* row 3 */}
            <div className="flex flex-col gap-1 min-w-[300px] basis-[32.5%]">
              <h1 className="text-sm font-medium text-[#727A90]">Audios</h1>
              <div className="border flex flex-col justify-between w-full h-[213px] border-[#DCDEE3] rounded-[10px] p-4">
                <div className="flex justify-between">
                  <div className="flex flex-col justify-between items-center relative rounded-xl overflow-hidden bg-[#FAF5FF] w-[45%]">
                    <img
                      src={CloseIcon}
                      alt="bg"
                      className="top-0 right-0 absolute"
                    />
                    <div className="flex justify-between px-3 py-2 w-full">
                      <img src={MusicIcon} alt="music icon" />

                      <input type="url" 
                      
                      name="videoUrls"
                      value={formData.videoUrls[0]}
                      onChange={(e) =>
                        setFormData({ ...formData, videoUrls: [e.target.value] })
                      }
                      
                      className="text-xs font-normal text-[#22173D]" 
                      placeholder='  Audio file.mp3'
                      />
                      
                    
                    </div>
                    <div className="flex justify-between border-t-2 border-[#9854FF] py-2 w-[90%]">
                      <p className="text-xs font-normal text-[#22173D]">
                        10 MB
                      </p>
                      <p className="text-xs font-normal text-[#22173D]">0:30</p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between items-center relative rounded-xl overflow-hidden bg-[#FAF5FF] w-[45%]">
                    <img
                      src={CloseIcon}
                      alt="bg"
                      className="top-0 right-0 absolute"
                    />
                    <div className="flex justify-between px-3 py-2 w-full">
                      <img src={MusicIcon} alt="music icon" />
                      <p className="text-xs font-normal text-[#22173D]">
                        Audio file.mp3
                      </p>
                    </div>
                    <div className="flex justify-between border-t-2 border-[#9854FF] py-2 w-[90%]">
                      <p className="text-xs font-normal text-[#22173D]">
                        10 MB
                      </p>
                      <p className="text-xs font-normal text-[#22173D]">0:30</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-center w-full font-normal text-[#727A90]">
                  Drag and drop audio here, or click add audio
                </p>
                <div className="flex justify-center items-center w-full">
                  <button className="bg-[#FAF5FF] text-[#9854FF] px-4 py-2 rounded-[10px]">
                    Add Audio
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* buttons */}
        <div className="flex justify-end items-center gap-3 mr-8">
          <button className="h-[40px] px-3 rounded-[10px] flex gap-2 items-center border text-[#9854FF] border-[#9854FF]">
            <img src={CrossIcon} alt="" />
            Cancel
          </button>
          <button className="text-white bg-[#9854ff] h-[40px] px-4 py-2 rounded-[10px] text-xs">
            Submit
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ShareCampaign;
