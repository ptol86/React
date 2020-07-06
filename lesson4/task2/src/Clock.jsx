import React from 'react';
import {Component} from "react";
import "./clock.scss";
import moment from 'moment';
import "moment-timezone";

let counter = 0;

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: moment().tz(props.timezone).format("h:mm:ss A"),
        };
        setInterval(() => {
            this.setState({
                time: moment().tz(props.timezone).format("h:mm:ss A")
            })
        }, 1000);
        
    }
    render() {
        return (
        <div className="clock">
            <div className="clock__location">
                {this.props.city}
            </div>
            <div className="clock__time">
                {this.state.time}
            </div>
        </div>
        );
    }
};

export default Clock;

const getTimeWithOffset = offset => {
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset() / 60;
    return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
}