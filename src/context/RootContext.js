import React, { useEffect, useState } from "react";
import { MovieContext } from ".";

export const RootContext = ({ children }) => {
  const [favorite, setFavorite] = useState([])
  const [dark,setDark] = useState(false)
  const [language,setLanguage]=useState("en-US")

  function getAll() {
    let result = JSON.parse(localStorage.getItem("movie")) || []
    setFavorite(result);
  }

  useEffect (() => {
    getAll()
  }, []);

  return (
<MovieContext.Provider
value={{
  dark,
  setDark,
  language,setLanguage,
  favorite,setFavorite
}}
>
 {children} 
</MovieContext.Provider>
);
};
export default RootContext
