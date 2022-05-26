const lista = [0,1,2,3,4,5,6,7,8,9];

function somar(a,b) {
    return a + b;
}

const soma = lista.reduce(somar);
console.log(soma)