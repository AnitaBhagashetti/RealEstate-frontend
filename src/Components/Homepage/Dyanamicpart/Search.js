import React, { useState } from 'react'
import {Link } from "react-router-dom";
import axios from 'axios'
import {useNavigate  } from "react-router-dom";
export default function Search() {
  const [values,setValues]= useState({
    PPDID:''
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
        await axios.get(`http://localhost:8080/PPDID?PPDID=${values.PPDID}`,{
          }).then(res=>console.log(res))
  } catch (error) {
    console.log(error)
  }
}
  return (
    <div className='search-buttons'>
        <form className='search'>
            <input className='search-input' name='UserId' value={values.PPDID} type="text" placeholder='Search PPD ID' onChange={ handleChange} >
            </input>
            <i class="fa-solid fa-magnifying-glass" onClick={handleClick}></i>
        </form>
        <Link to="/Basicinfo" className='add-button'>
        <i class="fa-solid fa-plus"></i>
        Add Property
        </Link>
    </div>
  )
  }