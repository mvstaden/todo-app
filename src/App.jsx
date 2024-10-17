import { useState } from "react";
import { LuListTodo } from "react-icons/lu";

import Form from "./components/Form";
import ItemList from "./components/ItemList";
const App = () => {
  const [items, setItems] = useState([]);

  const handleCheckedToggle = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleAddItem = (item) => {
    setItems((currentItems) => [...currentItems, item]);
  };

  const handleDeleteItem = (id) => {
    setItems((newItems) => newItems.filter((item) => item.id !== id));
  };
  return (
    <div className="container">
      <div className="todo-app">
        <div className="header">
          <h2>Simple Todo-app</h2>
          <LuListTodo className="todo-icon" />
        </div>
        <Form onAddItems={handleAddItem} />
        <ItemList
          items={items}
          onDeleteItem={handleDeleteItem}
          onCheckedToggle={handleCheckedToggle}
        />
      </div>
    </div>
  );
};
export default App;
