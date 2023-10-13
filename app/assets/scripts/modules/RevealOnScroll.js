import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';

class RevealOnScroll {
	constructor(els, threholdPercent) {
		this.threholdPercent = threholdPercent;
		this.itemsToReveal = els;
		this.browserHeight = window.innerHeight;
		this.hideInitially();
		this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
		this.events();
	}

	events() {
		window.addEventListener('scroll', this.scrollThrottle);
		window.addEventListener(
			'resize',
			debounce(() => {
				console.log('Resize just ran');
				this.browserHeight = window.innerHeight;
			}, 333)
		);
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
		if (window.scrollY + this.browserHeight > el.offsetTop) {
			// console.log(el.getBoundingClientRect().y);
			console.log('scolled');
			let scrollPercent = (el.getBoundingClientRect().y / this.browserHeight) * 100;
			if (scrollPercent < this.threholdPercent) {
				el.classList.add('reveal-item--is-visible');
				el.isRevealed = true;

				if (el.isLastItem) {
					window.removeEventListener('scroll', this.scrollThrottle);
					console.log('Reached last item');
				}
			}
			// console.log(scrollPercent, window.innerHeight);
		}
	}

	//
	hideInitially() {
		this.itemsToReveal.forEach(el => {
			el.classList.add('reveal-item');
			el.isRevealed = false;
		});
		this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true;
	}
}

export default RevealOnScroll;
