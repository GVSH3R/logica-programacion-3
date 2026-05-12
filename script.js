function calcularFactorial() {
    const inputElement = document.getElementById("numero-input");
    const display = document.getElementById("resultado-display");
    const valor = inputElement.value;

    if (valor === "" || valor < 0) {
        alert("Error: Por favor, ingresa un número entero positivo.");
        return;
    }

    let numero = Number(valor);
    let factorial = 1;

    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    display.innerHTML = `El factorial de <span style="color:white">${numero}</span> es: <br> <span class="result-text">${factorial}</span>`;
    
    console.log(`Factorial de ${numero}: ${factorial}`);
}