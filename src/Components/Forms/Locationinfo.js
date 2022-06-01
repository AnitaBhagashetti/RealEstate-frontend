import React from 'react'
import {Link } from "react-router-dom";
import "./Locationinfo.css";

function Locationinfo() {
  return (
    <div class="main-container">
        
        <form>
            <div class="sub-inline">

            <div class="container1">
            <label>Email</label><br/>
            <input type="text" placeholder='Email'></input><br/>
            <label>Area</label><br/>
            <select class="posby">
                <option Selected>Posted By</option><br/>
                <option value="1">Yes</option>
                <option value="2">No</option>
            </select><br/>
            <label>Address</label><br/>
            <input type="text" placeholder='Address'></input><br/>
            <label>Latitude</label><br/>
            <input type="text" placeholder='Latitude'></input><br/>
        </div>
        <div class="container1">
            <label>City</label><br/>
            <select class="city">
                <option Selected>Select City</option><br/>
                <option value="1">Delhi</option>
                <option value="2">Bangalore</option>
                <option value="3">Mumbai</option>
            </select><br/>
            <label>Pincode</label><br/>
            <select class="pin">
                <option Selected>Select Pincode</option><br/>
                <option value="1">Yes</option>
                <option value="2">No</option>
            </select><br/>
            <label>Landmark</label><br/>
            <input type="text" placeholder='Landmark'></input><br/>
            <label>Longitude</label><br/>
            <input type="text" placeholder='Longitude'></input><br/>
        </div>
        </div>
        <div class="ho">
        <button class="sub"><Link to="/Generalinfo">Previous</Link></button>
        <button class="sub"><Link to="/Homepage">Add Property</Link></button>
        </div>
        
        </form>
        
    </div>
  )
}

export default Locationinfo