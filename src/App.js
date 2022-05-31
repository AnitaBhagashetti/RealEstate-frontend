import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import Register from './Components/Register';
import Homepage from './Components/Homepage/Homepage';
import Propertydetail from './Components/Forms/Propertydetail'
import Basicinfo from './Components/Forms/Basicinfo';
import Generalinfo from './Components/Forms/Generalinfo';
import Locationinfo from './Components/Forms/Locationinfo';
import Search from './Components/Homepage/Dyanamicpart/Search';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
          <Route path='Register' element={<Register/>} />
          <Route path="Homepage" element={<Homepage/>} />
          <Route path="Basicinfo" element={<Basicinfo/>} />
          <Route path="Propertydetail" element={<Propertydetail/>} />
          <Route path="Generalinfo" element={<Generalinfo/>} />
          <Route path="Locationinfo" element={<Locationinfo/>} />
          <Route path="Search" element={<Search/>} />
          
          {/* 
          <Route path="contact" element={<h1></h1>} />
          <Route path="*" element={<h1></h1>} /> */}
        
      </Routes>
    </BrowserRouter>
       
        
    </div>
  );
}

export default App;
