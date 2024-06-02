revealOnScroll()
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', revealOnScroll);
});

function revealOnScroll() {
    var components = document.querySelectorAll('.cart');
    var components1 = document.querySelectorAll('.cart1');
    components.forEach(function (component) {
        if (isElementInViewport(component)) {
            component.classList.add('animate');
        }
    });
    components1.forEach(function (component) {
        if (isElementInViewport(component)) {
            component.classList.add('animate');
        }
    });
}

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function navButtonHandler() {

    document.getElementById("navicon").style.display = "none";
    document.getElementById('cancleIcon').style.display = "block";

}
function cancleButtonHandler() {
    document.getElementById("navicon").style.display = "block";
    document.getElementById('cancleIcon').style.display = "none";
}
