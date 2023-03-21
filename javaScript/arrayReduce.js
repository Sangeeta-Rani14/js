let price=[5,10,15,20,25];
let total=price.reduce(checkout);

console.log(`The total is ${total} Rs.`)



function checkout(total,x){
    return total +x;
}
