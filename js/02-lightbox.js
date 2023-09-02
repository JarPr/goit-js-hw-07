import { galleryItems } from './gallery-items.js';
// Change code below this line
const container = document.querySelector('.gallery');
const markup = createMarkup(galleryItems);

container.insertAdjacentHTML("beforeend", markup);


function createMarkup (arr) {
    return arr.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
        <a href="${original}" class="gallery__link">
        <img src="${preview}" data-source="${original}" alt="${description}" class="gallery__image"/>
        </a>
    </li>`;
    }).join("");
}

var lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250 ,
   
 });

console.log(galleryItems);
