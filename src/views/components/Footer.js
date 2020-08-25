
import React, { Component } from 'react'
/* import logo from '../../../assets/img/brand/logo.svg'; */
import Fork_logo from '../../assets/img/brand/Fork_logo.png';

export default class Footer extends Component {
    render() {
        return (
            <div style={{

                position: "auto",
                left: "0",
                bottom: "1",
                width: "100%",
                backgroundColor: "white",
                textAlign: "center",
                marginLift: "10px",
            }}>

<img  src={Fork_logo} align="left" width="90" alt="logo" /> 

                <h5 style={{ marginLeft:"-69px",
                  marginRight:"100px"}}>Contact US</h5>
                <br />
                <p style={{marginRight: "10px"}}> Drisana  Consulting  LLC-P.O  Bx  73344  Phoenix  AZ  8505</p>
            </div>
        )
    }
}
