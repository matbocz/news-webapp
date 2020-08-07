import React from "react";

const sortMethods = ["relevancy", "popularity", "publishedAt"];

export default (props) => (
  <>
    <select
      value={props.sortMethod}
      onChange={(e) => props.setSortMethod(e.target.value)}
    >
      {sortMethods.map((sortMethod) => (
        <option key={sortMethod} value={sortMethod}>
          {sortMethod}
        </option>
      ))}
    </select>
  </>
);
