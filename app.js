let count = 649;

function showImage() {
    let element = document.getElementById('slideshow');
    element.innerHTML = `<img class="poke" src="https://tinyurl.com/ironhack-pokemons/${count}.svg">`;
}

let prevElement = document.getElementById('prev');
prevElement.onclick = function() {
    if (count > 1) {
        count = count - 1;
        showImage();
    }
}


let plusElement = document.getElementById('next');
plusElement.onclick = function() {
    if (count < 649) {
        count = count + 1;
        showImage();
    }
}

showImage();