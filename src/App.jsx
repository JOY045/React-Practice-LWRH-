import { useState } from "react";

const App = () => {

  const [myObj, setMyObj] = useState({
    key1: "value 1",
    key2: "value 2",
    key3: "value 3"
  });

  const change = () => {
    setMyObj(
      {
       ...myObj,
        key1: "new value 1"
      }
    )
  }

  return (
    <div>
      <h1>{myObj.key1}</h1>
      <button onClick={change}>Change</button>
    </div>
  );
};

export default App;