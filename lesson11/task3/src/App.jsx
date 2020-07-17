import React from "react";
import Expand from "./Expand";


class App extends React.Component {
    state = { 
        isVisible: false, 
    }

    hideContent = () => {
        this.setState({
            isVisible: false,
        })
    }
    showContent = () => {
        this.setState({
            isVisible: true,
        })
    }
    render() {
       
        return (
            <div className="app">
                <Expand
                onOpen={this.showContent}
                onClose={this.hideContent}
                isVisible={this.state.isVisible}
                title={<span className="expand__title">Some title</span>}>
                {<p>Hooks are a new addition in React 16.8. They let you use state and other React features without writing a
                class.
                </p>}
                </Expand>
            </div>
        )
    }
}

export default App;