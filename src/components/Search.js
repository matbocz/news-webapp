import React from "react";

export default (props) => (
  <>
    <input
      type="text"
      value={props.search}
      onChange={(e) => props.setSearch(e.target.value)}
    />
  </>
);
