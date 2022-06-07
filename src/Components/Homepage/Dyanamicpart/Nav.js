import React from 'react'
import {useNavigate} from 'react-router-dom'
import down from '../../../Images/down.png'

export default function Nav() {
  const navigate=useNavigate()
  const handleLogout = () => {
    localStorage.clear();   
    navigate("/");
   
  };

  return (
    <div className='nav'>
        <p>USERID:<span>06PPD125</span></p>
        <div className='nav-user'>
        <i class="fa-solid fa-user"></i>

        <p className='user-name'>UserName</p>
        <img
          className="down-arrow" src={down} alt="image"
          // onClickCapture={logout}
          onClick={() => {
            if (window.confirm("Do you want to logout the page")) {
              handleLogout();
            }
          }}
        />

        <p className='user-name'>User Name</p>


        </div>

      
    </div>
  )
} 
