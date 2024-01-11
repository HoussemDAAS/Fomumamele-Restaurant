import React from 'react'
import './Chef.css'
import { SubHeading } from '../../components'
import { images } from '../../constants'
const Chef = () => {
  return (
    <div className='app__bg app__wrapper section__padding'>
      <div className='app__wrapper_img app__wrapper_img-reverse'>
        <img src={images.chef} alt="Chef" />
      </div>
      <div className='app__wrapper_info'>
        <SubHeading title={"Chef's World"}/>
        <h1 className='headtext__cormorant'>What we believe in</h1>
<div className='app__chef-content'>
  <div className='app__chef-content_quote'>
    <img src={images.quote} alt="quote"/>
    <p className='p__opensans'>Enjoy your Pizza like it's your last.</p>
  </div>
  <p className='p__opensans'>I love pizza, meaning: even when I’m in the middle of eating pizza, I wish I were eating pizza.</p>
</div>
<div className='app__chef-sign'>
  <p>Kevin Luo</p>
  <p className='p__opensans'>Chef & Founder</p>
  <img src={images.sign} alt="" />
</div>
      </div>
    </div>
  )
}

export default Chef
