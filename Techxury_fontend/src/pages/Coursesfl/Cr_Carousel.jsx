import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from "react-icons/fa";

const Cr_Carousel = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    try {
      setLoading(true);

      const response = await fetch('http://localhost:8080/course/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ category: searchQuery }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const searchData = await response.json();
      setSearchResults(searchData);
    } catch (error) {
      console.error('Error searching:', error.message);
      // Handle error
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper cr_carousel_css z-0"
      >
        <SwiperSlide><img src="./img/cr1.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./img/cr2.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./img/cr3.webp" alt="" /></SwiperSlide>
      </Swiper>

      <div className='my-3 container flex justify-center place-content-center mx-2'>
        <div className='text-center py-auto flex '>
          <input
            type="search"
            placeholder='Search Content'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='py-2 px-2 outline-none text-lg font-semibold'
          />
          <button
            onClick={handleSearch}
            className='text-center py-2 px-5 text-black bg-orange-600 text-lg flex font-semibold'
            disabled={loading}
          >
            <FaSearch className='my-auto' />
            Search
          </button>
        </div>
      </div>

      // ...

      // ...

      <div className="container">
  {loading && <p>Loading...</p>}
  {searchResults.map(result => (
    <div key={result.cid} className='cr_hd_bg cr_hd_img_link my-3'>
      <div className='cr_hd_child text-red text-lg flex justify-start'>
        <div className='cr_hd_child2 my-auto lg:ml-24 sm:ml-0'>
          <h1 className='text-3xl font-bold text-white'>{result.title}</h1>
          <span>
            <span className='px-2 border-r border-white'>{result.year}</span>
            <span className='px-2 border-r border-white'>{result.language}</span>
            <span className='px-2 border-r border-white'>{result.time} hrs</span>
          </span><br />
          <p>{result.description}</p><br />
          <img id={`imagee_${result.cid}`} src={result.image} alt={result.title} />
          <button className='bg-white text-black py-2 px-7 rounded-sm font-bold'>
            <Link className='flex' to={`/details/${result.cid}`}>
              Explore Now <FaLongArrowAltRight className='my-auto text-2xl' />
            </Link>
          </button>
        </div>
      </div>
    </div>
  ))}
</div>


// ...


// ...

    </>
  );
}

export default Cr_Carousel;
