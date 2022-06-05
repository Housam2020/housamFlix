import "./App.css";
import Row from "./Row";
import React, { useEffect, useState } from "react";
import requests from "./requests";
import Banner from "./Banner";
import axios from "axios";
import Nav from "./Nav";
import Test from "./Test";

function App() {
  const [movies, setMovies] = useState([]);

  return (
    <div className="App">
      <Nav></Nav>
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      ></Row>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}></Row>

      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="Comedy Movies" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Horror Movies" fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}></Row>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumantaries}></Row>
    </div>
  );
}

export default App;
