import RestaurantCard from "./RestaurantCard";
import { RestaurantList } from "../Constants";
import { useState, useEffect } from "react";
// import Shimmer from "./S";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
// import Shimmer from "./Shimmer";

const Body = (props) => {   

    const [allRestaurants, setAllRestaurants] = useState([]);
    const [searchText, setSearchInput] = useState('');
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    useEffect(() => {
     getRestaurants();
    },[])

    async function getRestaurants( ) { 
      const data =  await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9085&lng=77.625658&page_type=DESKTOP_WEB_LISTING');
      console.log(data);
      const json  = await data?.json();
      console.log(json?.data?.cards[2].data.data.cards);
      setAllRestaurants(json?.data?.cards[2].data.data.cards);
      setFilteredRestaurants(json?.data?.cards[2].data.data.cards);
    }
    
    // console.log(isOnline);
    // // const isOnline = useOnline();
    // // console.log(isOnline);

    // if(!isOnline) {
    //   return (
    //     <div>
    //       you are offLine, please check your Internet Connection
    //     </div>
    //   )
    // }


    return (allRestaurants.length===0)? null:
    (
      <>
      <div className="search-container p-5 bg-pink-50 m-2">
      <input
              type="text"
              className="focus:bg-green-300 p-2 m-2"
              placeholder="search"
              value={searchText}
              onChange={(e) =>{
              // e.target.value = whatever you put in the input 
              setSearchInput(e.target.value)
            }}
      />
      <button className="p-2 m-2 bg-purple-900 text-white rounded-md hover:bg-gray-600"
      onClick={ 
              () => {
              const data =  filterData(searchText,allRestaurants) 
              setFilteredRestaurants(data)
              }
      }
      >search </button>
      </div>
      <div className="flex flex-wrap">
     {
      (filteredRestaurants.length===0)?(<h1>No Restaurant matches your filter</h1>):
      filteredRestaurants.map((restaurant) => {
        return (
          <Link   to={"/restaurant/"+ restaurant.data.id}  key = {restaurant.data.id}>
        <RestaurantCard {...restaurant.data} user = {{name:props.user.name,id:props.user.id}} />
        </Link>
        )
      })
     }
     </div>
      </>
    )
  }

export default Body ;