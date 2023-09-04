import { UseQuizhook } from "./context/QuizContext";

function FinishScreen() {
  const { points, AllPoints ,highscore ,dispatch} =UseQuizhook()
  let percentage = (points / AllPoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage >= 0 && percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "🤦‍♂️";
  return (
    <>
      
      <p className="result">
      <span>{emoji}</span>{" "}
        you scored <strong>{points}</strong> of {AllPoints} (
        {Math.ceil(percentage)}%)
        
      </p>
      <p className="highscore"> Highscore {highscore} Points</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "Reset" })}
      >
        Reset
      </button>
    </>
  );
}

export default FinishScreen;
