// import React,{useEffect} from 'react';
// import { NavLink,useLocation } from 'react-router-dom'




// export default function Header() {
//   const location =useLocation()

//   useEffect(() => {
//     console.log(location)
    
//    }, [location])
  
//   let user=localStorage.getItem('token')

// function logout(){
//   localStorage.setItem('token',"")
// }
//   return <div>
//       <nav>
//           <h1 className='logo'>LOGO</h1>
//           <ul>
//         {!user?
//         <NavLink  to={"/"}>Sign In</NavLink>:
//         <NavLink  to={"/"} onClick={logout}>Logout</NavLink>}
//           </ul>
//       </nav>
//   </div>
// }