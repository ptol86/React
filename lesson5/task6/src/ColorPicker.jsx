import React from 'react';

// const CORAL = "coral";
// const AQUA = "aqua";
// const BISQUE = "bisque";

class ColorPicker extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            color: '',
        }
    }
    setPickerTitleColor = (text) => {
        this.setState({
            color: text,
        });
    }

    render() {
        return (
            <div>
                <div className="picker__title">
                    {this.state.color}
                </div>
                <div>
                    <button 
                    className="picker__button picker__button_coral"
                    onMouseEnter={() => this.setPickerTitleColor("Coral")}
                    onMouseLeave={() => this.setPickerTitleColor("")}
                    ></button>
                    <button 
                    className="picker__button picker__button_aqua"
                    onMouseEnter={() => this.setPickerTitleColor("Aqua")}
                    onMouseLeave={() => this.setPickerTitleColor("")}
                    ></button>
                    <button 
                    className="picker__button picker__button_bisque"
                    onMouseEnter={() => this.setPickerTitleColor("Bisque")}
                    onMouseLeave={() => this.setPickerTitleColor("")}
                    ></button>
                </div>
            </div>
        )
    }
}

export default ColorPicker;