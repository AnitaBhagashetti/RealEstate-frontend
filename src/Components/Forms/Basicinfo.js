import React from 'react'

function Basicinfo() {
  return (
    <div>
        <form>
        <div>
            <select>
                <option Selected>Select Property Type</option>
                <option value="1">Land</option>
                <option value="2">Flat</option>
                <option value="3">Villa</option>
            </select>
            <input type="number"></input>
            <select>
                <option Selected>Select Property Age</option>
                <option value="1">Less than 1 Year</option>
                <option value="2">Less than 5 Year</option>
                <option value="3">More than 5 Year</option>
            </select>
            <input type="text"></input>
        </div>
        <div>
            <select>
                <option Selected>Select Negotiable</option>
                <option value="1">Yes</option>
                <option value="2">No</option>
            </select>
            <select>
                <option Selected>Select Ownership</option>
                <option value="1">Own</option>
                <option value="2">Rented</option>
            </select>
            <select>
                <option Selected>Property Approved</option>
                <option value="1">Yes</option>
                <option value="2">No</option>
            </select>
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