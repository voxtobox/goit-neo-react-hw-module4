import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export default function ImageGallery({ images }) {
  return (
    <ul className={css.gallery}>
      {images.map(item => (
        <li key={item.id}>
          <ImageCard data={item} />
        </li>
      ))}
    </ul>
  );
}
