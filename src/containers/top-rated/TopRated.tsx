import React, { useEffect, useState } from "react";

import { getTopRatedMovies, MovieResponse } from "clients/movies";
import { IMovie } from "interfaces/movie";
import MovieList from "components/movie-list/MovieList";
const TopRated = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState<IMovie[]>([]);
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        const data: MovieResponse = await getTopRatedMovies();
        setMovies(data.results.splice(0, 4));
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  return <MovieList movies={movies} isLoading={isLoading} title="Top Rated" />;
};

export default TopRated;
