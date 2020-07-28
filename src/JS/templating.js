import itemsTemplate from '../templates/gallery-items.hbs';
import galleryList from '../menu.json';

const markup = itemsTemplate(galleryList);

const galleryRef = document.querySelector('.js-menu');

galleryRef.insertAdjacentHTML('beforeend', markup);
