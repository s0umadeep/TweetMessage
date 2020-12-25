import React,{useState,useEffect}from "react";
import "./App.css"

function  Tweet(props) {

useEffect(()=>{
    getTweets()
});

const [message,setMessage]=useState();


    const getTweets= async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${count}`);
        const dataJson = await response.json();
        console.log(dataJson);
        setMessage(dataJson.title)
    }

const [count,setcount]=useState(0);
const increment =()=>{
  setcount(count+1)
}
    console.log("Tweet component has been hit ...")
    return(

        <div className = "Tweet">
            
            <h3> {props.name}</h3>
            <p>  {message}</p>
            <button onClick={increment}> Like </button>
            <p>{count}</p>
            
        </div>
    
    );
}

export default Tweet;