import Card from "components/card/Card";
import React, { useEffect, useState } from "react";
import "./movieList.scss";
import { getNowPlayingMovies, MovieResponse } from "clients/movies";
import { IMovie } from "interfaces/movie";

interface IMovieListProps {
  title: string;
  movies: IMovie[];
  isLoading: boolean;
}
const MovieList = (props: IMovieListProps) => {
  const { title, movies, isLoading } = props;

  return (
    <div className="container">
      <div className="title">
        <h2>{title}</h2>
        <a className="expand" href="#">
          See more &gt;
        </a>
      </div>
      <div className="movie-list">
        {movies.map((movie, i) => (
          <Card key={movie.id} isLoading={isLoading} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
