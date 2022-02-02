import Player from '@vimeo/player';
import throttle from 'lodash/throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

const lastSavedTime = localStorage.getItem(LOCALSTORAGE_KEY);

player
  .setCurrentTime(lastSavedTime)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });

player.on(
  'timeupdate',
  throttle(function (timeObject) {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(timeObject.seconds));
    console.log('timeUpdateFunction:', timeObject.seconds);
  }, 1000),
);
