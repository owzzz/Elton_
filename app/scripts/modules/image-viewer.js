class ImageViewer {
	constructor() {
		let portfolioItems = document.getElementsByClassName('er-portolio-item');
		let target = document.getElementsByClassName('portfolio-target')[0];
		let body = document.getElementsByTagName('body')[0];

		[...portfolioItems].forEach((item, idx) => {

			item.style.backgroundImage = `url(${item.getAttribute('data-mobile-image')})`;

			item.addEventListener('mouseenter', (e) => {
	      		target.setAttribute("src", e.target.getAttribute('data-image'));

	      		target.addEventListener('load', () => {
	      			body.classList.add('image-loaded');
	      		});
	    	});


	    	item.addEventListener('mouseleave', (e) => {
	      		body.classList.remove('image-loaded');
	    	});
		});


	}
}