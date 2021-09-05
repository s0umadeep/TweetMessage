import React from "react";
import Tweet from "./Tweet"
import "./App.css"

function App(){
    

  return(
    <body>

      <h1 className="Title">Message Listener Analysis </h1>

      <div className = "Appx BackgroundLayout"> 
      <Tweet name = "@Soumadeep" message = "We shall only go for good programming" mid ='1'/>
      <Tweet name = "@Akashdeep" message = "Don't commit  into Master" mid ="2"/>
      <Tweet name = "@Alok" message = "What's up fellas !!" mid ="3"/>
      <Tweet name = "@Papiya" message = "Politics is everywhere." mid ="4"/>
      <Tweet name = "@Lalu" message = "Dogs is everywhere." mid ="5"/>
    </div>
    <footer className="Footer"> Developed  by  Soumadeep ❤ </footer>
    </body>
    
  );
}

export default App;