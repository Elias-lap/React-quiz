import { createContext,useEffect ,useReducer,useContext} from "react";


const QuezContext = createContext();
const inisialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
  // error , ready , active , finished
};
const SecondPerQuestion = 30;
function reducer(state, action) {
  switch (action.type) {
    case "dataRecived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailes":
      return { ...state, status: "error" };
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SecondPerQuestion,
      };
    case "newAnswer":
      const question = state.questions.at(state.index);

      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "next":
      return {
        ...state,
        index: state.index + 1,
        answer: (state.answer = null),
      };
    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "Reset":
      return {
        ...state,
        status: "ready",
        index: 0,
        answer: null,
        highscore: 0,
        points: 0,
      };
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status:
          state.secondsRemaining === 0
            ? (state.status = "finished")
            : state.status,
      };
    default:
      throw new Error("action Unknoun");
  }
}
function QuizProvider({ children }) {
  const [
    { questions, status, index, answer, points, highscore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, inisialState);

  const numberQuestion = questions.length;
  const AllPoints = questions.reduce((PRE, NEX) => {
    return PRE + NEX.points;
  }, 0);

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataRecived", payload: data }))
      .catch((error) => dispatch({ type: "dataFailes" }));
  }, []);

  return (
    <QuezContext.Provider
      value={{
        questions,
        status,
        index,
        answer,
        points,
        highscore,
        secondsRemaining,
        numberQuestion,
        AllPoints,

        dispatch,
      }}
    >
      {children}
    </QuezContext.Provider>
  );
   
  
}
function UseQuizhook() {
  const context = useContext(QuezContext);
  if(context === undefined) throw new Error('Quiz Context was used outside QuizContext Provider')
  return context;
}
export { QuizProvider, UseQuizhook} ;
