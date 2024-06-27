import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY } from '../../API';
import load from '../../assets/img/Spinner@1x-1.0s-200px-200px.svg'
import MovieCard from '../MovieCard';

const Search = () => {
    const {movieName} = useParams()
    const [search, setSearch] = useState('')
    const getSearch=(key) => {
        axios(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${movieName}`)
        .then((res)=> {
            setSearch(res.data.results);
        })
    }
    useEffect(() => {
        getSearch(API_KEY)
    })

    return (
        <div id="popular">
        <div className="container">
          {!search.length ? (
            <center>
              <img src={load} alt="spinner" />
            </center>
          ) : (
            <>
              <div className="popular">
                {search.map((el) => (
                  <MovieCard el={el} />
                ))}
              </div>
            </>
          )}
          ;
        </div>
      </div>
        
    );
};

export default Search;