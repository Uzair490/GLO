import QuestionMarkIcon from '../../assets/images/notifications/questionsMark.svg'
import CrossIcon from '../../assets/images/notifications/cross.svg'
import BorderIcon from '../../assets/images/notifications/borderIcon.svg'

const NotificationItem = ({ title, time, notification }) => {
  return (
    <div
      className="w-full flex flex-col justify-between h-auto mb-4 px-2 py-4 relative"
      style={{ boxShadow: '0px 4px 30px 0px #2E2D740D' }}
    >
      <img src={BorderIcon} alt="border" className="absolute top-2 left-0" />
      <div className="flex justify-between items-start ml-3">
        <img className="mt-[6px]" src={QuestionMarkIcon} alt="notification" />
        <div className="flex items-start w-[85%] flex-col">
          <p className="text-2xl text-[#22173D] font-semibold">{title}</p>
          <p className="text-base font-normal text-[#22173D]">{notification}</p>
        </div>
        <div className="flex gap-3 items-center">
          <p className="text-base text-[#22173D] font-semibold">{time}min ago</p>
          <img src={CrossIcon} alt="cross" />
        </div>
      </div>
      <div className="flex justify-end items-center gap-3 mr-8">
        <button className="text-[#9854ff] border  h-[40px] border-[#9854ff] px-4 py-2 rounded-[10px] text-xs">
          Cancel
        </button>
        <button className="text-white h-[40px]  bg-[#9854ff] px-4 py-2 rounded-[10px] text-xs">
          Share Changes
        </button>
      </div>
    </div>
  )
}

export default NotificationItem
