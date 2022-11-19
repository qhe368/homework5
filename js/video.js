//load video
let video = document.getElementById('videoplayer');
video.addEventListener('load', loadVideo());

function loadVideo(){
	video.load();
	video.loop = false;
	video.autoplay = false;
};

//play Button
let play = document.getElementById(`play`);
play.addEventListener("click",playButton);

function playButton() {
  video.play();
};

//play Button
let pause = document.getElementById(`pause`);
pause.addEventListener("click",pauseButton);

function pauseButton() {
  video.pause();
};

//Speed slow
let slower = document.getElementById(`slower`);
slower.addEventListener("click",slowerButton);

function slowerButton() {
	var vid = document.getElementById('videoplayer');
  if (vid.playbackRate == 0.5) {
    alert('Video is at slowest speed!')} 
  else {
    vid.playbackRate = vid.playbackRate/2;};
};

//Speed up
let faster = document.getElementById(`faster`);
faster.addEventListener("click",fasterButton);

function fasterButton() {
	var vid = document.getElementById('videoplayer');
  if (vid.playbackRate == 2) {
    alert('Video is at fastest speed!')} 
  else {
    vid.playbackRate = vid.playbackRate*2;};
};

//skip ahead
let skip = document.getElementById("skip");
skip.addEventListener("click", skipButton);

function skipButton(){
	var vid = document.getElementById('videoplayer');
	if (vid.currentTime + 15 >= vid.seekable.end(0)){
		vid.currentTime = vid.seekable.start(0);}
	else{
		vid.currentTime = vid.currentTime + 15;}
}


//Enable Mute or not
let muteButton = document.getElementById("mute");
muteButton.addEventListener("click", mute);

function mute(){
	if (video.muted){
		video.muted = false;
		muteButton.textContent = "mute";}
	else{
		video.muted = true;
		muteButton.textContent = "unmute";}
}

//slider text display
var slider = document.getElementById("slider");
var output = document.getElementById("volume");
output.innerHTML = slider.value + "%"; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
	video.volume = slider.value/100;
  output.innerHTML = this.value;
}

//volume