import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../../API";

const Video = ({ movieId }) => {
  const [video, setVideo] = useState([]);
  const getVideo = (key) => {
    axios(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${key}&language=en-US`
    ).then((res) => {
      setVideo(res.data.results);
      console.log(res.data.results, "video");
      console.log(video, "vid");
    });
  };
  useEffect(() => {
    getVideo(API_KEY);
  }, []);

  return (
    <div id="video">
      <div className="container">
        <div className="video">
          {
            video.map((el) => (

                <iframe
                  width="1200"
                  height="750"
                  src={`https://www.youtube.com/embed/${el.key}`}
                  title="JS - 37 | | Details, Actors"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
            ))
            
          }
        </div>
      </div>
    </div>
  );
};

export default Video;
