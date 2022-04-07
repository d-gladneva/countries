import React from 'react';
import './App.css';
import 'swiper/swiper-bundle.css';
import SimpleSwiper from "./components/Swiper/Swiper";
import {BrowserRouter} from "react-router-dom";


const App = () => {

    return (
        <BrowserRouter>
            <SimpleSwiper/>
        </BrowserRouter>
    );
};

export default App;
