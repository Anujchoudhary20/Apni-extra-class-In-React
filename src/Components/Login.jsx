import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";


const Login = () => {
  const [signUpInfo, setSignUpInfo] = useState([]);
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user information from localStorage
    const storedInfo = JSON.parse(localStorage.getItem('userInformation')) || [];
    setSignUpInfo(storedInfo);
    
  }, []);
  // console.log("login data ",signUpInfo.find(signUpInfo.email))

  // Handle input changes
  const handleOnChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if user exists in stored sign-up data
    const userExists = signUpInfo.find(
      (user) => user.email === userData.email && user.password === userData.password
    );  
  

    if (userExists) {
      toast.success("Login successful!")
      localStorage.setItem("userLogInformation", JSON.stringify(userData));
    
      navigate('/');
    } else {
      toast.error('Invalid email or password. Please try again.');
    }
  };

  return (
    <form className="Register-head" onSubmit={handleSubmit}>
      <div>
        <h1 style={{ padding: '10px' }}>Log In</h1>
        <div className="Register-div1">
          <img src="../image/images.jfif" className="Register-img" alt="Logo" />
          <div className="input">
            {/* email Input */}
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              value={userData.email}
              name="email"
              onChange={handleOnChange}
              required
            />
            {/* password  input*/}
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={userData.password}
              name="password"
              onChange={handleOnChange}
              required
            />
            {/* forgot Password */}
            <label>
              <Link to="/forgotpassword">Forgot Password?</Link>
            </label>
            <button
              type="submit"
              style={{ marginTop: '20px', fontSize: '18px' }}
            >
              Log In
            </button>
            <p>
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
