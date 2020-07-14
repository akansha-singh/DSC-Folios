import React, { Component } from 'react'
import { Switch, Route, Redirect} from 'react-router-dom'
import Home from './Home';
import HeaderComponent from './HeaderComponent';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Build from './Build';

export class MainComponent extends Component {
    render() {
        return (
            <div>
                <HeaderComponent/>
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route path='/signin' component={SignIn} />
                    <Route exact path='/signup' component={SignUp}/>
                    <Route exact path='/build' component={Build}/>
                    <Redirect to="/home" />
                </Switch>
            </div>
        )
    }
}

export default MainComponent
