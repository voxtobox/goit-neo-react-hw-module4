export default function ImageCard({ data }) {
  return (
    <div>
      <img src={data.urls.small} alt={data.description} />
    </div>
  );
}
