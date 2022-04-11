import React from 'react';
import {Swiper as LibSwiper} from 'swiper/react/swiper';
import {SwiperSlide} from 'swiper/react/swiper-slide';
import {Navigation} from 'swiper';
import {useSwiper} from 'swiper/react/swiper-react';
import './Swiper.css';

const SwiperButtonNext = () => {
    const swiper = useSwiper();
    return <div className="swiper_button__next swiper-button-next" onClick={() => swiper.slideNext()}><svg width="24" height="16" viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.2868 6.67769H1.33333C0.596952 6.67769 0 7.26971 0 8C0 8.73029 0.596952 9.32231 1.33333 9.32231H19.2868L14.9434 13.6298C14.3966 14.172 14.3966 15.0511 14.9434 15.5933C15.4901 16.1356 16.3765 16.1356 16.9233 15.5933L23.5899 8.98177C24.1367 8.43955 24.1367 7.56045 23.5899 7.01823L16.9233 0.406662C16.3765 -0.135554 15.4901 -0.135554 14.9434 0.406662C14.3966 0.948877 14.3966 1.82798 14.9434 2.3702L19.2868 6.67769Z" fill="#FCFCFC"/>
    </svg>
    </div>;
};
const SwiperButtonPrev = () => {
    const swiper = useSwiper();
    return <div className="swiper_button__prev swiper-button-prev" onClick={() => swiper.slidePrev()}><svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.71323 6.67769H22.6667C23.403 6.67769 24 7.26971 24 8C24 8.73029 23.403 9.32231 22.6667 9.32231H4.71323L9.05662 13.6298C9.60335 14.172 9.60335 15.0511 9.05662 15.5933C8.50988 16.1356 7.62345 16.1356 7.07672 15.5933L0.410051 8.98177C-0.136684 8.43955 -0.136684 7.56045 0.410051 7.01823L7.07672 0.406662C7.62345 -0.135554 8.50988 -0.135554 9.05662 0.406662C9.60335 0.948877 9.60335 1.82798 9.05662 2.3702L4.71323 6.67769Z" fill="#FCFCFC"/>

    </svg>
    </div>;
};

const Swiper = () => {

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