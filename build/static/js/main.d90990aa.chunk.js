(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a(31)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n,i=a(0),r=a.n(i),l=a(16),c=a.n(l),s=(a(22),a(6)),u=a(11),p=a(4),o=a(5),v=a(14),_=(a(23),function(){var e=function(){var e=Object(v.a)();return r.a.createElement("div",{className:"swiper_button__next",onClick:function(){return e.slideNext()}})},t=function(){var e=Object(v.a)();return r.a.createElement("div",{className:"swiper_button__prev",onClick:function(){return e.slidePrev()}})};return r.a.createElement(u.a,{modules:[o.a],spaceBetween:28,slidesPerView:5,navigation:!0,onSlideChange:function(){return console.log("slide change")},onSwiper:function(e){return console.log(e)}},r.a.createElement(e,null),r.a.createElement(t,null),r.a.createElement(p.a,null,(function(e){var t=e.isPrev;return r.a.createElement("div",{className:t?"swiper__slide-prev":"swiper__slide"},"\u0418\u0441\u043f\u0430\u043d\u0438\u044f")})),r.a.createElement(p.a,null,(function(e){var t=e.isPrev;return r.a.createElement("div",{className:t?"swiper__slide-prev":"swiper__slide"},"\u0424\u0440\u0430\u043d\u0446\u0438\u044f")})),r.a.createElement(p.a,null,(function(e){var t=e.isActive;return r.a.createElement("div",{className:t?"swiper__slide-active":"swiper__slide"},"\u0421\u0435\u043d\u0442 \u0412\u0438\u043d\u0441\u0435\u043d\u0442 \u0438 \u0413\u0440\u0435\u043d\u0430\u0434\u0438\u043d\u044b")})),r.a.createElement(p.a,null,(function(e){var t=e.isActive,a=e.isPrev,n=e.isNext;return r.a.createElement("div",{className:t?"swiper__slide-active":a?"SwiperWrapper_prev":n?"swiper__slide-next":"swiper__slide"},"\u041f\u043e\u0440\u0442\u0443\u0433\u0430\u043b\u0438\u044f")})),r.a.createElement(p.a,null,(function(e){var t=e.isActive,a=e.isPrev,n=e.isNext;return r.a.createElement("div",{className:t?"swiper__slide-active":a?"SwiperWrapper_prev":n?"swiper__slide-next":"swiper__slide"},"\u0421\u0430\u0443\u0434\u043e\u0432\u0441\u043a\u0430\u044f \u0410\u0440\u0430\u0432\u0438\u044f")})),r.a.createElement(p.a,null,(function(e){var t=e.isActive,a=e.isPrev,n=e.isNext;return r.a.createElement("div",{className:t?"swiper__slide-active":a?"SwiperWrapper_prev":n?"swiper__slide-next":"swiper__slide"},"\u0421\u0435\u043d\u0442 \u0412\u0438\u043d\u0441\u0435\u043d\u0442 \u0438 \u0413\u0440\u0435\u043d\u0430\u0434\u0438\u043d\u044b")})),r.a.createElement(p.a,null,(function(e){var t=e.isActive,a=e.isPrev,n=e.isNext;return r.a.createElement("div",{className:t?"swiper__slide-active":a?"SwiperWrapper_prev":n?"swiper__slide-next":"swiper__slide"},"\u0418\u0441\u043f\u0430\u043d\u0438\u044f")})),r.a.createElement(p.a,null,(function(e){var t=e.isActive,a=e.isPrev,n=e.isNext;return r.a.createElement("div",{className:t?"swiper__slide-active":a?"SwiperWrapper_prev":n?"swiper__slide-next":"swiper__slide"},"\u0424\u0440\u0430\u043d\u0446\u0438\u044f")})),r.a.createElement(p.a,null,(function(e){var t=e.isActive,a=e.isPrev,n=e.isNext;return r.a.createElement("div",{className:t?"swiper__slide-active":a?"SwiperWrapper_prev":n?"swiper__slide-next":"swiper__slide"},"\u0421\u0435\u043d\u0442 \u0412\u0438\u043d\u0441\u0435\u043d\u0442 \u0438 \u0413\u0440\u0435\u043d\u0430\u0434\u0438\u043d\u044b")})))}),m=a(9),d=a.n(m),E=(a(24),function(e){var t=e.id,a=e.isActive,n=e.text,i=e.onClick;return r.a.createElement("button",{className:d()("chips_box__filter",{"chips_box__filter-active":t===a}),onClick:function(){i(t)}},r.a.createElement("span",{className:"chips_box__text"},n))}),f=(a(25),function(e){var t=e.chips,a=e.active,n=e.onChange;return r.a.createElement("div",{className:"chips"},t.map((function(e){return r.a.createElement(E,{key:e.id,id:e.id,text:e.title,isActive:a,onClick:n})})))}),w=(a(26),function(e){var t=e.level,a=void 0===t?"h1":t,n=e.children;return r.a.createElement("h1",{className:d()("title",{title_h1:"h1"===a,title_h2:"h2"===a})},n)}),N=(a(27),function(e){var t=e.text,a=e.design,n=void 0===a?"primary":a,i=e.as,l=e.href,c=e.onClick,s="link"===i,u=s?"a":"button";return r.a.createElement(u,{className:d()("button",{button__primary:"primary"===n,button__secondary:"secondary"===n}),href:s?l:void 0,onClick:c},t)}),h=(a(28),a(29),a(2)),b="BEACHES",x="BREEZZOR_PASS",S="IMPRESSION",C="ROUTES",g=[{id:b,title:"\u041f\u043b\u044f\u0436\u0438"},{id:x,title:"Breezzor Pass"},{id:S,title:"\u0412\u043f\u0435\u0447\u0430\u0442\u043b\u0435\u043d\u0438\u044f"},{id:C,title:"\u041c\u0430\u0440\u0448\u0440\u0443\u0442\u044b"}],O=(n={},Object(h.a)(n,b,"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0441\u0442\u0440\u0430\u043d\u0435, \u0440\u0435\u0433\u0438\u043e\u043d\u0443, \u0433\u043e\u0440\u043e\u0434\u0443, \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u043b\u044f\u0436\u0430"),Object(h.a)(n,x,"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0441\u0442\u0440\u0430\u043d\u0435, \u0440\u0435\u0433\u0438\u043e\u043d\u0443, \u0433\u043e\u0440\u043e\u0434\u0443, \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044e \u043e\u0442\u0435\u043b\u044f"),Object(h.a)(n,S,"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0441\u0442\u0440\u0430\u043d\u0435, \u0440\u0435\u0433\u0438\u043e\u043d\u0443, \u0433\u043e\u0440\u043e\u0434\u0443, \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044e \u0432\u043f\u0435\u0447\u0430\u0442\u043b\u0435\u043d\u0438\u044f"),Object(h.a)(n,C,"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0441\u0442\u0440\u0430\u043d\u0435, \u0440\u0435\u0433\u0438\u043e\u043d\u0443, \u0433\u043e\u0440\u043e\u0434\u0443, \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044e \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0430"),n),k=(a(30),function(e){var t=e.placeholder,a=e.onChange,n=e.value;return r.a.createElement("div",{className:"input__wrap"},r.a.createElement("input",{className:"input__text",type:"search",placeholder:t,onChange:function(e){a(e.target.value)},value:n}))}),P=function(){var e=Object(i.useState)(b),t=Object(s.a)(e,2),a=t[0],n=t[1],l=Object(i.useCallback)((function(e){n(e)})),c=Object(i.useState)(""),u=Object(s.a)(c,2),p=u[0],o=u[1],v=Object(i.useCallback)((function(e){o(e)}));return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"app_bg"}),r.a.createElement("div",{className:"app_inner"},r.a.createElement(w,null,"\u0421\u0435\u043d\u0442_\u0412\u0438\u043d\u0441\u0435\u043d\u0442 \u0438 \u0413\u0440\u0435\u043d\u0430\u0434\u0438\u043d\u044b"),r.a.createElement(_,null),r.a.createElement("div",{className:"app_divider"}),r.a.createElement(w,{level:"h2"},"\u041c\u0438\u0440 Breezzor \u043e\u0433\u0440\u043e\u043c\u043d\u044b\u0439, \u0438\u0441\u0441\u043b\u0435\u0434\u0443\u0439 \u0435\u0433\u043e!"),r.a.createElement(f,{chips:g,active:a,onChange:l}),r.a.createElement(k,{placeholder:O[a],value:p,onChange:v}),r.a.createElement("div",{className:"app_buttons"},r.a.createElement(N,{design:"secondary",text:"\u041d\u0430 \u043a\u0430\u0440\u0442\u0435",as:"link"}),r.a.createElement(N,{text:"\u0412\u0441\u0435 \u043f\u043b\u044f\u0436\u0438 \u0441\u0442\u0440\u0430\u043d\u044b"}))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.d90990aa.chunk.js.map