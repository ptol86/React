import React from 'react';
import ReactDOM from 'react-dom';
import "./index.scss";
import UsersList from "./UsersList.jsx";

const rootElement = document.querySelector('#root');

const users = [
    {
        name: "Tom",
        age: 16,
        id: 'id-0'
    },
    {
        name: "Bob",
        age: 33,
        id: 'id-1'
    },
    {
        name: "John",
        age: 22,
        id: 'id-2'
    },
    {
        name: "Hanna",
        age: 46,
        id: 'id-3'
    }
    
];

ReactDOM.render(
    <UsersList users={users}/>,
    rootElement
);

