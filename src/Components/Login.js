import React, { useState } from 'react'
import {Link } from "react-router-dom";

export default function Login() {
    const [values,setValues]= useState({
        userId:"",
        password:""
    })
  return (
    <div className='login-main'>
        <div className='login'>
            <p className='login-logo'>Logo</p>
            <p className='login-text'>Enter your credentials to acesss your account</p>
            <form action="" className='login-form'>
                <input type="email" />
                <input type="password" name="" id="" />

            </form>
            <Link className='sign-in-button' to="/Homepage">Sign in</Link>
        </div>
        <div className='login-register'>
            <span className='login-span-text'>Don't have account? </span>
            <Link to="/Register" className='sign-up-button'>Sign up</Link>
        

        </div>
       
    </div>
  )
}
