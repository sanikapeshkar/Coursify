import { DropdownProps } from "./Dropdown.types";
import styles from './Dropdown.module.scss';
import { MemberTypes } from "../../pages/SuperAdmin/SuperAdmin.types";

const Dropdown = ({ items, showFilter, setFilter, onClick }: DropdownProps) => {
  return (
    <ul className={styles.Dropdown}>
      {items.map((item: MemberTypes, index: number) => {
        return (
          <li
            key={index}
            onClick={() => {
              setFilter(item);
              onClick(!showFilter);
            }}
            className={styles.ListItem}
          >
            {item}
          </li>
        )
      })}
    </ul>
  );
};

export default Dropdown;  
