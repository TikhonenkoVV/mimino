var width,images=document.querySelectorAll(".slider .slider__box img"),sliderLine=document.querySelector(".slider .slider__box"),count=0;function init(){console.log("resize"),width=document.querySelector(".slider").offsetWidth,images.forEach((function(e){(width=document.querySelector(".slider").offsetWidth)<547&&width>427?(e.style.marginRight="40px",e.style.width="194px",e.style.boxShadow="2px 2px 60px rgba(0, 0, 0, 0.25)"):width<427?(e.style.marginRight="25px",e.style.width="245px",e.style.boxShadow="2px 2px 60px rgba(0, 0, 0, 0.25)"):width>547&&(e.style.width="254px",e.style.marginRight="40px",e.style.boxShadow="2px 2px 60px rgba(0, 0, 0, 0.25)")})),rollSlider(),rollSliderT(),rollSliderM()}function rollSlider(){width>547&&(sliderLine.style.transform="translate(-"+count*width/1.86+"px)")}function rollSliderM(){width<427&&(sliderLine.style.transform="translate(-"+count*width/1.45+"px)")}function rollSliderT(){width<547&&width>427&&(sliderLine.style.transform="translate(-"+count*width/1.82+"px)")}init(),window.addEventListener("resize",init),document.querySelector(".slider-next").addEventListener("click",(function(e){e.preventDefault(),++count>=images.length-1&&(count=0),rollSlider(),rollSliderT(),rollSliderM()})),document.querySelector(".slider-prev").addEventListener("click",(function(e){e.preventDefault(),--count<0&&(count=images.length-2),rollSlider(),rollSliderT(),rollSliderM()}));
//# sourceMappingURL=index.0bd823c2.js.map
