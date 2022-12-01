var asa = document.querySelector('.asa');
var numbia = document.querySelector('.numbia');
var chorus = document.querySelector('.chorus');
var when = document.querySelector('.when');
var hymn = document.querySelector('.hymn');
var tosin = document.querySelector('.tosin');
var holy = document.querySelector('.holy');
var icon1 = document.querySelector('#icon1');
var icon2 = document.querySelector('#icon2');
var icon3 = document.querySelector('#icon3');
var icon4 = document.querySelector('#icon4');
var icon5 = document.querySelector('#icon5');
var icon6 = document.querySelector('#icon6');
var icon7 = document.querySelector('#icon7');
var son = document.querySelectorAll('#son');



icon1.onclick = function(){
    if(tosin.paused){
        tosin.play();
        icon1.src = 'pause.png';
    }
    else{
        tosin.pause();
        icon1.src = 'play.png';
    }
}

icon2.onclick = function(){
    if(asa.paused){
        asa.play();
        icon2.src = 'pause.png';
    }
    else{
        asa.pause();
        icon2.src = 'play.png';
    }
}

icon3.onclick = function(){
    if(chorus.paused){
        chorus.play();
        icon3.src = 'pause.png';
    }
    else{
        chorus.pause();
        icon3.src = 'play.png';
    }
}

icon4.onclick = function(){
    if(holy.paused){
        holy.play();
        icon4.src = 'pause.png';
    }
    else{
        holy.pause();
        icon4.src = 'play.png';
    }
}

icon5.onclick = function(){
    if(hymn.paused){
        hymn.play();
        icon5.src = 'pause.png';
    }
    else{
        hymn.pause();
        icon5.src = 'play.png';
    }
}

icon6.onclick = function(){
    if(numbia.paused){
        numbia.play();
        icon6.src = 'pause.png';
    }
    else{
        numbia.pause();
        icon6.src = 'play.png';
    }
}

icon7.onclick = function(){
    if(when.paused){
        when.play();
        icon7.src = 'pause.png';
    }
    else{
        when.pause();
        icon7.src = 'play.png';
    }
}

