import React, { Component } from 'react'
import './Features.sass'

class Features extends Component {
    render() {
        return (
            <div className="Features">
                <div className="Features__title">
                    <h2><span className="divider1"></span>FEATURES.</h2>
                </div>
                <div className="Features__wrap">
                    <div className="Features__card">
                        <img src={require('./img/features1.jpg')} alt=""/>

                        <div className="Features__text">
                            <h6>PRODUCTS DESIGN: EAMES CHAIRS</h6>
                            <p>Eames designs are certainly iconic. Everyone of us know at least two or three of their famous chairs. I would even risk saying that most of us dream about having a nice Eames.</p>
                        </div>
                    </div>

                    <div className="Features__card">
                        <img src={require('./img/features2.jpg')} alt="" />

                        <div className="Features__text">
                            <h6>ELEGANT AND COLORFUL LOGOS</h6>
                            <p>I’ve always found logo design to be one of the most challenging things to get right. There’s so much that a logo can say about a brand without actually saying it.</p>
                        </div>
                    </div>

                    <div className="Features__card">
                        <img src={require('./img/features3.jpg')} alt="" />

                        <div className="Features__text">
                            <h6>A SHOWCASE OF CREATIVE</h6>
                            <p>It’s always interesting to see another designer’s take on a famous website, app or even physical product. Different designers add their own personality and style.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Features