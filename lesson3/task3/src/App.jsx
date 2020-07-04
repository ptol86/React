import React from "react";
import Comment from './Comment'

const userInfo = {
    name: "Tom",
    avatarUrl: "https://avatars1.githubusercontent.com/u/30047064?v=4",
}


const App = () => {
    return (
        <Comment 
            author={userInfo}
            text="Good job!"
            date={new Date("2019-01-01")}
        /> 
    )
}

export default App;