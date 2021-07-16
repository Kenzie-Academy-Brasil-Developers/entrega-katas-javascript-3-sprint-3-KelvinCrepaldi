const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults(x){
    //cria paragrafo
    let paragrafo = document.createElement('p');
    let arrayLength = x.length;

    for(let i = 0; i < arrayLength; i++){
        
        //adiciona numero
        let addTexto = document.createTextNode(x[i]);
        paragrafo.appendChild(addTexto);
        //adiciona ", "
        if(i < arrayLength-1){
            let addTextoSpace = document.createTextNode(', ');
            paragrafo.appendChild(addTextoSpace);
        }
    }

    //adiciona linha gerada no caminho especificado
    let caminho = document.getElementById('top');
    caminho.appendChild(paragrafo);

}

function showTitle(x){
    // cria titulo
    let paragrafo = document.createElement('h2');
    let texto = document.createTextNode(x);
    paragrafo.appendChild(texto);

    //adiciona titulo
    let caminho = document.getElementById('top');
    caminho.appendChild(paragrafo);
    

}

function kata1() {
    showTitle('kata1:');
    let resultado = [];

    for(let i = 0; i < 25; i++){
        resultado[i] = i+1;
    }

    showResults(resultado);
    return resultado;
}

function kata2() {
        showTitle('kata2:');
    let resultado = [];

    let contador = 25;
    for(let i = 0; i < 25; i++){
        resultado[i] = contador;
        contador--;
    }

    showResults(resultado);
    return resultado;
}

function kata3() {
    showTitle('kata3:');
    let resultado = [];

    for(let i = 0; i < 25; i++){
        resultado[i] = -(i+1);
    }

    showResults(resultado);
    return resultado;
}

function kata4() {
    showTitle('kata4:');
    let resultado = [];

    let contador = 25;
    for(let i = 0; i < 25; i++){
        resultado[i] = -(contador);
        contador--;
    }

    showResults(resultado);
    return resultado;
}

function kata5() {
    showTitle('kata5:');
    let resultado = [];

    let contador = 0;
    for(let i = -25; i <= 25; i++){
        if(i%2 !== 0){
            resultado[contador] = -i;
            contador++;
        }
    }

    showResults(resultado);
    return resultado;
}

function kata6() {
    showTitle('kata6:');
    let resultado = [];

    let contador = 0;
    for(let i = 1; i < 100; i++){
        if(i%3 === 0){
            resultado[contador] = i;
            contador++;
        }
    }

    showResults(resultado);
    return resultado;
}

function kata7() {
    showTitle('kata7:');
    let resultado = [];

    let contador = 0;
    for(let i = 1; i < 100; i++){
        if(i%7 === 0){
            resultado[contador] = i;
            contador++;
        }
    }

    showResults(resultado);
    return resultado;
}

function kata8() {
    showTitle('kata8:');
    let resultado = [];

    let contador = 0;
    for(let i = 100; i > 0; i--){
        if(i%7 === 0 || i%3 === 0){
            resultado[contador] = i;
            contador++;
        }
    }

    showResults(resultado);
    return resultado;
}

function kata9() {
    showTitle('kata9:');
    let resultado = [];

    let contador = 0;
    for(let i = 1; i < 100; i++){
        if(i%5 === 0 && i%2 !== 0){
            resultado[contador] = i;
            contador++;
        }
    }

    showResults(resultado);
    return resultado;
}

function kata10() {
    showTitle('kata10:');
    showResults(sampleArray);
    return sampleArray;
}

function kata11() {
    showTitle('kata11:');
    let resultado = [];
    let contador = 0;
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i]%2 === 0){
            resultado[contador] = sampleArray[i];
            contador++;
        }
    }
    showResults(resultado);
    return resultado;
}

function kata12() {
    showTitle('kata12:');
    let resultado = [];
    let contador = 0;
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i]%2 !== 0){
            resultado[contador] = sampleArray[i];
            contador++;
        }
    }
    showResults(resultado);
    return resultado;
}

function kata13() {
    showTitle('kata13:');
    let resultado = [];
    let contador = 0;
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i]%8 === 0){
            resultado[contador] = sampleArray[i];
            contador++;
        }
    }
    showResults(resultado);
    return resultado;
}

function kata14() {
    showTitle('kata14:');
    let resultado = [];
    let contador = 0;
    for(let i = 0; i < sampleArray.length; i++){
        resultado[contador] = (sampleArray[i]*sampleArray[i])
        contador++;
    }
    showResults(resultado);
    return resultado;
}

function kata15() {
    showTitle('kata15:');
    let contador = 0;
    for(let i = 0; i <= 20; i++){
        contador += i;
    }
    showResults([contador]);
    return [contador];
}

function kata16() {
    showTitle('kata16:');
    let contador = 0;
    let posicao = 0
    for(let i = 0; i < 20; i++){
        contador += sampleArray[posicao];
        posicao++;
    }
    showResults([contador]);
    return [contador];
}

function kata17() {
    showTitle('kata17:');
    
    let posicao = 0;
    let contador = sampleArray[0];

    for(let i = 1; i < sampleArray.length; i++){
        if(contador>sampleArray[i]){
            contador = sampleArray[i]
        }
    }
    showResults([contador]);
    return [contador];
}

function kata18() {
    showTitle('kata18:');
    
    let posicao = 0;
    let contador = sampleArray[0];

    for(let i = 1; i < sampleArray.length; i++){
        if(contador<sampleArray[i]){
            contador = sampleArray[i]
        }
    }
    showResults([contador]);
    return [contador];
}

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
