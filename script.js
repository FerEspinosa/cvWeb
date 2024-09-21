const navLinks = document.querySelectorAll('nav ul li a');

for (const navLink of navLinks) {
	navLink.addEventListener('click', function(e) {
		<! -- e.preventDefault(); -->
		const sectionId = this.getAttribute('href');
		const section = document.querySelector(sectionId);
		const sectionTop = section.offsetTop;
		window.scrollTo({ top: sectionTop, behavior: 'smooth' });
	});
}
