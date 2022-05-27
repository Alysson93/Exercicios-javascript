function media(a,b) {
    return a + b;
}

function maior(a,b) {
    return a.Média > b.Média ? a : b;
}

function maiorMedia(objeto) {
    const lista = [];
    for (let i in objeto) {
        lista.push({
            'Nome': i,
            'Média': objeto[i].reduce(media)/objeto[i].length
        });
    }
    return lista.reduce(maior);
}

const objeto = {
    'Alysson': [8,9,7],
    'Pereira': [1,2,3],
    'Assunção': [5,6,7],
    'Vitória': [10,9,8],
}

console.log(maiorMedia(objeto));