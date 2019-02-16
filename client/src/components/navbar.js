import React from 'react';
import { Nav, NavItem, NavLink} from 'reactstrap'   
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
          <NavItem>
            <NavLink href="#">Calender</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/challenge">My Challenges</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" active>Challenges</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" active>Create a Habit</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/Login" active>Log In</NavLink>
          </NavItem>

        </Nav>
      </div>
    );
  }
}
