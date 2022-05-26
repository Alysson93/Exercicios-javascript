function area(base,altura) {
    let area = base * altura / 2
    return Math.round(area).toFixed(2);
}

console.log(area(2,3))