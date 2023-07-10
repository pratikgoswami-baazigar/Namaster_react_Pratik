import { useState, useEffect } from "react";

const useRestaurantList = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(() => {
        getRestaurants();
       },[])
   
       async function getRestaurants( ) { 
         const data =  await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9085&lng=77.625658&page_type=DESKTOP_WEB_LISTING');
         const json  = await data?.json();
         setAllRestaurants(json?.data?.cards[2].data.data.cards);
         setFilteredRestaurants(json?.data?.cards[2].data.data.cards);
       }

       return {
        allRestaurants,filteredRestaurants
       }
}

export default useRestaurantList;