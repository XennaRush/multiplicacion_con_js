const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    const datos = new FormData(formulario);
    const n1 = Number(datos.get("n1"));
    const n2 = Number(datos.get("n2"));
    const m = n1 * n2;
    console.log("Número 1:", n1);
    console.log("Número 2:", n2);
    console.log("La multiplicación es:", m);
});
