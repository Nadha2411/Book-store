import React, {useEffect} from 'react'
import Banner from './Banner';
import '../css/Home.css'
import '../css/Footer.css'
import '../css/Banner.css'


const Home = () => {
  return (
    <div>
       {/* Banner Component */}
       <Banner />
      {/* Hero Section */}
    <div className='hero'>
        <div className="hero-content">
            <h1 className='hero-text'>Book Shop</h1>
            <p className='hero-description'>
                Browse the collection of our best interesting Books.
                You will definitely find what you are looking for.
            </p>
        </div>
        <div className="hero-image"></div>
        </div>
    </div>
  )
}

export default Home



