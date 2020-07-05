import React from 'react';
import ReactDOM from 'react-dom';
import "./index.scss";
import moment from "moment";

const rootElement = document.querySelector('#root');

const user = {
    firstName: "John",
    lastName: "Doe",
    birthDate: new Date('2001-01-01T11:11:11.819Z'),
}




const Greeting = (props) => {
    
    const age =  moment().diff(moment(props.birthDate), 'years');
    console.log(age)
    
    return (
        <div className="greeting">
            {`My name is ${props.firstName} ${props.lastName}. I'm ${age} years old`}
        </div>
    );
};
// {props.user.name}


ReactDOM.render(
    <Greeting {...user}/>,
    rootElement
);



export default Greeting;