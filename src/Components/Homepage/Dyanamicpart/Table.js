import React, {useState,useEffect} from 'react'
import "./Table.css"
import eyeIcon from "../../../Images/Path 71.png"
import editIcon from "../../../Images/Path 225.png"
import imgIcon from "../../../Images/Path 244.png"


export default function Table() {
  const [data,setData] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:8080/props")
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
       
          {
            
            data.map((item)=>(
              <table>
              <tr key={item.id}>
                <td>{item.PPDID}</td>
                <td><img src={imgIcon}></img></td>
                <td>{item.propertyType}</td>
                <td>{item.Mobile}</td>
                <td>{item.TotalArea}</td>
                <td>3</td>
                <td><button>Unsold</button></td>
                <td>15</td>
                <td><button><img src={eyeIcon}></img></button><button><img src={editIcon}></img></button></td>
              </tr>
              </table>
            ))
          }
        
    </div>
  )
}
