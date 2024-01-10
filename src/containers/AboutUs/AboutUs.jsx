import React from 'react'
import './AboutUs.css'
import { SubHeading } from '../../components'
import { images } from '../../constants'
const AboutUs = () => {
  return (
    <div className='app__aboutus app__bg flex__center section__padding'id='about'>
      <div className='app__aboutus-overlay flex__center'>
      </div>
      <div className='app__aboutus-content flex__center'>
        <div className='app__aboutus-content_about'>
          <h1 className='headtext__cormorant'>About Us</h1>
          <img src={images.spoon} alt="about_us_spoon" className='spoon__img' />
          <p className='p__opensans'>Savor a slice of heaven with our delectable pizza special, crafted with passion and topped with perfection. </p>
        <button type='button' className='custom__button'>Know More</button>
        </div>
        <div className='app__aboutus-content_knife flex__center'>
          <img src={images.knife} alt="about_us_knife" />
        </div>
        <div className='app__aboutus-content_history'>
          <h1 className='headtext__cormorant'>Our History</h1>
          <img src={images.spoon} alt="about_us_spoon" className='spoon__img' />
          <p className='p__opensans'>Our culinary journey began in a small, unassuming kitchen, where a passion for food and a desire to create something extraordinary collided. With a few simple ingredients and a lot of heart, we crafted our first pizza, a humble yet delicious creation that would soon become the cornerstone of our success.</p>
        <button type='button' className='custom__button'>Know More</button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
