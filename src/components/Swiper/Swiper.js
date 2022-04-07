import React from 'react';
import {Swiper} from 'swiper/react/swiper';
import {SwiperSlide} from 'swiper/react/swiper-slide';
import {Navigation} from 'swiper';
import './Swiper.css';
import Chips from "../Chips/Chips";
import Button from "../Button/Button";

const SimpleSwiper = () => {
    return (
        <div className="SwiperWrapper">
            <div className="SwiperWrapper_bg"></div>
            <div className="SwiperWrapperInfo">
                <h1 className="SwiperWrapper_caption">Сент_Винсент и Гренадины</h1>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={10}
                    slidesPerView={5}
                    navigation
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide className="SwiperWrapper_slide">Испания</SwiperSlide>
                    <SwiperSlide>Франция</SwiperSlide>
                    <SwiperSlide>Сент Винсент и Гренадины</SwiperSlide>
                    <SwiperSlide>Португалия</SwiperSlide>
                    <SwiperSlide>Саудовская Аравия</SwiperSlide>
                    <SwiperSlide>Италия</SwiperSlide>
                    <SwiperSlide>Германия</SwiperSlide>
                    <SwiperSlide>Чехия</SwiperSlide>
                    <SwiperSlide>Швейцария</SwiperSlide>
                    <SwiperSlide>Италия</SwiperSlide>
                    <SwiperSlide>Германия</SwiperSlide>
                    ...
                </Swiper>
                <hr className="SwiperWrapper_hr"/>
                <p className="SwiperWrapper_p">Мир Breezzor огромный, исследуй его!</p>
                <Chips/>
                <Button/>
            </div>
        </div>
    );
};

export default SimpleSwiper;