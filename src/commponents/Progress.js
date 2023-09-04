import { UseQuizhook } from "./context/QuizContext"

     
        function Progress() {
            const{numberQuestion ,AllPoints ,points ,index, answer} =UseQuizhook()
    return (
        <>
       <progress max={numberQuestion}  value={index +Number(answer !== null)}/>
        <header className="progress">
          <p>Question<strong>{index+1}</strong> / {numberQuestion}</p>
            <p><strong>{points}</strong> / {AllPoints}</p>
        </header>
        </>
    )
}

export default Progress
