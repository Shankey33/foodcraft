import React from 'react'
import { createContext, useState } from 'react'

export const FoodContext = createContext(); 

const FoodState = (props) => {
    
    const [activeCategory, setActiveCategory] = useState("All")
    
    const value = {
        activeCategory,
        setActiveCategory
    }
  
    return (
    <FoodContext.Provider value={value}>
        {props.children}
    </FoodContext.Provider>
  )
}

export default FoodState
