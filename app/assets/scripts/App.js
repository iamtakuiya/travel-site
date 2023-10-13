import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';

const mobileMenu = new MobileMenu();
const revealOnScroll = new RevealOnScroll();
console.log(mobileMenu);

if (module.hot) {
	module.hot.accept();
}

/* Lesson example code below this line */
