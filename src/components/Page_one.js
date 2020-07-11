import React, { Component } from 'react'


export class PageOne extends Component {
    render() {
        return (
            <div className="container" style={{marginTop:'30px'}}>
                <div className="row">
                    <div className="col-lg-5" style={{marginTop:'70px',paddingRight:'30px'}}>
                        <h2 className="heading_one">Bring all of your links<br/> in one place</h2><br/>
                        <p>Keep all your important links on your fingure tips and such easy sharing is never possible before. An ideal place to keep and share your presence.</p>
                        <br/>
                        <a href="#"><img src="assets/images/img3.svg" width="200px" height="auto" alt="img"/></a>
                        <br/><br/>
                        <img src="assets/images/img2.svg" width="170px" height="35px" alt="img"/>
                    </div>
                    <div className="col-lg-7">
                        <img src="assets/images/img1.svg" height="460px" width="auto" alt="img"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default PageOne;
