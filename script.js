

document.getElementById('menu-toggle').addEventListener('click', function(){
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
});

/* Calculadora IMC */

document.getElementById('calcular').addEventListener('click', function() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(peso) || isNaN(altura)) {
        document.getElementById('resultado').innerText = "Por favor, insira valores válidos para peso e altura.";
        return;
    }

    const imc = (peso / (altura * altura)).toFixed(2);
    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = "Sobrepeso";
    } else if (imc >= 30 && imc < 34.9) {
        classificacao = "Obesidade grau 1";
    } else if (imc >= 35 && imc < 39.9) {
        classificacao = "Obesidade grau 2";
    } else {
        classificacao = "Obesidade grau 3";
    }

    document.getElementById('resultado').innerText = `Seu IMC é ${imc} (${classificacao})`;
});