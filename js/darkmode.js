let header = document.querySelector("header");
let main = document.querySelector("main");
let footer = document.querySelector("footer");
let toggle = document.getElementById("dark-mode");

toggle.addEventListener("click", function(ev){
    header.classList.toggle("dark-mode");
    main.classList.toggle("dark-mode");
    footer.classList.toggle("dark-mode");
});