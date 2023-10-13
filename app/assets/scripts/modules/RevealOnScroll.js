import throttle from 'lodash/throttle';

class RevealOnScroll {
	constructor() {
		this.itemsToReveal = document.querySelectorAll('.feature-item');
		this.hideInitially();
		this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
		this.events();
	}

	events() {
		window.addEventListener('scroll', this.scrollThrottle);
	}

	// Check each items as false, then run the function
	calcCaller() {
		console.log('Run calcCaller');
		this.itemsToReveal.forEach(el => {
			if (el.isRevealed == false) {
				this.calculateIfScrolledTo(el);
			}
		});
	}

	// Add reveal class if pass the setting
	calculateIfScrolledTo(el) {
		// console.log(el.getBoundingClientRect().y);
		console.log('scolled');
		let scrollPercent = (el.getBoundingClientRect().y / window.innerHeight) * 100;
		if (scrollPercent < 75) {
			el.classList.add('reveal-item--is-visible');
			el.isRevealed = true;

			if (el.isLastItem) {
				window.removeEventListener('scroll', this.scrollThrottle);
				console.log('Reached last item');
			}
		}
		// console.log(scrollPercent, window.innerHeight);
	}

	// hideInitially() {
	// 	this.itemsToReveal.forEach(el => {
	// 		el.classList.add('reveal-item');
	// 		this.isRevealed = false;
	// 	});
	// 	this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true;
	// }

	hideInitially() {
		this.itemsToReveal.forEach(el => {
			el.classList.add('reveal-item');
			el.isRevealed = false;
		});
		this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true;
	}
}

export default RevealOnScroll;
