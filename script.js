function calcular(cantidadAlumnos, tipoAlumno){
    let pesos = 200;
    let resultado = 0;
    
    if (tipoAlumno == "estudiante") {
        resultado = (pesos*cantidadAlumnos)*0.20;
    }else if(tipoAlumno == "trainee"){
        resultado = (pesos*cantidadAlumnos)*0.50;
    }else if(tipoAlumno == "junior"){
        resultado = (pesos*cantidadAlumnos)*0.85;
    }
    return resultado;
}

let formulario = document.getElementById("formulario2");
let divResultado = document.getElementById("valorRes");
let cantidad = document.getElementById("valor1");
let estudiantes = document.getElementById("valor2");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    divResultado.textContent = "Total a Pagar: $" + calcular(parseFloat(cantidad.value) , estudiantes.value);

})

formulario.addEventListener("reset", () => {
    divResultado.textContent = "";
})