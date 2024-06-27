import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../../../API";

const ActorDetails = () => {
  const { personId } = useParams();
  const [actorDetails, setActorDetails] = useState({});
  const [countBiography, setCountBiography] = useState(250);
  const getActorDetails = (key) => {
    axios(
      `https://api.themoviedb.org/3/person/${personId}?api_key=${key}&language=en-US`
    ).then((res) => {
      setActorDetails(res.data);
    });
  };
  useEffect(() => {
    getActorDetails(API_KEY);
  }, []);
  let {
    name,
    profile_path,
    biography,
    birthday,
    place_of_birth,
    known_for_department,
    imdb_id,
    gender,
    popularity,
  } = actorDetails;
  console.log(actorDetails);
  return (
    <div id="actorDetails">
      <div className="container">
        <div className="actorDetails">
          <img
            src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${profile_path}`}
            alt=""
          />
          <div className="actorDetails--text">
            <h1>{name}</h1>
            <h3>{"Биография"}</h3>
            <p>
              {" "}
              {biography?.slice(0, countBiography)}
              </p>
              
              <a className="More"
                onClick={() => {
                  biography.length >= countBiography
                    ? setCountBiography(biography.length)
                    : setCountBiography(200);
                }}
              >
              
              More
              </a>
            
          </div>
        </div>
        <div className="actorDetails-title">
      <h1>{"Personl Info"}</h1>
    </div>
    <h4>{"Know For"}</h4>
    <h2>{"Дата рождение"}</h2>
        
      </div>
    
    </div>
   
  );
};

export default ActorDetails;