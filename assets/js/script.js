function pintar(element, color = 'green') {
    element.style.backgroundColor = color;
}
let ele = document.getElementById("ele1");
ele.addEventListener("click", function() {
    pintar(this, 'yellow');
});
