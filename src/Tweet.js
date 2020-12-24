import React from "react";
import "./App.css"

function  Tweet(props) {

    
    console.log("Tweet component has been hit ...")
    
    return(

        <div className = "Tweet">
            <h3> {props.name}</h3>
            <p>  {props.message }</p>
            <button onClick={counter}> Likes </button>
            
        </div>
    
    );
}

function counter(props){
    return(
        console.log(" Logged...")
    );
}

export default Tweet;