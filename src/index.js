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


import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import {
    NavLink,
    Link,
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import Login from './components/Login.js'
import Home from './components/Home.js'
import Signup from './components/Signup.js'
import Aboutus from './components/Aboutus.js'
import 'tachyons'
import './index.css'
import { NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import Navbar from './components/navbar'
import Maintenance from "./components/Maintenance";
import Body from "./components/Body";
import Tires from "./components/Tires";
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
// https://www.yelp.com/developers/graphql/guides/intro
// https://www.yelp.com/developers/graphiql
// https://www.yelp.com/developers/documentation/v3/business_search
//

const httpLink = createHttpLink({

    uri: "https://api.yelp.com/v3/graphql",
    credentials: 'IpiYNfe1WB0D8oTHRSyPExBDa8wbY8iEjwzOG_9dYNOADoDFH5SsgBBmbJ-tWjoZKy3ytYOcOzFajQGwNRNF3S30C67pwP7c-T4SspjI_cOTeBpe6hsHt8jqzPTbWnYx'

});

const authLink = setContext((_, { headers }) => {

    const token = process.env.YELP_API_CLIENT_KEY;

    // return the headers to the context so httpLink can read them
    return {

        headers: {
            ...headers,
            authorization: token ? `Bearer IpiYNfe1WB0D8oTHRSyPExBDa8wbY8iEjwzOG_9dYNOADoDFH5SsgBBmbJ-tWjoZKy3ytYOcOzFajQGwNRNF3S30C67pwP7c-T4SspjI_cOTeBpe6hsHt8jqzPTbWnYx` : "",

        }

    }

});

const client = new ApolloClient({

    uri: "https://api.yelp.com/v3/graphql",

    link: authLink.concat(httpLink),
    cache: new InMemoryCache()

});


ReactDOM.render(
    <ApolloProvider client={client}>
        <Router>
            <Fragment>
                <Navbar />
                <nav className="pa3 pa4-ns">
                    <Link
                        className="link dim black b f6 f5-ns dib mr3"
                        to="/login"
                        title="Login"
                    >
                        Login
                    </Link>
                    <NavLink
                        className="link dim f6 f5-ns dib mr3 black"
                        activeClassName="gray"
                        exact={true}
                        to="/signup"
                        title="Signup"
                    >
                        Sign Up
                    </NavLink>
                    <NavLink
                        className="link dim f6 f5-ns dib mr3 black"
                        activeClassName="gray"
                        exact={true}
                        to="/aboutus"
                        title="About Us"
                    >
                        About Us
                    </NavLink>



                </nav>
                <div className="fl w-100 pl4 pr4">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/aboutus" component={Aboutus} />
                        <Route path="/maintenance" component={Maintenance} />
                        <Route path="/tires" component={Tires} />
                        <Route path="/body" component={Body} />

                    </Switch>
                </div>
            </Fragment>







        </Router>
    </ApolloProvider>,
    document.getElementById('root'),
)



