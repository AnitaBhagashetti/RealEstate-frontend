import React from 'react'
import {Link } from "react-router-dom";

function Basicinfo() {
  return (
    <div>
        <form>
        <div>
            <label>Property Type</label>
            <select>
                <option Selected>Select Property Type</option>
                <option value="1">Land</option>
                <option value="2">Flat</option>
                <option value="3">Villa</option>
            </select><br/>
            <label>Price</label>
            <input type="number"></input>
            <label>Property Age</label>
            <select>
                <option Selected>Select Property Age</option>
                <option value="1">Less than 1 Year</option>
                <option value="2">Less than 5 Year</option>
                <option value="3">More than 5 Year</option>
            </select><br/>
            <label>Property Description</label>
            <input type="text"></input>
        </div>
        <div>
            <label>Negotiable</label>
            <select>
                <option Selected>Select Negotiable</option>
                <option value="1">Yes</option>
                <option value="2">No</option>
            </select><br/>
            <label>Ownership</label>
            <select>
                <option Selected>Select Ownership</option>
                <option value="1">Own</option>
                <option value="2">Rented</option>
            </select><br/>
            <label>Property Approved</label>
            <select>
                <option Selected>Property Approved</option>
                <option value="1">Yes</option>
                <option value="2">No</option>
            </select><br/>
            <label>Bank Loan</label>
            <select>
                <option Selected>Bank Loan</option>
                <option value="1">Yes</option>
                <option value="2">No</option>
            </select>
        </div>
        <Link to="/Homepage">Cancel</Link>
        <button><Link to="/Propertydetail">Submit & Continue</Link></button>
        </form>
        
        
    </div>
  )
}

export default Basicinfo