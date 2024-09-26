import React from 'react';
import search from '../assets/search.svg';
import Navitem from '../assets/Navitem.svg'
import sms from '../assets/sms.svg'
import Avatar from '../assets/Avatar.svg'
const Header = () => {
  return (
    <section className='mt-8 ml-8  gap-10 flex  '>
        <div  className='w-[50%]' >
      <div className='flex ' >
       
        <input
          type="text"
          className='border p-2 w-[90%] rounded text-[13px] pl-2  '  
          placeholder='Search here'
        />
       
        <img
     
          src={search}
          alt="search icon"
          className='ml-[-40px]  w-[18px] '
        />
      </div>
      </div>
      <div className='w-[50%]'>
      <div className='flex gap-8'>
      <p className="bg-[#9854FF] text-white ml-[-30px] px-2 pt-1 h-8 rounded ">
      + New User
    </p>
     

                    <img src={Navitem} className='h-8' alt="error" />
            <img src={sms}  className='h-6 mt-1 bg-[#E0FCFD]'  alt="error"  />
            
            <img src= {Avatar} alt="error" />
           <div className='flex flex-col ml-[-18px]'>
            <p>Jay Hargudson</p>
            <p className='text-[12px]'>Super admin</p>
            </div>
            </div>
</div>

    </section>
    
  );
};

export default Header;
