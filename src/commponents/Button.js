import { UseQuizhook } from "./context/QuizContext";

function Button() {
  const { answer, dispatch, index, numberQuestion } =UseQuizhook()
  if (answer === null) return null;

  if (index < numberQuestion - 1)
    return (
      <>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "next" })}
        >
          Next
        </button>
      </>
    );
  if (index === numberQuestion -1)
  return (
    <>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        finish
      </button>
    </>
  );
}

export default Button;
