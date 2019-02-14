import React from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink} from 'reactstrap'   
require('./navbar.css')

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink href="/" active>Home</NavLink>
          </NavItem>
          <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
              Habitrons
            </DropdownToggle>
            <DropdownMenu>
              
             
              <DropdownItem >Create a Challenge</DropdownItem>
              <DropdownItem>Create a Habit</DropdownItem>
              <DropdownItem href="/Login" active>Log In</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavItem>
            <NavLink href="#">Calender</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">My Group</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}
