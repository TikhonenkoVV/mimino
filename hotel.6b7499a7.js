$(document).ready((function(){$("#phone-input").inputmask("+38 (999) 999-99-99")})),$(document).ready((function(){$("#client-phone").inputmask("+38 (999) 999-99-99")})),$((function(){$("#datepicker").datepicker({dateFormat:"dd/mm/yy",monthNames:["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"],dayNamesMin:["пн","вт","ср","чт","пт","сб","нд"]})})),$((function(){$("#datepicker2").datepicker({dateFormat:"dd/mm/yy",monthNames:["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"],dayNamesMin:["пн","вт","ср","чт","пт","сб","нд"]})})),$((function(){$("#datepicker3").datepicker({dateFormat:"dd/mm/yy",monthNames:["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"],dayNamesMin:["пн","вт","ср","чт","пт","сб","нд"]})})),$((function(){$("#datepicker").datepicker()})),$((function(){$("#datepicker2").datepicker()})),$((function(){$("#datepicker3").datepicker()})),$(".custom-select").each((function(){var t=$(this).attr("class"),e=($(this).attr("id"),$(this).attr("name"),'<div class="'+t+'">');e+='<span class="custom-select__trigger">'+$(this).attr("placeholder")+"</span>",e+='<div class="custom-select__options">',$(this).find("option").each((function(){e+='<span class="custom-select__option"data-value="'+$(this).attr("value")+'">'+$(this).html()+"</span>"})),e+="</div></div>",$(this).wrap('<div class="custom-select-wrapper"></div>'),$(this).hide(),$(this).after(e)})),$(".custom-select__option:first-of-type").hover((function(){$(this).parents(".custom-select__options").addClass("option-hover")}),(function(){$(this).parents(".custom-select__options").removeClass("option-hover")})),$(".custom-select__trigger").on("click",(function(){$("html").one("click",(function(){$(".custom-select").removeClass("opened")})),$(this).parents(".custom-select").toggleClass("opened"),event.stopPropagation()})),$(".custom-select__option").on("click",(function(){$(this).parents(".custom-select-wrapper").find("select").val($(this).data("value")),$(this).parents(".custom-select__options").find(".custom-select__option").removeClass("selection"),$(this).addClass("selection"),$(this).parents(".custom-select").removeClass("opened"),$(this).parents(".custom-select").find(".custom-select__trigger").text($(this).text())})),(()=>{const t={openModalBtn:document.querySelector("[data-modal-room-open]"),closeModalBtn:document.querySelector("[data-modal-room-close]"),modal:document.querySelector("[data-modal-room]")};function e(){t.modal.classList.toggle("is-hidden"),document.body.classList.toggle("modal-open")}t.openModalBtn.addEventListener("click",e),t.closeModalBtn.addEventListener("click",e)})(),(()=>{const t={openModalBtn:document.querySelector("[data-modal-table-open]"),closeModalBtn:document.querySelector("[data-modal-table-close]"),modal:document.querySelector("[data-modal-table]")};function e(){t.modal.classList.toggle("is-hidden"),document.body.classList.toggle("modal-open")}t.openModalBtn.addEventListener("click",e),t.closeModalBtn.addEventListener("click",e)})(),(()=>{const t={openModalBtn:document.querySelector("[data-modal-price-open]"),closeModalBtn:document.querySelector("[data-modal-price-close]"),modal:document.querySelector("[data-modal-price]")};function e(){t.modal.classList.toggle("is-hidden"),document.body.classList.toggle("modal-open")}t.openModalBtn.addEventListener("click",e),t.closeModalBtn.addEventListener("click",e)})();
//# sourceMappingURL=hotel.6b7499a7.js.map
