import React, { useState, useEffect } from "react";
import "../App.css";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect((e) => {
    const fatch= async (e)=>{
      const userInfo= await(JSON.parse(localStorage.getItem("userLogInformation")));
      // setData(a.email) 
      console.log("info",userInfo)
      if (userInfo && userInfo.email){
        setIsLoggedIn(true)
      } 
      else{
        setIsLoggedIn(false)
      } 
    }
    fatch();
  }, []);
  
  
  const navItem = [
    { text: "Home", path: "/" },
    { text: "Vocabulary", path: "/vocabulary" },
    { text: "Sentence", path: "/sentence" },
    { text: "About", path: "/about" },
    { text: "Quiz", path: "/quiz" },
    isLoggedIn
      ? { text: "Profile", path: "/profile" }
      : { text: "LogIn", path: "/login" },
  ];

  return (
    <div>
      <nav className="nev-bar">
        <input type="checkbox" id="check" />
        <label htmlFor="check" id="checkbtn">
          <FaBars />
        </label>
        <label className="logo">
          <Link to="/">Apni Extra Class</Link>
        </label>
        <ul>
          {navItem.map((item) => (
            <li key={`${item.text}-${item.path}`}>
              <Link to={item.path}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
