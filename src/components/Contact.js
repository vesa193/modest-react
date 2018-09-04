import React, { Component } from 'react'

import './Contact.sass'

class Contact extends Component {
    render() {
        return (
            <div className="Contact">
                <div className="Contact__title">
                    <h2><span className="divider"></span>STAY IN TOUCH</h2>
                </div>
                <div className="Contact__img"></div>
                <div className="Contact__wrap">
                    <div className="Contact__text">
                        <h5>CONTACT INFORMATION</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi metus, <br/> tristique nec dolor non, ornare sagittis dolor. Nulla vestibulum lacus sed molestie gravida. </p>
                        <p>Cras fermentum elit quis magna congue, <span>vel sodales</span> arcu vestibulum. <br/> Nunc lobortis dui magna, quis dapibus lacus</p>
                    </div>

                    <form className="Contact__form">

                        <div className="Contact__inputs">
                            <div className="Contact__input">
                                <label htmlFor="name">YOUR NAME</label>
                                <input id="name" name="name" type="text"/>
                            </div>
                            
                            <div className="Contact__input">
                                <label htmlFor="email">YOUR EMAIL</label>
                                <input id="email" name="email" type="text" />
                            </div>
                        </div>

                        <div className="Contact__mess">
                            <label htmlFor="message">YOUR MESSAGE</label>
                            <textarea name="message" id="message" cols="30" rows="10"></textarea>
                        </div>

                        <a className="button2" href="#">SEND MESSAGE</a>
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact