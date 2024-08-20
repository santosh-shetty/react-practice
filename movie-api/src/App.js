import { BrowserRouter, Routes, Router, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Movie from "./Pages/Movie";
import Error from "./Pages/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
