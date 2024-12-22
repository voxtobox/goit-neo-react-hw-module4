import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import './App.css';
import ImageGallery from './components/ImageGallery/ImageGallery';
import SearchBar from './components/SearchBar/SearchBar';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageModal from './components/ImageModal/ImageModal';
import { useGallery } from './useGallery';

function App() {
  const { images, search, loadMore, canLoadMore, loading, error } =
    useGallery();
  const [currentImage, setCurrentImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleImageClick(imageData) {
    setCurrentImage(imageData);
    setIsModalOpen(true);
  }

  return (
    <>
      <SearchBar onSearch={search} />
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {loading && <Loader />}
      {canLoadMore && !loading && <LoadMoreBtn onClick={loadMore} />}
      {!!error && <ErrorMessage>{error}</ErrorMessage>}
      {!!currentImage && (
        <ImageModal
          imageData={currentImage}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
          }}
        />
      )}
      <Toaster />
    </>
  );
}

export default App;
