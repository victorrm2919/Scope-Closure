const alcancia = (monedas) => {
    var guardarMonedas = 0;
    guardarMonedas += monedas;
    console.log(`Alcancia: $${guardarMonedas}`);
}

alcancia(10);
alcancia(20);


/* Closure */
const alcancia2 = () => {
    var guardarMonedas = 0;
    const contarMonedas = (monedas) => {
        guardarMonedas += monedas;
        console.log(`Alcancia: $${guardarMonedas}`);
    }
    return contarMonedas;
}

let myAlcancia = alcancia2();

myAlcancia(10);
myAlcancia(40);

