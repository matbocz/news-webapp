import React from "react";
import { Form } from "react-bootstrap";

// prettier-ignore
const langs = [
    "ar", "de", "en",
    "es", "fr", "he",
    "it", "nl", "no",
    "pt", "ru", "se",
    "ud", "zh",
];

export default (props) => (
  <Form.Control
    as="select"
    style={{ width: "5rem" }}
    value={props.lang}
    onChange={(e) => props.setLang(e.target.value)}
  >
    {langs.map((lang) => (
      <option key={lang} value={lang}>
        {lang}
      </option>
    ))}
  </Form.Control>
);
