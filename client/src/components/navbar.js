import React from 'react';
import axios from 'axios'; 
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink} from 'reactstrap'   
require('./navbar.css')


export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      // challenges: [],
      // selectedChallenge: {name: "empty"} // later replacde this with empty string
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
            {/* <DropdownMenu>
              {this.props.challenges.map(function(challenge, index){
                    return <DropdownItem key = {index} value={ challenge } onClick={(e) => this.props.selectChallenge(e.target.value)}>{challenge.name}</DropdownItem>;
                  }.bind(this))}
            </DropdownMenu> */}
          </Dropdown>
          <NavItem>
            <NavLink href="#">Calendar</NavLink>
          </NavItem>
          {/* <NavItem>
            <NavLink href="/challenge">My Challenges</NavLink>
          </NavItem> */}
        </Nav>
      </div>
    );
  }
}
