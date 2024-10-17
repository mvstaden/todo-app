import {
  MdOutlineRadioButtonUnchecked,
  MdOutlineRadioButtonChecked,
} from "react-icons/md";

const ItemList = ({ item, checked }) => {
  return (
    <li>
      {checked ? (
        <MdOutlineRadioButtonChecked />
      ) : (
        <MdOutlineRadioButtonUnchecked />
      )}
      {item}
    </li>
  );
};
export default ItemList;
