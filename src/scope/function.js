const fruits = () => {
    var fruit = 'apple';
    console.log(fruit);
}

fruits();

console.log(fruit);

const anotheFunction = () => {
    var x = 1;
    var x = 2;
    let y = 1;  /* No se puede redeclarar let */
    // let y = 2;
    console.log(x);
    console.log(y);
}

anotheFunction();