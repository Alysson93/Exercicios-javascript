function inverso(x) {
    if (typeof(x) === 'boolean') {
        return !x;
    } else if (typeof(x) === 'number') {
        return x - x*2;
    } else {
        return 'Booleano ou número esperados, mas o parâmetro é do tipo ' + typeof(x)
    }
}

console.log(inverso(-100))