import React, { useState } from "react";
const DigitalClock = () => {
    const time = new Date().toLocaleTimeString();
    const [sec, setSec] = useState('');

    const updateTime = ()=>{
        const currentTime = time;
        setSec(currentTime);
    }
    setInterval(updateTime,1000);
  return <>
  <div>
    <h1 style={{fontSize:72, letterSpacing:10}}>{time}</h1>
    {/* <button onClick={updateTime}>click me</button> */}
  </div>
  </>;
};
export default DigitalClock;
