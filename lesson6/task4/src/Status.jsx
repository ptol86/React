import React from 'react';
import Online from './Online';
import Offline from './Offline';


class Status extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            isOnline: false
        }
    }
    onLogin = () => {
        this.setState({
            isOnline: false,
        })
    }
    onLogout = () => {
        this.setState({
            isOnline: true,
        })
    }

    render() {
        
        return (
            <div className="status">
                <>   
                    {this.state.isOnline
                    ?<Online />
                    :<Offline onLogout={this.onLogout}/>
                    }   
                </>
            </div>
        )
    }
}
export default Status;