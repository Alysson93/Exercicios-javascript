function removeVogais(frase) {
    const vogais = ['a','e','i','o','u','A','E','I','O','U','y','Y'];
    let novaFrase = ''
    for (let i of frase) {
        if (!vogais.includes(i)) {
            novaFrase += i;
        }
    }
    return novaFrase;
}

console.log(removeVogais('Alysson'))