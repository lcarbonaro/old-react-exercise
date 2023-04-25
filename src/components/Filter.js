import React, { useState } from "react";

function Filter({ handleFilter }) {
  //const [searchTerm, setSearchTerm] = useState("");
  const [currentValue, setCurrentValue] = useState("");

  const handleChange = (event) => {
    setCurrentValue(event.target.value);
  };

  const handleSubmit = () => {
    const trimmedValue = currentValue.trim();
    //setSearchTerm(trimmedValue);
    handleFilter(trimmedValue);
  };

  return (
    <div>
      <label htmlFor="search">Search </label>
      <input
        type="text"
        id="search"
        value={currentValue}
        placeholder="Search Your Recent Transaction"
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>test button</button>
    </div>
  );
}

export default Filter;
