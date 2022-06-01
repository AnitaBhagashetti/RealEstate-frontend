import React from 'react'
import {Link } from "react-router-dom";
import Nav from '../Homepage/Dyanamicpart/Nav';
import Staticpart from '../Homepage/Staticpart';


function Generalinfo() {
  return (
    <div>
        <Staticpart/>
        <Nav/>
        <form>
        <div>
            <label>Name</label>
            <select>
                <option Selected>Owner</option>
                <option value="1">Yes</option>
                <option value="2">No</option>
            </select><br/>
            <label>Posted by</label>
            <select>
                <option Selected>Posted By</option>
                <option value="1">By Owner</option>
                <option value="2">By Dealer</option>
            </select><br/>
            <label>Featured Package</label>
            <select>
                <option Selected>Please Select</option>
                <option value="1">Yes</option>
                <option value="2">No</option>
            </select><br/>
            <input type="file"></input>
        </div>
        <div>
            <label>Mobile</label>
            <input type="number"></input><br/>
            <label>Sale Type</label>
            <select>
                <option Selected>Please Select</option>
                <option value="1">Yes</option>
                <option value="2">No</option>
            </select><br/>
            <label>PPD Package</label>
            <select>
                <option Selected>Please Select</option>
                <option value="1">Yes</option>
                <option value="2">No</option>
            </select><br/>
        </div>
        <Link to="/Propertydetail">Previous</Link>
        <button><Link to="/Locationinfo">Submit & Continue</Link></button>
        </form>
    </div>
  )
}

export default Generalinfo