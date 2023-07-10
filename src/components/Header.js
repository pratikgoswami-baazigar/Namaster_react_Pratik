 import { Component, useState } from "react";
 import { Link } from "react-router-dom";
 import useOnline from "../utils/useOnLine";

 const Title = () =>(
    <a href="/">
    <img
    className="h-28 p-2"
    alt="logo"  // if for some reason image is not displayed, then logo word will show .
    src = "https://lh3.googleusercontent.com/p/AF1QipMf9w4RomHXrUkQKvrxtPdjp3SLadP05HDzXlH2=w1080-h608-p-no-v0"
     />
    </a>
    ) 

 const Header = () => {
    const [login, setLogin] = useState(true);
    const isOnline = useOnline();


        return ( 
        <div className="flex justify-between bg-blue-50 shadow-lg">
        <Title/>
        <div className="nav-items">
            <ul className="flex py-10">
            <Link to="/">
            <li className="px-2">Home</li>
            </Link>
            <Link to="/about">
            <li className="px-2">About</li>
            </Link>
            <Link to="/contact">
            <li className="px-2">Contact</li>
            </Link>
            <li className="px-2">Cart</li>
            <Link to="/instamart">
            <li className="px-2">Instamart</li>
            </Link>
            </ul>
        </div>
        <h1>{isOnline? <div style={{color: "lightgreen"}}>Online</div>:<div style={{color: "red"}}>Offline</div>}</h1>
        {
            (login)? <button onClick={() =>setLogin(false)}>Logout</button> : <button onClick={()=>setLogin(true)}>Login</button>
        }
        </div>
        )
    }

export default Header;