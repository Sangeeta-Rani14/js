// revel event

let revelbtn= document.querySelector('.reveal-btn');
console.log(revelbtn);

let hiddenContent=document.querySelector('.hidden-content');

console.log(hiddenContent);

function revealContent(){
   if(hiddenContent.classList.contains('reveal-btn')){
    hiddenContent.classList.remove('reveal-btn')
   }
   else{
    hiddenContent.classList.add('reveal-btn');
   }
  

}

revelbtn.addEventListener('click',revealContent);