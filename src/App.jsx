import { useState } from 'react'

import './App.css'


function App() {
  const [time, setTime] = useState()

  function timeUpadate(){
const curTime = new Date().toLocaleTimeString();
setTime(curTime)
  }
   
 setInterval(()=>{
   timeUpadate();

 } , 1000)
     
  return (
    <>
          <div> 
            <h1> Digital clock</h1>
            <h1>{time} </h1>
            </div>
    </>
  )
}

export default App
