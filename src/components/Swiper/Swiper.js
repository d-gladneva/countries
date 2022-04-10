import React from 'react';
import {Swiper} from 'swiper/react/swiper';
import {SwiperSlide} from 'swiper/react/swiper-slide';
import {Navigation} from 'swiper';
import {useSwiper} from 'swiper/react/swiper-react';
import './Swiper.css';
import Chips from "../Chips/Chips";
import Buttons from "../Buttons/Buttons";

const SimpleSwiper = () => {
    const SwiperButtonNext = () => {
        const swiper = useSwiper();
        return <div className="swiper_button__next" onClick={() => swiper.slideNext()}/>;
    };
    const SwiperButtonPrev = () => {
        const swiper = useSwiper();
        return <div className="swiper_button__prev swiper-button-prev" onClick={() => swiper.slidePrev()}/>;
    };
    return (
        <div className="SwiperWrapper">
            <div className="SwiperWrapper_bg"/>
            <div className="SwiperWrapper_info">
                <h1 className="SwiperWrapper_caption">Сент_Винсент и Гренадины</h1>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={28}
                    slidesPerView={5}
                    navigation
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperButtonNext/>
                    <SwiperButtonPrev/>
                    <SwiperSlide className="SwiperWrapper_slide">Испания</SwiperSlide>
                    <SwiperSlide>Франция</SwiperSlide>
                    <SwiperSlide>Сент Винсент и Гренадины</SwiperSlide>
                    <SwiperSlide>Португалия</SwiperSlide>
                    <SwiperSlide>Саудовская Аравия</SwiperSlide>
                    <SwiperSlide>Франция</SwiperSlide>
                    <SwiperSlide>Сент Винсент и Гренадины</SwiperSlide>
                    <SwiperSlide>Португалия</SwiperSlide>
                    <SwiperSlide>Саудовская Аравия</SwiperSlide>
                </Swiper>
                <div className="SwiperWrapper_line"/>
                <p className="SwiperWrapper_p">Мир Breezzor огромный, исследуй его!</p>
                <Chips/>
                <Buttons/>
            </div>
        </div>
    );
};

export default SimpleSwiper;