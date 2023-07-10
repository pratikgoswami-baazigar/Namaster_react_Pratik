import { useEffect, useState } from "react";
import { render } from "react-dom";

const Profile = (props) => {
    const [count,setCount] = useState(0);
    
    useEffect(() => {
    console.log("useEffect");
   const timer =  setInterval(()=> {
     console.log("React OP");
    },1000);

  
    return () => {
       clearInterval(timer);
     }

    },[])
  console.log(render);
    return (
        <>
<h1> Prarik(Myself) have created this food ordering app</h1>
  <h2>{props.name}</h2>
  <h2>{count}</h2>
  <button onClick={() => setCount(1)}>Count</button>
  </>
    )
}
export default Profile;