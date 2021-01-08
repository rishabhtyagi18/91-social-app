import React, { Suspense, lazy } from 'react';
import { Route, Switch, BrowserRouter as Router, Redirect } from "react-router-dom";

const History = lazy(() => import('../components/History/History'));
const address = lazy(() => import('../components/Address/Address'));

const RoutingComponent = () => {
    return(
        <Suspense fallback={<div></div>}>
            <Router>
                <Switch>
                    <Route exact path="/" render={() => <Redirect to="/history" />} />
                    <Route exact path="/history" component={History} />
                    <Route exact path="/address" component={address} />
                </Switch>
            </Router>
        </Suspense>
    )
}

export default RoutingComponent;
