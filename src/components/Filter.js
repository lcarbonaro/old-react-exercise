import React, { useState } from "react";

function Filter({ handleFilter }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    handleFilter(event.target.value);
  };

  return (
    <div>
      <label htmlFor="search">Search </label>
      <input
        type="text"
        id="search"
        value={searchTerm}
        placeholder="Search Your Transaction"
        onChange={handleChange}
      />
    </div>
  );
}

export default Filter;
