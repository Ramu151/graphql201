import "./styles.css";
import { useRef } from "react";

export default function App() {
  const elRef = useRef();
  elRef.current.innerHTML = "r";
  console.log(elRef?.current?.textContent);
  return (
    <div className="App">
      <h1 ref={elRef}>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
