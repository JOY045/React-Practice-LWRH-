import { useRef } from "react";

const App = () => {

  let firstName, lastName = useRef();
  
  const change = () => {
    let fName = firstName.value
    let lName = lastName.value

    alert(fName + " " + lName)
  }

  return (
    <div>
      <input ref={(a) => firstName = a} type="text" placeholder="First Name" />
      <br />
      <input ref={(b) => lastName = b} type="text" placeholder="Last Name" />
      <br />
      
      <button onClick={change}>Change</button>
    </div>
  );
};

export default App;