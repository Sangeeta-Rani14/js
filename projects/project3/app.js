// var

let acc= document.getElementsByClassName('content-container');
console.log(acc);

for(i=0;i<acc.length;i++){

    acc[i].addEventListener('click',function(){
        this.classList.toggle('active');
    })

};