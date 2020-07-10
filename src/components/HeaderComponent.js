import React, { Component } from 'react'
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Button} from 'reactstrap';
import { NavLink } from 'react-router-dom';


export class HeaderComponent extends Component {

    constructor(props) {
        super(props);
     
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false,
        };
        this.toggleNav = this.toggleNav.bind(this);
      }

    toggleNav() {
       this.setState({
          isNavOpen: !this.state.isNavOpen
       });
    }


    render() {
        return (
            <div>
                <Navbar color="white" light expand="lg" className="nav-bar">
                    <div className="container">
                        
                        <NavbarBrand className="mr-auto" href="/">
              <img
                src="assets/images/logo.svg"
                height="29px"
                width="153px"
                alt="Ristorante Con Fusion"
              />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} className="ml-auto" />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="ml-auto" style={{float:'right',color:'#000000'}}>
                            <NavItem className="nav-items">
                                <NavLink color="dark" className="nav-link"  to='/home'> Home</NavLink>
                            </NavItem>
                            <NavItem className="nav-items">
                                <NavLink className="nav-link" to='/aboutus'> About</NavLink>
                            </NavItem>
                            <NavItem className="nav-items"> 
                                <NavLink className="nav-link"  to='/menu'> How to Use</NavLink>
                            </NavItem>
                            <NavItem className="nav-items">
                                <NavLink className="nav-link" to='/contactus'> Sign In</NavLink>
                            </NavItem>
                            <NavItem>
                            <a href="#"><img src="assets/images/img4.svg" width="153px" height="auto"/></a>
                            </NavItem>
                            </Nav>                           
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default HeaderComponent





















