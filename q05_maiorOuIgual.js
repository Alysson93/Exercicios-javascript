function maiorOuIgual(x,y) {
    if (typeof(x) === 'number' && typeof(y) === 'number' && x >= y) {
        return true;
    } else {
        return false;
    }
}

console.log(maiorOuIgual(2,2))