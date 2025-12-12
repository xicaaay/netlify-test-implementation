document.addEventListener("DOMContentLoaded",() => {
    console.log("DOM cargado");
})


setTimeout(() => {
    document.body.innerHTML += "<h3>NUEVO TEXTO CARGADO</h3>";
    console.log("setTimeout ejecutado");
}, 5000);



console.log(document.body.innerHTML);
