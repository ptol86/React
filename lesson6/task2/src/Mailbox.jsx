import React from 'react';

const Mailbox = ({ ureadMessages }) => {
    return (
        <div className="mailbox">
            <span className="mailbox__text">Messages</span>
            {
                ureadMessages.length > 0 && (
                    <span className="mailbox__count">{ureadMessages.length}</span>
                )
            }
        </div>)
};

export default Mailbox;