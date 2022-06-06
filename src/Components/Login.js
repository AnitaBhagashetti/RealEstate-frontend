import React, { useState } from 'react'
import {Link } from "react-router-dom";
import axios from 'axios'
import {useNavigate  } from "react-router-dom";
export default function Login() {
    const [values,setValues]= useState({
        userId:"",
        password:""
    })
    const navigate = useNavigate();
    function handleChange(e){
        setValues((prevstate)=>{
            return{
                ...prevstate,
                [e.target.name] : e.target.value
            }
        })
    }
async function handleClick(e){
    e.preventDefault();
    try {
        console.log(values)
        await axios.post('http://localhost:8080/login',{
            userId:values.userId,
            password:values.password
          }).then((res)=>{
              console.log(res)
              if(res.data.status==="Success"){
                let token = res.data.token;
                localStorage.setItem("token", 'Bearer ' + token);
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
                alert("Logged in successfully")
                navigate("/Homepage");
              }
              else{
                  alert(res.data.status)
              }
          }
          )
        //   navigate('http://localhost:3000/Homepage',{ replace: true })
    } catch (error) {
        console.log(error)
    }
}
  return (
    <div className='login-main'>
        <div className='login'>
            <p className='login-logo'>Logo</p>
            <p className='login-text'>Enter your credentials to acesss your account</p>
            <form className='login-form' onSubmit={handleClick}>
            <input type="email" name='userId' value={values.userId} onChange={handleChange} ></input>
        <input type="password" name="password" value={values.password} onChange={handleChange}></input>
                <button className='sign-in-button' type='submit' >Sign in</button>
                <Link to="/Register" className='sign-up-button'>Sign up</Link>
            </form>
        </div>
        <div className='login-register'>
            <span className='login-span-text'>Don't have account? </span>
            <Link to="/Register" className='sign-up-button'>Sign up</Link>
        </div>
    </div>
  )
}