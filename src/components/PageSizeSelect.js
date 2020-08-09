import React from "react";
import { Row, Col, Button } from "react-bootstrap";

export default (props) => (
  <Row>
    <Col className="d-flex justify-content-center">
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
    </Col>
  </Row>
);
