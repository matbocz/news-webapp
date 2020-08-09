import React from "react";
import { Form } from "react-bootstrap";

const sortMethods = ["relevancy", "popularity", "publishedAt"];

export default (props) => (
  <Form.Control
    as="select"
    style={{ width: "8rem" }}
    value={props.sortMethod}
    onChange={(e) => props.setSortMethod(e.target.value)}
  >
    {sortMethods.map((sortMethod) => (
      <option key={sortMethod} value={sortMethod}>
        {sortMethod}
      </option>
    ))}
  </Form.Control>
);
