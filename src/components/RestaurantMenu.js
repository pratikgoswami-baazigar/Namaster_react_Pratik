import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Constants";
import Shimmer from "./shimmer";
import useRestaurant from "../utils/useRestaurant";


const RestaurantMenu = () => {
    const { id } = useParams();
    const {restaurant,menuItems} = useRestaurant(id);
  
    return (!restaurant)?(<Shimmer/>):(
        <div className="menu-items">
        <div >
          <h1>Restaurant id: {id}</h1>
          <h2>{restaurant?.name}</h2>
          <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
          <h3>{restaurant?.city}</h3>
          <h3>{restaurant?.costForTwoMessage}</h3>
          <h3>{restaurant?.avgRating} Stars</h3>
          <h3>{restaurant?.areaName}</h3>
        </div>
        <div >
          <h1>Menu </h1>
          <ul>
            {menuItems.map((itemName, index) => (
              <li key={index}>{itemName}</li>
            ))}
          </ul>
        </div>
        </div>
      )
  };
  
export default RestaurantMenu;