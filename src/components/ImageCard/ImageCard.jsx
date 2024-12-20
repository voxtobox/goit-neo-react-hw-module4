import css from './ImageCard.module.css';

export default function ImageCard({ data, onClick }) {
  return (
    <div className={css.card}>
      <img
        className={css.image}
        src={data.urls.small}
        alt={data.description}
        onClick={onClick}
      />
    </div>
  );
}
