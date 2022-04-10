import React, {useState} from 'react';
import './Chips.css';
import TextInput from "../TextInput/TextInput";
import classNames from "classnames";
import {CHIPS_KEY, chips, PLACEHOLDER} from "../constants";

const Chips = () => {

    const [isActiveBtn, setIsActiveBtn] = useState(CHIPS_KEY.BEACHES);

    const handleChangeFilter = (id) => () => {
        setIsActiveBtn(id);
    };

    return (
        <div className="chips_wrap">
            <div className="chips_box">
                {chips.map((chip) => (
                    <button key={chip.id} className={classNames("chips_box__filter",{"chips_box__filter-active": chip.id === isActiveBtn})}
                            onClick={handleChangeFilter(chip.id)}><span className="chips_box__text">{chip.text}</span>
                    </button>
                ))}
            </div>
            <TextInput placeholder={PLACEHOLDER[isActiveBtn]}/>
        </div>
    )
};

export default Chips;