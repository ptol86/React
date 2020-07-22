import React from 'react';
import moment from 'moment';
import { useState, useEffect } from 'react';

const getTimeWithOffset = offset => {
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset() / 60;
    return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
}

const Clock = ({offset, location}) => {
    
    const [time, setTime] = useState(moment(getTimeWithOffset(offset)).format("h:mm:ss A"))
    
    useEffect(() => {
        
        const intervalId = setInterval(() => {
            setTime(
                moment(getTimeWithOffset(offset)).format("h:mm:ss A")
            )
        }, 1000);
        
        return () => {
            clearInterval(intervalId)
          }
    }, [])
    
    
    return (
    <div className="clock">
        <div className="clock__location">
            {location }
        </div>
        <div className="clock__time">
            {time}
        </div>
    </div>
    );
    
};

export default Clock;

