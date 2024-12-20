import './App.css';
import ImageGallery from './components/ImageGallery/ImageGallery';
import SearchBar from './components/SearchBar/SearchBar';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import Loader from './components/Loader/Loader';
import { useGallery } from './useGallery';

function App() {
  const { images, search, loadMore, canLoadMore, loading } = useGallery();

  return (
    <>
      <SearchBar onSearch={search} />
      <ImageGallery images={images} />
      {loading && <Loader />}
      {canLoadMore && !loading && <LoadMoreBtn onClick={loadMore} />}
    </>
  );
}

export default App;
