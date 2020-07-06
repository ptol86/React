import React from "react";
import Clock from './Clock'

const App = () => {
    return (
        <>
        <Clock location ={"New York"} offset ={"America/New_York"}/>
        <Clock location ={"Kyiv"} offset ={"Europe/Moscow"}/>
        <Clock location ={"London"} offset ={"Europe/London"}/>
        </>
    )
}

export default App;