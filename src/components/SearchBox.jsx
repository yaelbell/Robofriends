import React from "react";

const SeachBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--hot-pink bg-light-gray "
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SeachBox;
