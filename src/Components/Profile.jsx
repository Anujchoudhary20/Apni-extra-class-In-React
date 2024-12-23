import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import localImage from '../assets/image.webp'
const Profile = () => {
  const [userData, setUserData] = useState("");
  const [logindata, setLogindata] = useState("");
  
  const [imgUser, setImgUser] = useState("") ;
const [image, setImage] = useState("") 
  const Navigate = useNavigate();
  

  const HandleLogOut = (e) => {
    e.preventDefault();
    const remove = localStorage.removeItem("userLogInformation");
    Navigate("/login");
    toast.success("LogOut Successfully");

    // window.location.reload();
  };

  useEffect(() => {
    const loginInfo = JSON.parse(localStorage.getItem("userLogInformation"));
    const SignUpInfo = JSON.parse(localStorage.getItem("userInformation"));
    const imageData = localStorage.getItem("image");

    if (loginInfo && SignUpInfo) {
      // setUserData(SignUpInfo)
      setLogindata(loginInfo);
      const userExistsInfo = SignUpInfo.find(
        (user) =>
          user.email === SignUpInfo.email &&
          loginInfo.password === SignUpInfo.password
      );

      for (let i = 0; i < SignUpInfo.length; i++) {
        if (loginInfo.email == SignUpInfo[i].email) {
          setUserData(SignUpInfo[i]);
          setImage(imageData);
          
        }
      }
    }
  }, []);

  const hendeluplodeimage = (e) => {
    const uplodeimage = e.target.files[0];
    if (uplodeimage) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Image = reader.result;
        setImgUser(base64Image);
        localStorage.setItem("image", base64Image);
      };
      reader.readAsDataURL(uplodeimage);
    }
  };
  // image data
  const apdatadImage = image ? image :localImage;
  const userImage = imgUser ? imgUser :apdatadImage ;


  return (
    <div className="Profile-componet">
      <div>
        <img src={userImage}  className="profile-img" />
       
      </div>
      <div className="profile-div">
       <input
          type="file"
          accept="image/*"
          onChange={hendeluplodeimage}
          style={{display: "block"}}
        />
        <strong  style={{display:"flex",justifyContent: "center"}}>Profile</strong>
        
        <h2>Name  {userData.name}</h2>
        <h2>Email {userData.email}</h2>
         <button onClick={HandleLogOut}>Logout</button>

        
      </div>
    </div>
  );
};

export default Profile;
