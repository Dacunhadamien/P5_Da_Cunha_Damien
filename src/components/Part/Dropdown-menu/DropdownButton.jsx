import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

const DropdownButton = (props) => {
  return (
    <div className={`dropdown-button ${props.open ? "button-open" : null}`}>
      <p>{props.name}</p>
      <span className="toggle-icon" onClick={props.toggle}>
        {props.open ? <FaChevronUp /> : <FaChevronDown />}
      </span>
    </div>
  );
};

export default DropdownButton;
