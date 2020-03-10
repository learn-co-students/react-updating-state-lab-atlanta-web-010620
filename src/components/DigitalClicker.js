// Code DigitalClicker Component Here
// Code DigitalClicker Component Here
import React, { Component } from 'react';

export default class DigitalClicker extends Component {
    constructor(){
        super(); 
        this.state={
            timesClicked:0
        }
    }
    // define method to run when button is clicked 
    increaseCount = () => {
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked+1
            }

        })
    }
    render(){
        return(
            <button
            onClick = {this.increaseCount}
            
            >{this.state.timesClicked}</button>

        )
    }
}