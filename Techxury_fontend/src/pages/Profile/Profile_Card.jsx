
// Import Swiper React components
import Otp from '../Login/Otp'

import { FaArrowRightLong } from "react-icons/fa6";
import React, { useState, useEffect } from 'react';



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
// Import necessary modules
  

const Profile_Card = () => {
  const [userData, setUserData] = useState(null);


  useEffect(() => {
    // Fetch data from your server
    fetchData()
  }, []); // <-- Removed the extraneous closing parenthesis here

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/otp/usersession', {
        //method: 'GET',
        //mode:'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        
        //body: JSON.stringify({ Otp}), // <-- Removed this line
        // Replace with the actual OTP value
      });

      if (response.ok) {
        const data = await response.json();
        // Update state with fetched data
        setUserData(data);
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };


  return (
    <>
    

    <div className='pr_cover_pic'></div>
      <div className='mx-auto border-2 border-black pr_candyman'>
        {userData ? (
          <div>
            <img src={userData.profileImageUrl} className='pr_img_pic mx-auto' alt="" />
            <h1 className='text-2xl font-bold text-center my-2'>{userData.username} <span className='px-2 py-0 bg-purple-600 text-sm border-2 border-black font-bold text-white  '>Level 1</span></h1>
            <div className='mx-auto text-center text-gray-500'>
              {userData.bio}
            </div>
            <div className='border-b border-b-blue-500 mx-40 my-3'>
              <h6 className='text-sm text-blue-600'>User id:</h6>
              <p>{userData.userId}</p>
            </div>
            <div className='border-b border-b-blue-500 mx-40 my-3'>
              <h6 className='text-sm text-blue-600'>Email id:</h6>
              <p>{userData.email}</p>
            </div>
            <div className='border-b border-b-blue-500 mx-40 my-3'>
              <h6 className='text-sm text-blue-600'>Skill:</h6>
              <p>{userData.skill}</p>
            </div>
            <div className='border-b border-b-blue-500 mx-40 my-3'>
              <h6 className='text-sm text-blue-600'>Issue Date:</h6>
              <p>{userData.issueDate}</p>
            </div>

            {/* Integrate the provided code snippet here */}
            <div>
              <p>User ID: {userData.userid}</p>
              <p>Email: {userData.email}</p>
              <p>UID: {userData.uid}</p>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      
    </>
  )
}


export default Profile_Card
