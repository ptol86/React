import React from 'react';

class ConnectionStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          status: 'online',
        }
      }
      componentDidMount(){
        window.addEventListener('online', this.handleStatusOnline);
        window.addEventListener('offline', this.handleStatusOffline);
      }
      componentWillUnmount(){
        window.removeEventListener('online', this.handleStatusOnline);
        window.removeEventListener('offline', this.handleStatusOffline);
      }
      handleStatusOnline = () => {
        this.setState({
          status: 'online',
        })
      }
      handleStatusOffline = () => {
        this.setState({
          status: 'offline',
        });
      };
    render () {
      const { status } = this.state;
      return (
        <div className={`status ${status === "offline" ? "status_offline" : ''}`}
        >
           {status}
        </div>
      );
    }
  }
  export default ConnectionStatus;