import React,{useState} from "react";




function App() {

const[isPrime,setIsPrime]=useState("NO");

  return (
    <div>
      <center>
        <h1>THE NUMBER IS : 13</h1>
        <h1>It is Prime number or not?  {isPrime}</h1>
        <button type="button" onClick={()=>setIsPrime("YES")}
        ></button>

      </center>
    </div>
  
 
  )
}

export default App;
