import React from 'react';
import './TextInput.css';

const TextInput = () => {

    return (
        <div className="text_input__wrap">
            <input className="subnav_input" type="search" placeholder='Поиск по стране, региону, городу, название пляжа'/>
        </div>
    )
};

export default TextInput;