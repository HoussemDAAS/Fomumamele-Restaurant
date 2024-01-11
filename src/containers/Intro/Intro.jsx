import React, { useState } from 'react'
import './Intro.css'
import {BsFillPlayFill,BsPauseFill} from 'react-icons/bs'
import {meal} from '../../constants'
const Intro = () => {
const myVideo = React.useRef();
 const [play,setplay]= useState(false);
 const handleVideo =()=>{
  setplay((prevplay)=>!prevplay);
  if(play){
    myVideo.current.pause();
  }
  else{
    myVideo.current.play();
  }
 }
  return (
    <div className='app__video'>
      <video  src={meal}loop autoPlay type="video/mp4" controls={false}muted ref={myVideo}/>
      <div className='app__video-overlay flex__center'>
        <div className='app__video-overlay_circle flex__center' onClick={handleVideo}>
          {play
          ?(<BsPauseFill color='#fff' fontSize={30}/>)
          :(<BsFillPlayFill color='#fff'fontSize={30}/>)} 
        </div>
      </div>
    </div>
  )
}

export default Intro
