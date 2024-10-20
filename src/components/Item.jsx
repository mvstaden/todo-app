import {
  MdOutlineRadioButtonUnchecked,
  MdOutlineRadioButtonChecked,
  MdDeleteOutline,
} from "react-icons/md";

const Item = ({ id, item, checked, onDeleteItem, onCheckedToggle }) => {
  return (
    <li
      className={checked ? "checked" : ""}
      onClick={() => onCheckedToggle(id)}>
      {checked ? (
        <MdOutlineRadioButtonChecked className="check-icon" />
      ) : (
        <MdOutlineRadioButtonUnchecked className="check-icon" />
      )}
      <p>{item}</p>
      <MdDeleteOutline
        onClick={() => onDeleteItem(id)}
        className="close-icon"
      />
    </li>
  );
};
export default Item;
