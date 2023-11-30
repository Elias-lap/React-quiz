import Options from "./Options";
import { UseQuizhook } from "./context/QuizContext";

function Questions() {
  const{questions,index} =UseQuizhook()
  const question = questions.at(index);
  console.log(question)
  return<>
    <div >
      <h4>{question.question}</h4>
      <Options question={question}/>
    </div>
    </>
}

export default Questions;
