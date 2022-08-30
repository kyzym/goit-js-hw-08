import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
player.on(
  'timeupdate',
  throttle(({ seconds }) => {
    localStorage.setItem('videoplayer-current-time', seconds);
  }, 1000)
);

const time = localStorage.getItem('videoplayer-current-time');

player
  .setCurrentTime(time)
  .then(function () {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        console.log('some other error occurred');

        break;
    }
  });
