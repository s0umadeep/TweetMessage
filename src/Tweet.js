import React,{useState}from "react";
import "./App.css"

function  Tweet(props) {

const [count,setcount]=useState(0);
const increment =()=>{
  setcount(count+1)
}
    console.log("Tweet component has been hit ...")
    
    return(

        <div className = "Tweet">
            <h3> {props.name}</h3>
            <p>  {props.message }</p>
            <button onClick={increment}> Likes </button>
            <p>{count}</p>
            
        </div>
    
    );
}

export default Tweet;