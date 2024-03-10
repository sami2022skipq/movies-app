import React from "react";
import List from "./List";
import Card from "./Card";
import Paggination from "./Paggination";

const Home = () => {
  return (
    <div>
      <List /> 
      <Card />
      <Paggination/>
    </div>
  );
};

export default Home;
