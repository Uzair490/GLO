import React, { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'; // Heroicons import
import bg from '../assets/bg.svg'
import Logo from '../assets/Logo.svg'
function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password, 'Remember Me:', rememberMe);
  };

  return (

   
    <main className="w-full flex justify-between">



      <section className="bg-white p-6 flex flex-col justify-center mx-10 w-full  max-w-md">
        <h2 className=" font-bold  text-gray-800 text-[25px]">Sign in</h2>
        <h2 className=" mb-6 text-gray-800  text-[15px]">Enter your email and password to sign in </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
        
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

         
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                 <EyeSlashIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                ) : (
                  
                 
                  <EyeIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                )}
              </div>
            </div>
          </div>

       
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-[#00DDEB] ">
                Forgot password?
              </a>
            </div>
          </div>

      
          <button
            type="submit"
            className="w-full bg-[#9854FF] text-white py-2 px-4 rounded-2xl  "
          >
            Sign In
          </button>
        </form>
      </section>

<section className='w-[50%]'>
<div className='relative'>
<img src={bg} alt="error" 

className='w-[100%] h-[100vh]'
/>
<div className='absolute top-[30%] left-[27%] '>
<img src={Logo} alt="error"  className=' ' />
<div className='border px-4 py-4 rounded-xl  text-center mt-10'>
<p className=' text-[#FFFFFF]'>Learn more about GeoLanes at</p>
<p className=' text-[#00DDEB] font-bold'>www.geolanes.com</p>
</div>
</div>
</div>

</section>

    </main>
  );
}

export default Signin;
