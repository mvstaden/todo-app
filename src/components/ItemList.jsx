import {
  MdOutlineRadioButtonUnchecked,
  MdOutlineRadioButtonChecked,
  MdOutlineClose,
} from "react-icons/md";

const ItemList = ({ id, item, checked, onDeleteItem }) => {
  return (
    <li className={checked ? "checked" : ""}>
      {checked ? (
        <MdOutlineRadioButtonChecked className="check-icon" />
      ) : (
        <span className="check-icon">
          <MdOutlineRadioButtonUnchecked />
        </span>
      )}
      <p>{item}</p>
      <MdOutlineClose onClick={() => onDeleteItem(id)} className="close-icon" />
    </li>
  );
};
export default ItemList;
