function estaEntre(numero, minimo, maximo, inclusivo=false) {
    if ((inclusivo && numero >= minimo && numero <= maximo) || (!(inclusivo) && numero > minimo && numero < maximo)) {
        return true;
    } else {
        return false;
    } 
}

console.log(estaEntre(6,6,11,true))