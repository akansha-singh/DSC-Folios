import React, { Component } from 'react'
import HeaderComponent from './HeaderComponent';
import PageOne from './Page_one';
import HowToUse from './HowToUse';
import SignIn from './SignIn';
import SignUp from './SignUp';
import About from './About';
import { Switch, Route, Redirect } from 'react-router-dom';

export class MainComponent extends Component {
    render() {
        return (
            <div>
                <HeaderComponent/>
                <Switch>
                    <Route path='/home' component={PageOne} />
                    <Route exact path='/about' component={About} />
                    <Route path='/howtoUse' component={HowToUse} />
                    <Route path='/signin' component={SignIn} />
                    <Route exact path='/signup' component={SignUp}/>
                    <Redirect to="/home" />
                </Switch>
            </div>
        )
    }
}

export default MainComponent
