import React, { useEffect, useState } from "react";

const Favorites = () => {
  const [favouritesList, setFavoritesList] = useState(() => {
    const storedItems = localStorage.getItem("favourites");
    return storedItems ? JSON.parse(storedItems) : [];
  });
    useEffect(() => {
    /*Updata data on loca storage*/
    localStorage.setItem("favourites", JSON.stringify(favouritesList));
  }, [favouritesList]);

  const [favoriteMovies, setFavoriteMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const requests = favouritesList.map((id) => fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4b26cdced56684c3ddf93846a852c5c0`).then(response => response.json()));

      try {
        const responses = await Promise.all(requests);
        setFavoriteMovies(responses);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [favouritesList]);
  // Remove from favorits

  const removefromFavorits = (movie) => {
    console.log(movie)
    
    setFavoritesList((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems.splice(favouritesList.indexOf(movie.id), 1);
      return updatedItems;
    });
  };

  
  return (
    <div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {favoriteMovies.map((movie, index) => (
        <div key={index} className="flex flex-col  items-center border rounded-md overflow-hidden">
          <img src={`https://image.tmdb.org/t/p/original/t/p/w500/${movie.poster_path}`} alt={movie.name} className="w-40 object-cover" />
          <div className=" flex flex-col justify-center items-center p-4">
            <h2 className="text-xl font-semibold mb-2">{movie.name||movie.title}</h2>
            <p className="text-gray-700 mb-2">Rating: {movie.vote_average}</p>
          </div>
          <div className="justify-end ">
            <button  onClick={()=>removefromFavorits(movie)} className=" bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:border-red-900">Remove</button>
          </div>
        </div>
      ))}
    </div>
      </div>
  );
};

export default Favorites;
