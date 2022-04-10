import React from 'react';
import './PrimaryButton.css';
import {BUTTON_KEY} from "../../constants";


const PrimaryButton = () => {

    return <>
        <button key={BUTTON_KEY.MAP} className="primary_buttonWrapper__btn"><span
            className="primary_buttonWrapper__span">{BUTTON_KEY.MAP}</span>
        </button>
    </>
};

export default PrimaryButton;