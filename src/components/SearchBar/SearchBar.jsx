import { useRef } from 'react';

export default function SearchBar({ onSearch }) {
  const inputRef = useRef();

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      console.log(inputRef.current.value);
      onSearch(inputRef.current.value);
    }
  }

  return <input type="text" onKeyDown={handleKeyDown} ref={inputRef} />;
}
