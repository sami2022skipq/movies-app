import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import Paggination from "./Paggination";

const List = () => {
  // store Favorite movies data
  const storeditems = JSON.parse(localStorage.getItem("favourites"));
  // state Variables
  const [favourites, setFavorites] = useState(() => {
    const storedItems = localStorage.getItem("favourites");
    return storedItems ? JSON.parse(storedItems) : [];
  });
  const [movies, setMovies] = useState([]);
  const [pageNum, setPageNum] = useState(3);
  const [hover, setHover] = useState("");

  useEffect(() => {
    /*Updata data on loca storage*/
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  // Add to favorits and check if Id already in favorits
  const addToFavorit = (id) => {
    const find = favourites.includes(id);
    if (!find) {
      const newFav = [...favourites, id];
      setFavorites(newFav);
    }
  };
  // Remove from favorits

  const removefromFavorits = (id) => {
    setFavorites((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems.splice(favourites.indexOf(id), 1);
      return updatedItems;
    });
  };

  // Paggination
  const onPrev = () => pageNum > 1 && setPageNum((pageNum) => pageNum - 1);
  const onNext = () => setPageNum((pageNum) => pageNum + 1);
// Api Call

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/all/week?api_key=565dda78aae2b75fafddbc4320a33b38&page=${pageNum}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [pageNum]); // eslint-disable-line react-hooks/exhaustive-deps

  

  return (
    <>
      <div className="flex flex-wrap justify-center space-x-3">
        {movies.length == 0 ? (
          <h1>Loading...</h1>
        ) : (
          movies.map((movie) => {
            return (
              <Card
                key={movie.id}
                movie={movie}
                favourites={favourites}
                addToFavorit={addToFavorit}
                removefromFavorits={removefromFavorits}
              />
            );
          })
        )}
      </div>
      <Paggination onPrev={onPrev} pageNum={pageNum} onNext={onNext} />
    </>
  );
};

export default List;
