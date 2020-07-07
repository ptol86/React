import React from 'react';

const Online = ({onLogin}) => {
    return <span onClick={onLogin} className="status__text">All good!</span>;
};

export default Online;