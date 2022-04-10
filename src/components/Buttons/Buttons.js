import React from 'react';
import './Buttons.css';
import PrimaryButton from "./PrimaryButton/PrimaryButton";
import SecondaryButton from "./SecondaryButton/SecondaryButton";


const Buttons = () => {

    // const [state, setState] = useState([
    //     {id: 10, status: true,  name: 'На карте'},
    //     {id: 11, status: false, name: 'Все пляжи страны'},
    // ]);
    //
    // const chooseButton = (id) => {
    //     const newArr = state.map((item) =>
    //         item.id === id ? {...item, status: true} : {...item, status: false}
    //     );
    //     setState(newArr);
    // };

    return <div className="buttonWrapper">
        {/*<div className="buttonWrapper_btn1">*/}
        {/*    {state.map((item) => (*/}
        {/*        <PrimaryButton className={item.status ? "buttonWrapper_btn buttonWrapper_button__active" : "buttonWrapper_btn"}*/}
        {/*                onClick={() => chooseButton(item.id)}><span className="buttonWrapper_span">{item.name}</span></PrimaryButton>*/}
        {/*    ))}*/}

        <PrimaryButton />
        <SecondaryButton/>
        {/*</div>*/}
    </div>
};

export default Buttons;