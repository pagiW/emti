const userButton = document.getElementById("user");
const list = document.getElementById("list");
const responsive = window.matchMedia('screen and (max-width: 570px)');

responsive.addEventListener('change', responsiveDesign);

function responsiveDesign(event) {
    if (event.matches) {
        list.style.display = "none";
        list.style.opacity = "0";
        userButton.addEventListener('click', showList);
    }
    else {
        list.style.display = "flex";
        list.style.opacity = "1";
        userButton.removeEventListener('click', showList);
    }
}

responsiveDesign(responsive);

function showList() {
    if (list.style.display === "none") {
        list.style.display = "flex";
        list.style.opacity = "1";
    }
    else {
        list.style.display = "none";
        list.style.opacity = "0";
    }
}