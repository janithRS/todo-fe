import "./App.css";
import { useState } from "react";

function App() {
  const [newItem, setNewItem] = useState("");
  const [itemList, setItemList] = useState([]);

  const addItem = () => {
    setItemList([...itemList, newItem]);
    console.log(itemList);
    console.log(newItem);
  };

  return (
    <div className="App">
      <h1>Todo List Choreo</h1>
      <input
        type="text"
        placeholder="Add an item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={(e) => addItem()}>Add</button>
      <ul>
        {itemList.map((i) => (
          <li>{i}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
