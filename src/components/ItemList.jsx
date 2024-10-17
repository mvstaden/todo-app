import Item from "./Item";

const ItemList = ({ items, onDeleteItem, onCheckedToggle }) => {
  return (
    <ul>
      {items.map((item) => (
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
