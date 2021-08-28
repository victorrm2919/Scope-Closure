const buidlCount =  (i) => {
    let count = i;
    const displayCount = () => {
        console.log(count++);
    };
    return displayCount;
}

const myCount = buidlCount(1);
myCount();
myCount();
myCount();

const myCount2 = buidlCount(10);  /* Valor en () asigna a count 10 */
myCount2();
myCount2();
