// import React from 'react'
import "./Mainstyling.css";
// Import Swiper React components
import { Link } from "react-router-dom";
import CoursesNews from "./CoursesNews";
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
  

const FamousCourses = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchFamousCourses = async () => {
      try {
        const response = await fetch("http://localhost:8080/course/famous");
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setCourses(data);
      } catch (err) {
        if (err instanceof TypeError && err.message.includes('text/html')) {
          setError('Server error. Please check the server logs.');
        } else {
          setError(err.message);
        }
      }
    };

    fetchFamousCourses();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts
  if (error) {
    return <div>Error fetching famous courses: {error}</div>;
  }






  return (
    <>
      <CoursesNews />
        <div className="container mx-auto py-3">
          <h1 className="text-white text-2xl font-semibold flex">
            Famous courses <FaArrowRightLong className="my-auto ml-2 " />
          </h1>
          <div>
            
          <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper mncr_poster"
      >

{courses.map((course) => (
          <SwiperSlide key={course.cid}>
            <div className="mn_cr_data overflow-hidden cursor-pointer">
              <div className="cr_mn_img">
                <img
                  src={course.image}
                  className="cr_mn_img"
                  alt={course.title}
                />
              </div>
              <div>
                <div className="ml-2">
                  <h6 className="text-left text-base">{course.category}</h6>
                  <h4 className="text-left text-3xl font-semibold">
                    {course.title}
                  </h4>
                  <p className="mn-cr-name mt-2 text-left text-gray-400 font-semibold capitalize">
                    {course.description}
                  </p>
                </div>
                <div className="flex justify-between mx-2 my-2">
                  <div className="flex text-sm my-auto">
                    <FaBook className="my-auto mr-1" />
                    {course.no_of_lessons} Lesson
                  </div>
                  <div className="flex text-sm my-auto mr-2">
                    <IoMdTime className="my-auto mr-1" />
                    {course.time}hr
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        
      </Swiper>
          
          </div>
        </div>
    </>
  );
};

export default FamousCourses;
