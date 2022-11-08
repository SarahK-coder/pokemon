let count = 1;

function renderSlideshow() {
    let slideshow = document.getElementById('slideshow');
    slideshow.innerHTML = `<img class="poke" src="https://tinyurl.com/ironhack-pokemons/${count}.svg">`;
}

let prev = document.getElementById('prev');
let next = document.getElementById('next');

prev.onlick = function() {
    if (count > 1) {
        count = count - 1;
        renderSlideshow();
    }
}

next.onlick = function() {
    if (count < 650) {
        count = count + 1;
        renderSlideshow();
    }
}

renderSlideshow();