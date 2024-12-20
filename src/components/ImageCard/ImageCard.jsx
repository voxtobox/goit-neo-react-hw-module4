import css from './ImageCard.module.css';

export default function ImageCard({ data }) {
  return (
    <div className={css.card}>
      <img className={css.image} src={data.urls.small} alt={data.description} />
    </div>
  );
}
