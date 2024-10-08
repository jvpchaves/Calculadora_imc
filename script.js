function calcularIMC() {
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var resultadoDiv = document.getElementById('resultado');
    
    if  (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0)
         {
        alert('Por favor, insira valores válidos.');
        return;
         
         } else {  

    var imc = peso / (altura * altura);
    var classificacao = '';
    var corClassificacao = '';
    
    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
        corClassificacao = 'blue';  // Cor azul para abaixo do peso
    } else if (imc < 24.9) {
        classificacao = 'Peso normal';
        corClassificacao = 'green';  // Cor verde para peso normal
    } else if (imc < 29.9) {
        classificacao = 'Sobrepeso';
        corClassificacao = 'orange';  // Cor laranja para sobrepeso
    } else if (imc < 34.9) {
        classificacao = 'Obesidade Grau 1';
        corClassificacao = 'red';  // Cor vermelha para obesidade grau 1
    } else if (imc < 39.9) {
        classificacao = 'Obesidade Grau 2';
        corClassificacao = 'darkred';  // Cor vermelho escuro para obesidade grau 2
    } else {
        classificacao = 'Obesidade Grau 3';
        corClassificacao = 'darkred';  // Cor vermelho escuro para obesidade grau 3
    }
}

    // Exibe o resultado com a cor correspondente
    resultadoDiv.innerHTML = 'IMC: ' + imc.toFixed(2) + '<br>Classificação: ' + classificacao;
    resultadoDiv.style.color = corClassificacao;
}
