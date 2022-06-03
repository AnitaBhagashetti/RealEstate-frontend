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
async function handleClick(){
    
    try {
        console.log(values)
        await axios.post('http://localhost:8000/login',{
            userId:values.userId,
            password:values.password
          }).then(res=>console.log(res))

        
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
                <input type="email" name='userId' value={values.userId} onChange={handleChange}  />
                <input type="password" name="password" value={values.password} onChange={handleChange}  />
                <button className='sign-in-button' type='submit' >Sign in</button>

            </form>
           
        </div>
        <div className='login-register'>
            <span className='login-span-text'>Don't have account? </span>
            <Link to="/Register" className='sign-up-button'>Sign up</Link>
        

        </div>
       
    </div>
  )
}
