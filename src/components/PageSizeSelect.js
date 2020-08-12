import React from "react";
import { Button } from "react-bootstrap";

export default (props) => (
  <div className="d-flex justify-content-end">
    <div>
      <Button variant="outline-info" onClick={() => props.setPageSize("5")}>
        5
      </Button>{" "}
      <Button variant="outline-info" onClick={() => props.setPageSize("25")}>
        25
      </Button>{" "}
      <Button variant="outline-info" onClick={() => props.setPageSize("50")}>
        50
      </Button>{" "}
      <Button variant="outline-info" onClick={() => props.setPageSize("75")}>
        75
      </Button>{" "}
      <Button variant="outline-info" onClick={() => props.setPageSize("100")}>
        100
      </Button>
    </div>
  </div>
);
