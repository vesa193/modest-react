import React, {Component} from 'react'
import './Whatwedo.sass'

class Whatwedo extends Component {
    render() {
        return (
            <div className="Whatwedo">
                <div className="Whatwedo__title">
                    <h2><span className="divider"></span>WHAT WE DO.</h2>
                </div>
                <div className="Whatwedo__wrap">
                    <div className="Whatwedo__card">
                        <img src={require('./img/icon-settings.png')} alt=""/>
                        <h6>EASY THEME SETUP</h6>
                        <p>Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum.</p>
                    </div>

                    <div className="Whatwedo__card">
                        <img src={require('./img/icon-pencil.png')} alt="" />
                        <h6>PIXEL PERFECT DESIGN</h6>
                        <p>Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum.</p>
                    </div>

                    <div className="Whatwedo__card">
                        <img src={require('./img/icon-mobile.png')} alt="" />
                        <h6>RESPONSIVE DISPLAY</h6>
                        <p>Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum.</p>
                    </div>

                    <div className="Whatwedo__card">
                        <img src={require('./img/icon-clock.png')} alt="" />
                        <h6>24/7 SUPPORT</h6>
                        <p>Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum.</p>
                    </div>

                    <div className="Whatwedo__card">
                        <img src={require('./img/icon-settings.png')} alt="" />
                        <h6>EASY THEME SETUP</h6>
                        <p>Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum.</p>
                    </div>

                    <div className="Whatwedo__card">
                        <img src={require('./img/icon-pencil.png')} alt="" />
                        <h6>PIXEL PERFECT DESIGN</h6>
                        <p>Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum.</p>
                    </div>

                    <div className="Whatwedo__card">
                        <img src={require('./img/icon-mobile.png')} alt="" />
                        <h6>RESPONSIVE DISPLAY</h6>
                        <p>Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum.</p>
                    </div>

                    <div className="Whatwedo__card">
                        <img src={require('./img/icon-clock.png')} alt="" />
                        <h6>24/7 SUPPORT</h6>
                        <p>Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum.</p>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Whatwedo