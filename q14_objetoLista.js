const objeto = {
    nome: 'Alysson',
    idade: 28
}

function conversao(obj) {
    const matriz = []
    for (let i in obj) {
        const lista = []
        lista.push(i)
        lista.push(obj[i])
        matriz.push(lista)
    }
    return matriz
}


const matriz = conversao(objeto)

console.log(matriz)