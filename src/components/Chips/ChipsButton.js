import classNames from 'classnames';
import React from 'react';
import './ChipsButton.css';

export const ChipsButton = ({ id, isActive, text, onClick }) => {
    const handleClick = () => {
        onClick(id);
    }

    return (
        <button
            className={classNames("chips_box__filter", {"chips_box__filter-active": id === isActive})}
            onClick={handleClick}
        >
            <span className="chips_box__text">{text}</span>
        </button>
    )
}