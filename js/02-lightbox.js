import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const ulRef = document.querySelector("ul.gallery");

function createGalleryMarkup(images) {
  return images
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
            <a class="gallery__item" href="${original}">
                <img class="gallery__image"
                    src="${preview}"
                    alt="${description}" 
                />
            </a>
        </div>`
    )
    .join("");
}

const addGalleryMarkup = createGalleryMarkup(galleryItems);

ulRef.insertAdjacentHTML("beforeend", addGalleryMarkup);

ulRef.addEventListener("click", onImageClick);

function blockStandartAction(event) {
  event.preventDefault();
}

function onImageClick(event) {
  blockStandartAction(event);

  var lightbox = new SimpleLightbox(".gallery a", {
    nav: true,
    close: true,
    caption: true,
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
    animationSpeed: 250,
  });
}
