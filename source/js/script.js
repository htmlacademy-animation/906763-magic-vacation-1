// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import FullPageScroll from './modules/full-page-scroll';
import AccentTypography from "./modules/accent-typography";

// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();

window.addEventListener(`load`, () => {
  document.querySelector(`body`).classList.add(`loaded`);
});

const animationTitle = new AccentTypography(`.intro__title`, 600, `active-animation`, `transform`, 100, 30, false);
animationTitle.runAnimation();

const animationDate = new AccentTypography(`.intro__date`, 400, `active-animation`, `transform`, 500, 20, true);
animationDate.runAnimation();

const sliderTitle = new AccentTypography(`.slider__item-title`, 600, `active-animation`, `transform`, 0, 30, true);
sliderTitle.runAnimation();

const prizesTitle = new AccentTypography(`.prizes__title`, 600, `active-animation`, `transform`, 0, 30, true);
prizesTitle.runAnimation();

const rulesTitle = new AccentTypography(`.rules__title`, 600, `active-animation`, `transform`, 0, 30, true);
rulesTitle.runAnimation();

const gameTitle = new AccentTypography(`.game__title`, 600, `active-animation`, `transform`, 0, 30, true);
gameTitle.runAnimation();
