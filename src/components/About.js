import React, { Component } from 'react'
import './Vars.sass'
import './Divider.sass'
import './About.sass'

class About extends Component {
    render() {
        return (
            <div className="About">
                <div className="About__title">
                    <h2><span className="divider"></span> WE ARE MODEST.</h2>
                </div>
                <div className="About__wrap">
                    
                    <div className="About__text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi metus, tristique ndolor non, ornare sagittis dolor. Nulla vestibulu lacus sed molestie gravida. Crferm entum  quismagna congue, vel sodales arcu vestibulum. Nunc lobortis dui magna, quis lacusullamcorper at. </p>
                        <p>Phasellus sollicitudin ante eros ornare, <span>sit amet luctus lorem semper</span>. Suspendisse posuere, quamdictum consectetur, augue metus pharetra tellus, eu feugiatloreg egetnisi. Cras ornare bibendum ante, ut bibendum odio convallis eget. vel sodales arcu vestibulum
</p>
                        <div className="About__boxes">
                            <a href="#"><img src={require("./img/icon-fb.png")} alt=""/></a>
                            <a href="#"><img src={require("./img/icon-tw.png")} alt=""/></a>
                            <a href="#"><img src={require("./img/icon-ggl.png")} alt=""/></a>
                            <a href="#"><img src={require("./img/icon-dribble.png")} alt=""/></a>
                            <a href="#"><img src={require("./img/icon-be.png")} alt=""/></a>
                        </div>

                        
                    </div>

                    <div className="About__numbers">
                        <div className="About__number">
                            <span>01</span>
                            <div className="About__number__text">
                                <h5>Dedication to the customers</h5>
                                <p>Integer vel lacus non dui ullamcorper venenatis. Aliquam vitae <br /> tristique nisi, vitae ullamcorper risus. Nam porttitor blandit ultricies.</p>
                            </div>
                        </div>

                        <div className="About__number">
                            <span>02</span>
                            <div className="About__number__text">
                                <h5>working closely with our clients</h5>
                                <p>Sed blandit nisi urna, sed pellentesque enim consectetur vitae. <br/> Suspendisse ut vehicula nibh.</p>
                            </div>
                        </div>

                        <div className="About__number">
                            <span>03</span>
                            <div className="About__number__text">
                                <h5>increase happiness</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> Nulla eleifend laoreet euismod.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default About