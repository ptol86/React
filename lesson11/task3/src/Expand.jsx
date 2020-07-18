import React from "react";

class Expand extends React.Component {
    state = { 
        isVisible: false, 
    }

    toggleButton = () => {
        this.setState({
            isVisible: !this.state.isVisible,
        })
    }
    
    render() {
        const {title, children} = this.props;
        const {isVisible} = this.state;
        return (
            <div className="expand border">
                <div className="expand__header">
                <span className="expand__title">{title}</span>
                <button className="expand__toggle-btn" onClick={this.toggleButton}>
                    {isVisible && <i className="fa fa-chevron-up"></i> || <i className="fa fa-chevron-down"></i>}
                </button>
                </div>
                {isVisible && <div className="expand__content">
                    {children}
                </div>}
            </div>
        )
    }

}


export default Expand;