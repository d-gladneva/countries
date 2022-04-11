import React from 'react';
import { ChipsButton } from './ChipsButton';
import './Chips.css';

/**
 * chips = [
 *  {
 *    id: string;
 *    title: string;
 *  }
 * ]
 * */
const Chips = ({ chips, active, onChange }) => {
    return (
        <div className="chips">
            {chips.map((chipsButton) => (
                <ChipsButton
                    key={chipsButton.id}
                    id={chipsButton.id}
                    text={chipsButton.title}
                    isActive={active}
                    onClick={onChange}
                />
            ))}
        </div>
    )
};

export default Chips;