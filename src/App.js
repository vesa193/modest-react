import React, { Component } from 'react';

import './App.sass';
import './components/Button-green.sass'
import './components/Breakpoints.sass'
import Header from './components/Header'
import Nav from './components/Nav'
import About from './components/About'
import Team from './components/Team'
import Work from './components/Work'
import Features from './components/Features'
import Whatwedo from './components/Whatwedo'
import Contact from './components/Contact'
import Footer from './components/Footer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <About />
        <Team />
        <Work />
        <Whatwedo />
        <Features />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
