var video = document.getElementById("video");
var videoStart = document.getElementById("video-start");
var videoAudio = document.getElementById("video-audio");
var btn = document.getElementById("btn-oferta");
var space = document.getElementById("space");


videoAudio.addEventListener("click", function(){
    video.removeAttribute("muted");
    video.muted = false;
    video.volume = 1;
    videoAudio.classList.remove("send-front");
})

video.addEventListener("click", function(){
    videoStart.classList.add("send-front");
    video.pause();
});
videoStart.addEventListener("click", function(){
    videoStart.classList.remove("send-front");
    video.play();
})