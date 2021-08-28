var a = "hello";

function hello() { 
    let b = "Hello world";
    const c = "Hello world!!!";
    if (true) {
        let d = "Hello world again";
        debugger;
    }
 }


 hello();





const alcancia2 = () => {
    debugger;
    var guardarMonedas = 0;
    const contarMonedas = (monedas) => {
        debugger;
        guardarMonedas += monedas;
        console.log(`Alcancia: $${guardarMonedas}`);
    }
    return contarMonedas;
}

let myAlcancia = alcancia2();

myAlcancia(10);
myAlcancia(40);
