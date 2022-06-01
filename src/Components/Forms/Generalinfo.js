import React from 'react'
import {Link } from "react-router-dom";
import "./Generalinfo.css";

function Generalinfo() {
  return (
    <div class="main-container">
        <form>
        <div class="sub-inline">
        
        
                <div class="container1">
                    <label>Name</label><br/>
                    <select class="own">
                        <option Selected>Owner</option><br/>
                        <option value="1">Yes</option>
                        <option value="2">No</option>
                    </select><br/>
                    <label>Posted by</label><br/>
                    <select class="posted">
                        <option Selected>Posted By</option><br/>
                        <option value="1">By Owner</option>
                        <option value="2">By Dealer</option>
                    </select><br/>
                    <label>Featured Package</label><br/>
                    <select class="please">
                        <option Selected>Please Select</option><br/>
                        <option value="1">Yes</option>
                        <option value="2">No</option>
                    </select><br/>
                    <input class="file" type="file"></input>
                </div>
                <div class="container1">
                    <label>Mobile</label><br/>
                    <input type="number" placeholder='Enter Mobile Number'></input><br/>
                    <label>Sale Type</label><br/>
                    <select class="selec">
                        <option Selected>Please Select</option><br/>
                        <option value="1">Yes</option>
                        <option value="2">No</option>
                    </select><br/>
                    <label>PPD Package</label><br/>
                    <select class="plesasesel">
                        <option Selected>Please Select</option><br/>
                        <option value="1">Yes</option>
                        <option value="2">No</option>
                    </select><br/>
                </div>
                </div>
                <div class="ho">
                <button class="sub"><Link to="/Propertydetail">Previous</Link></button>
                <button class="sub"><Link to="/Locationinfo">Submit & Continue</Link></button>
                </div>
        
        
            </form>
        
    </div>
  )
}

export default Generalinfo