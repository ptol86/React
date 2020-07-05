import React from 'react';
import moment from "moment";
import {Component} from "react";

class Profile extends Component { 
    
    render() {
        console.log(this.props);
        const age = moment(this.props.userData.birthDate).format("DD MMM YY");
        
        return (
            <div className="profile">
                <div className="profile__name">
                    {`${this.props.userData.firstName} ${this.props.userData.lastName}`}
                </div>
                <div className="profile__birth">
                    {`Was born ${age} in ${this.props.userData.birthPlace}`}
                </div>
            </div>
        );
    };
}
export default Profile;
