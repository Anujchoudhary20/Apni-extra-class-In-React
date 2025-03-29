import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Vocabulary from "./Components/Vocabulary";
import Sentense from "./Components/Sentense";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import ForgotPassword from "./Components/ForgotPassword";
import Profile from "./Components/Profile";
import Quiz from "./Components/Quiz/Quiz";
import ScrollToTop from "./Components/ScrollToTop";


// const ProtectedRoute = ({ children }) => {
//   const isLoggedIn = !!JSON.parse(localStorage.getItem("userLogInformation"));
//   return isLoggedIn ? children : <Navigate to="/login" />;
// };

const App = () => {
  const isLoggedIn = !!JSON.parse(localStorage.getItem("userLogInformation"));
  const location = useLocation();
  const showNavbar = !["/login", "/signup", "/forgotpassword"].includes(location.pathname);
  // console.log('anuj',showNavbar)

  return (
    <div>
      {showNavbar && <Navbar/>}
      <ScrollToTop/>
      <div className="Router-div">
        
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/quiz" element={isLoggedIn ? <Quiz/>: <Navigate to="/login"/>} />
        <Route path="/sentence" element={isLoggedIn  ? <Sentense />: <Navigate to="/login"/>} />
        <Route path="/vocabulary" element={isLoggedIn ?<Vocabulary /> :<Navigate to="/login"/>} />
      </Routes>
      {showNavbar && <Footer />}
      </div>
    </div>
  );
};

export default App;
