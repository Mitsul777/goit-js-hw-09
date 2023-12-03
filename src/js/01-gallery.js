// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

new SimpleLightbox('.gallery a', {
captions: true,
captionsData: "alt",
captionDelay: 250,
});



