// Code YouTubeDebugger Component Here
// Code DigitalClicker Component Here
import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {
    constructor(){
        super();
        this.state={
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                resolution: '1080p'
                }
            }
        }
    }
    // change bitrate 
    changeBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings, 
                bitrate: 12
            }
        })
    }

    changeResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings, 
                video: { 
                    ...this.state.settings.video, 
                    resolution: '720p'
                }
            }
        })
        console.log(this.state.settings.video.resolution)
    }


    render(){
        return(
            <div>
                <button
                className={'bitrate'}
                onClick={this.changeBitrate}
                >
                </button>
                <button
                className={'resolution'}
                onClick={this.changeResolution}
                >
                </button>


            </div>

        )
    }
}