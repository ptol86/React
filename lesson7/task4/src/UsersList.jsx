import React from 'react';
import User from './User';
import Pagination from './Pagination';

// 1. render users
// 2. render users by page
// 3. write pagination logic
// 4. combine it


class UsersList extends React.Component {
    state = {
        currentPage: 0,
        itemsPerPage: 3,
        }
    
    goNext = () => {
        this.setState({
            currentPage: this.state.currentPage +1
        })
    }
    goPrev = () => {
        this.setState({
            currentPage: this.state.currentPage -1
        })
    }
    render() {
        const {users} = this.props;
        const {currentPage, itemsPerPage} = this.state;
        
        const startIndex = currentPage * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        
        const usersToShow = users.slice(startIndex, endIndex);

        return (
        <div>
            <Pagination goNext={this.goNext} 
                goPrev={this.goPrev} 
                currentPage={currentPage + 1} 
                itemsPerPage={itemsPerPage} 
                totalItems={users.length}/>
            <ul className="users">
                {usersToShow.map(user => {
                    return <User name={user.name} age={user.age}/>
                }
                )}
            </ul>
        </div>)
    }
};

export default UsersList;