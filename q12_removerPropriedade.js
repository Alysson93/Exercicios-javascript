function removePropriedade(obj, prop) {
    var novoObjeto = JSON.parse(JSON.stringify(obj));
    delete novoObjeto.prop;
    return novoObjeto;
}

objeto = {
    nome:'Alysson',
    idade:28
}

novoObjeto = removePropriedade(objeto, 'nome');
console.log(Object.is(objeto,novoObjeto))