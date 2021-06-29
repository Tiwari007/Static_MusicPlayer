var songs = ["/Media/Song1.mp3","/Media/Song2.mp3","/Media/Song3.mp3"];
var poster = ["/Images/Poster1.jpg","/Images/Poster2.jpg","/Images/Poster3.jpg"];
        
var songTitle = document.getElementById("songTitle");
var fillBar = document.getElementById("fill");
var temp =true;
        
var song = new Audio();
var currentSong = 0;    // it point to the current song
        
window.onload = playSong;   // it will call the function playSong when window is load
function playSong(){
    song.src = songs[currentSong];  //set the source of 0th song 
    songTitle.textContent = songs[currentSong]; // set the title of song
    song.play();    // play the song
}
        
function playOrPauseSong(){
    if(song.paused){
        song.play();
        $("#play img").attr("src","Image/Pause.png");
    }
    else{
        song.pause();
        $("#play img").attr("src","Image/Play.png");
    }
}
        
song.addEventListener('timeupdate',function(){ 
            
    var position = song.currentTime / song.duration;
    fillBar.style.width = position * 100 +'%';
});
        
    
function next(){
    currentSong++;
    if(currentSong > 2){
        currentSong = 0;
    
    }
        playSong();
        $("#play img").attr("src","Image/Pause.png");
        $("#image img").attr("src",poster[currentSong]);
        $("#bg img").attr("src",poster[currentSong]);
}
    
function pre(){
    currentSong--;
    if(currentSong < 0){
        currentSong = 2;
    }
    playSong();
    $("#play img").attr("src","Image/Pause.png");
    $("#image img").attr("src",poster[currentSong]);
    $("#bg img").attr("src",poster[currentSong]);
}
        
    
    