let button = document.getElementById("play-button");
function enlarge() {
    button.style.width = button.style.height = '3em';
    button.style.margin = '0em';
}
button.addEventListener("click", enlarge);
