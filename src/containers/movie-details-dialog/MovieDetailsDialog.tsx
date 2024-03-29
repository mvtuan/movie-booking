import { getMovieDetails, MovieResponse } from "clients/movies";
import Modal from "components/modal/Modal";
import { IMovie } from "interfaces/movie";
import React, { useEffect, useState } from "react";
import "./movieDetailsDialog.scss";
import Tag from "components/tag/Tag";

interface IMovieDetailsDialogProps {
  movie: IMovie;
}

const MovieDetailsDialog = (props: IMovieDetailsDialogProps) => {
  const { movie } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [movieDetails, setMovieDetails] = useState<IMovie>();

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        const data: IMovie = await getMovieDetails(movie.id);

        setMovieDetails(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [movie.id]);

  return (
    <Modal isOpen={true} title={""}>
      <div className="movie-details">
        <div className={isLoading ? "skeleton-loading" : "movie-image"}>
          <img
            src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
            alt="img"
            loading="lazy"
          />
        </div>
        <div className="movie-content">
          <div className={isLoading ? "skeleton-loading" : "movie-title"}>
            {movieDetails?.title}
          </div>
          <div className={isLoading ? "skeleton-loading" : "movie-subinfo"}>
            {movieDetails?.overview}
          </div>
          {movieDetails?.genres?.map((g) => (
            <Tag key={g.id}>{g.name}</Tag>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default MovieDetailsDialog;
