import React from 'react';
import './ChangeFont.css';

const ChangeFont = (props) => {
    const handleChange = (e) => {
        props.onChangeFontSize(e.target.value);
    }
    return (
        <div className="change-font-wrapper">
            <label>Change Tab Font Size</label>
            <input id="slider" type ="range" min ="0.1" max="3.0" step ="0.1" defaultValue="1.5" onChange={handleChange}/>
        </div>
    );
}

export default ChangeFont;