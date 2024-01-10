import React from 'react'
import './Header.css'
import { SubHeading } from '../../components'
import { images } from '../../constants'
const Header = () => {
  return (
    <div className='app__header app__wrapper section__padding'id='home'>
      <div className='app__wrapper_info'>
 <SubHeading title="Chase the new flavour"/>
 <h1 className='app__header-h1'>The Key to Fine Pizza</h1>
 <p className='p__opensans' style={{ margin: '2rem 0' }}>every pizza is a culinary adventure, pairing wood-fired perfection with the freshest ingredients. Taste the tradition reimagined in every slice.</p>
  <button  type="button" className='custom__button'>Explore Menu</button>
      </div>
      <div className='app__wrapper_img'>
        <img src={images.welcome}alt="welcome" style={{width:'70%'}}/>
      </div>
    </div>
  )
}

export default Header
