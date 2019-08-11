var navg = document.getElementsByTagName('nav');
nav = navg[0];
var links = document.querySelectorAll('nav>div')
var screen = document.querySelectorAll('.screen')
var boardtext = document.querySelector('.boardtext')
var boardimage = document.querySelector('.boardimage')
var board = document.querySelector('.board')
var lineup = document.getElementById("lineup");
var linedown = document.getElementById("linedown");

///// initial start 

var clicked = 0;
boardtext.innerHTML = links[0].innerHTML;
TweenMax.to(nav,0,{y:-250});

for(var i = 0 ; i < screen.length  ; i ++ )
    {
             
        if(screen[i].classList[0] == 2){

            screen[i].style.display = "block";

        }
        else
          screen[i].style.display = "none";

}


//////////////////////////////////////

function rotateandbringdown(){

    if(clicked==0){
        //TweenMax.to(boardimage , 0.3 , {rotation:0})
        TweenMax.to(lineup,0.2,{rotation:35,y:82})
        TweenMax.to(linedown,0.2,{rotation:-35,y:89})

         
        TweenMax.to(nav,0.3,{y:board.getBoundingClientRect().height});
        clicked = 1 ;
    }

    else{
        TweenMax.to(nav, 0.3 , {y:-250});
       
        TweenMax.to(lineup,0.2,{rotation:0,y:83.5})
        TweenMax.to(linedown,0.2,{rotation:0,y:88.5})
        clicked = 0 ; 
    
    }
    
  }

boardimage.addEventListener('click',rotateandbringdown);

/////////////////////////////////////////

function rotateandbringupshow(event){

    TweenMax.to(nav, 0.3 , {y:-250});

    TweenMax.to(lineup,0.2,{rotation:0,y:83.5}) ; 
    TweenMax.to(linedown,0.2,{rotation:0,y:88.5}) ;
    
    boardtext.innerHTML = event.target.innerHTML;
    clicked = 0 ;

    for(var i = 0 ; i < screen.length  ; i ++ )
    {
             
        if(screen[i].classList[0] == event.target.id){

            screen[i].style.display = "block";

        }
        else
        screen[i].style.display = "none";

    }



  }



for(var i=0 ; i<links.length ; i++){
    links[i].addEventListener('click',rotateandbringupshow);
  }
    


/////////////////////////////////////delete cross /////////////////////











///////////////////////////////////  ignore it  /////////////////////////

function showhide( event ){

    boardtext.innerHTML = event.target.innerHTML;

    for(var i = 0 ; i < screen.length  ; i ++ )
    {
             
        if(screen[i].classList[0] == event.target.id){

            screen[i].style.display = "block";

        }
        else
        screen[i].style.display = "none";

    }

    console.log(event.target.id);
   

}

//// eventlistner for show hide
for(var i=0 ; i<links.length ; i++){

links[i].addEventListener('click',showhide);


}


//////////////////////pdf opener/ ///

