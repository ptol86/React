import React from 'react';

class Toggler extends React.Component {
    handleClick(e) {
        if (e.target.textContent === "Off") {
            
            e.target.textContent = "On";
        } else {
            e.target.textContent = "Off";
        }
    }

    render() {
        return (
            
            <button 
                onClick={this.handleClick}
                className="toggler"

            >
            Off
            </button>
                
            
        )
    }
}

export default Toggler;