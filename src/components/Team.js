import React, { Component } from 'react'

import './Team.sass'

class Team extends Component {
    render() {
        return (
            <div className="Team">
                <div className="Team__title">
                    <h2><span className="divider"></span>MEET THE TEAM.</h2>
                </div>
                <div className="Team__wrap">
                    <div className="Team__card">
                        <img src={require("./img/teamate1.jpg")} alt=""/>
                        <div className="Team__card__desc">
                            <h6>GLORIA BROMLEY</h6>
                            <span>CEO and Founder</span>
                        </div>

                        <div className="Team__overlay">
                            <div className="Team__overlay__icons">
                                <a href="#"><img src={require("./img/icon-tw.png")} alt=""/></a>
                                <a href="#"><img src={require("./img/icon-fb.png")} alt=""/></a>
                                <a href="#"><img src={require("./img/icon-in.png")} alt=""/></a>
                            </div>
                        </div>
                    </div>

                    <div className="Team__card">
                        <img src={require("./img/teamate2.jpg")} alt="" />
                        <div className="Team__card__desc">
                            <h6>PAUL TORRES</h6>
                            <span>Head of Development</span>
                        </div>

                        <div className="Team__overlay">
                            <div className="Team__overlay__icons">
                                <a href="#"><img src={require("./img/icon-tw.png")} alt="" /></a>
                                <a href="#"><img src={require("./img/icon-fb.png")} alt="" /></a>
                                <a href="#"><img src={require("./img/icon-in.png")} alt="" /></a>
                            </div>
                        </div>
                    </div>

                    <div className="Team__card">
                        <img src={require("./img/teamate3.jpg")} alt="" />
                        <div className="Team__card__desc">
                            <h6>JUDITH GILLETTE</h6>
                            <span>Graphic Disigner</span>
                        </div>

                        <div className="Team__overlay">
                            <div className="Team__overlay__icons">
                                <a href="#"><img src={require("./img/icon-tw.png")} alt="" /></a>
                                <a href="#"><img src={require("./img/icon-fb.png")} alt="" /></a>
                                <a href="#"><img src={require("./img/icon-in.png")} alt="" /></a>
                            </div>
                        </div>
                    </div>

                    <div className="Team__card">
                        <img src={require("./img/teamate4.jpg")} alt="" />
                        <div className="Team__card__desc">
                            <h6>DELORES REED</h6>
                            <span>Client Service Director</span>
                        </div>

                        <div className="Team__overlay">
                            <div className="Team__overlay__icons">
                                <a href="#"><img src={require("./img/icon-tw.png")} alt="" /></a>
                                <a href="#"><img src={require("./img/icon-fb.png")} alt="" /></a>
                                <a href="#"><img src={require("./img/icon-in.png")} alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Team