import React, {Link} from 'react';
import axios from 'axios'; 
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink, Button} from 'reactstrap'   
require('./navbar.css')


export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    console.log("Is authenticated? " + this.props.authenticated);
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink href="/" active>Home</NavLink>
          </NavItem>
          <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
              My Challenges
            </DropdownToggle>
            <DropdownMenu>
              {this.props.challenges.map((challenge, index) => {
                return <NavLink href="/" onClick={ (e) => this.props.setSelectedChallenge(challenge)}>{challenge.name}</NavLink>
              })}
            </DropdownMenu> 
          </Dropdown>
          <NavItem>
            <NavLink href="/signup">Register</NavLink>
          </NavItem>
          <NavItem>
          {this.props.authenticated ? (
            <NavLink href="/" onClick={this.props.logout}>Logout</NavLink>
           
          ) : (
            <NavLink href="/login">Login</NavLink>
          )}
          </NavItem>
        </Nav>
      </div>
    );
  }
}