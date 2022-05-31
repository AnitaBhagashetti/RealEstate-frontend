import React from 'react'
import {Link } from "react-router-dom";

function Locationinfo() {
  return (
    <div>
        <form>
        <div>
            <label>Email</label>
            <input type="text"></input><br/>
            <label>Area</label>
            <select>
                <option Selected>Posted By</option>
                <option value="1">Yes</option>
                <option value="2">No</option>
            </select><br/>
            <label>Address</label>
            <input type="text"></input><br/>
            <label>Latitude</label>
            <input type="text"></input><br/>
        </div>
        <div>
            <label>City</label>
            <select>
                <option Selected>Select City</option>
                <option value="1">Delhi</option>
                <option value="2">Bangalore</option>
                <option value="2">Mumbai</option>
            </select><br/>
            <label>Pincode</label>
            <select>
                <option Selected>Select Pincode</option>
                <option value="1">Yes</option>
                <option value="2">No</option>
            </select><br/>
            <label>Landmark</label>
            <input type="text"></input><br/>
            <label>Longitude</label>
            <input type="text"></input><br/>
        </div>
        <Link to="/Generalinfo">Previous</Link>
        <button><Link to="/Homepage">Add Property</Link></button>
        </form>
    </div>
  )
}

export default Locationinfo