document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM")
    var drp = document.querySelector(".cpn")
    var dropdownList = document.querySelector(".dropdown")
    console.log(drp);
    console.log(dropdownList)

    drp.addEventListener("mouseover", function (e) {
        dropdownList.style.opacity = 1;
        dropdownList.style.pointerEvents = "all"
        drp.addEventListener("mouseleave", function (e) {
            dropdownList.style.opacity = 0;
            dropdownList.style.pointerEvents = "none"
        })
    })


    var btn_next = document.querySelector(".banner-next");
    var btn_prev = document.querySelector(".banner-prev");
    var img_chair = document.querySelector(".img-chair");
    var img_orange = document.querySelector(".img-orange");

    btn_next.addEventListener("click", function () {
        img_chair.classList.add("active");
        img_orange.classList.remove("active")

    })
    btn_prev.addEventListener("click",function () {
        img_chair.classList.remove("active");
        img_orange.classList.add("active")
    })

})