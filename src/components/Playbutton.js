import React, { useState } from 'react'
import "./play.css"

const Playbutton = ({children,message,onPlay,onPause}) => {
    const[playing,setPlaying]=useState(false)
    function handleclick(){
        // console.log(message)
        if(playing) onPause();
        else
        onPlay();
        setPlaying(!playing)
    }

  return (
    <div>
      <button onClick={handleclick} >{children} {playing? "playing":"paused"} </button>
    </div>
  )
}

export default Playbutton
