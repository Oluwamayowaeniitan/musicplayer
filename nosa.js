//CLICKABLE IMAGE
var icon = document.querySelectorAll('.icon');

//SONGS
var song = document.querySelectorAll('#son');

icon[0].onclick = function(){
    if(song[0].paused){
        song[0].play();
        icon[0].src = 'pause.png';
    }
    else{
        song[0].pause();
        icon[0].src = 'nosaa.jfif';
    }
}
 
icon[1].onclick = function(){
    if(song[1].paused){
        song[1].play();
        icon[1].src = 'pause.png';
    }
    else{
        song[1].pause();
        icon[1].src = 'nosaa.jfif';
    }
}
 
