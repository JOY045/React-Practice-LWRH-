import { useRef } from "react";

const App = () => {

  let APIData = useRef(null)
  let myPTag = useRef()
  
  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products")
    APIData.current = await res.json()
  }

  const showData = () => {
    myPTag.current.innerText = JSON.stringify(APIData.current)
  }

  return (
    <div>
      <p ref={myPTag}></p>

      <button onClick={fetchData}>Call API</button>
      <button onClick={showData}>Show Data</button>
    </div>
  );
};

export default App;