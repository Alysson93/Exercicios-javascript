function sorteio(x) {
    const numero = Math.floor(Math.random() * 11);
    if (x == numero) {
        return "Parabéns! O número sorteado foi o " + numero;
    } else {
        return "Que pena! O número sorteado foi o " + numero
    }
}

console.log(sorteio(2))