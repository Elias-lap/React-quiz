import { UseQuizhook } from "./context/QuizContext"

function StartScreen() {
    const{numberQuestion ,dispatch} =UseQuizhook()
    return (
        <div className="start">
            <h2>Welcome To React quezz</h2>
            <h3> {numberQuestion} questions to check your React Mastery</h3>
            <button className="btn-ui btn" onClick={()=>dispatch({type:'start'})}>Let's Start</button>
        </div>
    )
}

export default StartScreen
