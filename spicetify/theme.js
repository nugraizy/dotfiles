(() => {
	const script = document.createElement('SCRIPT');
	script.setAttribute('type', 'text/javascript');
	script.setAttribute('src', 'https://astromations.github.io/Hazy/hazy.js');
	document.head.appendChild(script);
	setTimeout(() => {
		const htmlElement = document.documentElement;

		const topContainer = document.querySelector('.Root__top-container');

		if (htmlElement) {
			htmlElement.style.backgroundColor = 'transparent';
		}

		if (topContainer) {
			topContainer.style.backgroundColor = 'transparent';
		} else {
			console.log('Element .Root__top-container not found after 2-second delay.');
		}
	}, 2000);
})();
