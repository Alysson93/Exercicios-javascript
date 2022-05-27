function inverte(objeto) {
    const novoObjeto = {};
    for (i in objeto) {
        novoObjeto[objeto[i]] = i;
    }
    return novoObjeto;
}

console.log(inverte({a:1,b:2,c:3}));