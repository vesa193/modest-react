import React, { Component } from 'react'

import './Nav.sass'



class Nav extends Component {
    render() {
        return (
            <nav className="Nav">
                <div className="Nav__wrap">
                    <div className="Nav__logo">
                        <a href="#">
                            <img src={require("./img/logo.png")} alt="" />
                        </a>  
                    </div>

                    <img id="hamb" src={require('./img/hamb.png')} alt=""/>
                    
                    <ul className="Nav__items">
                        <li><a className="Nav__link Nav__link--active" href="#">HOME</a></li>
                        <li><a href="#">ABOUT</a></li>
                        <li><a href="#">WORK</a></li>
                        <li><a href="#">TEAM</a></li>
                        <li><a href="#">SERVICES</a></li>
                        <li><a href="#">FEATURES</a></li>
                        <li><a href="#">CONTACT</a></li>
                    </ul>
                    
                </div>                
            </nav>
        )
    }
}

export default Nav