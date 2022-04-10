import React, {useState} from 'react';
import './Chips.css';
import classNames from "classnames";
import {CHIPS_KEY, chips} from "../../constants";

const Chip = () => {

    const [isActiveBtn, setIsActiveBtn] = useState(CHIPS_KEY.BEACHES);

    const handleChangeFilter = (id) => () => {
        setIsActiveBtn(id);
    };

    return (<>
            {chips.map((button) => (
                <button key={button.id}
                        className={classNames("chips_box__filter", {"chips_box__filter-active": button.id === isActiveBtn})}
                        onClick={handleChangeFilter(button.id)}><span className="chips_box__text">{button.text}</span>
                </button>
            ))}
        </>
    )
};

export default Chip;