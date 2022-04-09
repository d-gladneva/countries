import React, {useState} from 'react';
import './Chips.css';
import TextInput from "../TextInput/TextInput";

const Chips = () => {

    const [state, setState] = useState([
        {id: 0, status: true, name: 'Пляжи', toplaceholder: 'Поиск по стране, региону, городу, название пляжа'},
        {id: 1, status: false, name: 'Breezzor Pass', toplaceholder: 'Поиск по стране, региону, городу, названию отеля'},
        {id: 3, status: false, name: 'Впечатления', toplaceholder: 'Поиск по стране, региону, городу, названию впечатления'},
        {id: 4, status: false, name: 'Маршруты', toplaceholder: 'Поиск по стране, региону, городу, названию маршрута'}
    ]);


    const buttons = ['Пляжи', 'Breezzor Pass', 'Впечатления', 'Маршруты'];

    const chooseItem = (id) => {
        const newArr = state.map((item) =>
            item.id === id ? {...item, status: true} : {...item, status: false}
        );
        setState(newArr);
    };

    return (
        <div className="chips_wrap">
            <div className="chips_box">
                {state.map((item) => (
                    <button className={item.status ? "chips_box__filter chips_box__filter-active" : "chips_box__filter"}
                            onClick={() => chooseItem(item.id)}><span className="chips_box__text">{item.name}</span>
                    </button>
                ))}
            </div>
            <TextInput />
        </div>
    )
};

export default Chips;