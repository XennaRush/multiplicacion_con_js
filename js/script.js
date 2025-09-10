/*const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    const datos = new FormData(formulario);
    const n1 = Number(datos.get("n1"));
    const n2 = Number(datos.get("n2"));
    const m = n1 * n2;
    console.log("Número 1:", n1);
    console.log("Número 2:", n2);
    console.log("La multiplicación es:", m);
});*/

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    const datos = new FormData(formulario);
    console.log(datos.get("n1"))
    console.log(datos.get("n2"))
    const r = datos.get("n1") * datos.get("n2")
    const resultado = document.getElementById("resultado");
    resultado.innerHTML= "Resultado: "+r
});