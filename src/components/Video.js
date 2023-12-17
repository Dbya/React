import React, { useContext } from 'react'
import "./Video.css"
import DispatchContext from '../context/DispatchContext'

const Video = ({title,channel,verified,views,time,id,children,deletevideo,editvideo}) => {   //either (prop) gare tala {prop.title} matra garni 
 const dispatch=useContext(DispatchContext);

  return (
    <div className='m-2'>
      <button onClick={()=> dispatch({type:'DELETE', payload:id})}>DELETE</button>
      <button onClick={()=>editvideo(id)} >EDIT</button>
        <div className="image">
        <img src={`https://picsum.photos/id/${id}/350/300` }alt="" />
        </div>
     
     {/* <div className="headingv" style={{backgroundColor:"red"}} >{props.title}</div> */}
     <h2 className="title">{title}</h2>
     {/* <div className="channel">  {props.channel} {props.verified ? " 🆚 " :"null"} </div> */}
     {/* option ma kei ligna naparda && */}
     <div className="channel">  {channel} {verified && " 🆚 " } </div>  
    
     <div className="views">{views} views<span>.</span> {time}</div>
    
    <div>{children}</div>
     
    </div>
  )
}

export default Video
