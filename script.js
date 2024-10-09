$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop()>50) {
            $('.header').addClass('sticky');
        } else {
            $('.header').removeClass('sticky');
        }
    });
});
// ===============================
function toggleNav() {
    var extraNavbar = document.querySelector('.extra-navbar');
    if (extraNavbar.style.display === "none" || extraNavbar.style.display === "") {
        extraNavbar.style.display = "block";
    } else {
        extraNavbar.style.display = "none";
    }
}