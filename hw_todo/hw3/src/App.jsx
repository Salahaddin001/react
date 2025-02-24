import { useState } from "react";
import Children from "./TimeComponent";
import ClickCounter from "./ClickCounter";
import TimeComponent from "./TimeComponent";
import "./App.css";

const App = () => {
  const [state, setState] = useState(false);

  const onClickHandler = () => {
    setState((currentState) => !currentState);
  };

  return (
    <div className="App-container">
      <button onClick={onClickHandler} className="switchBTN">
        Switch
      </button>
      {state && <Children />}
      <ClickCounter />
      <TimeComponent />
    </div>
  );
};

export default App;
