import React from 'react';

class Toggler extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            button: "Off",
        }
    }
    changeBtnText = () => {
        this.setState((state, props) => {
            return {button: state.button === "Off"
                    ? "On"
                    : "Off"
        };
          });;
    }
    render() {
        return (
            <button 
                onClick={this.changeBtnText}
                className="toggler"
            >
                {this.state.button}
            </button>
        )
    }
}

export default Toggler;