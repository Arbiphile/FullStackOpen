import React from 'react';

const Search = ({ value, onChange }) => {
  return (
    <div>
      <h2>Search</h2>
      filter shown with
      <input
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Search;