
import React, {useState,useEffect} from 'react'
import "./Table.module.css"
import eyeIcon from "../../../Images/Path 71.png"
import editIcon from "../../../Images/Path 225.png"
import imgIcon from "../../../Images/Path 244.png"


export default function Table() {
  const [data,setData] = useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(
      (result)=>{
        setData(result);
      },
    )
  },[])
  console.log(data)
  return (
    <div>
      <table className='gfg'>
        {/* <thead> */}
          <tr>
            <th>PPD ID</th>
            <th>Image</th>
            <th>Property</th>
            <th>Contact</th>
            <th>Area</th>
            <th>Views</th>
            <th>Status</th>
            <th>Days Left</th>
            <th>Action</th>
          </tr>
          </table>
        {/* </thead> */}
        {/* <tbody className='gfg'> */}
          {
            
            data.map((item)=>(
              <table>
              <tr key={item.id}>
                <td>{item.name}</td>
                <td><img src={imgIcon}></img></td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.website}</td>
                <td>{item.company.name}</td>
                <td><button>Unsold</button></td>
                <td>{item.address.city}</td>
                <td><button><img src={eyeIcon}></img></button><button><img src={editIcon}></img></button></td>
              </tr>
              </table>
            ))
          }
        {/* </tbody> */}
      {/* </table> */}
=======
import React from "react";
import "./Table.css";
const Table = () => {
  return (
    <div className="container">
      <div>
        <h4>PPD ID</h4>
      </div>
      <div>
        <h4>Image</h4>
      </div>
      <div>
        <h4>Property</h4>
      </div>
      <div>
        <h4>Contact</h4>
      </div>
      <div>
        <h4>Area</h4>
      </div>
      <div>
        <h4>Views</h4>
      </div>
      <div>
        <h4>Status</h4>
      </div>
      <div>
        <h4>Days Left</h4>
      </div>
      <div>
        <h4>Actions</h4>
      </div>

    </div>
  );
};
export default Table;
