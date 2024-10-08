import React, { useState } from 'react';

const SearchBar = ({ onSearch, onReset }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    onSearch(city);
  };

  const handleReset = () => {
    setCity('');
    onReset();
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="search" onClick={handleSearch}>Search</button>
      <button className="reset" onClick={handleReset}>Reset</button>
    </div>
  );
};

export default SearchBar;
