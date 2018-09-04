import React, {Component} from 'react'

import './Header.sass'

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="Header__wrap">
                    <div className="Header__text">
                        <h2>WELCOME TO OUR MARKETPLACE</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi metus, tristique ndolor 
non, ornare sagittis dolor. Nulla vestibulu lacus ...</p>

                        <div className="Header__btns">
                            <a className="button1" href="#">VIEW MORE</a>
                            <a className="button1" href="#">VIDEO TOUR</a>
                        </div>
                        
                    </div>


                    <div className="Header__indicators">
                        <a href="#">
                            <img src={require("./img/indicators.png")} alt=""/>   
                        </a>
                    </div>

                </div>
            </div>
        )
    }
}

export default Header
