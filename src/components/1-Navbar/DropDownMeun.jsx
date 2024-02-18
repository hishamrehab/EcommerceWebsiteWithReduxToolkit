import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./Navbar.css";
const DropDownMeun = () => {
  return (
    <DropdownButton
      title="USD$"
      style={{
        color: "white",
      }}
    >
      <Dropdown.Item href="#/action-1">USD$</Dropdown.Item>
      <Dropdown.Item href="#/action-2">EUR€</Dropdown.Item>
    </DropdownButton>
  );
};

export default DropDownMeun;
