import { useState } from 'react'
import Campaigns from './campaigns/Campaigns'
import TravelLogs from './campaigns/TravelLogs'

const MarketingTabs = () => {
  const [activeTab, setActiveTab] = useState('Campaigns')

  return (
    <div className="flex flex-col">
      <div className="flex gap-5 w-full text-[#22173D] font-semibold px-3 text-lg border-[#DCDEE3] mb-4 border-b">
        <p
          className={`pb-2 cursor-pointer ${
            activeTab === "Campaigns"
              ? "text-[#9854FF] border-b-2 border-[#9854FF]"
              : ""
          }`}
          onClick={() => setActiveTab("Campaigns")}
        >
          Campaigns
        </p>
        <p
          className={`pb-2 cursor-pointer ${
            activeTab === "Travel Logs"
              ? "text-[#9854FF] border-b-2 border-[#9854FF]"
              : ""
          }`}
          onClick={() => setActiveTab("Travel Logs")}
        >
          Itineraries
        </p>
      </div>
      <div>{activeTab === "Campaigns" && <Campaigns />}</div>
      <div>{activeTab === "Travel Logs" && <TravelLogs />}</div>
    </div>
  );
}
export default MarketingTabs
