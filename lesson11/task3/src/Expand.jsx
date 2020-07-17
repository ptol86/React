import React from "react";

const Expand = ({ children, title, onOpen, onClose, isVisible }) => {
    if (!isVisible) return (
        <div className="expand border">
            <div className="expand__header">
            {title}
            <button className="expand__toggle-btn" onClick={onOpen}>
                <i className="fa fa-chevron-down"></i>
            </button>
            </div>
            
        </div>
    );

    return (
        <div className="expand border">
            <div className="expand__header">
            {title}
            <button className="expand__toggle-btn" onClick={onClose}>
                <i className="fa fa-chevron-up"></i>
            </button>
            </div>
            <div className="expand__content">
                {children}
            </div>
        </div>
    )

}


export default Expand;