import { useRef } from "react";

const App = () => {

  let myImage = useRef();
  
  const change = () => {
    // myImage.current.src = "https://placehold.co/600x400?text=Hello+World"
    myImage.current.setAttribute("height", "300px")
    myImage.current.setAttribute("width", "500px")
  }

  return (
    <div>
      <img ref={myImage} src="https://placehold.co/600x400"/>
      <button onClick={change}>Change</button>
    </div>
  );
};

export default App;