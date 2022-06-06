// import React from 'react'
// import './Search.css'
import {Link} from 'react-router-dom'
import React, {useState} from 'react'

function Search({searchkey,setSearchKey}) {
    
  return (
    <div className='Search'>
        <form class="search-form">
            <input type="text" id="search" placeholder="search PPD ID" value={searchkey}
            onChange={(e)=> setSearchKey(e.target.value)}/>
            <Link to='/basicinfo'>
              <button className=" add-user" type="submit" >+ Add Property</button>
            </Link>
        </form>
    </div>
  )
}
export default Search;















// import React from 'react'
// import {Link } from "react-router-dom";

// export default function Search() {
//   return (
//     <div className='search-buttons'>
//         <div className='search'>
//             <input className='search-input' type="text" placeholder='Search PPD ID' >
           

//             </input>
//             <i class="fa-solid fa-magnifying-glass"></i>
            
//         </div>

//         <Link to="/Basicinfo" className='add-button'>
//         <i class="fa-solid fa-plus"></i>
//         Add Property
//         </Link>
//     </div>
//   )
//   }