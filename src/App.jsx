import { useState } from "react";

const App = () => {

  const [list, setList] = useState([])
  const [item, setItem] = useState("")

  const AddToList = () => {
    list.push(item)
    setList([...list])
  }

  const removeItem = (index) => {
    list.splice(index, 1)
    setList([...list])
  }

  return (
    <div>

      <input onChange={(e) => setItem(e.target.value)} placeholder="Item" />
      <button onClick={AddToList}>Add</button>

      <table>
        <tbody>
          {
            list.length !== 0 ? (
              list.map((element, index) => {
                return (
                  <tr>
                    <td>{element}</td>
                    <td>
                      <button
                        onClick = {() => {
                          removeItem(index)
                        }}>
                        Remove
                      </button>
                    </td>
                  </tr>
                )
              })
            )
              :
              (<tr>
                <td>No Items</td>
              </tr>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default App;