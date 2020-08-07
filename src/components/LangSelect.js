import React from "react";

// prettier-ignore
const langs = [
    "ar", "de", "en",
    "es", "fr", "he",
    "it", "nl", "no",
    "pt", "ru", "se",
    "ud", "zh",
];

export default (props) => (
  <>
    <select value={props.lang} onChange={(e) => props.setLang(e.target.value)}>
      {langs.map((lang) => (
        <option key={lang} value={lang}>
          {lang}
        </option>
      ))}
    </select>
  </>
);
