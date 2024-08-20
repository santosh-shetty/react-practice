import React, { useContext, useState } from "react";
import { UserContent } from "./Content";
import Loading from "./Loading";

const MovieCard = () => {
  const { movies, isLoading, isError } = useContext(UserContent);
  //   Removie character form long title
  const shortTitle = (title) => {
    if(title.length >= 15){
      return title.substring(0, 15) + "...";
    }
    return title;
  };

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <div className="moviesSection">
      {console.log(movies)}
      {isError ? (
        <p className="text-danger fw-bolder">{isError}</p>
      ) : (
        movies &&
        movies.map((data, ind) => {
          const { Poster, Title, Year, imdbID } = data;
const title = shortTitle(Title);
          return (
            // <div className="card" key={ind}>
            //   <img
            //     src={Poster}
            //     className="card-img-top img-thumbnail"
            //     alt="..."
            //   />
            //   <div className="card-body">
            //     <h5 className="card-title">{shortTitle(Title)}</h5>
            //     <a href={`movie/${imdbID}`} className="btn btn-primary">
            //       View Details
            //     </a>
            //   </div>
            // </div>
            <a href={`movie/${imdbID}`} className="movie-card" key={ind}>
              <div className="content-card">
                <img src={Poster} />
                <span className="shadow" />
                <div className="content">
                  <h1>{title}</h1>
                  <p className="date">{Year}</p>
                  {/* <b>2h 10m</b> */}
                  {/* <div className="stars">
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star" />
                  </div> */}
                  {/* <div className="hex-tag">
                    <div className="tag">#action</div>
                    <div className="tag">#romantic</div>
                    <div className="tag">#family</div>
                  </div> */}
                  {/* <i className="fa fa-angle-up" /> */}
                </div>
              </div>
              {/*--content card-*/}
              <div className="watch-card">
                <button>watch now</button>
              </div>
              {/*--watch card--*/}
            </a>
          );
        })
      )}
    </div>
  );
};

export default MovieCard;
