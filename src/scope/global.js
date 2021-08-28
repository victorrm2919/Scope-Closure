var hello = 'Hello';  /* Se puede resignar con var, mala practica*/
let world = 'Hello World'; /* Si se reasigna con let o const causa error, no se puede reasignar */
const helloWorld = 'Hello World';

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();

/* ******** */

const helloWorldFunction = () => {
    globalhello = 'Hello World bad practice';
}

helloWorldFunction();
console.log(globalhello);



/* ********* */
const anotherFunctions = () => {
    var hellos = globalhello = 'Im Global';
}
anotherFunctions();
console.log(globalhello);

