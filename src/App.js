import React from "react";
import Tweet from "./Tweet"
import "./App.css"

function App(){


  return(

    <div className = "Appx"> 
      <h1> <center>Welcome to Tweet Stats </center></h1>
      <Tweet name = "@Soumadeep" message = "There will be winter all round in December"/>
      <Tweet name = "@Akashdeep" message = "Don't commit  into Master"/>
      <Tweet name = "@Alok" message = "What's up fellas !!"/>
      <Tweet name = "@Papiya" message = "Politics is everywhere."/>
    </div>
  );
}

export default App;