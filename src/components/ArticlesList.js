import React from "react";
import { CardDeck, Card } from "react-bootstrap";

export default (props) => (
  <CardDeck>
    {props.articles.map((article) => (
      <Card className="mb-2" style={{ minWidth: "14rem" }}>
        <Card.Img variant="top" src={article.urlToImage} />
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Text>{article.description}</Card.Text>
          <Card.Link href={article.url}>
            Go to full article ({article.source.name})
          </Card.Link>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            {article.publishedAt.slice(0, 10)}
          </small>{" "}
          <small className="text-muted">
            {article.publishedAt.slice(11, 16)}
          </small>
        </Card.Footer>
      </Card>
    ))}
  </CardDeck>
);
