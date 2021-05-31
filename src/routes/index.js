import React from 'react';
import {Route, Switch} from 'react-router-dom';
import SignIn from '../view/SignIn'

const Index =()=>{
    return (
        <Switch>
            <Route component={SignIn}  exact path={["/","/signin"]}/>
        </Switch>
    )
}

export default Index;