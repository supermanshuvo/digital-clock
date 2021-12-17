import React, { useState } from 'react';

export default function DateDay() {
    let date = new Date().toLocaleDateString();
    let [cDate,setCDate]=useState();
    const dateDay =()=>{
        let date = new Date().toLocaleDateString();
        setCDate(date);
    }
    setInterval(dateDay,1000);
    return (
        <div
            class="
              text-center
              bg-cyan-800
              text-gray-200
              p-2
              text-lg
              sm:text-2xl
            "
          >
            <p id="date">{cDate}</p>
          </div>
    )
}
