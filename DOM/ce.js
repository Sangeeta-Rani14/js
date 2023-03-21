const ul=document.querySelector('ul');
const li=document.createElement('li');

ul.append(li)

console.log();



// modiftying Text
const fli=document.querySelector('.list-item');
console.log(fli);


li.innerText='X-man';
//modifying attributes & classes
li.setAttribute('id','main-heading');



const title=document.querySelector('#main-heading');

console.log(title.getAttribute('id'));


li.classList.remove('list-item');
li.remove();ll












// console.log(fli.innerText);
//console.log(fli.innerHTML);
// console.log(fli.textContent);