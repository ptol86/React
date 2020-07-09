import React from 'react';

class ConnectionStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "Online",
        }
    }
    componentDidMount() {
        window.addEventListener("online", this.handleStatusOnline);
        window.addEventListener("offline", this.handleStatusOffline);
    }
    componentWillUnmount() {
        window.removeEventListener("online", this.handleStatusOnline);
        window.removeEventListener("offline", this.handleStatusOffline);
    }
    handleStatusOnline = () => {
        this.setState ({
            status: "Online"
        });
    }
    handleStatusOffline = () => {
        this.setState ({
            status: "Offline"
        });
    }


    render() {
        const {status} = this.state;

        return (
            <div className={`status ${status === "Offline"?"status_offline":""}`}>
                {status}
            </div>
        )
    }
};

export default ConnectionStatus;