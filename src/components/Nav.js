import React from "react"


export default function Nav(){
    return(
        <div>
    <div className="nav">
         <img className="world-icon" src={require("../images/logo4.png")}/>
         <div className="title">
            <p className="login">Login</p>
            <p className="contact">Contact Us</p>
            <p className="about">About Us</p>
         </div>
   </div> 
    <img src={require("../images/logo3.png")} className="compe-logo"/> 
  </div>
    )
    
}