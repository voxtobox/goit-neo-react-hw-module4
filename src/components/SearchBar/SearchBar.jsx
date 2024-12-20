import { useRef } from 'react';
import css from './SearchBar.module.css';

export default function SearchBar({ onSearch }) {
  const inputRef = useRef();

  function handleSearch() {
    onSearch(inputRef.current.value);
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <div className={css.searchBar}>
      <div className={css.inputGroup}>
        <button className={css.inputButton} onClick={handleSearch}>
          <svg
            width="18px"
            height="18px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
              stroke="#333"
              strokeWidth="2pxasdf"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <input
          className={css.input}
          type="text"
          onKeyDown={handleKeyDown}
          ref={inputRef}
        />
      </div>
    </div>
  );
}
