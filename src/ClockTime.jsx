import React, { useState } from 'react';

export default function ClockTime() {
    let time = new Date().toLocaleTimeString;
    let [cTime,setCTime] = useState();
    const updateTime = ()=>{
        let time = new Date().toLocaleTimeString();
        setCTime(time);
    }
    setInterval(updateTime,1000);
    return (
        <div class="bg-slate-800 text-gray-200 p-5 text-2xl sm:text-6xl text-center">
            <p id="clock">{cTime}</p>
          </div>
    )
}
