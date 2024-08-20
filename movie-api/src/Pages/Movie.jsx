import React, { useContext, useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { UserContent } from "../Component/Content";
import Loading from "../Component/Loading";

const Movie = () => {
  const { isLoading, setIsLoading } = useContext(UserContent);
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isError, setIsError] = useState(null);
  const API_URL = `http://www.omdbapi.com/?apikey=fa497572&i=${id}`;

  // Fetch movie Usign API
  const fetchMovie = async (url) => {
    setIsLoading(true);
    try {
      const fetchData = await fetch(url);
      const movie = await fetchData.json();
      console.log(movie);
      if (movie.Response === "True") {
        setIsLoading(false);
        setMovie(movie);
      } else {
        // console.log(movie.Error);
        setIsError(movie.Error);
      }
    } catch (err) {
      setIsError(`Catch Error: ${err}`);
    }
  };
  useEffect(() => {
    let timerOut = setTimeout(() => {
      fetchMovie(API_URL);
    }, 1000);

    return () => clearTimeout(timerOut);
  }, [id]);
  // Loading during load data
  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }
  return (
    <section className="movie-section">
      {movie ? (
        <div className="single-movie-card">
          <figure>
            <img src={movie.Poster} alt="" />
          </figure>
          <div className="card-content">
            <p className="title">{movie.Title}</p>
            <p className=""></p>
            <p className="card-text">{movie.Released}</p>
            <p className="card-text">{movie.Genre}</p>
            <p className="card-text">{movie.imdbRating} / 10</p>
            <p className="card-text country">{movie.Country}</p>
            <NavLink to="/" className="back-btn">
              Go Back
            </NavLink>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </section>
  );
};

export default Movie;
