import React, {useState} from 'react';
import './Button.css';


const Button = () => {

    const [state, setState] = useState([
        {id: 10, status: true,  name: 'На карте'},
        {id: 11, status: false, name: 'Все пляжи страны'},
    ]);

    const chooseButton = (id) => {
        const newArr = state.map((item) =>
            item.id === id ? {...item, status: true} : {...item, status: false}
        );
        setState(newArr);
    };

    return <div className="buttonWrapper">
        {/*<div className="buttonWrapper_btn1">*/}
            {state.map((item) => (
                <button className={item.status ? "buttonWrapper_btn1 buttonWrapper_button__active" : "buttonWrapper_btn1"}
                        onClick={() => chooseButton(item.id)}><span className="buttonWrapper_span">{item.name}</span></button>
            ))}

        {/*</div>*/}
    </div>
};

export default Button;