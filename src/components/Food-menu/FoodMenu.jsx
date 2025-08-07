import './FoodMenu.css'
import { useContext } from 'react'
import { food_images } from '../../assets/food-images/assets'
import {FoodContext} from '../../context/FoodContext.jsx'
import addIcon from '../../assets/add.png';
import minusIcon from '../../assets/minus.png';


const FoodMenu = () => {


    const {activeCategory:category} = useContext(FoodContext);

    const filteredMenu = food_images.filter((item) => {
        if (category === "All") {
            return item; // If "All" is selected, return all items
        }
        return item.category === category;
    });

    return (
        <div className="food-menu">
            <div className="food-card">
                {
                    filteredMenu.map((item) => {
                        return(
                            <div key={item.id} className="food-menu-card">
                                <div className='cart-actions'>
                                    <img className='cart-actions-img01' src={addIcon} alt="add to basket icon"/>
                                    <img className='cart-actions-img02' src={minusIcon} alt="remove from basket icon"/> 
                                </div>
                                <img src={item.image} alt={"Dish's name"} />
                                <h4>{item.name}</h4> 
                                <p className='food-price'> ₹ {item.price}</p>
                                <p className='food-desc'>{item.desc}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
    }

export default FoodMenu
