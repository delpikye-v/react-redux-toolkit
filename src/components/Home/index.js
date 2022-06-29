import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import MoveList from "../MoveList";

import { fetchMovies } from "../../service/store/movies/moveReducer";

const Home = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (page > 500) {
      alert("Limit page 500");
      setPage(500);
      return;
    }
    dispatch(fetchMovies(page));
  }, [dispatch, page]);

  return <MoveList page={page} setPage={setPage} />;
};

export default Home;
