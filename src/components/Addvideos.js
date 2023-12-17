import React, {  useContext, useEffect, useState } from 'react'
import DispatchContext from '../context/DispatchContext'

const initialstate={
    channel:"subengineer",
    verified:true,
    time:"2minute ago",
    views:" ",
    title:" "
}

const Addvideos = ({editablevideo,updatevideo}) => {
  const dispatch=useContext(DispatchContext)
    const[video,setVideo]=useState(initialstate)
    function handlesubmit(e){
     e.preventDefault();
     
     if(editablevideo){
      dispatch({type:'UPDATE', payload:video})
     
     }else{
      dispatch({type:'ADD',payload:video})
     }
     setVideo(initialstate)
     console.log(video)

    }
    function handlechange(e){
    //   console.log(e.target.name,e.target.value)
      setVideo({...video,[e.target.name]:e.target.value})
      
    }
    
    useEffect(()=>{
      if(editablevideo){
        setVideo(editablevideo)
      }
      
    },[editablevideo])

  return (
    <div>
     <form>
        <input type="text" name='title' onChange={handlechange} placeholder='title'
        value={video.title}  />
        <input type="text" name='views' onChange={handlechange} placeholder='views' 
        value={video.views} />
        {/* <button onClick={()=>{
    setDbya([...dbya,{
      id:dbya.length+1,
      title:"added video tut",
      views:"1M",
      channel:"subengineer",
      verified:true,
      time:"2minute ago"
    }])
  }}>add videos</button> */}
  <button onClick={handlesubmit} >{editablevideo? 'edit ':'add '}video</button>
     </form>
    </div>
  )
}

export default Addvideos
