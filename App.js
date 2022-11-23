import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isLove, setIsLove] = useState(true);

  const incrementHandaler = () => {
    setCount((prevCount) => prevCount + 1);
  };

  /////////////////////////////////
  // setInterval(() => {
  //   setCount((prevCount) => prevCount + 1);
  // }, 2000);
  //////////////////////////////////

  //////////////////////////////////////
  // useEffect(() => {
  //   console.log("use effect ran");
  //   setInterval(() => {
  //     setCount((prevCount) => prevCount + 1);
  //   }, 1000);
  // }, []);
  //////////////////////////////////////

  useEffect(() => {
    setIsLove(!isLove);
  }, [count === 10]);

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <h1>I {isLove ? "love" : "hate"} you</h1>
      <button onClick={incrementHandaler}>Increment</button>
    </div>
  );
}

export default App;
