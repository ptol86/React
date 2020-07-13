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
        let usersList = (this.state.value === ''
        ? this.props.users
        : this.props.users.filter(user => user.name.toLowerCase()
          .includes(this.state.value.toLowerCase())))
          .map(
            user => <User key={user.id}
              {...user} />
          );
        return (
            <>
                <Filter filterText={this.state.value} count={usersList.length} onChange={this.onChange}/>
                <ul className="users">
                {usersList}
                </ul>
            </>
            
        )
    }
}

export default UsersList;

