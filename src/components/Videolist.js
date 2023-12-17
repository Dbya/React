import React, { useContext } from 'react'
import Video from './Video'
import Playbutton from './Playbutton'
import VideoContext from '../context/VideoContext'
import DispatchContext from '../context/DispatchContext'
const Videolist = ({editvideo}) => {
  const dbya=useContext(VideoContext);
  const dispatch=useContext(DispatchContext);
  return (
    <div>
      {dbya.map((dbya) => (
        <Video key={dbya.id}
          title={dbya.title}
          channel={dbya.channel}
          views={dbya.views}
          time={dbya.time}
          verified={dbya.verified}
          id={dbya.id}
          dispatch={dispatch}
          editvideo={editvideo}
          
        > <Playbutton message="i m play"
         onPlay={()=>console.log("playing..",dbya.title)}
          onPause={()=>console.log("pause", dbya.title)} >{dbya.title}</Playbutton> </Video>
        
        
      ))}
    </div>
  )
}

export default Videolist
