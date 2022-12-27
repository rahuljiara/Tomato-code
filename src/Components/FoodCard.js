import React from 'react'
import "./FoodCard.css"

const FoodCard = ({data}) => {
  console.log(data)
  return <>
    <div className="food-container">
      {
       data.map(food => (
          <div className="food-card" key={food.id}>
            {console.log(food.foodType)}
            <div className="title">
              <h3>
                {food.name}
              </h3>
              <div className="food-type">
                {
                  food.foodType === "veg" ? <img src="./img/veg-sign.png" /> : <img src="./img/nonveg-sign.jpg  " />
                }
              </div>
            </div>

            <div className="image">
              <img src={food.image} />
            </div>

            <div className="price">
              <p>{food.price}₹</p>
              <button>Order Now</button>
            </div>
          </div>
        ))
      }
    </div>
  </>
}

export default FoodCard
