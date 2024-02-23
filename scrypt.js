const galleryImages = document.querySelectorAll('.gallery-image');
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popup-image');
const close = document.getElementById('close');

galleryImages.forEach(image => {
	image.addEventListener('click', function () {
		const src = this.getAttribute('src');
		popupImage.src = src;
		popup.style.display = 'block';
	});
});

close.addEventListener('click', function () {
	popup.style.display = 'none';
});
