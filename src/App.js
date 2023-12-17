import "./App.css";


import dbyadata from "./components/data/data";

import Counter from "./components/Counter";
import { useReducer, useState } from "react";
import Addvideos from "./components/Addvideos";
import Videolist from "./components/Videolist";
import VideoContext from "./context/VideoContext";
import DispatchContext from "./context/DispatchContext";

function App() {
  const[editablevideo,setEditablevideo]=useState(null)

  function reducerfunction(dbya,action){
    switch (action.type) {
      case 'ADD':
        return[...dbya,{...action.payload, id:dbya.length+1}]
      case 'DELETE':
        return dbya.filter((video)=>video.id!==action.payload)
      case 'UPDATE':
        const index=dbya.findIndex((v)=>v.id===action.payload.id);
        const newvideos=[...dbya]
        newvideos.splice(index,1,action.payload)
        setEditablevideo(null)
        return newvideos
      default:
        return dbya;
    }

  }
  const[dbya,dispatch]=useReducer(reducerfunction,dbyadata)

  // const[dbya,setDbya]=useState(dbyadata);
  

  // function videoadd(video){
  //   dispatch({type:'ADD',payload:video})
  //   // setDbya([...dbya,{...video, id:dbya.length+1}])
  // }

  // function deletevideo(id){
  //   dispatch({type:'DELETE', payload:id})
  //   // setDbya(dbya.filter((video)=>video.id!==id))
  //   // console.log(`deleteing video ${id} `)
  //    }

    function editvideo(id){
      console.log(`editing video ${id} `)
      setEditablevideo(dbya.find((video)=> video.id===id))
    }
    // function updatevideo(video){
    //   dispatch({type:'UPDATE', payload:video})
    //   // const index=dbya.findIndex((v)=>v.id===video.id);
    //   // const newvideos=[...dbya]
    //   // newvideos.splice(index,1,video)
    //   // setDbya(newvideos)
    //   // console.log(video)
    // }

  return (<>
  <Counter ></Counter>
  <VideoContext.Provider value={dbya}>
    <DispatchContext.Provider value={dispatch} >
  <h2 className="myvideo">My Videos</h2>
  <Addvideos   editablevideo={editablevideo}  />
    <div className="App">
      
    
      <Videolist   editvideo={editvideo}  ></Videolist>
     
    
    </div>
    
    </DispatchContext.Provider>
    </VideoContext.Provider>
    </>
  );
}

export default App;
