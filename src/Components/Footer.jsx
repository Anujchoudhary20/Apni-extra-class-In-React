import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect((e) => {
    const fatch= async (e)=>{
      const userInfo= await(JSON.parse(localStorage.getItem("userLogInformation")));
      // setData(a.email) 
      if (userInfo && userInfo.email){
        setIsLoggedIn(true)
        // console.log("anuj 1234",userInfo)
      } 
      else{
        setIsLoggedIn(false)
      } 
    }
    fatch();
  }, []);
    const navItem=[
        {
          "text": "Home",
          "path":"/"
        },
        {
          "text": "Vocabulary",
          "path":"/vocabulary"
        },
        {
          "text": "Sentence",
          "path":"/sentence"
        },
        {
          "text": "About",
          "path":"/about"
        },
        isLoggedIn ?
        { "text": "Profile", "path": "/profile" }
        : { "text": "LogIn", "path": "/login" },
      ]
  return (
    <div>
          <footer>
        <div className="footer">
            <div className="footer_child">
                <div>
                {/* <img src="./image/images.jfif" alt=""  style={{borderRadius:"50%"}} /> */}
                    <h3>Contact Us</h3>
                    <ul className="footer_ul">
                        <li>Email: anujchoudhary207@gmail.com</li>
                        <li>Contact: (+91) 6261020033</li>
                        <li>Address: Sanwer Dist, Indore 453551</li>
                    </ul>
                </div>
                <div>
                    <h3>Quick Links</h3>
                    <ul className="footer_ul">
                    {
    navItem.map((item)=>(
      <li key={item.text}><Link to={item.path}> {item.text}</Link></li>
    ))
  }
                    </ul>
                </div>
                <div>
                    <h3>Follow Us</h3>
                    <ul className="footer_ul">
                        <li><a href="#" target='_blank'></a><FaFacebookSquare style={{color:"blue",backgroundColor:"white"}}/></li>
                        <li><a href="https://www.instagram.com/apni_extra_class/" target='_blank'><FaInstagram style={{color:"red"}}/></a></li>
                        <li> <a href="https://www.youtube.com/@apniextraclass9464" target='_blank'><FaYoutube style={{color:"red"}}/></a> </li>
                        <li><a href="#" target='_blank'></a><FaLocationDot/></li>
                    </ul>
                </div>
            </div>
            <h3 style={{alignItems: 'center'}}><FaRegCopyright/> 2024 Your Company, All rights reserved</h3>
        </div>
    </footer>
    </div>
  )
}

export default Footer