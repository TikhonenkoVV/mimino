var width,images=document.querySelectorAll(".slider__luxe .slider__line img"),sliderLine=document.querySelector(".slider__luxe .slider__line"),count=0;function init(){console.log("resize"),width=document.querySelector(".slider__luxe").offsetWidth,images.forEach((function(e){(width=document.querySelector(".slider__luxe").offsetWidth)<547&&width>427?(e.style.marginRight="40px",e.style.width="194px",e.style.boxShadow="2px 2px 60px rgba(0, 0, 0, 0.25)"):width<427?(e.style.marginRight="25px",e.style.width="245px",e.style.height="auto",e.style.boxShadow="2px 2px 60px rgba(0, 0, 0, 0.25)"):width>547&&(e.style.width="254px",e.style.marginRight="40px",e.style.boxShadow="2px 2px 60px rgba(0, 0, 0, 0.25)")})),rollSlider(),rollSliderT(),rollSliderM()}function rollSlider(){width>548&&(sliderLine.style.transform="translate(-"+count*width/1.45+"px)")}function rollSliderM(){width<427&&(sliderLine.style.transform="translate(-"+count*width/1.42+"px)")}function rollSliderT(){width>427&&(sliderLine.style.transform="translate(-"+count*width/1.82+"px)")}init(),window.addEventListener("resize",init),document.querySelector(".slider-next").addEventListener("click",(function(e){e.preventDefault(),count++,console.log(images.length),count>=images.length-1&&(count=0),rollSlider(),rollSliderT(),rollSliderM()})),document.querySelector(".slider-prev").addEventListener("click",(function(e){e.preventDefault(),--count<0&&(count=images.length-1),rollSlider(),rollSliderT(),rollSliderM()}));
//# sourceMappingURL=hotel.697e5a8f.js.map