var x = document.getElementById('hii')
    console.log(x);
    x.style.color='pink';


   console.log( document.getElementById('hii').innerHTML);




   document.getElementById('hii').innerHTML='<em>learning dom</em>';

function hovering(){

    document.getElementById('pic1').src="https://i.pinimg.com/originals/1e/07/0d/1e070dfc84daee17726f15ea93c4d040.jpg";
}

function leave(){

        document.getElementById('pic1').src="https://i.pinimg.com/originals/cb/99/8d/cb998dca5d61581c8ca6c65a5034c38d.jpg";
}


var pic=document.getElementById('pic1');
var photo=true;

function hovering(){
    if(photo){
        pic.src='https://i.pinimg.com/originals/1e/07/0d/1e070dfc84daee17726f15ea93c4d040.jpg'
        photo=!photo;
    }
    else{
        pic.src="https://i.pinimg.com/originals/cb/99/8d/cb998dca5d61581c8ca6c65a5034c38d.jpg"
        photo=!photo;
    }
}