import React from 'react';
import './TextInput.css';

const TextInput = () => {



    return (
        <div className="textInput_wrap">
            <input className="textInput_input" type="search"
                   placeholder='Поиск по стране, региону, городу, название пляжа'/>
        </div>
    )
};

export default TextInput;