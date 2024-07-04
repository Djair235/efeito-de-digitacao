const body = document.body;
const button = document.getElementById("button");
const p = document.getElementById("p1");

button.addEventListener("click", () => {
    body.classList.toggle("bodyCorTrocada");
    p.classList.toggle("pCorTrocada")
    button.classList.toggle("buttonCorTrocada");
}); 