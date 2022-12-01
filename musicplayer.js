var icon = document.querySelector('#icon');
var song = document.querySelector('.song');

icon.onclick = function(){
    if(song.paused){
        song.play();
        icon.src = "pause.png";
    }
    else{
        song.pause();
        icon.src = "play.png";
    }
}