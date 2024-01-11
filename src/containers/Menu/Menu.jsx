import React from 'react'
import  './Menu.css'
import { SubHeading,MeniItem} from '../../components'
import { images, data } from '../../constants'
const Menu = () => {
  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>

    <div class="app__specialMenu-menu">
  <div class="app__specialMenu-menu_pizza flex__center">
    <p class="app__specialMenu-menu_heading">Special</p>
    <div class="app__specialMenu_menu_items">
      {data.Speicial.map((item, index) => (
        <MeniItem key={item.title + index} title={item.title} price={item.price} tags={item.tags} />
      ))}
    </div>
  </div>

  <div class="app__specialMenu-menu_img">
    <img src={images.menu} alt="menu__img" />
  </div>

  <div class="app__specialMenu-menu_pizza flex__center">
    <p class="app__specialMenu-menu_heading">Italian Pizza</p>
    <div class="app__specialMenu_menu_items">
      {data.italia.map((item, index) => (
        <MeniItem key={item.title + index} title={item.title} price={item.price} tags={item.tags} />
      ))}
    </div>
  </div>
</div>

<div style={{ marginTop: 15 }}>
  <button type="button" class="custom__button">View More</button>
</div></div>
  )
}

export default Menu
