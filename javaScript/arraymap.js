let number=[2,4,5,7,8];
let squares=number.map(squre);
squares.forEach(print);


function squre(element){
    return Math.pow(element,2);
}

function print(element){
    console.log(element);
}