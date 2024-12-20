import './App.css';
import ImageGallery from './components/ImageGallery/ImageGallery';
import SearchBar from './components/SearchBar/SearchBar';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import { useGallery } from './useGallery';

function App() {
  const { images, search, loadMore, canLoadMore } = useGallery();

  return (
    <>
      <SearchBar onSearch={search} />
      <ImageGallery images={images} />
      {canLoadMore && <LoadMoreBtn onClick={loadMore} />}
    </>
  );
}

export default App;
