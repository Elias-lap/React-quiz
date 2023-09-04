import { useEffect } from "react"
import { UseQuizhook } from "./context/QuizContext"

function Timer() {
    const{secondsRemaining   , dispatch} =UseQuizhook()
 const min =Math.floor( secondsRemaining / 60 )
 const sec = secondsRemaining%60
useEffect(()=>{
  const id =  setInterval(()=>{
      dispatch({type : 'tick'})  
    },1000)
    return ()=>clearInterval(id)
},[dispatch])




    return (
        <div className="timer">
            {min < 10 && '0'}{min}:{sec < 10 && '0'}{sec}
        </div>
    )
}

export default Timer
