import React, {Fragment} from 'react';
import { Route, Router } from 'react-router-dom';
import Auth from './Auth/Auth';
import Callback from './Auth/Callback';
import history from './Auth/history';
import Home from './components/Home';
import Business from "./components/Business";
import Maintenance from "./components/Maintenance";
import Aboutus from "./components/Aboutus";
import Tires from "./components/Tires";
import Signup from "./components/Signup";
import Body from "./components/Body";
import Navbar from './components/navbar'

const auth = new Auth();

const handleAuthentication = ({location}) => {
    if (/access_token|id_token|error/.test(location.hash)) {
        auth.handleAuthentication();
    }
}

export const MakeMainRoutes = () => {
    return (
        <Router history={history} >
            <Fragment>
                <Navbar auth={auth} />
                <div className="fl w-100 pl4 pr4">
                    <Route path="/" render={(props) => <Home auth={auth} {...props} />} />
                    <Route path="/callback" render={(props) => {
                        handleAuthentication(props);
                        return <Callback {...props} />
                    }}/>
                    <Route path="/signup" component={Signup}/>
                    <Route path="/aboutus" component={Aboutus}/>
                    <Route path="/businesses/:businessId" component={Business}/>
                    <Route path="/maintenance" component={Maintenance} />
                    <Route path="/tires" component={Tires} />
                    <Route path="/body" component={Body}/>
                </div>
            </Fragment>
        </Router>
    );
}