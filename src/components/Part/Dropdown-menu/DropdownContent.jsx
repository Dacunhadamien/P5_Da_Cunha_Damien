import DropdownItem from "./DropdownItem";

const DropdownContent = (props) => {
  return (
    <div className={`dropdown-content ${props.open ? "content-open" : null}`}>
      <DropdownItem value={props.value} />
    </div>
  );
};

export default DropdownContent;
