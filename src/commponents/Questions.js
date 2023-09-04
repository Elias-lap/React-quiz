import Options from "./Options";
import { UseQuizhook } from "./context/QuizContext";

function Questions() {
  const{questions,index} =UseQuizhook()
  const question = questions.at(index);
  return<>
    <div >
      <h4>{questions.question}</h4>
      <Options question={question}/>
    </div>
    </>
}

export default Questions;
