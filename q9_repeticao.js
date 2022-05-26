function repeticao(elemento, numero) {
    const lista = [];
    if (typeof(numero) !== 'number' || numero < 0) {
        return 'O segundo parâmetro deve ser um número';
    }
    for (let x = 0; x < numero; x++) {
        lista[x] = elemento;
    }
    return lista;
}

console.log(repeticao('Código',7))