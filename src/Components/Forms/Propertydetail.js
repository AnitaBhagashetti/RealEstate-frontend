import React from 'react'
import {Link } from "react-router-dom";

function Propertydetail() {
  return (
    <div>
        <form>
        <div>
            <label>Length</label>
            <input type="number"></input><br/>
            <label>Total Area</label>
            <input type="number"></input><br/>
            <label>No of BHK</label>
            <select>
                <option Selected>Select No of BHK</option>
                <option value="1">1 BHK</option>
                <option value="2">2 BHK</option>
                <option value="3">More than 3 BHK</option>
            </select><br/>
            <label>Attached</label>
            <select>
                <option Selected>Select Attached</option>
                <option value="1">Yes</option>
                <option value="2">No</option>
            </select><br/>
            <label>Furnished</label>
            <select>
                <option Selected>Select Furnished</option>
                <option value="1">Yes</option>
                <option value="2">No</option>
            </select><br/>
            <label>Lift</label>
            <select>
                <option Selected>Select Lift</option>
                <option value="1">Yes</option>
                <option value="2">No</option>
            </select><br/>
            <label>Facing</label>
            <select>
                <option Selected>Select Facing</option>
                <option value="1">East</option>
                <option value="2">West</option>
                <option value="2">North</option>
                <option value="2">South</option>
            </select><br/>
        </div>
        <div>
            <label>Breadth</label>
            <input type="number"></input><br/>
            <label>Area Unit</label>
            <select>
                <option Selected>Area Unit</option>
                <option value="1">Square Meter</option>
                <option value="2">Square Foot</option>
                <option value="3">Square Feet</option>
            </select><br/>
            <label>No of Floor</label>
            <select>
                <option Selected>Select No of Floor</option>
                <option value="1">1 Floor</option>
                <option value="2">2 Floor</option>
                <option value="2">More than 2 Floor</option>
            </select><br/>
            <label>Western Toilet</label>
            <select>
                <option Selected>Select Western Toilet</option>
                <option value="1">Yes</option>
                <option value="2">No</option>
            </select><br/>
            <label>Car Parking</label>
            <select>
                <option Selected>Select Car Parking</option>
                <option value="1">Yes</option>
                <option value="2">No</option>
            </select><br/>
            <label>Electricity</label>
            <input type="text"></input>
            
        </div>
        <Link to="/Basicinfo">Previous</Link>
        <button><Link to="/Generalinfo">Submit & Continue</Link></button>
        </form>
    </div>
  )
}

export default Propertydetail