import { useState } from "react";
import { LuListTodo } from "react-icons/lu";

import Form from "./components/Form";
import ItemList from "./components/ItemList";
const App = () => {
  const [items, setItems] = useState([]);

  const handleAddItem = (item) => {
    setItems((currentItems) => [...currentItems, item]);
  };

  return (
    <div className="container">
      <div className="todo-app">
        <div className="header">
          <h2>Simple Todo-app</h2>
          <LuListTodo className="todo-icon" />
        </div>
        <Form onAddItems={handleAddItem} />
        <div className="list-container">
          <ul>
            {items.map((item) => (
              <ItemList key={item.id} {...item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default App;
