import React from 'react';
import moment from "moment";
import {Component} from "react";

class Profile extends Component { 
    
    render() {
        const age = moment(this.props.birthDate).format("d MMM YY");
        
        return (
            <div className="profile">
                <div className="profile__name">
                    {`${this.props.firstName} ${this.props.lastName}`}
                </div>
                <div className="profile__birth">
                    {`Was born ${age} in ${this.props.birthPlace}`}
                </div>
            </div>
        );
    };
}
export default Profile;
