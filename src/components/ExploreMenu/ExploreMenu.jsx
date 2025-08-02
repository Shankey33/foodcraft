import React from 'react'
import "./ExploreMenu.css"
import { menu_list } from '../../assets/frontend_assets/assets'

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='explore-menu' id='explore-menu'>

        <h1>Explore Our Menu</h1>
        <p className="explore-menu-text">Discover flavors you'll love — from savory classics to bold new favorites. Our menu has something for every craving.</p>
        <div className="explore-menu-list">
            {menu_list.map((item, index) => {
                return (
                    <div key={index} className='explore-menu-list-item' onClick={() => setCategory(item.menu_name)}>
                        <img src={item.menu_image} alt="food_image" className={category === item.menu_name?"active":""}/>
                        <p>{item.menu_name}</p>  
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu
