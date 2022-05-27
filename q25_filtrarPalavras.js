function filtrarPalavras(trecho, lista){
    const novaLista = [];
    for (let i of lista) {
        if (i.includes(trecho)) {
            novaLista.push(i);
        }
    }
    return novaLista;
}

console.log(filtrarPalavras('pro',['programação','mobile','profissional']))