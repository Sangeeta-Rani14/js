// // name function
// // defining a function
// var x=5;
// var y=10;

// function sum(){
// alert(x+y);
// }
// sum();
// console.log( )
// // passing argument
// var x=Number(prompt('enter number'))
// var y=Number(prompt('enter number'))

// function sum(a,b){
// alert(a+b);
// }
// sum(x,y);
// console.log( )
// // with out argument
// var x=Number(prompt('enter number'))
// var y=Number(prompt('enter number'))

// function sum(){
// alert(x+y);
// }
// sum();
// console.log( )



// Generatae prime number for given range

// var a=Number(prompt('enter a'));
// var b=Number(prompt('enter b'));

// function even(x,y){

//     for(let i=x; i<=y;i++)
//     {
//         if(i%2==0)
//         {
//             console.log(i);
//         }
//     }
// }

// even(a,b);

// for prime no

// var a=Number(prompt('enter a'));
// var b=Number(prompt('enter b'));

// function prime(x,y){

//     for(let i=x; i<=y;i++)
//     {
//         if(i%1==0 && i%i==0)
//         {
//             console.log(i);
//         }
//     }
// }

// prime(a,b)

//ask user to what he wants to print odd or even and print in range;



// anonymous function
var check= function even(x,y){

        for(let i=x; i<=y;i++)
        {
        if(i%2==0)
        {
                console.log(i);
            }
        }
    }
    
// even(a,b);

// return value print ni krwa skte use kr sakte hai


// arrow  function 
var arrowFun=()=>{
    console.log('hiii')
}

var anonymousFun=function(){
    console.log('im anonymous function')
}

var table=(a,b)=> {
    for(let i=1; i<=b;i++){
        var mul=a*i;
        console.log(mul)
    }
}
table(4,10)