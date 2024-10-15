import NotificationIcon from "../../assets/images/notifications/arrowDown.svg";
import Adminsidebar from "../Adminsidebar";
import NotificationItem from './NotificationItem'
import notificationsData from './NotificationsstaticData'

const NotificationsComponent = () => {
  return (
  <div className="flex ">
    <div className="w-[20%]  border-r">
    <Adminsidebar/>
    </div>
    <div className=" border px-10 w-[80%] pt-5 ">
      <h1 className='text-[18px] text-[#0C0D0F] font-semibold'>Notifications</h1>
      {/* // Buttons starts here */}
      <div className="flex justify-end mb-4 items-center gap-2">
        <div className="flex items-center gap-1 p-1 border border-solid border-[#F4ECFB] rounded-xl">
          <button className={'bg-[#F4ECFB] text-[#883DCF] px-4 py-2 text-xs rounded-[8px]'}>
            All Notifications
          </button>
          <button className={' text-[#4A4C56] px-4 py-2 text-xs '}>Marketing</button>
          <button className={' text-[#4A4C56] px-4 py-2 text-xs'}>Customer Support</button>
          <button className={' text-[#4A4C56] px-4 py-2 text-xs'}>System Updates</button>
        </div>
        <div className="flex items-center gap-2 p-1 border border-solid border-[#F4ECFB] rounded-xl">
          <button className={' text-[#4A4C56] px-4 py-2 flex items-center text-xs gap-2'}>
            date
            <img src={NotificationIcon} alt="arrow-down" />
          </button>
        </div>
      </div>
      {/* // buttons ends here */}
      <div
        className="overflow-auto"
        style={{ height: 'calc(100% - 55px)', scrollbarWidth: 'none' }}
      >
        {notificationsData.map((notification, index) => (
          <NotificationItem
            key={index}
            title={notification.title}
            time={notification.time}
            notification={notification.notification}
          />
        ))}
      </div>
    </div>
    </div>
  )
}

export default NotificationsComponent
