import React from 'react';
import './TextInput.css';

const TextInput = ({placeholder}) => {

    return (
        <div className="textInput_wrap">
            <input className="textInput_input" type="search"
                   placeholder={placeholder}/>
        </div>
    )
};

export default TextInput;