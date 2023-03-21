// var shopping = []//empty array
// //random array 
// var car = ['car', 'verna', 2020, 22, true];
// console.log(car)

// // add element at last
// car.push("bmw")
// console.log(car);
// //remove 
// car.pop();
// // add element at first
// car.unshift("swift");
// console.log(car);
// // remove first element use shift
// car.shift();
// console.log(car)
// // display particular element
// console.log(car[3]);

// var fruit = ['apple', 'orange', 'peach', 'litchi']
// for (let i = 0; i < fruit.length; i++){
//     console.log(fruit[i]);
// }

/*
var empty_array = [];
var n = empty_array.length;
n=Number(prompt('enter size'))

for (let i = 0; i < n; i++){
    var x= prompt('Enter element')
    empty_array.push(x);
}
console.log(empty_array);

*/ 
// mutidem array
// 2d
// var user = ['ture', 88, ['x', 'y'], 9, 'false', ['a', 'b']];
// console.log(user[5][1]);

// // random method;
// var b = Math.random();
// console.log(b)

// b = Math.floor(Math.random()*6)+1;
// console.log(b)




// var empty_array = [];
// var n = empty_array.length;
// n = Number(prompt('enter size'))

// for (let i = 0; i < n; i++) {
//     var x = prompt('Enter element')
//     empty_array.push(x);
// }
// console.log(empty_array);

// var x = Math.floor(Math.random() * n);
// console.log(x);
// console.log(`${empty_array[x]} is going to buy lunch`)










/*
(5) ['car', 'verna', 2020, 22, true]
Array.js:8 (6) ['car', 'verna', 2020, 22, true, 'bmw']
Array.js:13 (6) ['swift', 'car', 'verna', 2020, 22, true]
Array.js:16 (5) ['car', 'verna', 2020, 22, true]
Array.js:18 22
Array.js:22 apple
Array.js:22 orange
Array.js:22 peach
Array.js:22 litchi
*/ 



// var arr=[7,8,2,9,1,5];
// arr.forEach(element =>{
//     console.log(element);
// })
// //  

var Arr=[8,6,3,7,8,9];

// Arr.forEach(i =>{
// console.log(i);
//     })
for (const i of Arr) {
    console.log(i)
} 


var marks={
    English:90,
    Hindi:89,
    punjabi:87,
}

for(let i in marks){
    console.log(i);

}
for(let i in marks){
    console.log((marks)[i]);

}