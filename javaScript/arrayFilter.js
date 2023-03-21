

let age=[12, 17,18,21,19,22];
let adult=age.filter(checkAge);
adult.forEach(print)



function checkAge(x){
    return x >= 18;
}
function print(element){
    console.log(element);
}