const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var fixed = document.querySelector("#pics");
var a = document.querySelector("#content-container ");
var h21 = document.querySelector("#h21");
var h22 = document.querySelector("#h22");
var h23 = document.querySelector("#h23");
var img = document.querySelector("#pictext-right");
var load = document.querySelector("#loader");

a.addEventListener("mouseenter", function () {
    fixed.style.display = "block";
});

a.addEventListener("mouseleave", function () {
    fixed.style.display = "none";
});

var con = document.querySelectorAll("#contents");
con.forEach(function (e) {
    e.addEventListener("mouseenter", function () { 
        var img = e.getAttribute("data-image");
        fixed.style.backgroundImage = `url(${img})`;
    })
});


h21.addEventListener("click", function () { 
    h21.style.color = "white";
    h21.style.borderColor = "orangered";
    h22.style.color = "#efeae39e";
    h22.style.borderColor = "#efeae39e";
    h23.style.color = "#efeae39e";
    h23.style.borderColor = "#efeae39e";
    img.style.backgroundImage = "url(/Images/7.webp)"
})

h22.addEventListener("click", function () { 
    h21.style.color = "#efeae39e";
    h21.style.borderColor = "#efeae39e";
    h22.style.color = "white";
    h22.style.borderColor = "orangered";
    h23.style.color = "#efeae39e";
    h23.style.borderColor = "#efeae39e";
    img.style.backgroundImage = "url(/Images/8.webp)"
})

h23.addEventListener("click", function () { 
    h21.style.color = "#efeae39e";
    h21.style.borderColor = "#efeae39e";
    h22.style.color = "#efeae39e";
    h22.style.borderColor = "#efeae39e";
    h23.style.color = "white";
    h23.style.borderColor = "orangered";
    img.style.backgroundImage = "url(/Images/9.webp)"
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
});

setTimeout(function () {
    load.style.top = "-100%"
},3000)