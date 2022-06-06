import React,{useState} from 'react'
import Nav from './Nav'
import Search from './Search'
import Table from './Table'
import NavBar from './NavBar'


export default function Dynamicpart() {
  const [searchkey, setSearchKey] = useState("");

  return (
    <div className='dynamicpart'>
        <Nav/>
        {/* <NavBar/> */}
        <Search searchkey = {searchkey} setSearchKey={setSearchKey}/>
        <Table searchkey = {searchkey}/>
        
      
    </div>
  )
}
