import { useRef } from "react";

const App = () => {

  let number = useRef(0);
  
  const change = () => {
    number.current++
    console.log(number.current)
  }

  return (
    <div>
      <input type="text" placeholder="First Name" />
      <br />
      <input type="text" placeholder="Last Name" />
      <br />
      
      <button onClick={change}>Change</button>
    </div>
  );
};

export default App;