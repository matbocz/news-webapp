import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import ArticlesList from "./ArticlesList";
import PageSizeSelect from "./PageSizeSelect";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FilterMenu from "./FilterMenu";

function App() {
  const [data, setData] = useState([]);
  const [lang, setLang] = useState("en");
  const [pageSize, setPageSize] = useState("25");
  const [search, setSearch] = useState("tech");
  const [sortMethod, setSortMethod] = useState("relevancy");

  useEffect(() => {
    if (search.length === 0) {
      setData([]);
    } else {
      const API_KEY = process.env.REACT_APP_API_KEY;

      fetch(
        `https://newsapi.org/v2/everything?q=${search}&language=${lang}&pageSize=${pageSize}&sortBy=${sortMethod}&apiKey=${API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => setData(data.articles));
    }
  }, [search, lang, pageSize, sortMethod]);

  return (
    <>
      <Navbar search={search} setSearch={setSearch} />

      <Container>
        <FilterMenu
          lang={lang}
          setLang={setLang}
          sortMethod={sortMethod}
          setSortMethod={setSortMethod}
        />

        <ArticlesList articles={data} />

        <PageSizeSelect setPageSize={setPageSize} />
      </Container>

      <Footer />
    </>
  );
}

export default App;
