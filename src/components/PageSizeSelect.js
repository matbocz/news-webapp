import React from "react";

export default (props) => (
  <>
    <button onClick={() => props.setPageSize("5")}>5</button>
    <button onClick={() => props.setPageSize("25")}>25</button>
    <button onClick={() => props.setPageSize("50")}>50</button>
    <button onClick={() => props.setPageSize("75")}>75</button>
    <button onClick={() => props.setPageSize("100")}>100</button>
  </>
);
