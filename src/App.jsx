import { useState } from "react";

const App = () => {

  const [number, setNumber] = useState(0);

  return (
    <div>
      <h1>Number: {number}</h1>
      <button onClick={() => setNumber(number+1)}>Increase</button>
      <button onClick={() => setNumber(number-1)}>Decrease</button>
      <button onClick={() => setNumber(0)}>Reset</button>
    </div>
  );
};

export default App;