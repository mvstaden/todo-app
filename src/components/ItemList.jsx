import Item from "./Item";

const ItemList = ({ todoList, onDeleteItem, onCheckedToggle }) => {
  return (
    <ul>
      {todoList.map((item) => (
        <Item
          key={item.id}
          {...item}
          onDeleteItem={onDeleteItem}
          onCheckedToggle={onCheckedToggle}
        />
      ))}
    </ul>
  );
};
export default ItemList;
