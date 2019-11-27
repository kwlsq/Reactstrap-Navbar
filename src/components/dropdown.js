import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const CobaDropdown = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        List                
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>First Name</DropdownItem>
        {props.x}
      </DropdownMenu>
    </Dropdown>
  );
}

export default CobaDropdown;