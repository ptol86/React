import React from 'react';
import moment from "moment";
import {Component} from "react";

class Profile extends Component { 
    
    render() {
        const userData = {
            firstName: 'John',
            lastName: 'Doe',
            birthDate: '1991-01-17T11:11:11.819Z',
            birthPlace: 'London'
        };
        const age = moment(userData.birthDate).format("d MMM YY");
        console.log(age)
        
        return (
            <>
            <div className="profile__name">
                {`${userData.firstName} ${userData.lastName}`}
            </div>
            <div className="profile__birth">
                {`Was born ${age} in ${userData.birthPlace}`}
            </div>
            </>
        );
    };
}

export default Profile;


