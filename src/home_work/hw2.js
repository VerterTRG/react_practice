import { useState } from "react";

const Dysplay = ({ counter }) => 
  <div>Your score {counter}</div>

const Button = ({ handleClick, text }) => 
  <button onClick={handleClick}>
    {text}
  </button>

const HomeWork2 = () => {

  const [counter, setCounter] = useState(0)
  const resetCounter = () => setCounter(0);
  const increaseCounter = () => setCounter(counter + 1);
  const decreaseCounter = () => setCounter(counter - 1);

  return (
    <div>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Dysplay counter={counter} />
      <Button handleClick={increaseCounter} text="Increase" />
      <Button handleClick={decreaseCounter} text="Decrease" />
      <Button handleClick={resetCounter} text="Reset" />
    </div>
  );
};

export { HomeWork2 };