import React, { useState, useEffect, useContext } from "react";
import { UserContent } from "../Component/Content";
import "./style.css";
import Search from "../Component/Search";
import MovieCard from "../Component/MovieCard";
const Home = () => {
  const { movies } = useContext(UserContent);
  const shortTitle = (title) => {
    return title.substring(0, 15) + "...";
  };

  return (
    <>
      <section className="container mainSection">
        <Search />
        <MovieCard />
      </section>
    </>
  );
};

export default Home;
