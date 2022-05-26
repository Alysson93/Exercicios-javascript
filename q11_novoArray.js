function novoArray(lista) {
    const nova = [];
    if (lista.length == 0) {
        return nova;
    }
    nova.push(lista[0])
    nova.push(lista[lista.length-1])
    return nova;
}

console.log(novoArray(['Alysson','Pereira','Assunção']))