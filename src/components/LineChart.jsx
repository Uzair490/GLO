//import ArrowDown from "../../../assets/images/dashboard/dropdownChart.svg";
import ChartComponent from './ChartCompoent'
import PieChartComponent from './PieChartComponent'
import Analyticss from '../assets/Analyticss.svg'
const LineChart = () => {
  return (

    <div>


      <div className='flex   gap-4  shadow-lg w-full rounded-2xl'>
        <img src={Analyticss} alt="" className='w-[60%] border'  />
        <div className='w-[40%] mt-4 border '>
   <PieChartComponent/>
   </div>
   </div>
   </div>
  );
};

export default LineChart;