import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import Paggination from "./Paggination";

const List = () => {
  const [movies, setMovies] = useState([]);
  const [pageNum, setPageNu] = useState(3);

  const onPrev=()=>(
    pageNum> 1 && setPageNu((paageNum)=>pageNum-1)
  )
  const onNext=()=>(
   setPageNu((paageNum)=>pageNum+1)
  )
  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/trending/all/week?api_key=565dda78aae2b75fafddbc4320a33b38&page=${pageNum}`
    )
      // .then((res) => res.json())
      .then((res) => setMovies([res.data.results]))
      .catch((err) => console.log(err));
  }, [pageNum]);
  return (
    <>
      <div className="flex flex-wrap justify-center space-x-3">
        {movies.length == 0 ? (
          <h1>Loading...</h1>
        ) : (
          movies.map((movie) => {
            return movie.map((m) => {
              return <Card key ={m.id} movie={m} />;
            });
          })
        )}
      </div>
        <Paggination onPrev={onPrev} pageNum={pageNum} onNext={onNext}/>
    </>
  );
};

export default List;
