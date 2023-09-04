
import Headers from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Questions from "./Questions";
import Button from "./Button";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";
import Timer from "./Timer";
import { UseQuizhook } from "./context/QuizContext";

function App() {
 const {status} = UseQuizhook()
  return (
    <div className="app">
  
      <Headers />

      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen />
        )}
        {status === "active" && (
          <>
            <Progress/>

            <Questions/>
            <Footer>
              <Button></Button>
              <Timer/>
            </Footer>
          </>
        )}

        {status === "finished" && (
          <FinishScreen/>
        )}
      </Main> 
    
    </div>
  );
}

export default App;
