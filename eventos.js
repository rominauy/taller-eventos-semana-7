const btn = document.getElementById("myDiv");

btn.style.backgroundColor = "green";
btn.style.padding = "5px";

btn.querySelector("button").addEventListener("click", function (event) {
    event.stopPropagation();    
})

btn.addEventListener("click", function (event) {
    alert("Hola, soy el div!");
});
