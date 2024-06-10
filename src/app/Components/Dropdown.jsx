import { useState } from "react";
import { FaChevronUp } from "react-icons/fa";

function Dropdown(props) {
  const [open, setOpen] = useState(false);
  const toggleDropdown = () => {
    setOpen((open) => !open);
  };

  return (
    <div className="dropdown">
      <div className={`dropdown-button ${open ? "button-open" : "button-closed"}`}>
        <p>{props.name}</p>
        <span className="toggle-icon" onClick={toggleDropdown}>
          {open ? <FaChevronUp className="chev-down" /> : <FaChevronUp className="chev-up" />}
        </span>
      </div>
      <div className={`dropdown-content ${open ? "content-open" : "content-closed"}`}>
        <div className="dropdown-items">
          <p>{props.value}</p>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
