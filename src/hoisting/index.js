a = 2;
var a; // hoisting, se eleva la declaración de la variable a

console.log(a); // 2

console.log(a); // undefined
var a = 2 ;


nameOfDog('Firulais'); // Firulais

function nameOfDog(name){  // hoisting, se eleva la declaración de la función
    console.log(name);
}
