// variables 

let btn=document.querySelector('#new-quote');
let quote=document.querySelector('.quote');
let person=document.querySelector('.person');

let quotes=[{
        quote :`"The greatest glory in living lies not in never falling, but in rising every time we fall."`,
        person :`-Nelson Mandela`,
    },{
        quote:`"The way to get started is to quit talking and begin doing."`,
        person:`-Walt Disney`,
    },{
        quote:`If life were predictable it would cease to be life, and be without flavor`,
        person:`-Eleanor Roosevelt`,
    },{
        quote:`It is during our darkest moments that we must focus to see the light.`,
        person:`-Aristotle`,
    },];


    btn.addEventListener('click',function(){
        let random=Math.floor(Math.random()* quotes.length);

        quote.innerText=quotes[random].quote;
        person.innerText=quotes[random].person;
    })
