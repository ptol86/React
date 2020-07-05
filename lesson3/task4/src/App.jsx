import React from "react";
import Greeting from './Greeting'

const user = {
    firstName: "John",
    lastName: "Doe",
    birthDate: new Date('2001-01-01T11:11:11.819Z'),
}

const App = () => {
    return (
        <Greeting firstName="John" lastName="Doe" birthDate={new Date('2001-01-01T11:11:11.819Z')}/>
    )
}

export default App;