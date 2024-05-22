import { useRef } from "react";

const App = () => {

  let myHeadLine = useRef();
  
  const change = () => {
    // myHeadLine.current.innerHTML = "Hello Worlds";
    myHeadLine.innerHTML = "Hello Worlds";
  }

  return (
    <div>
      {/* <h1 ref={myHeadLine}>Hello World</h1> */}
      <h1 ref={(e) => {
        myHeadLine =e
      }}>Hello World</h1>
      <button onClick={change}>Change</button>
    </div>
  );
};

export default App;