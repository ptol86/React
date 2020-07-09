import React, { Component } from "react";
import Clock from './Clock'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
        }

    }
    toggle = () => {
        this.setState({
            visible: !this.state.visible
        })
    }
    render() {
        return (
            <>
            <button className="toggle" onClick={this.toggle}>Toggle</button>
            {this.state.visible && <Clock location ={"New York"} offset ={-5}/>}
            {this.state.visible && <Clock location={"Kyiv"} offset={2} />}
            {this.state.visible && <Clock location ={"London"} offset ={0}/>}
            </>
        )
    }
    
}

export default App;