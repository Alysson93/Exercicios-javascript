function mult(x,y) {
    resultado = x;
    if (y == 0) {
        return 0;
    } else if (x < 0 || y < 0) {
        return 'Número negativo';
    }
    for (let i = 1; i < y; i++) {
        resultado += x;
    }
    return resultado;
}

console.log(mult(4,2))