import { useEffect } from "react";
import { useState } from "react";

const App = () => {

  const [data, setData] = useState()

  useEffect(() => {
    (async () => {
      let response = await fetch('https://dummyjson.com/products/1')
      let json = await response.json()
      setData(json)
    })()
  }, [])
  
  return (
    <div>
      {JSON.stringify(data)}
    </div>
  );
};

export default App;