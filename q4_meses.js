function mes(x) {
    const meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
    if (x < 1 || x > 12) {
        return 'Valor inválido'
    } else {
        return meses[x-1]
    }
}

console.log(mes(10))