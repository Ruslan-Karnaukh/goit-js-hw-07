import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryEl = document.querySelector(".gallery");

const galleryList = galleryItems.map(({preview ,description, original}) => {
  return `
  <li>
  <a class="gallery__link" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}">
  </a>
  </li>`
}).join("")


galleryEl.insertAdjacentHTML("afterbegin", galleryList)

  const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: "alt",
    captionDelay: 250,
  });