// element.addeventListner('click',function,boolean)

var btn =document.querySelector('.btn-2');


console.log(btn);


function alertbtn() {
    alert('im here ');
}

btn.addEventListener('click',alertbtn);


function changeColor(){
    btn2.style.backgroundColor='pink';
}

var btn2=document.querySelector('.box-3');
btn2.addEventListener("mouseover",changeColor)