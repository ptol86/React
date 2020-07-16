import React from "react";
import PropTypes from "prop-types";

const Dialog = ({ children, title, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="dialog">
            <div className="dialog__heading">
                <h4 className="dialog__title">{title}</h4>
            <button className="dialog__close-btn" onClick={onClose}>+</button>
            </div>
            <div className="dialog__content">
                {children}
            </div>
        </div>
    )

}
Dialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    isOpen: PropTypes.bool,
    title: PropTypes.string,
    children: PropTypes.element,
}
Dialog.defaultProps = {
    title: "",
    isOpen: false,
}

export default Dialog;