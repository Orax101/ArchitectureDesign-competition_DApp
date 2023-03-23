import React from "react"

export default function Card(props){
    return(
<div>
<div className="d-card">
    
    <div className="card--image">
        <img src={require(`../images/${props.item.image}`)} className="place-img"/> 
    </div>
    
    <div className="writeup">
        <div className="location">
            <img src="../images/locationIcon.png" className="location-logo" /> 
            <p>{props.item.location}<span> <a href= {props.item.googleMapsUrl}>View On Google Map</a></span></p>
        </div>
        
        <div className="description">
            <h3>{props.item.title}</h3>
            <p className="description-date">Registeration Deadline: {props.item.duration}</p>
            <p className="description-txt">{props.item.description}</p>
        </div>
        <div>
            <button className="register-btn">Register</button>
            <button className="Brief-btn">Download Brief</button>
        </div>
    </div>
    
</div>
</div>

    )
}

