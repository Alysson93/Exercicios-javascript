function filtrar(elemento) {
    return typeof(elemento) === 'number'
}

const lista = ['Alysson',28,'Pereira',1.65,3,'Assunção']

const numeros = lista.filter(filtrar)

console.log(numeros)