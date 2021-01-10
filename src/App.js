import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom';

import Home from "./page/Home";
import About from "./page/About";
import Contacts from "./page/Contacts";
import PhoneCard from "./page/PhoneCard";
import {routes} from "./routes";

const App = () => {
    return (
            <Switch>
                <Route exact path={'/'} render={() => <Redirect to={routes.home} />} />
                <Route path={routes.home} component={Home} />
                <Route path={routes.about} component={About} />
                <Route path={`${routes.contacts}/:id`} component={PhoneCard} />
                <Route path={routes.contacts} component={Contacts} />
            </Switch>
    )
}

export default App;