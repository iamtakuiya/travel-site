class MobileMenu {
	constructor() {
		this.menuIcon = document.querySelector('.site-header__menu-icon');
		this.menuContent = document.querySelector('.site-header__menu-content');
		this.siteHeader = document.querySelector('.site-header');
		this.event();
	}

	event() {
		this.menuIcon.addEventListener('click', () => {
			this.toggleTheMenu();
		});
	}

	toggleTheMenu() {
		this.menuContent.classList.toggle('site-header__menu-content--is-visible');
		this.siteHeader.classList.toggle('site-header--is-expanded');
		console.log('Hooray');
	}
}

export default MobileMenu;
