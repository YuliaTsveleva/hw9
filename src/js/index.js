import galleryItems from "./app.js";
import refs from "./refs.js";
// import * as refs from "./refs.js";
import { createGalleryMarkup } from "./functions";
import { toOpenOriginalImageInModal } from "./functions";
import { toCloseModalWithImage } from "./functions";
import { toCloseModalByEscape } from "./functions";
import { toGoToTheNextPicture } from "./functions";
import { toGoToThePreviousPicture } from "./functions";

const galleryMarkup = createGalleryMarkup(galleryItems);

refs.gallery.innerHTML = galleryMarkup;

refs.gallery.addEventListener("click", toOpenOriginalImageInModal);
refs.lightbox.addEventListener("click", toCloseModalWithImage);
window.addEventListener("keyup", toCloseModalByEscape);
window.addEventListener("keyup", toGoToTheNextPicture);
window.addEventListener("keyup", toGoToThePreviousPicture);
