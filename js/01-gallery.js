import { galleryItems } from './gallery-items.js';

// Change code below this line

console.log(galleryItems);


const galleryEl = document.querySelector(".gallery");
//  data-source="${original}"
const galleryList = galleryItems.map(({preview ,description, original}) => {
  return `
  <li class="gallery__item">
  <a class="gallery__link" href="${original}">
  <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
  </a>
  </li>`
}).join("")


galleryEl.insertAdjacentHTML("afterbegin", galleryList)
galleryEl.addEventListener("click", handleClickImg);



 function handleClickImg (event) {
    event.preventDefault();
    
    if(event.target.nodeName !== "IMG"){
        return;
    }
    const showImg = basicLightbox.create(
        `<img class="gallery__image" src="${event.target.dataset.source}">`
        );

    showImg.show()

    window.addEventListener("keydown", closedImg)
    }
   


function closedImg (event){
    const removeClassIcon = document.querySelector(".basicLightbox")
    if(event.code === "Escape"){
        removeClassIcon.remove()
    }
        window.removeEventListener("keydown", closedImg)
    }