import React, { useRef } from 'react'
import {Link } from "react-router-dom";
import "./Locationinfo.css";
import Staticpart from '../Homepage/Staticpart';
import Buttons from '../Buttons';
import Nav from '../Homepage/Dyanamicpart/Nav';
import axios from  'axios'
import {useContext,useState} from 'react'
import {fileStorage} from '../../App'
import {Navigate,useNavigate} from 'react-router-dom'
import Homepage from '../Homepage/Homepage';


function Locationinfo() {
    
    const [file1,Setfile] = useContext(fileStorage)
    // const [poststatus,Setpoststatus] = useState(false)
    const navigate = useNavigate();
    const Statuspost = useRef(false)
        const date = new Date()
        const PPDID ="PPDID" +date.getSeconds()+date.getHours() +date.getDay()
        console.log(PPDID)
    var allData = {

    Basicinfo:{
        propertyType:localStorage.getItem("propertyType"),
        Mobile:localStorage.getItem("Mobile"),
        TotalArea:localStorage.getItem("TotalArea") ,
        // PropertyAge:localStorage.getItem("PropertyAge") ,
        // PropertyApproved:localStorage.getItem("PropertyApproved") ,
        // Propertydescription:localStorage.getItem("Propertydescription") ,
        // BankLoan:localStorage.getItem("BankLoan") ,
     }
    //     Propertydetail:{
    //         length: localStorage.getItem("length"),
    //         Breadth: localStorage.getItem("Breadth"),
    //         TotalArea:localStorage.getItem("TotalArea"),
    //         AreaUnit: localStorage.getItem("AreaUnit"),
    //         NoofBHK: localStorage.getItem("NoofBHK"),
    //         NoofFloor: localStorage.getItem("NoofFloor"),
    //         Attached: localStorage.getItem("Attached"),
    //         WesternToilet: localStorage.getItem("WesternToilet"),
    //         Furnished: localStorage.getItem("Furnished"),
    //         CarParking: localStorage.getItem("CarParking"),
    //         Lift: localStorage.getItem("Lift"),
    //         Electricity: localStorage.getItem("Electricity"),
    //         Facing: localStorage.getItem("Facing")
    //     },
    //    Generalinfo:{
    //     Name:localStorage.getItem("Name") ,
    //     Mobile:localStorage.getItem("Mobile") ,
    //     Postedby:localStorage.getItem("Postedby"),
    //     SelectType:localStorage.getItem("SelectType") ,
    //     Featuredpackage:localStorage.getItem("Featuredpackage"), 
    //     PPDPackage:localStorage.getItem("PPDPackage")
        
    
    //     },
    //      Locationinfo:{
    //         Email:localStorage.getItem("Email"), 
    //         City:localStorage.getItem("City"), 
    //         Area:localStorage.getItem("Area"),
    //         Pincode:localStorage.getItem("Pincode"),
    //         Adresss:localStorage.getItem("Adresss"),
    //         Landmark:localStorage.getItem("Landmark"),
    //         Latitude:localStorage.getItem("Latitude"),
    //         Longitude:localStorage.getItem("Longitude") 
    //      },
    

    }
        var localdata=allData;
    const postData =async ()=>{
    

        await axios.post("http://localhost:8080/userData",localdata).then(localStorage.clear())
        navigate("/Homepage")

        // Info1()
    }
    // async function Info1(){
    //     const Generalinfo = new FormData();
    //     Generalinfo.append("propertyType", localStorage.getItem("propertyType"));
    //     Generalinfo.append("Mobile", localStorage.getItem("Mobile"));
    //     Generalinfo.append("TotalArea", localStorage.getItem("TotalArea"));
    //     Generalinfo.append("SelectType", localStorage.getItem("SelectType"));
    //     Generalinfo.append("Featuredpackage",localStorage.getItem("Featuredpackage")); 
    //     Generalinfo.append("PPDPackage",localStorage.getItem("PPDPackage"));
    //     Generalinfo.append("Image",file1);
    //     try{
    //         await axios.post("http://localhost:8080/Generalinfo",Generalinfo,
    //     {
//             headers: {
//               "Content-Type": "multip art/form-data",
//             }
//         })
        
//         localStorage.clear()
//         // navigate("/Homepage")
//     //    Statuspost.current = false
//     //     alert(Statuspost)
//     //     console.log(Statuspost)
        
       
//     }
//     catch(e){
//         alert("Generalinfo not posted")
//     }
       
// }


  return (
      
<div class="main-container" >
        <Staticpart />
        <form onSubmit={postData} action="/Homepage" >
            <Nav />
            <Buttons/>
    <div className='Content'>
    <div class="sub-inline">
        <div class="container1">
            <label>Email</label><br/>
                <input type="text" placeholder='Email' name="Email" value={localStorage.getItem("Email")}onChange={(e) => localStorage.setItem("Email",e.target.value)}></input><br/>
            <label>Area</label><br/>
                <select class="posby" value={localStorage.getItem("Area")}onChange={(e) => localStorage.setItem("Area",e.target.value)}>
                    <option Selected>Posted By</option><br/>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select><br/>
            <label>Address</label><br/>
                <input type="text" placeholder='Address'name="Adresss" value={localStorage.getItem("Adresss")}onChange={(e) => localStorage.setItem("Adresss",e.target.value)}></input><br/>
            <label>Latitude</label><br/>
                <input type="text" placeholder='Latitude' name="Latitude" value={localStorage.getItem("Latitude")}onChange={(e) => localStorage.setItem("Latitude",e.target.value)}></input><br/>
        </div>
        <div class="container1">
            <label>City</label><br/>
                <select class="city" value={localStorage.getItem("City")}onChange={(e) => localStorage.setItem("City",e.target.value)}>
                    <option Selected>Select City</option><br/>
                    <option value="Delhi">Delhi</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Mumbai">Mumbai</option>
                </select><br/>
            <label>Pincode</label><br/>
                <select class="pin" value={localStorage.getItem("Pincode")}onChange={(e) => localStorage.setItem("Pincode",e.target.value)}>
                    <option Selected>Select Pincode</option><br/>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select><br/>
            <label>Landmark</label><br/>
                <input type="text" placeholder='Landmark' name="Landmark" value={localStorage.getItem("Landmark")}onChange={(e) => localStorage.setItem("Landmark",e.target.value)}></input><br/>
            <label>Longitude</label><br/>
                <input type="text" placeholder='Longitude'name="Longitude" value={localStorage.getItem("Longitude")}onChange={(e) => localStorage.setItem("Longitude",e.target.value)}></input><br/>
        </div>
    </div>
        <div class="ho">
            <button class="sub"><Link to="/Generalinfo">Previous</Link></button>
            <button class="sub1" onClick ={postData}>Add Property</button> 
            
        </div>
        </div>
        </form>
        
</div>
)
}

export default Locationinfo