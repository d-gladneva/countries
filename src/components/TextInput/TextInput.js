import React from 'react';
import './TextInput.css';

const TextInput = ({ placeholder, onChange, value }) => {
    const handleChange = (e) => {
        onChange(e.target.value);
    }

    return (
        <div className="input__wrap">
            <input
                className="input__text"
                type="search"
                placeholder={placeholder}
                onChange={handleChange}
                value={value}
            />
        </div>
    )
};

export default TextInput;