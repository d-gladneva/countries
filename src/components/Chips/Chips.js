import React, {useState} from 'react';
import './Chips.css';
import TextInput from "../TextInput/TextInput";

const Chips = () => {

    const [state, setState] = useState([
        {id: 0, status: true, name: 'Пляжи'},
        {id: 1, status: false, name: 'Breezzor Pass'},
        {id: 3, status: false, name: 'Впечатления'},
        {id: 4, status: false, name: 'Маршруты'}
    ]);

    const chooseItem = (id) => {
        const newArr = state.map((item) =>
            item.id === id ? {...item, status: true} : {...item, status: false}
        );
        setState(newArr);
    };

    return (
        <div className="chipsWrap">
            <div className="chipsBox">
                {state.map((item) => (
                    <button className={item.status ? "chipBox_filter chipBox_filter__active" : "chipBox_filter"}
                            onClick={() => chooseItem(item.id)}><span className="chipsBox_text">{item.name}</span>
                    </button>
                ))}
            </div>
            <TextInput/>
        </div>
    )
};

export default Chips;