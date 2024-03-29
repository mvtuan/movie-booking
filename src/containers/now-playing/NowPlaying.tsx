import React, { useEffect, useState } from "react";
import "./nowPlaying.scss";
import { getNowPlayingMovies, MovieResponse } from "clients/movies";
import { IMovie } from "interfaces/movie";
import MovieList from "components/movie-list/MovieList";
const NowPlaying = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState<IMovie[]>([]);
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        const data: MovieResponse = await getNowPlayingMovies();
        setMovies(data.results);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  return (
    <MovieList movies={movies} isLoading={isLoading} title="Now Playing" />
  );
};

export default NowPlaying;
