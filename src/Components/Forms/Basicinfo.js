import React from 'react'
import {Link } from "react-router-dom";
import "./Basicinfo.css";

function Basicinfo() {
  return (
    <div class="main-container">
        
        <form>
        <div class="sub-inline">
        <div class="container1">
            <label>Property Type</label><br/>
            <select class="selectone">
                <option Selected>Select Property Type</option>
                <option value="1">Land</option>
                <option value="2">Flat</option>
                <option value="3">Villa</option>
            </select><br/>
            <label>Price</label><br/>
            <input type="number" placeholder='Example:10000' ></input>
            <label>Property Age</label><br/>
            <select class="Age">
                <option Selected>Select Property Age</option><br/>
                <option value="1">Less than 1 Year</option>
                <option value="2">Less than 5 Year</option>
                <option value="3">More than 5 Year</option>
            </select><br/>
            <label>Property Description</label><br/>
            <input type="text"></input>
        </div>
        <div class="container1">
            <label>Negotiable</label><br/>
            <select class="nego">
                <option Selected>Select Negotiable</option><br/>
                <option value="1">Yes</option>
                <option value="2">No</option>
            </select><br/>
            <label>Ownership</label><br/>
            <select class="owner">
                <option Selected>Select Ownership</option><br/>
                <option value="1">Own</option>
                <option value="2">Rented</option>
            </select><br/>
            <label>Property Approved</label><br/>
            <select class="property">
                <option Selected>Property Approved</option><br/>
                <option value="1">Yes</option>
                <option value="2">No</option>
            </select><br/>
            <label>Bank Loan</label><br/>
            <select class="bank">
                <option Selected>Bank Loan</option><br/>
                <option value="1">Yes</option>
                <option value="2">No</option>
            </select>
        </div>
        </div>
        <div class="ho">
        <button class="sub"><Link to="/Homepage">Cancel</Link></button>
        <button class="sub"><Link to="/Propertydetail">Submit & Continue</Link></button>
        </div>
        </form>
        
        
    </div>
  )
}

export default Basicinfo