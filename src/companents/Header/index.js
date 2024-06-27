import React, { useContext, useState } from "react";
import headerLogo from "../../assets/img/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c (1).svg";
import { Link, useNavigate } from "react-router-dom";
import { CgDarkMode } from "react-icons/cg";
import { MovieContext } from "../../context";


const Header = () => {
  const { dark,setDark } = useContext(MovieContext)
  const {language,setLanguage}=useContext(MovieContext)
  const [searchMovie, setSearchMovie] = useState('')
  
  const navigate = useNavigate()
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <img src={headerLogo} alt="img" width={180} />
          <div className="header--nav">
            <Link to={"/"} className="">
              Home
            </Link>
            <Link to={"/Popular"} className="">
              Popular
            </Link>
            <Link to={"/topRated"} className="">
              Top Rated
            </Link>
            <Link to={`/Favorite`} className="">Favorite</Link>
          </div>
          <div className="header--search">
            <input type="text" placeholder="search" onChange={(e)=> {
              setSearchMovie(e.target.value)
            }}/>
            <button onClick={()=> navigate(`/search/${searchMovie}`)}> search</button>
          </div>
          <select 
          onChange={(e)=> setLanguage(e.target.value)}
          >
            <option value="en-US">English</option>
            <option value="ru-RU">Русский</option>
            <option value="fr-FR">France</option>
          </select>

          <a className="header--dark" >
            <CgDarkMode />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
