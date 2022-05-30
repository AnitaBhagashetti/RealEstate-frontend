import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import Register from './Components/Register';
import Homepage from './Components/Homepage/Homepage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
          <Route path='Register' element={<Register/>} />
          <Route path="Homepage" element={<Homepage/>} />
          {/* 
          <Route path="contact" element={<h1></h1>} />
          <Route path="*" element={<h1></h1>} /> */}
        
      </Routes>
    </BrowserRouter>
       
        
    </div>
  );
}

export default App;
