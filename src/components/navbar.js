
import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class NavbarFeatures extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false
        };
        this.onClick = this.onClick.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <Router>
                <Navbar color="indigo" dark expand="md" scrolling>
                    <NavbarBrand href="/">
                        <strong>Car Care App</strong>
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav left>
                            <NavItem active>
                                <NavbarBrand href="/signup">Sign Up</NavbarBrand>
                            </NavItem>
                            <NavItem>
                                <NavbarBrand href="/login">Login</NavbarBrand>
                            </NavItem>
                            <NavItem>
                                <NavbarBrand href="/aboutus">About Us</NavbarBrand>
                            </NavItem>
                            <NavItem>
                                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                    <DropdownToggle nav caret>Popular Services</DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem href="#">Oil Change</DropdownItem>
                                        <DropdownItem href="#">Tire Rotation</DropdownItem>
                                        <DropdownItem href="#">Brake pads</DropdownItem>
                                        <DropdownItem href="#">Diagnostic Check</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </NavItem>
                        </NavbarNav>
                        <NavbarNav right>
                            <NavItem>
                                <form className="form-inline md-form mt-0">
                                    <input className="form-control mr-sm-2 mb-0 text-white" type="text" placeholder="Search" aria-label="Search"/>
                                </form>
                            </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
            </Router>
        );
    }
}

export default NavbarFeatures;