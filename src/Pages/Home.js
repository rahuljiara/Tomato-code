import React, { useState } from 'react'
import "./Home.css"
import food from "./Api"
import FoodCard from '../Components/FoodCard'









const Home = () => {
  const [foodData, setFoodData] = useState(food)
  const [mobileNav,setMobileNav] = useState({
    maxHeight:"0",transition:".5s"
  })


  const filterItem = (category)=>{
    const filteredItem = food.filter((x)=>{
      return x.category === category ||
              x.foodType === category
    })
    setMobileNav({
      maxHeight:"0",transition:"1s"
    })
    setFoodData(filteredItem)
  }

//  Navigation Toggle function
  function navToggle(){
    if(mobileNav.maxHeight === "0"){
      setMobileNav({
        maxHeight:"100vh",transition:"1s"
      })
    }
    else{
      setMobileNav({
        maxHeight:"0",transition:"1s"
      })

    }
  }


  return <>
     <nav>
      <div className="logo">
        <img src="./img/tomato-logo.png" />
        <h3>TOMATO</h3>
      </div>
     <div className="navlinks">
     <ul style={mobileNav}>
        <li onClick={() => setFoodData(food)}>
          <a href="#"> All </a>
        </li>
        <li onClick={() => filterItem("fast food")}>
          <a href="#">Fast Food </a>
        </li>
        <li onClick={() => filterItem("Lunch/Dinner")}>
          <a href="#">Lunch/Dinner </a>
        </li>
        <li onClick={() => filterItem("veg")}>
          <a href="#"><img src="./img/veg-sign.png"/>  Veg </a>
        </li>
        <li onClick={() => filterItem("non-veg")}> 
          <a href="#"><img src="./img/nonveg-sign.jpg"/> Non Veg </a>
        </li>
      </ul>
     </div>
     <img src="https://cdn-icons-png.flaticon.com/512/2976/2976215.png"  id="nav-menu" onClick={navToggle}/>
    </nav>




  <FoodCard data={foodData} />
  </>
}

export default Home
