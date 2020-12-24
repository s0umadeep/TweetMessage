import React from "react";
import "./App.css"

function  Tweet() {

    
    console.log("Tweet component has been hit ...")
    
    return(

        <div className = "Tweet">
            <h3> Name</h3>
            <h3> Number of Tweets</h3>
            <button onClick={counter}> Likes </button>
            
        </div>
    
    );
}

function counter(){
    return(
        console.log("Logged...")
    );
}

export default Tweet;