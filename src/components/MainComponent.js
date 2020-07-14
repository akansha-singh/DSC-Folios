import React, { Component } from 'react'
import HeaderComponent from './HeaderComponent';
import Home from './Home';
import HowToUse from './HowToUse';
import About from './About';
import Footer from './Footer';
import PWA from './PWA';


export class MainComponent extends Component {
    render() {
        return (
            <div>
                <HeaderComponent/>
                <Home/>
                <About/>
                <HowToUse/>
                <PWA/>
                <Footer/>
                {/* <Switch>
                    <Route path='/home' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route path='/howtoUse' component={HowToUse} />
                    <Route path='/signin' component={SignIn} />
                    <Route exact path='/signup' component={SignUp}/>
                    <Redirect to="/home" />
                </Switch> */}
            </div>
        )
    }
}

export default MainComponent
