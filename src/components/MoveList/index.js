import React from "react";
import { useSelector } from "react-redux";
import MoveCard from "./MoveCard";

import Pagination from "react-pagination-z";

const MoveList = ({ page, setPage }) => {
  const movies = useSelector((state) => state.movies.listMovies);
  const infp = useSelector((state) => state.movies);

  return (
    <>
      <h1 className="list-title">List Movies</h1>
      <Pagination
        totalCount={infp.totalMovives}
        currentPage={page}
        setCurrentPage={setPage}
        limit={20}
      />

      <div className="container-fluid">
        <div className="row">
          {movies?.map((item) => (
            <MoveCard key={item.id} movie={item} />
          ))}
        </div>
      </div>

      <Pagination
        totalCount={infp.totalMovives}
        currentPage={page}
        setCurrentPage={setPage}
        limit={20}
      />
    </>
  );
};

export default MoveList;
