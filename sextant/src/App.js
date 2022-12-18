/*import logo from './logo.svg';*/
import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Banner bannerText="SEXTANT" />
                <Exhibit name="I'm a Test exhibit!"></Exhibit>
                <Exhibit name="New Exhibit"></Exhibit>
            </div>
        );
    }
}

export default App;
