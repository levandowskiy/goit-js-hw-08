import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryItemsMarkup = galleryItems.map( ({preview, original, description} = item) => {
    return ` 
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
         </a>
    </li>    
    `
}).join("");

const galleryEl = document.querySelector(".gallery");

galleryEl.innerHTML = galleryItemsMarkup;

const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250, 
});