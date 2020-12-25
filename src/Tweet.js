import React,{useState,useEffect}from "react";
import "./App.css"

function  Tweet(props) {

useEffect(()=>{
    getTweets()
    getImage()
    getName()
},[]);

const [message,setMessage]=useState();


    const getTweets= async () => {
        // const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${count}`);
        const response = await fetch (`https://randomuser.me/api`);
        const dataJson = await response.json();
        console.log(dataJson);
        setMessage(dataJson.results[0].email)
    }

const [nameDetail,setName]=useState();

    const getName= async () => {
        const response = await fetch (`https://randomuser.me/api`);
        const dataJson = await response.json();
        console.log(dataJson);
        setName(dataJson.results[0].name.first)
    }

const [imageDetail,setImage]=useState();

    const getImage = async () =>{
        const imageResponse = await fetch (`https://randomuser.me/api`);
        const imagejson = await imageResponse.json();
        console.log(imagejson.results[0]);
        setImage(imagejson.results[0].picture.large)
    }

const [count,setcount]=useState(0);
const increment =()=>{
  setcount(count+1)
}
    console.log("Tweet component has been hit ...")
    return(
        <body>
        <div className= "Profile-image">
        <img src={imageDetail} alt=""></img>
        </div>
        <div className = "Tweet">
            <h3> @{nameDetail}</h3>
            <p> {message} </p>
            <button className = 'Like-button' onClick={increment}> Like </button>
            <p>{count}</p>
            
        </div>
        </body>
    );
}

export default Tweet;