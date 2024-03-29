import React from "react";
import Header from "containers/header/Header";
import NowPlaying from "containers/now-playing/NowPlaying";
import TopRated from "containers/top-rated/TopRated";

const Home = () => {
  return (
    <div>
      <Header />
      <NowPlaying />
      <TopRated />
    </div>
  );
};

export default Home;
