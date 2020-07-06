import React from "react";
import Clock from './Clock'

const App = () => {
    return (
        <>
        <Clock city={"New York"} timezone={"America/New_York"}/>
        <Clock city={"Kyiv"} timezone={"Europe/Moscow"}/>
        <Clock city={"London"} timezone={"Europe/London"}/>
        </>
    )
}

export default App;