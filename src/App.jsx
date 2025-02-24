import Display from "./components/Display";
import Buttons from "./components/Buttons";
import "./assets/styles/global.scss";
import { useState } from "react";
function App() {
  let [calcVal, setCalcVal] = useState("");
  const handleOnClick = (buttonName) => {
    // console.log(buttonName);
    if (buttonName == "=") {
      setCalcVal(eval(calcVal));
    } else if (buttonName == "C") {
      setCalcVal("");
    } else {
      let currVal = calcVal;
      setCalcVal(currVal + buttonName);
    }
  };
  return (
    <>
      <h1>Calculator</h1>
      <div className="outer-box">
        <Display calcVal={calcVal}></Display>
        <Buttons handleOnClick={handleOnClick}></Buttons>
      </div>
    </>
  );
}

export default App;
