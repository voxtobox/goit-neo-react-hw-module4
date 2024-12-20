import { useState } from 'react';
import { fetchPhotoByQuery } from './api';
import { useEffect } from 'react';

export function useGallery() {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const canLoadMore = currentPage < totalPages;

  async function fetchData() {
    setError('');
    setLoading(true);
    try {
      const data = await fetchPhotoByQuery(query, currentPage);
      setTotalPages(data.total_pages);
      setImages(images.concat(data.results));
    } catch (serverError) {
      console.log('error: ', serverError);
      setError(serverError?.errors?.join('') || 'Something wrong');
    } finally {
      setLoading(false);
    }
  }

  function loadMore() {
    if (!canLoadMore) return;
    setCurrentPage(currentPage + 1);
  }

  function search(searchQuery) {
    setImages([]);
    setQuery(searchQuery);
    setCurrentPage(1);
    setTotalPages(0);
  }

  useEffect(() => {
    if (query) fetchData();
  }, [query, currentPage]);

  return {
    images,
    loading,
    error,
    canLoadMore,
    loadMore,
    search,
  };
}
