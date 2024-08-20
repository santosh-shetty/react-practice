import React, { useEffect, useState } from "react";

const UserContent = React.createContext();
const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState(null);
  const [isError, setIsError] = useState(null);
  const [query, setQuery] = useState("titanic");
  const [isLoading, setIsLoading] = useState(true);
  const API_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=fa497572&s=${query}`;

  // Fetch Movies Usign API
  const fetchMovie = async (url) => {
    setIsLoading(true);

    try {
      const fetchData = await fetch(url);
      const movies = await fetchData.json();
      if (movies.Response === "True") {
        setIsLoading(false);
        setMovies(movies.Search);
      } else {
        // console.log(movies.Error);
        setIsError(movies.Error);
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
  }, [query]);

  return (
    <UserContent.Provider
      value={{ movies, isError, query, setQuery, isLoading ,setIsLoading}}
    >
      {children}
    </UserContent.Provider>
  );
};
export { UserContent, AppProvider };
