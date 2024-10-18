import { useEffect, useState } from "react";
import { LuListTodo } from "react-icons/lu";

import Form from "./components/Form";
import ItemList from "./components/ItemList";
const App = () => {
  const [todoList, setTodoList] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );

  const handleCheckedToggle = (id) => {
    setTodoList((items) =>
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleAddItem = (item) => {
    setTodoList((currentItems) => [...currentItems, item]);
  };

  const handleDeleteItem = (id) => {
    setTodoList((newItems) => newItems.filter((item) => item.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);
  return (
    <div className="container">
      <div className="todo-app">
        <div className="header">
          <h2>Simple Todo-app</h2>
          <LuListTodo className="todo-icon" />
        </div>
        <Form onAddItems={handleAddItem} />
        <ItemList
          todoList={todoList}
          onDeleteItem={handleDeleteItem}
          onCheckedToggle={handleCheckedToggle}
        />
      </div>
    </div>
  );
};
export default App;
