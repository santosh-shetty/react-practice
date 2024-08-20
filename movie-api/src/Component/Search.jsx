import React, { useContext } from "react";
import { UserContent } from "./Content";

const Search = () => {
  const { query, setQuery } = useContext(UserContent);
  // On Change of pass query
  const queryChange = (e) => {
    setQuery(e);
  };
  return (
    <div className="searchSection">
      <form action="#" onSubmit={(e) => e.preventDefault()}>
        <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
          <div className="input-group">
            <input
              type="search"
              placeholder="What're you searching for?"
              aria-describedby="button-addon1"
              className="form-control border-0 bg-light"
              onChange={(e) => queryChange(e.target.value)}
            />
            <div className="input-group-append">
              <button
                id="button-addon1"
                type="submit"
                className="btn btn-link text-primary"
              >
                <i className="fa fa-search" />
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
