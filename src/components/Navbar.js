import React from "react";
import { Navbar, Form } from "react-bootstrap";

import Search from "./Search";

export default (props) => (
  <Navbar
    className="d-flex justify-content-between"
    style={{ minHeight: "8vh" }}
    bg="dark"
    variant="dark"
  >
    <Navbar.Brand>News</Navbar.Brand>
    <Form inline>
      <Search search={props.search} setSearch={props.setSearch} />
    </Form>
  </Navbar>
);
