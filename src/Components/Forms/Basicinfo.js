import React from 'react'
import {Link } from "react-router-dom";
import Buttons from '../Buttons';
import Nav from '../Homepage/Dyanamicpart/Nav';
import Staticpart from '../Homepage/Staticpart';

function Basicinfo() {
   
  return (

    <div className='basic-info'>
        <Staticpart/>
        <div className='basic-info-right'>
        <Nav/>
        <Buttons />
        <form>
            <div className='basic-form main'>
        <div className='basic-info-left'>
            <label>Property Type</label>
            <select>
                <option Selected>Select Property Type</option>
                <option value="1">Land</option>
                <option value="2">Flat</option>
                <option value="3">Villa</option>
            </select><br/>
            <label>Price</label>
            <input type="number"></input>
            <br />
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
        <div className='basic-info-right'>
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
        </div>
        <Link to="/Homepage">Cancel</Link>
        <button><Link to="/Propertydetail">Submit & Continue</Link></button>
        </form>
        </div>
        
    </div>
  )
}

export default Basicinfo