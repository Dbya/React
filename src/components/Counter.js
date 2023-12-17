import React, { useState } from 'react'
// let num=0; //esto global variable react ma render hunna

const Counter = () => {
    const[num,setNum]=useState(0); //esto garnu paryo la guyz state variable banauni
    function handleclick(){
        // num++
        
        setNum(num=>num+1)
        setNum(num=>num+1)
        console.log(num)
    }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={handleclick} > sum </button>
    </div>
  )
}

export default Counter
