
import Home from '../view/Home';
import {Route, Switch} from 'react-router-dom';

const Index =()=>{
    return (
        <Switch>
            <Route component={Home}  exact path={["/","/home"]}/>
        </Switch>
    )
}

export default Index;