import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Signup.css";

const Homepage = () => {
  const navigate=useNavigate();
   const handleClick = () => {
    localStorage.removeItem("user");
    navigate('/');

  };
  return (
    <div  className="signup-container">
       <button onClick={handleClick}>Log out</button>
    </div>
  )
}

export default Homepage