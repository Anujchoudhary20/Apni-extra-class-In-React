import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Profile = () => {
  const [userData,setUserData]=useState("")
  const [logindata, setLogindata]=useState("");
  const Navigate = useNavigate()
 const HandleLogOut =(e)=>{
  e.preventDefault()
  const remove = localStorage.removeItem("userLogInformation")
  Navigate("/login")
  toast.success("LogOut Successfully")
  
  // window.location.reload();
 }

  useEffect(()=>{
    const loginInfo=JSON.parse(localStorage.getItem("userLogInformation"))
    const SignUpInfo= JSON.parse(localStorage.getItem('userInformation'))
    if (loginInfo && SignUpInfo){
      // setUserData(SignUpInfo)
      setLogindata(loginInfo);
      const userExistsInfo= SignUpInfo.find(
        (user)=>
          user.email===SignUpInfo.email && loginInfo.password ===SignUpInfo.password

            )
      console.log("anuj",)

      for(let i=0;i<SignUpInfo.length;i++){
        if(loginInfo.email==SignUpInfo[i].email){
          setUserData(SignUpInfo[i]);
        }
      }
    }
  },[])

  // console.log( " ye shi data hai" ,userData);
  // console.log("ye login ka data hai", logindata);
  return (
    <div className='Profile'>
      <h2>{userData.name}</h2>
      <h1>{userData.email}</h1>
      <button onClick={HandleLogOut}>logout</button>
    </div>
  )
}

export default Profile



// import React, { useRef, useState ,useEffect} from "react";
// import Nav from "./Nav";
// import Sidebar from "./Sidebar";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// const profile = () => {
//   const userRef = useRef(null);
//   const [imgUser, setImgUser] = useState( '');
//   const [userName, setUserName] = useState('');
//   const [email, setEmail] = useState('');
//   const [address, setAddress] = useState("");
//   const [contectnumber, setContectNumber] = useState("");
//   const [saveimage,setSeveImage]=useState("")
//   const saveEmail = localStorage.getItem("email");
//   const saveName = localStorage.getItem("userName");
//   const SaveAddress = localStorage.getItem("adderess");
 
//   var navigate=useNavigate()
//   useEffect((e)=>{
//     setSeveImage(localStorage.getItem("image"))
//   },[])

//   const hendeluplodeimage =(e)=>{
//     const uplodeimage = e.target.files[0]
//     if(uplodeimage){
//       const reader = new FileReader();
//       reader.onload=()=>{
//         const base64Image =reader.result
//         setImgUser(base64Image)
//         localStorage.setItem("image", base64Image);

//       }
//       reader.readAsDataURL(uplodeimage)
//     }
//   }

//   let handleSubmit = (e) => {
//     e.preventDefault();
//     if( userName !=="" && email !=="" && address !==""){
//     localStorage.setItem("name", userName);
//     localStorage.setItem("email", email);
//     localStorage.setItem("adderess", address);
//     setEmail("");
//     // setPassword("");
//     setAddress("")
//     setUserName("")
//     navigate("/");}
//     else{
//       toast.error("all fild is nacesary")
//     }
//   };

//   const hendelclick = () => {
//     userRef.current.click();
//   };

  
  
//   return (
//     < div className='ml-36 max-lg:ml-14 pt-7   bg-gray-500  items-center h-fit overflow-y-auto overflow-x-hidden' style={{maxWidth:"89vw"}} >

//       <div className="h-screen  justify-center mt-12  my-5 items-center  ">
//         <Nav />
//         <div className=" w-full    mt-10 h-fit ">
//           <h1 className="font-bold text-2xl m-4 pt-5  text-center">
//             Profile Update
//           </h1>
//           <div className=" max-md:flex-col flex justify-evenly">
//             {/* image input here  */}
//             <div>
//             <div
//             onClick={hendelclick}
//               className="mx-9  border-none   rounded-full"
//             >
//               {imgUser ? (
//                 <img
//                   src={imgUser }
                  
//                   alt="profile img"
//                   className="w-44 rounded-full hover:shadow-xl hover:shadow-white border-4 border-blue-700"                />
//               ) : ( 
//                 saveimage ?(                <img
//                   src={saveimage }
                  
//                   alt="profile img"
//                   className="w-44 rounded-full hover:shadow-xl hover:shadow-white border-4 border-blue-700"                />
// ):(
//                 <img
//                   src="./public/Profile.jpg"
//                   alt="profile img"
//                   className="w-44 rounded-full hover:shadow-xl hover:shadow-white border-4 border-blue-700"
//                 />)
//               )}
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={hendeluplodeimage}
//                 ref={userRef}
//                 className="hidden"
//               />

//               {/* user info */}
// </div>
//               <div className="mt-28 w-80 border-2 pb-5 max-sm:w-72 mx-4 rounded-md mb-5">
//                 <h1 className="m-2 text-bold ">Name <strong className="text-blue-900 font-bold">{saveName}</strong></h1>
//                 <h2 className="m-2 text-bold ">Email Id <strong className="text-blue-900 font-bold">{saveEmail}</strong> </h2>
//                 <p className="m-2 text-bold ">Address <strong className="text-blue-900 font-bold">{SaveAddress} </strong></p>
//               </div>
            
//             </div>
//             {/* user form */}
//             <div className="border-2  max-sm:w-72 px-2 mx-4 rounded-md my-5 right-6 shadow-md shadow-gray-200 items-center">
//               {/* full Name */}
//               <label htmlFor="username" className="font-bold mx-5">
//                 {" "}
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 value={userName}
//                 onChange={(e) => {
//                   setUserName(e.target.value);
//                 }}
//                 required
//                 placeholder="Enter Your Full Name"
//                 className="border-gray-800 border-2 px-1 py-2 rounded-xl my-5 mx-2"
//               />
//               <br />
//               {/* email */}
//               <label
//                 htmlFor="email"
//                 className="font-bold mx-5"
//                 style={{ marginRight: 10 }}
//               >
//                 {" "}
//                 Email ID
//               </label>
//               <input
//                 type="text"
//                 value={email}
//                 onChange={(e) => {
//                   setEmail(e.target.value);
//                 }}
//                 required
//                 placeholder="Enter Your  Email"
//                 className="border-gray-800 border-2 px-1 py-2 rounded-xl my-5 mx-2"
//               />{" "}
//               <br />
//               {/* Address */}
//               <label htmlFor="location" className="font-bold mx-5 ">
//                 {" "}
//                 Address {""}
//               </label>
//               <input
//                 type="text"
//                 value={address}
//                 required
//                 onChange={(e) => {
//                   setAddress(e.target.value);
//                 }}
//                 placeholder="Enter Your Address"
//                 className="border-gray-800 border-2 px-1 py-2 rounded-xl my-5 mx-2"
//               /> <br />
//               <button
//                 className="my-5 mx-4 px-5 py-3 border-2 rounded-2xl bg-green-600 font-bold text-white hover:bg-green-800  "
//                 onClick={handleSubmit}
//               >
//                 {" "}
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default profile;