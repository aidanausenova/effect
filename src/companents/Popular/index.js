import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import load from "../../assets/img/Spinner@1x-1.0s-200px-200px.svg";
import { API_KEY } from "../../API";
import MovieCard from "../MovieCard";
import { MovieContext } from "../../context";

const Popular = () => {
  const [popular, setPopular] = useState([]);
  const [pagination, setPagination] = useState(1);
  const {language}=useContext(MovieContext)
  const [count, setCount] = useState(0);
  const getPopular = (key) => {
    window.scroll(0, 0);
    axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${language}&page=${pagination}`
    ).then((res) => {
      setPopular(res.data.results);
    });
  };

  useEffect(() => {
    setTimeout(() => {
      getPopular(API_KEY);
    }, 2000);
  }, [pagination,language]);
  return (
    <div id="popular">
      <div className="container">
        <h1>{count}</h1>
        <button>add</button>
        {!popular.length ? (
          <center>
            <img src={load} alt="spinner" />
          </center>
        ) : (
          <>
            <div className="popular">
              {popular.map((el) => (
                <MovieCard el={el} />
              ))}
            </div>
            <div className="pogination">
              <button
                onClick={() =>
                  setPagination(pagination > 1 ? pagination - 1 : 1)
                }
              >
                back
              </button>
              <h1>{pagination}</h1>
              <button onClick={() => setPagination(pagination + 1)}>
                next
              </button>
            </div>
          </>
        )}
        ;
      </div>
    </div>
  );
};

export default Popular;
