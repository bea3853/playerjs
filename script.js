let video = document.getElementsByClassName("videotela")[0];

function play() {
  video.play();
}

function pause() {
  video.pause();
}

function stop() {
  video.pause();
  video.currentTime = 0;
}

function inc() {
  video.playbackRate += 0.10;
}

function dec() {
  video.playbackSpeed -= 0.10;
}

function retroceder() {
  video.currentTime -= 10;
}
function avancar() {
  video.currentTime += 10;
}

function expandir() {
  video.width = 800;
}

function small() {
  video.width = 425;
}
