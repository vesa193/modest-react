import React, { Component } from 'react'

import './Footer.sass'

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <div className="Footer__wrap">
                    <p>© Copyright 2014 by PSD Booster. All Rights Reserved.</p>

                    <div className="Footer__icons">
                        <a href="#"><img src={require('./img/icon-tw.png')} alt=""/></a>
                        <a href="#"><img src={require('./img/icon-fb.png')} alt=""/></a>
                        <a href="#"><img src={require('./img/icon-sk.png')} alt=""/></a>
                        <a href="#"><img src={require('./img/icon-be.png')} alt=""/></a>
                        <a href="#"><img src={require('./img/icon-in.png')} alt=""/></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer