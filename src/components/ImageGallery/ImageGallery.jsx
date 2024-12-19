import ImageCard from '../ImageCard/ImageCard';

export default function ImageGallery({ images }) {
  return (
    <ul>
      {images.map(item => (
        <li key={item.id}>
          <ImageCard data={item} />
        </li>
      ))}
    </ul>
  );
}
