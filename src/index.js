// import React, {Fragment} from 'react'
// import ReactDOM from 'react-dom'
// import {
//     NavLink,
//     Link,
//     BrowserRouter as Router,
//     Route,
//     Switch,
// } from 'react-router-dom'
// import {ApolloProvider} from 'react-apollo'
// import ApolloClient from 'apollo-boost'
//
// import Login from './components/Login'
// import Signup from './components/Signup'
// import CreatePage from './components/CreatePage'
// import DetailPage from './components/Signup'
// import SignupPage from './components/Login'
// import 'font-awesome/css/font-awesome.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
// import {Button} from 'mdbreact'
// import Navbar from './components/navbar'
//
// import 'tachyons'
// import './index.css'
// import {Card, CardBody, CardImage, CardTitle, CardText, Input} from 'mdbreact';
// import {View, Mask} from 'mdbreact';
//
//
// const client = new ApolloClient({uri: 'http://localhost:4000'})
//
// class NavbarFeatures extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             collapse: false,
//             isWideEnough: false,
//             dropdownOpen: false
//         };
//         this.onClick = this.onClick.bind(this);
//         this.toggle = this.toggle.bind(this);
//     }
//
//     onClick(){
//         this.setState({
//             collapse: !this.state.collapse,
//         });
//     }
//
//     toggle() {
//         this.setState({
//             dropdownOpen: !this.state.dropdownOpen
//         });
//     }
//
//     render() {
//         return (
//             <Router>
//                 <Navbar color="grey" dark expand="md" scrolling>
//                     <NavbarBrand href="/">
//                         <strong></strong>
//                     </NavbarBrand>
//                     { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
//                     <Collapse isOpen = { this.state.collapse } navbar>
//                         <NavbarNav className="ml-auto" left>
//                             <NavItem active>
//                                 <a href="/signup" className="nav-link">Join Now</a>
//                             </NavItem>
//                             <NavItem>
//                                 <a className="nav-link" href="/login" >Sign In</a>
//                             </NavItem>
//                             <NavItem>
//                                 <NavLink className="nav-link" to="#">Business Owners</NavLink>
//                             </NavItem>
//                             <NavItem>
//                                 <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
//                                     <DropdownToggle nav caret>Mechanic App</DropdownToggle>
//                                     <DropdownMenu>
//                                         <DropdownItem href="#">About Us</DropdownItem>
//                                         <DropdownItem href="#">Our Customers</DropdownItem>
//                                         <DropdownItem href="#">Daily Deals</DropdownItem>
//                                         <DropdownItem href="#">Something else here</DropdownItem>
//                                     </DropdownMenu>
//                                 </Dropdown>
//                             </NavItem>
//                         </NavbarNav>
//                         <NavbarNav right>
//                             <NavItem>
//                                 <form className="form-inline md-form mt-0">
//                                     <input className="form-control mr-sm-2 mb-0 text-white" type="text" placeholder="Search" aria-label="Search"/>
//                                 </form>
//                             </NavItem>
//                         </NavbarNav>
//                     </Collapse>
//                 </Navbar>
//             </Router>
//         );
//     }
// }
//
// export default NavbarFeatures;
//
//
//
//
//
//                     <Switch>
//                         <Route exact path="/" component={() => (<div>Homepage</div>)}/>
//                         <Route  path="/signup" component={Signup}/>
//                         <Route  path="/login" component={Login}/>
//
//
//                     </Switch>
//                 </div>
//             </Fragment>
//         </Router>
//     </ApolloProvider>,
//     document.getElementById('root'),
// )


import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import 'tachyons'
import {MakeMainRoutes} from './routes'
import './index.css'

const client = new ApolloClient({ uri: 'http://localhost:4000' })



ReactDOM.render(
    <ApolloProvider client={client}>
        <MakeMainRoutes/>
    </ApolloProvider>,
    document.getElementById('root'),
)



