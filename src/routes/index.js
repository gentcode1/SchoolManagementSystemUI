import React from 'react';
import Home from '../view/Home';
import AllDashboard from '../view/SchoolDashboard';
import {Route, Switch} from 'react-router-dom';

const Index =()=>{
    return (
        <Switch>
            <Route component={Home}  exact path={["/home"]}/>
            {/* <Route component={AllDashboard} exact path={"/dash"}/> */}

        </Switch>
    );
}

export default Index;