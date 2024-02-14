// import React from 'react'
import "./Mainstyling.css";
// Import Swiper React components
import { Link } from "react-router-dom";

// import required modules
import { FaBook } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import React, { useState, useEffect } from 'react';
// ... (previous imports and code)

// ... (previous imports and code)

// ... (previous imports)

const CoursesNews = () => {
  // Assume you have fetched the data and stored it in the coursesData state
  const [coursesData, setCoursesData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoursesData = async () => {
      try {
        const response = await fetch("http://localhost:8080/course/discat");
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setCoursesData(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchCoursesData();
  }, []);

  if (error) {
    return <div>Error fetching course data: {error}</div>;
  }

  return (
    <>
      <div className="container mx-auto">
        <h5 className="h124">Top Categories</h5>

        <div className="grid lg:grid-cols-4 px-auto sm:grid-cols-1">
          <div className="lg:col-span-3 flex justify-between flex-wrap sm:mx-auto">
            {Object.entries(coursesData).map(([imageSource, courseName]) => (
              <div key={imageSource} className="mx-auto px-2">
                <div className="flex my-2">
                  <img
                    src={imageSource}
                    className="Cr_pic mr-3 rounded"
                    alt=""
                    srcset=""
                  />
                  <div>
                    <h1 className="cr_txt_hd">{courseName}</h1>

                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1 cr_news_right_pic">
            <div className="cr_news_img">
              <img src="https://images.pexels.com/photos/5784812/pexels-photo-5784812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>

            <div className="cr_news_text">
              <h1 className="text-3xl">Web dev</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesNews;


