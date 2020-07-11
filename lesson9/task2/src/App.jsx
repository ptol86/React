import React from "react";
import UserForm from './UserForm'

const user = {
    firstName: 'John',
    lastName: 'Doe',
    birthDate: '1991-01-17T11:11:11.819Z',
    birthPlace: 'London'
};

class App extends React.Component {
    createUser = (userData) => {
        console.log(userData);
    }

    render() {
    return (
        <UserForm onSubmit = {this.createUser}/>
        )
    }
}
    
export default App; 