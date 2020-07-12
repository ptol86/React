import React from "react";
import User from "./User";
import Filter from "./Filter";


class UsersList extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            value: "",
        }
    }
    onChange = event => {
        this.setState({
            value: event.target.value
        })
    } 
    render() {
        let usersList = this.props.users;
        if (this.state.value.length > 0) {
            usersList = usersList.filter(user => user.name.toLowerCase() === this.state.value.toLowerCase())}
        return (
            <>
                <Filter filterText={this.state.value} count={usersList.length} onChange={this.onChange}/>
                <ul className="users">
                {usersList.map(user => 
                <User key={user.id} {...user}/>)}
                </ul>
            </>
            
        )
    }
}

export default UsersList;

