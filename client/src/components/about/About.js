import React, { Component } from 'react'
import MapGoogle from './Map'
import "./about.css";
export default class About extends Component {
    render() {
        return (
            <div className="mainDiv">
                <div className="row">
                <div className="col-lg-6 left">
                <p className="title">About Us</p>
                </div>
                <div className="col-lg-6 right">

                </div>
                </div>
                <div>
                    <MapGoogle />
                </div>

            </div>
            
        )
    }
}


