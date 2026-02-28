import React from "react";
import Navbar from'./components/navbar/navbar'
import Sidebar from "./components/navbar/sidebar/sidebar";
import Amd from "./components/navbar/sidebar/comp";


const App=()=>{
          let b=70;
          let c="bca";
          let d=35;
  return(
    <div>
      <Navbar />
      <Sidebar name="prajwal" age="93"/>
       {
         b>80? <Sidebar name="PGM" age="100"/> : <h1>this is not allowed {b}</h1>
       }
       <Amd name="Amd" age={23} clas={c} description={"it is created by the prajwal"} num={d}/>
       <Amd name="Amd" age={23} clas={c} description={"it is Amd"} num={20}/>
    </div>
  )
}

export default App;