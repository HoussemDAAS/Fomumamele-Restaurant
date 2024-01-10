import React from 'react'
import  './Menu.css'
import { SubHeading,MeniItem} from '../../components'
import { images, data } from '../../constants'
const Menu = () => {
  return (
    <div className='app__menu flex__center section__padding' id='menu'>
      <div className='app__menu-title'>
        <SubHeading title="Menu that fits you desire" />
        <h1 className='headtext__cormorant'>
          Today's Specials
        </h1>
      </div>
      <div className='app__menu-menu'>
        <div className='app__menu_menu_italia flex__center'>
          <p className='app__menu_menu_heading'>Italian Pizza</p>
          <div className='app__menu_menu_items'>
            {data.italia.map((item, index) => (
              <MeniItem key={item.title + index} title={item.title} price={item.price} tags={item.tags}/>
            ))}
          </div>
        </div>
        <div className='app__menu_menu_img'>
          <img src={images.menu} alt="menu img" />
        </div>
        <div className='app__menu_menu_special flex__center'>
          <p className='app__menu_menu_heading'>Special Pizza</p>
          <div className='app__menu_menu_items'>
            {data.Speicial.map((item, index) => (
               <MeniItem key={item.title + index} title={item.title} price={item.price} tags={item.tags}/>
            ))}
          </div>
        </div>
      </div>
      <div style={{marginTop: '15px' }}>
        <button type='button' className='custom__button'>View More</button>
      </div>
    </div>
  )
}

export default Menu
