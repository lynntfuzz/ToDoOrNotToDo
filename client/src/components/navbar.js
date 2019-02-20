import React from 'react';
import axios from 'axios'; 
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink} from 'reactstrap'   
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
                console.log(challenge);
                    return <DropdownItem key={index} >
                    <span onClick={ (e) => this.props.setSelectedChallenge(challenge)}>{challenge.name}</span>
                    </DropdownItem>;
              })}
            </DropdownMenu> 
          </Dropdown>
          <NavItem>
            <NavLink href="#">Calendar</NavLink>
          </NavItem>
          {/* <NavItem>
            <NavLink href="/challenge">My Challenges</NavLink>
          </NavItem> */}
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
