import React from "react";
import {Link} from 'react-router-dom'

function Navbar() {
  return (
  <>
              
    
           <Link to={'/'}><li>Home</li></Link> 
           <Link to={'/about'}><li>About</li></Link> 
        
        
   
    </>
  )  
    
}

export default Navbar