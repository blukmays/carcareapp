
import React from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
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

    login() {
        this.props.auth.login();
    }

    logout() {
        this.props.auth.logout();
    }

    render() {
        const { isAuthenticated } = this.props.auth;
        return (
            <Router>
                <Navbar color="indigo" dark expand="md" scrolling>
                    <NavbarBrand href="/">
                        <strong>Car Care App</strong>
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav left>
                            {
                                !isAuthenticated() && (
                                    <NavItem>
                                        <NavbarBrand onClick={this.login.bind(this)} href="#">Sign Up</NavbarBrand>
                                    </NavItem>
                                )
                            }
                            {
                                !isAuthenticated() && (
                                    <NavItem>
                                        <NavbarBrand onClick={this.login.bind(this)} href="#">Login</NavbarBrand>
                                    </NavItem>
                                )
                            }
                            {
                                isAuthenticated() && (
                                    <NavItem>
                                        <NavbarBrand onClick={this.logout.bind(this)} href="#">Log Out</NavbarBrand>
                                    </NavItem>
                                )
                            }
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