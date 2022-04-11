import React, {useCallback, useState} from 'react';
import Swiper from './components/Swiper/Swiper';
import Chips from './components/Chips/Chips';
import { Title } from './components/Title/Title';
import { Button } from './components/Button/Button';
import 'swiper/swiper-bundle.css';
import './App.css';
import {chips, CHIPS_KEY, PLACEHOLDER} from './components/constants';
import TextInput from './components/TextInput/TextInput';

const App = () => {
    const [chipsIsActiveButton, setChipsIsActiveButton] = useState(CHIPS_KEY.BEACHES);
    const handleChangeChips = useCallback((id) => {
        setChipsIsActiveButton(id);
    })

    const [inputValue, setInputValue] = useState('');
    const handleChangeInput = useCallback((value) => {
        setInputValue(value);
    })

    return (
        <div className="app">
            <div className="app_bg"/>
            <div className="app_inner">
                <Title>Сент_Винсент и Гренадины</Title>
                <Swiper/>
                <div className="app_divider"/>
                <Title level='h2'>Мир Breezzor огромный, исследуй его!</Title>
                <Chips chips={chips} active={chipsIsActiveButton} onChange={handleChangeChips} />
                <TextInput placeholder={PLACEHOLDER[chipsIsActiveButton]} value={inputValue} onChange={handleChangeInput} />
                <div className="app_buttons">
                    <Button design='secondary' text='На карте' as='link' />
                    <Button text='Все пляжи страны' />
                </div>
            </div>
        </div>
    );
};

export default App;
