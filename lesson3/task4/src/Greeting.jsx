import React from 'react';
import ReactDOM from 'react-dom';
import "./index.scss";

const rootElement = document.querySelector('#root');

const user = {
    firstName: "John",
    lastName: "Doe",
    birthDate: new Date('2001-01-01T11:11:11.819Z'),
}

const age = (birthDate) => {
    return new Date('2018-01-01T11:11:11.819Z').getFullYear() - birthDate.getFullYear();
   
  }


const Greeting = (props) => {
    console.log(props)

    return (
        <div className="greeting">
            {`My name is ${props.firstName} ${props.lastName}. I'm ${age(props.birthDate)} years old`}
        </div>
    );
};
// {props.user.name}


ReactDOM.render(
    <Greeting {...user}/>,
    rootElement
);



export default Greeting;