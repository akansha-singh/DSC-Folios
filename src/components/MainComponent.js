import React, { Component } from 'react'
import HeaderComponent from './HeaderComponent';
import Home from './Home';
import HowToUse from './HowToUse';
import SignIn from './SignIn';
import SignUp from './SignUp';
import About from './About';
import Built from './Built';
import { Switch, Route, Redirect } from 'react-router-dom';

export class MainComponent extends Component {
    render() {
        return (
            <div>
                <HeaderComponent/>
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route path='/howtoUse' component={HowToUse} />
                    <Route path='/signin' component={SignIn} />
                    <Route path='/built' component={Built} />
                    <Route exact path='/signup' component={SignUp}/>
                    <Redirect to="/home" />
                </Switch>
            </div>
        )
    }
}

export default MainComponent
