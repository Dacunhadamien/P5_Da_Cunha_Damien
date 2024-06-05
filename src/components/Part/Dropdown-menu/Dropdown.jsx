import { useState } from "react";
import DropdownButton from "./DropdownButton";
import DropdownContent from "./DropdownContent";

function Dropdown(props) {
  const [open, setOpen] = useState(false);
  const toggleDropdown = () => {
    setOpen((open) => !open);
  };

  return (
    <div className="dropdown">
      <DropdownButton name={props.name} open={open} toggle={toggleDropdown} />
      <DropdownContent value={props.value} open={open} />
    </div>
  );
}

export default Dropdown;
