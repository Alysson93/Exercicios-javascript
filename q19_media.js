function media(lista) {
    let resultado = 0;
    for (i of lista) {
        resultado += i;
    }
    resultado = resultado / lista.length;
    return resultado
}

numeros = [1,2,3,4,5,6,7,8,9,10]
console.log(media(numeros))