import React,{useState,useEffect} from 'react'

const Ba = () => {
  const [data, setData]=useState("");
useEffect((e) => {
  const fatch= async (e)=>{
    const a= await(JSON.parse(localStorage.getItem("userLogInformation")));
    console.log(a.email);
    setData(a.email)   
  }
  fatch();
}, []);
// console.log("Email Key Exists?", data);
  return (
    <div>
      fgjhfbfgb
    </div>
  )
}

export default Ba


// import React, { useState } from 'react'

// const Ba = () => {
//     const[ userData, setUserData]=useState({name:"",email:"",password:""})
//     const   hendelOnchange=(e)=>{
//         setUserData({...userData,[e.target.name]:e.target.value})
//     }
//     const handelSubmit=()=>{
//         const existingData =JSON.parse(localStorage.getItem("userInformation")) || []
//         const updatedData = [...existingData,userData]
        
//         localStorage.setItem("userInformation",JSON.stringify(updatedData))
//         alert("submit")
//     }
//     console.log("anuj ",userData)
//   return (
//     <div>
//      <input type="text" placeholder='name' name='name' value={userData.name}  onChange={hendelOnchange}/>

//       <input type="email" placeholder='erferfe' name='email' value={userData.email}  onChange={hendelOnchange}/>
//       <input type="password" placeholder='password' name='password' value={userData.password}  onChange={hendelOnchange}/>
//     <button onClick={handelSubmit}> class</button>
//     </div>
//   )
// }

// export default Ba
