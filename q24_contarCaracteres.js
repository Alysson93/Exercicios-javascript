function contador(c,s) {
    let qtd = 0;
    for (let i of s) {
        if (i === c) {
            qtd += 1;
        }
    }
    return qtd;
}

console.log(contador('s','Alysson'))