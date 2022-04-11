import React from 'react';
import {Swiper as LibSwiper} from 'swiper/react/swiper';
import {SwiperSlide} from 'swiper/react/swiper-slide';
import {Navigation} from 'swiper';
import {useSwiper} from 'swiper/react/swiper-react';
import './Swiper.css';

const Swiper = () => {

    const SwiperButtonNext = () => {
        const swiper = useSwiper();
        return <div className="swiper_button__next" onClick={() => swiper.slideNext()}/>;
    };
    const SwiperButtonPrev = () => {
        const swiper = useSwiper();
        return <div className="swiper_button__prev" onClick={() => swiper.slidePrev()}/>;
    };
    return (
        <LibSwiper
            modules={[Navigation]}
            spaceBetween={28}
            slidesPerView={5}
            navigation
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperButtonNext/>
            <SwiperButtonPrev/>
            <SwiperSlide>
                {({isPrev}) => (
                    <div className={isPrev ? "swiper__slide-prev" : "swiper__slide"}>Испания</div>
                )}
            </SwiperSlide>
            <SwiperSlide>
                {({isPrev}) => (
                    <div className={isPrev ? "swiper__slide-prev" : "swiper__slide"}>Франция</div>
                )}
            </SwiperSlide>
            <SwiperSlide>
                {({isActive}) => (
                    <div className={isActive ? "swiper__slide-active" : "swiper__slide"}>Сент Винсент и
                        Гренадины</div>
                )}
            </SwiperSlide>
            <SwiperSlide>
                {({isActive, isPrev, isNext }) => (
                    <div className={isActive ? "swiper__slide-active" : isPrev ? "SwiperWrapper_prev" : isNext ? "swiper__slide-next" : "swiper__slide"}>Португалия</div>
                )}
            </SwiperSlide>
            <SwiperSlide>
                {({isActive, isPrev, isNext }) => (
                    <div className={isActive ? "swiper__slide-active" : isPrev ? "SwiperWrapper_prev" : isNext ? "swiper__slide-next" : "swiper__slide"}>Саудовская Аравия</div>
                )}
            </SwiperSlide>
            <SwiperSlide>
                {({isActive, isPrev, isNext }) => (
                    <div className={isActive ? "swiper__slide-active" : isPrev ? "SwiperWrapper_prev" : isNext ? "swiper__slide-next" : "swiper__slide"}>Сент Винсент и
                        Гренадины</div>
                )}
            </SwiperSlide>
            <SwiperSlide>
                {({isActive, isPrev, isNext }) => (
                    <div className={isActive ? "swiper__slide-active" : isPrev ? "SwiperWrapper_prev" : isNext ? "swiper__slide-next" : "swiper__slide"}>Испания</div>
                )}
            </SwiperSlide>
            <SwiperSlide>
                {({isActive, isPrev, isNext }) => (
                    <div className={isActive ? "swiper__slide-active" : isPrev ? "SwiperWrapper_prev" : isNext ? "swiper__slide-next" : "swiper__slide"}>Франция</div>
                )}
            </SwiperSlide>
            <SwiperSlide>
                {({isActive, isPrev, isNext }) => (
                    <div className={isActive ? "swiper__slide-active" : isPrev ? "SwiperWrapper_prev" : isNext ? "swiper__slide-next" : "swiper__slide"}>Сент Винсент и
                        Гренадины</div>
                )}
            </SwiperSlide>
        </LibSwiper>
    );
};

export default Swiper;