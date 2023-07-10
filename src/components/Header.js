 import { Component, useState } from "react";
 import { Link } from "react-router-dom";
 import useOnline from "../utils/useOnLine";

 const Title = () =>(
    <a href="/">
    <img
    className="logo"
    alt="logo"  // if for some reason image is not displayed, then logo word will show .
    src = "https://lh3.googleusercontent.com/p/AF1QipMf9w4RomHXrUkQKvrxtPdjp3SLadP05HDzXlH2=w1080-h608-p-no-v0"
     />
    </a>
    ) 

 const Header = () => {
    const [login, setLogin] = useState(true);
    const isOnline = useOnline();


        return ( 
        <div className="header">
        <Title/>
        <div className="nav-items">
            <ul>
            <Link to="/">
            <li>Home</li>
            </Link>
            <Link to="/about">
            <li>About</li>
            </Link>
            <Link to="/contact">
            <li>Contact</li>
            </Link>
            <li>Cart</li>
            <Link to="/instamart">
            <li>Instamart</li>
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