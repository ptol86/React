import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const User = () => {
    const {userId} = useParams();
    
    const [state, setState] = useState({name: "", location: "", avatar_url: ""})

    const fetchUserData = userId => fetch(`https://api.github.com/users/${userId}`)
            .then(response => response.json())
            .then(res => setState({
                avatar_url: res.avatar_url,
                name: res.name,
                location: res.location,
            }))
            
    useEffect(() => {
        fetchUserData(userId);
    }, [userId]);
    
    return (
        <div className="user">
            <img alt="User Avatar" src={state.avatar_url} className="user__avatar"/>
            <div className="user__info">
                <span className="user__name">{state.name}</span>
                <span className="user__location">{state.location}</span>
            </div>
            {`User is ${userId}`}
        </div>
    );
  
}

export default User; 