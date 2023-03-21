var title=document.getElementById('main-heading');
title.style.color='red';
console.log(title);



// var li =document.querySelectorAll('.list-item');
// li.style.fontsize='2rem';
// console.log(li);


var list =document.querySelectorAll('.list-item');
// list.style.fontsize='2rem';

for(i=0;i<list.length;i++){
    list[i].style.color='pink';
    list[i].style.fontSize='3rem';
}

console.log(list);