import { useState } from "react";

const Form = ({ onAddItems }) => {
  const [item, setItem] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item) return;
    
    const newItem = { item, checked: false, id: crypto.randomUUID() };

    onAddItems(newItem);
    setItem("");
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Add your item"
        className="input-box"
      />
      <button className="btn">Add Item</button>
    </form>
  );
};
export default Form;
