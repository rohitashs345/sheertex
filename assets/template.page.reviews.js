!function(e){var t={};function i(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=10)}({10:function(e,t,i){"use strict";i.r(t);i(11);var n=!1;function o(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=$("video[id*='video']").length;isNaN(e)&&(e=i),1==t&&(n=!n),console.log("id = "+e),console.log("isPlaying = "+n);var o=e+1,r=e-1;o>i&&(o=1),r<=0&&(r=i),$("#video-"+o)[0].pause(),$("#video-"+r)[0].pause(),1==n?($("#video-"+e)[0].play(),$(".my-container .slick-current .playpause").hide()):$(".my-container .slick-current .playpause").show()}$(document).ready((function(){$(".one-time").slick({dots:!1,infinite:!0,speed:300,autoplay:!1,slidesToShow:3,centerPadding:"0px",arrows:!1,centerMode:!0,responsive:[{breakpoint:768,settings:{arrows:!1,centerMode:!0,centerPadding:"60px",slidesToShow:1}}]}),$("#prev").click((function(){$(".one-time").slick("slickPrev"),o(parseInt($(".slick-center").find("video").attr("id").replace("video-","")))})),$("#next").click((function(){$(".one-time").slick("slickNext"),o(parseInt($(".slick-center").find("video").attr("id").replace("video-","")))})),$(".slick-current").click((function(){o(parseInt($(".slick-center").find("video").attr("id").replace("video-","")),!0)})),$("#socialSlide").slick({infinite:!0,speed:500,fade:!0,cssEase:"linear",prevArrow:$("#socialprev"),nextArrow:$("#socialnext")}),$(".one-time-quote").slick({dots:!1,infinite:!0,speed:300,arrows:!1,autoplay:!1,slidesToShow:3,responsive:[{breakpoint:768,settings:{slidesToShow:1}}]})})),$("#next-quote").click((function(){$(".one-time-quote").slick("slickNext")})),$("#prev-quote").click((function(){$(".one-time-quote").slick("slickPrev")})),$(document).on("scroll",(function(){$(".my-container .slick-current video").each((function(){var e,t;e=$(this)[0],((t=e.getBoundingClientRect()).top>$(window).height()||t.bottom<0)&&(id=$(".my-container .slick-current video").attr("data-id"),$("#video-"+id)[0].pause())}))}))},11:function(e,t,i){}});