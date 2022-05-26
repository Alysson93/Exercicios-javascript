const numeros = [0,2,4,6,8]

function pares(lista) {
    const novaLista = [];
    for (i of lista) {
        if (i % 2 == 0 && lista[i] % 2 == 0) {
            novaLista.push(lista[i])
        }
    }
    return novaLista;
}

console.log(pares(numeros))