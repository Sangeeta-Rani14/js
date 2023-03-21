//Sorted array


let a = [7, 8, 9, 3, 5, 2];

console.log(a.sort());


// Array Dash
/*
let num = window.prompt();
let str = num.toString();
let result = [str[0]];
for (let i = 1; i < str.length; i++){
    if ((str[i - 1] % 2 === 0) && (str[i] % 2 === 0)) {
        result.push('-', str[x]);
    }
    else {
        result.push(str[x = i]);

    }
}
console.log(result.join(''));
*/
// 2d Array

// var main = [];
// var subarray = [];

// for (let i = 0; i < 3; i++) {
//     if (vi == 1) {
//         for (let j = 0; j < 2; j++) {
//             var y = prompt('enter the value');
//             subarray.push(y);
//         }
//         main.push(subarray);
//     }
//     else {
//         var x = prompt('enter the value');
//         main.push(x);
//     }
// }

// console.log(main)


// let b= ['a', ['b', 'c'], 'd'];

// console.log(b);


// var arr = [];
// var c = [];
// var d = [];


// for (let i = 0; i < 5; i++) {
//     if (i == 1 ) {
//         for (let j = 0; j < 2; j++) {
//             var y = prompt('enter the value');
//             c.push(y);
//         }
//         arr.push(c);
//     }
//     if (i == 4) {
//         for (let k = 0; k < 2; k++) {
//             var z = prompt('enter the value');
//             d.push(z);
//         }
//         arr.push(d);
//     }
//     else {
//         var x = prompt('enter the value');
//         arr.push(x);
//     }
// }
// console.log(arr);


var mylist = {
    grapes: '1kg',
    maggi: 5,
    bottle: ['black', 'pink'],
    scooty: true,
    dist: 2,
    travel: function () {
        if (this.dist <= 2) {
            this.scooty = flase;
            console.log("Go on feet for shorter distances");
        }
    }

}
console.log(mylist);







// method 2 using method 
var myObj=Object