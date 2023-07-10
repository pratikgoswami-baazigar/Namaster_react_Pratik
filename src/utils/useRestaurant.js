import { useState, useEffect } from "react";

const useRestaurant = ( id) => {
    const [restaurant, setRestaurant] = useState(null);
    const [menuItems, setMenuItems] = useState([]);
  
    useEffect(() => {
      getRestaurantsInfo();
    }, []);
  
    async function getRestaurantsInfo() {
      const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9085&lng=77.625658&restaurantId=${id}&submitAction=ENTER`);
      const data = await response?.json();
      setMenuItems(getMenuItems(data));
      setRestaurant(data?.data?.cards[0]?.card?.card?.info);
    }
  
    function getMenuItems(data) {
      const menuItems = [];
  
      data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.forEach((card) => {
        const itemCards = card?.card?.card?.itemCards;
        if (itemCards) {
          itemCards.forEach((itemCard) => {
            const itemName = itemCard?.card?.info?.name;
            menuItems.push(itemName);
          });
        }
      });
  
      return menuItems;
    }
    return {restaurant,menuItems}
}

export default useRestaurant;