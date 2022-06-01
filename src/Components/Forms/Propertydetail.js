import React from 'react'
import {Link } from "react-router-dom";
import "./Propertydetails.css";

function Propertydetail() {
  return (
    <div class="main-container">
        <form>
        <div class="sub-container">
        
        <div class="container1">
            <label>Length</label><br/>
            <input type="number" placeholder='Length'></input><br/>
            <label>Total Area</label><br/>
            <input type="number" placeholder='Total Area'></input><br/>
            <label>No of BHK</label><br/>
            <select class="bhk">
                <option Selected>Select No of BHK</option>
                <option value="1">1 BHK</option>
                <option value="2">2 BHK</option>
                <option value="3">More than 3 BHK</option>
            </select><br/>
            <label>Attached</label><br/>
            <select class="attached">
                <option Selected>Select Attached</option>
                <option value="1">Yes</option>
                <option value="2">No</option>
            </select><br/>
            <label>Furnished</label><br/>
            <select class="furnished">
                <option Selected>Select Furnished</option>
                <option value="1">Yes</option>
                <option value="2">No</option>
            </select><br/>
            <label>Lift</label><br/>
            <select class="lift">
                <option Selected>Select Lift</option>
                <option value="1">Yes</option>
                <option value="2">No</option>
            </select><br/>
            <label>Facing</label><br/>
            <select class="fac">
                <option Selected>Select Facing</option>
                <option value="1">East</option>
                <option value="2">West</option>
                <option value="2">North</option>
                <option value="2">South</option>
            </select><br/>
        </div>
        <div class="container1">
            <label>Breadth</label><br/>
            <input type="number" placeholder='Example:1000'></input><br/>
            <label>Area Unit</label><br/>
            <select class="unit">
                <option Selected>Area Unit</option>
                <option value="1">Square Meter</option>
                <option value="2">Square Foot</option>
                <option value="3">Square Feet</option>
            </select><br/>
            <label>No of Floor</label><br/>
            <select class="noof">
                <option Selected>Select No of Floor</option>
                <option value="1">1 Floor</option>
                <option value="2">2 Floor</option>
                <option value="2">More than 2 Floor</option>
            </select><br/>
            <label>Western Toilet</label><br/>
            <select class="western">
                <option Selected>Select Western Toilet</option>
                <option value="1">Yes</option>
                <option value="2">No</option>
            </select><br/>
            <label>Car Parking</label><br/>
            <select class="carparking">
                <option Selected>Select Car Parking</option>
                <option value="1">Yes</option>
                <option value="2">No</option>
            </select><br/>
            <label>Electricity</label><br/>
            <input type="text" placeholder='Example:3 phase'></input>
            
        </div>
        </div>
        <div class="pav">
        <button class="prevvv"><Link to="/Basicinfo">Previous</Link></button>
        <button class="genera"><Link to="/Generalinfo">Submit & Continue</Link></button>
        </div>
        </form>
        
    </div>
  )
}

export default Propertydetail