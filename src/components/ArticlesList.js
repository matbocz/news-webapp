import React from "react";

export default (props) => (
  <>
    <p>Articles: {props.articles.length}</p>
    <ul>
      {props.articles.map((article) => (
        <li key={article.url}>{article.title}</li>
      ))}
    </ul>
  </>
);
