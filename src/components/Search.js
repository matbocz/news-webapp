import React from "react";
import { FormControl } from "react-bootstrap";

export default (props) => (
  <>
    <FormControl
      type="text"
      placeholder="Search"
      value={props.search}
      onChange={(e) => props.setSearch(e.target.value)}
    />
  </>
);
