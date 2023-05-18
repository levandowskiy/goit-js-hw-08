import Player from '@vimeo/player';
import throttle from 'lodash.throttle'

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(handleTimeUpdate, 1000))

function handleTimeUpdate(event) {
    const currentTime = event.seconds;
    
    localStorage.setItem("videoplayer-current-time", currentTime)
}

const time = localStorage.getItem("videoplayer-current-time");

player.setCurrentTime(time);
console.log("f");