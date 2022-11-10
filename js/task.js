import images from "./app.js";

const galleryContainer = document.querySelector(".js-gallery");
const imagesMarkup = createGalleryItemsMarkup(images);
const lightBoxImage = document.querySelector(".js-lightbox");
const imageItem = document.querySelector(".lightbox__image");
const backdrop = document.querySelector(".lightbox__overlay");
const btnClose = document.querySelector('[data-action="close-lightbox"]');

galleryContainer.insertAdjacentHTML("beforeend", imagesMarkup);
galleryContainer.addEventListener("click", onGalleryItemClick);
btnClose.addEventListener("click", onHandlerClose);
backdrop.addEventListener("click", onBackdropClick);
// - Create and render markup based on the `galleryItems` data array from `app.js` and
// provided template.
function createGalleryItemsMarkup(images) {
  return images
    .map(({ preview, description, original }) => {
      return `<li class="gallery__item">
  <a
    class="gallery__link"
    href=${original}
  >
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</li>`;
    })
    .join("");
}
// - Implement delegation on the `ul.js-gallery` gallery and get a large `url`
// Images.
function onGalleryItemClick(e) {
  e.preventDefault();
  const isGalleryImageEl = e.target.classList.contains("gallery__image");
  if (!isGalleryImageEl) {
    return;
  }
  // - Opening a modal window by clicking on a gallery element.
  if (isGalleryImageEl) {
    window.addEventListener("keydown", onEscKeyPress);
    lightBoxImage.classList.add("is-open");

    // - Change the value of the `src` attribute of the `img.lightbox__image` element.
    imageItem.src = e.target.getAttribute("data-source");
    imageItem.all = e.target.everything;
  }
}

// - Closing the modal window on button click
//   `button[data-action="close-lightbox"]`.
function onHandlerClose(e) {
  // e.preventDefault();
  window.removeEventListener("keydown", onEscKeyPress);
  lightBoxImage.classList.remove("is-open");
  // - Clear the value of the `src` attribute of the `img.lightbox__image` element. It's necessary
  // so that the next time the modal window is opened, while loading
  // image, we didn't see the previous one.
  imageItem.src = "";
  imageItem.alt = "";
}
// Closing the modal window by clicking on `div.lightbox__overlay`
function onBackdropClick(e) {
  if (e.target === e.currentTarget) {
    onHandlerClose();
  }
}
// Closing the modal window by pressing the `ESC` key
function onEscKeyPress(e) {
  console.log(e);
  const ESC_KEY_CODE = "Escape";
  if (e.code === ESC_KEY_CODE) {
    onHandlerClose();
  }
}
