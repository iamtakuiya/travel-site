import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu';

const mobileMenu = new MobileMenu();
console.log(mobileMenu);

if (module.hot) {
	module.hot.accept();
}

/* Lesson example code below this line */
