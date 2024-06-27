import React, { useEffect, useState } from "react";
import { API_KEY } from "../../API";
import axios from "axios";

const Home = () => {
  const [background, setBackground] = useState([]);
  const getBackground = (key) => {
    axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US`
    )
      .then((res) => {
        let allBackground = res.data.results.map((el) => el.backdrop_path);
        setBackground(allBackground);
        console.log(allBackground);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    getBackground(API_KEY);
  }, []);
  const getBackgrounIdx = Math.floor(Math.random() * background.length);
  const getBackgroundRandom = background[getBackgrounIdx];

  return (
    <div
      style={{
        background: `url(https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${getBackgroundRandom})`,
      }}
      id="home"
    >
      <div className="container">
        <div className="home">
          <h1>
            Welcome. <br /> <span>Millions of movies, TV shows and people</span>
          </h1>
          <div className="home--input">
            <input type="text" placeholder="Search films,actors..." />
            <button>Search</button>
          </div>
        </div>
      </div>
      <div className="background"></div>
    </div>
  );
};

export default Home;
