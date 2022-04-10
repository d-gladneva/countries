import React from 'react';
import './SecondaryButton.css';
import {BUTTON_KEY} from "../../constants";


const SecondaryButton = () => {

    return <>
        <button key={BUTTON_KEY.ALL_BEACHES} className="secondary_buttonWrapper__btn"><span
            className="secondary_buttonWrapper__span">{BUTTON_KEY.ALL_BEACHES}</span>
        </button>
    </>
};

export default SecondaryButton;