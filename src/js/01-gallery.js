// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryListMarkup = document.querySelector('.gallery');

const galleryImages = createGallery(galleryItems);
galleryListMarkup.insertAdjacentHTML('beforeend', galleryImages);

function createGallery(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<li><a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} data-source="${original}" alt="${description}" />
</a></li>`,
    )
    .join('');
}

let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {
  captionsData: 'alt';
  captionDelay: 250;
  captionPosition: 'bottom';
});
