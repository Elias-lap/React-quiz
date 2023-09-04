import { UseQuizhook } from "./context/QuizContext";

function Options({question}) {
  const{  dispatch, answer} =UseQuizhook()
  const hasAnswerd = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          className={`btn btn-option ${answer === index ? "answer" : ""} ${
            hasAnswerd
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={index}
        >
          {" "}
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
