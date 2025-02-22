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

  function onKeyPress(e){
    if(e.key === 'Enter'){
      handleSearch();
      }
  }

  return (

    <>
      <div class="input-group" style={{width:'70%', justifySelf: 'center'}}>
        <input type="text" class="form-control" placeholder="Enter city name" aria-label="Recipient's username with two button addons"  value={city} onKeyDown={onKeyPress}
          onChange={(e) => setCity(e.target.value)} />
        <button class="btn btn-info" disabled={!city} type="button" onClick={handleSearch} 
        >Search</button>
        <button class="btn btn-warning" type="button" onClick={handleReset}>Reset</button>
      </div>
    </>
  );
};

export default SearchBar;
