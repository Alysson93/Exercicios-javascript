const objeto = [
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
]

function somar(a,b) {
    return a.preco + b.preco;
}

somaPrecos = objeto.reduce(somar);
console.log(somaPrecos)