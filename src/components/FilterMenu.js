import React from "react";
import { Form } from "react-bootstrap";

import LangSelect from "./LangSelect";
import SortMethodSelect from "./SortMethodSelect";

export default (props) => (
  <Form inline className="d-flex justify-content-between mb-2 mt-2">
    <div>
      Sort by{" "}
      <SortMethodSelect
        sortMethod={props.sortMethod}
        setSortMethod={props.setSortMethod}
      />
    </div>

    <div>
      Language <LangSelect lang={props.lang} setLang={props.setLang} />
    </div>
  </Form>
);
