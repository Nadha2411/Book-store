import React from 'react';
import '../css/Banner.css'; // Import the CSS file

const Banner = () => {
  return (
    <div className='banner-container flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12'>
      <div className='banner-image md:w-1/2 w-full flex items-center md:justify-end'>
      <img src="/banner.png"  />
      </div>
      
      <div className='banner-text md:w-1/2 w-full'>
        <h1 className='banner-title md:text-5xl text-2xl font-medium mb-7'>New Releases This Week</h1>
        <p className='banner-description mb-10'>
          It's time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone.
        </p>
        <button className='btn-primary'>Subscribe</button>
      </div>
    </div>
  );
}

export default Banner;