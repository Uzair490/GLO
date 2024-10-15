import { useState } from "react";
import BreadCrumb from "../shared/breadcrumb/BreadCrumb";
import ImgIcon from "../../assets/images/marketing/CircleIcon.svg";
import CancelIcon from "../../assets/images/marketing/cancel.svg";
import AddIcon from "../../assets/images/marketing/add.svg";
import MusicIcon from "../../assets/images/marketing/music.svg";

const MarketingComponent = () => {
  const [value, setValue] = useState("");
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="flex flex-col justify-between gap-3">
      <BreadCrumb />
      <div className="flex flex-col justify-between gap-8">
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
              style={{ flexBasis: "calc(50% - 16px)" }}
            >
              <h2 className="text-base font-normal text-[#22173D]">
                Select Tour Destinations*
              </h2>

              <select className="w-full h-12 mt-2 border outline-none border-[#E0E5F2] rounded-xl px-4">
                <option value="" disabled selected>
                  Select Tour Destination
                </option>
                <option value="user1">User 1</option>
                <option value="user2">User 2</option>
                <option value="user3">User 3</option>
              </select>
            </div>
            <div
              className="flex flex-col mt-2"
              style={{ flexBasis: "calc(50% - 16px)" }}
            >
              <h2 className="text-base font-normal text-[#22173D]">
                Travel Log Name*
              </h2>
              <input
                value={value}
                onChange={handleInputChange}
                type="text"
                placeholder="Add Travel Log Name"
                className="w-full h-12 mt-2 border outline-none border-[#E0E5F2] rounded-xl px-4"
              />
            </div>
          </div>
        </div>
        {/* About Tour Places section */}
        <div
          className="flex flex-col w-full p-6 border border-[#DCDEE3] rounded-2xl"
          style={{ boxShadow: "0px 4px 30px 0px #4D54640D" }}
        >
          <h1 className="text-lg font-semibold text-[#22173D]">
            About Tour Places
          </h1>
          {/* row 1 */}
          <div className="w-full flex-wrap flex justify-between">
            <div className="flex flex-col mt-2" style={{ flexBasis: "100%" }}>
              <h2 className="text-base font-normal text-[#22173D]">
                Select Tour Destinations*
              </h2>

              <select className="w-full h-12 mt-2 border outline-none border-[#E0E5F2] rounded-xl px-4">
                <option value="" disabled selected>
                  Select Tour Destination
                </option>
                <option value="user1">User 1</option>
                <option value="user2">User 2</option>
                <option value="user3">User 3</option>
              </select>
            </div>
          </div>
          {/* row 2 */}
          <div className="w-full flex-wrap flex justify-between">
            <div
              className="flex flex-col mt-2"
              style={{ flexBasis: "calc(50% - 16px)" }}
            >
              <h2 className="text-base font-normal text-[#727A90]">
                Tell Your Story
              </h2>
              <textarea
                className="w-full h-44 mt-2 border resize-none text-[#727A90] outline-none border-[#E0E5F2] rounded-xl px-4 py-2"
                placeholder="Write your story here"
              ></textarea>
            </div>
            <div
              className="flex flex-col mt-2"
              style={{ flexBasis: "calc(50% - 16px)" }}
            >
              <div className="w-full flex flex-col items-center justify-center gap-4 h-44 border text-[#727A90] mt-8 border-[#E0E5F2] rounded-xl px-4 py-2">
                <img src={ImgIcon} alt="icon" />
                <p className="text-sm font-normal text-[#727A90]">
                  Drag and drop image here, or click add image
                </p>
                <button className="w-32 h-10 text-sm font-semibold bg-[#FAF5FF] rounded-[10px] text-[#9854FF]">
                  Add Image
                </button>
              </div>
            </div>
            <div className="flex justify-end w-full mt-6 items-center gap-3 mr-8">
              <button className="text-white flex items-center h-[36px] mr-6  bg-[#9854ff] px-4 py-2 rounded-[10px] text-xs">
                <img src={AddIcon} alt="cancel" className="mr-2" />
                Insert Block
              </button>
              <button className="text-[#9854ff] border flex items-center  h-[40px] border-[#9854ff] px-4 py-2 rounded-[10px] text-xs">
                <img src={CancelIcon} alt="cancel" className="mr-1" />
                Cancel
              </button>
              <button className="text-white h-[40px]  bg-[#9854ff] px-4 py-2 rounded-[10px] text-xs">
                Save & Continue
              </button>
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
            {/* col 1 */}
            <div className="flex flex-col gap-1 min-w-[300px] basis-[32.5%]">
              <h1 className="text-sm font-medium text-[#727A90]">Photos</h1>
              <div className="border flex flex-col items-center w-full  justify-between h-[213px] border-[#DCDEE3] rounded-[10px] p-4">
                <img src={ImgIcon} alt="bg" className="bg-cover" />
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
            {/* col 2 */}
            <div className="flex flex-col gap-1 min-w-[300px] basis-[32.5%]">
              <h1 className="text-sm font-medium text-[#727A90]">Videos</h1>
              <div className="border flex flex-col justify-between items-center w-full h-[213px] border-[#DCDEE3] rounded-[10px] p-4">
                <img src={ImgIcon} alt="bg" className="bg-cover" />
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
            {/* col 3 */}
            <div className="flex flex-col gap-1 min-w-[300px] basis-[32.5%]">
              <h1 className="text-sm font-medium text-[#727A90]">Audios</h1>
              <div className="border flex flex-col justify-between items-center w-full h-[213px] border-[#DCDEE3] rounded-[10px] p-4">
                <img src={MusicIcon} className="bg-cover" alt="bg" />

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
        {/* Sponsor or Partner Credit section */}
        <div
          className="flex flex-col w-full p-6 border border-[#DCDEE3] rounded-2xl"
          style={{ boxShadow: "0px 4px 30px 0px #4D54640D" }}
        >
          <h1 className="text-lg font-semibold text-[#22173D]">
            Sponsor or Partner Credit
          </h1>
          {/* row 1 */}
          <div className="w-full flex-wrap flex justify-between">
            <div className="flex flex-col mt-2" style={{ flexBasis: "100%" }}>
              <h2 className="text-base font-normal text-[#22173D]">
                Select Sponsor or Partner Credit
              </h2>

              <select className="w-full h-12 mt-2 border outline-none border-[#E0E5F2] rounded-xl px-4">
                <option value="" disabled selected>
                  Select Sponsor or Partner Credit
                </option>
                <option value="user1">User 1</option>
                <option value="user2">User 2</option>
                <option value="user3">User 3</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingComponent;
