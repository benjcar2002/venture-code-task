jQuery(function($) {
    // calculates the size of the carousel on page load then applies the height to the full container
    const containerHeight = $('.container').outerHeight();
    const carouselHeight = $('.carousel-slider').height();
    $('.container').outerHeight(`${carouselHeight + containerHeight}`);
    /* the purpose of this is to adjust for the lack of DOM space taken up by the position: absolute. 
       This allows the style to work without jeopardising the flow of content after it */
});

let isDown = false;
let startX;
let scrollLeft;
const slider = document.querySelector('.carousel-slider');

const end = () => {
	isDown = false;
  slider.classList.remove('active');
}

const start = (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;	
}

const move = (e) => {
	if(!isDown) return;

  e.preventDefault();
  const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  const dist = (x - startX);
  slider.scrollLeft = scrollLeft - dist;
}

(() => {
	slider.addEventListener('mousedown', start); // adds scroll when slider is held
	slider.addEventListener('touchstart', start); // mobile

	slider.addEventListener('mousemove', move); // adjust x-axis of slider when dragged
	slider.addEventListener('touchmove', move);

	slider.addEventListener('mouseleave', end); // removes scroll when let go
	slider.addEventListener('mouseup', end);
	slider.addEventListener('touchend', end);
})();

