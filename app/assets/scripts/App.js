import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';

new RevealOnScroll(document.querySelectorAll('.feature-item'), 75);
new RevealOnScroll(document.querySelectorAll('.testimonial'), 60);

const mobileMenu = new MobileMenu();

console.log(mobileMenu);

if (module.hot) {
	module.hot.accept();
}

/* Lesson example code below this line */
