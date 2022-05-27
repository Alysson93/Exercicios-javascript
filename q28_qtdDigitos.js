function qtdDigitos(lista, digitos) {
    const novaLista = [];
    for (let i of lista) {
        if (i.toString().length === digitos) {
            novaLista.push(i);
        }
    }
    return novaLista;
}

console.log(qtdDigitos([1,20,10,300,23],2));