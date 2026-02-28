import React from "react";
import Navbar from'./components/navbar/navbar'
import Sidebar from "./components/navbar/sidebar/sidebar";


const App=()=>{
          let b=70
  return(
    <div>
      <Navbar />
      <Sidebar name="prajwal" age="93"/>
       {
         b>80? <Sidebar name="PGM" age="100"/> : <h1>this is not allowed {b}</h1>
       }
    </div>
  )
}

export default App;