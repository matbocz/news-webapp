import React from "react";

export default (props) => (
  <>
    <p>Articles: {props.articles.length}</p>
    <ul>
      {props.articles.map((article) => (
        <li>{article.title}</li>
      ))}
    </ul>
  </>
);
