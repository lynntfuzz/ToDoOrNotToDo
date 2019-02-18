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
        <Nav>
          <NavItem>
            <NavLink href="/" active>Home</NavLink>
          </NavItem>
          <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
            Challenges
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Create A Health Challenge</DropdownItem>
              <DropdownItem >Create a Work Challenge</DropdownItem>
              <DropdownItem href="/challenge">My Challenges</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavItem>
            <NavLink href="#">Create A Group</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Calender</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/Login">Log in</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/signup">Register</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/login">Login</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}
