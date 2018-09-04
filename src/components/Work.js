import React, { Component } from 'react'
import './Vars.sass'
import './Work.sass'

class Work extends Component {
    render() {
        return (
            <div className="Work">
                <div className="Work__title">
                    <h2><span className="divider1"></span>LOVELY WORK.</h2>
                </div>
                <div className="Work__wrap">
                    <div className="Work__card">
                        <img className="Work__card__port" src={require("./img/portfolio1.jpg")} alt=""/>
                        <div className="Work__card__overlay">
                            <a href="#"><img src={require("./img/icon-plus.png")} alt="" /></a> 
                            <div className="Work__card__overlay__desc">
                                <p>PARTNERSHIP GUIDELINES</p>
                            </div>
                        </div>
                    </div>

                    <div className="Work__card">
                        <img className="Work__card__port" src={require("./img/portfolio2.jpg")} alt="" />
                        <div className="Work__card__overlay">
                            <a href="#"><img src={require("./img/icon-plus.png")} alt="" /></a>
                            <div className="Work__card__overlay__desc">
                                <p>PARTNERSHIP GUIDELINES</p>
                            </div>
                        </div>
                    </div>

                    <div className="Work__card">
                        <img className="Work__card__port" src={require("./img/portfolio3.jpg")} alt="" />
                        <div className="Work__card__overlay">
                            <a href="#"><img src={require("./img/icon-plus.png")} alt="" /></a>
                            <div className="Work__card__overlay__desc">
                                <p>PARTNERSHIP GUIDELINES</p>
                            </div>
                        </div>
                    </div>

                    <div className="Work__card">
                        <img className="Work__card__port" src={require("./img/portfolio4.jpg")} alt="" />
                        <div className="Work__card__overlay">
                            <a href="#"><img src={require("./img/icon-plus.png")} alt="" /></a>
                            <div className="Work__card__overlay__desc">
                                <p>PARTNERSHIP GUIDELINES</p>
                            </div>
                        </div>
                    </div>

                    <div className="Work__card">
                        <img className="Work__card__port" src={require("./img/portfolio5.jpg")} alt="" />
                        <div className="Work__card__overlay">
                            <img src={require("./img/icon-plus.png")} alt="" />
                            <div className="Work__card__overlay__desc">
                                <p>PARTNERSHIP GUIDELINES</p>
                            </div>
                        </div>
                    </div>

                    <div className="Work__card">
                        <img className="Work__card__port" src={require("./img/portfolio6.jpg")} alt="" />
                        <div className="Work__card__overlay">
                            <a href="#">
                                <img src={require("./img/icon-plus.png")} alt="" />     
                            </a> 
                            <div className="Work__card__overlay__desc">
                                <p>PARTNERSHIP GUIDELINES</p>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="#" className="Work__btn button1">SHOW ME MORE</a>
            </div>
        )
    }
}

export default Work