import React from 'react';
import moment from "moment";


const Profile = (props) => { 
        
    const age = moment(props.birthDate).format("d MMM YY");
    
    return (
        <div className="profile">
            <div className="profile__name">
                {`${props.firstName} ${props.lastName}`}
            </div>
            <div className="profile__birth">
                {`Was born ${age} in ${props.birthPlace}`}
            </div>
        </div>
    );

}
export default Profile;
