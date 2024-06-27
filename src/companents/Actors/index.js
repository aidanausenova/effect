import React, { useEffect, useState } from "react";
import { API_KEY } from "../../API";
import imgUser from "../../assets/img/Без названия.png";
import axios from "axios";
import { Link } from "react-router-dom";


const Actors = ({ movieId }) => {
  const [actors, setActors] = useState([]);
  const ActorsDetails = async (key) => {
    await axios(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${key}&language=en-US`
    ).then((res) => {
      setActors(res.data.cast);
    });
  };
  useEffect(() => {
    ActorsDetails(API_KEY);
  }, []);
    console.log(actors);

  return (
    <div>
      <div className="container">
        <div className="actor">
            <div className="actor-text">
            <h1>Актерский состав</h1>
            </div>
          <div className="actors">
    
          { actors.map((el) => (
       
              <div className="movie-actors">
                
                  <Link to={`/actorDetails/${el.id}`}>
                  <img 
                  src={
                    el.profile_path
                      ? `https://media.themoviedb.org/t/p/w138_and_h175_face${el.profile_path}`
                      : imgUser
                      } 
                      />
                  </Link>
                  <h1>{el.name}</h1>
                  <h4>{el.character}</h4>
                
              </div>
))};
       </div>
        </div>
      </div>
    </div>
  );
};

export default Actors;
