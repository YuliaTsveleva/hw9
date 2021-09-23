// import * as refs from "./refs.js";
import galleryItems from "./app.js";
import refs from "./refs.js";

export function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
    `;
    })
    .join("");
}

export function toOpenOriginalImageInModal(evt) {
  evt.preventDefault();
  refs.lightbox.classList.add("is-open");
  refs.lightboxImage.src = evt.target.dataset.source;
  refs.lightboxImage.alt = evt.target.alt;
}

export function toCloseModalWithImage(evt) {
  if (
    evt.target !== refs.closeModalBtn &&
    evt.target !== refs.lightboxOverlay
  ) {
    return;
  }
  refs.lightbox.classList.remove("is-open");
  refs.lightboxImage.src = "";
  refs.lightboxImage.alt = "";
}

export function toCloseModalByEscape(key) {
  if (key.code !== "Escape") {
    return;
  }
  refs.lightbox.classList.remove("is-open");
  refs.lightboxImage.src = "";
  refs.lightboxImage.alt = "";
}

export function toGoToTheNextPicture(key) {
  if (key.code !== "ArrowRight") {
    return;
  }

  const indexOfCurrentImageInGallery = galleryItems.indexOf(
    galleryItems.find((item) => item.description === refs.lightboxImage.alt)
  );

  if (indexOfCurrentImageInGallery !== galleryItems.length - 1) {
    refs.lightboxImage.src =
      galleryItems[indexOfCurrentImageInGallery + 1].original;
    refs.lightboxImage.alt =
      galleryItems[indexOfCurrentImageInGallery + 1].description;
  } else {
    refs.lightboxImage.src = galleryItems[0].original;
    refs.lightboxImage.alt = galleryItems[0].description;
  }
}

export function toGoToThePreviousPicture(key) {
  if (key.code !== "ArrowLeft") {
    return;
  }

  const indexOfCurrentImageInGallery = galleryItems.indexOf(
    galleryItems.find((item) => item.description === refs.lightboxImage.alt)
  );

  if (indexOfCurrentImageInGallery !== 0) {
    refs.lightboxImage.src =
      galleryItems[indexOfCurrentImageInGallery - 1].original;
    refs.lightboxImage.alt =
      galleryItems[indexOfCurrentImageInGallery - 1].description;
  } else {
    refs.lightboxImage.src = galleryItems[galleryItems.length - 1].original;
    refs.lightboxImage.alt = galleryItems[galleryItems.length - 1].description;
  }
}
