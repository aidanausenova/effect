import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./companents/Home";
import TopRated from "./companents/TopRated";
import ActorDetails from "./companents/Pages/ActorDdetails";
import { useContext } from "react";
import Popular from "./companents/Popular";
import Header from "./companents/Header";
import MovieDetails from "./companents/Pages/MovieDetails";
import Search from "./companents/Search";
import Favorite from "./companents/Favorite";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Popular" element={<Popular />} />
        <Route path="/topRated" element={<TopRated />} />
        <Route path="/details/:movieId" element={<MovieDetails/>}/>
        <Route path="/actorDetails/:personId" element={<ActorDetails />} />
        <Route path="/search/:movieName" element={<Search/>} />
        <Route path="/Favorite" element={<Favorite/>} />
      </Routes>
    </div>
  );
}

export default App;
