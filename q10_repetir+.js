function repetir(x) {
    let mais = '';
    for (let i = 0; i < x; i++) {
        mais += '+';
    }
    return mais;
}

console.log(repetir(3))