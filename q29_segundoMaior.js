function segundoMaior(numeros) {
    let maior = 0;
    let segundoMaior = 0;
    for (let i of numeros) {
        if (i > maior) {
            segundoMaior = maior;
            maior = i;
        }
    }
    return segundoMaior;   
}

console.log(segundoMaior([10,12,16,11,6]))