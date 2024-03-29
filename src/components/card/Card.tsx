import React, { useState } from "react";
import "./Card.scss";
import { IMovie } from "interfaces/movie";
import { API_URL } from "clients/movies";
import Modal from "components/modal/Modal";
import MovieDetailsDialog from "containers/movie-details-dialog/MovieDetailsDialog";

interface CardProps {
  isLoading: boolean;
  movie: IMovie;
}
const trailer =
  "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
const Card = (props: CardProps) => {
  const { isLoading, movie } = props;

  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsOpen(true)}
    >
      {/* <button onClick={() => setOpen(true)}>click me</button>
      <Modal open={open} /> */}
      {isHovered ? (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="card-content">
            <div className={isLoading ? "skeleton-loading" : "card-title"}>
              {movie.title}
            </div>
            <div
              className={isLoading ? "skeleton-loading" : "card-subinfo-full"}
            >
              {movie.overview}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={isLoading ? "skeleton-loading" : "card-image"}>
            <img
              src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
              alt="img"
              loading="lazy"
            />
          </div>
          <div className="card-content">
            <div className={isLoading ? "skeleton-loading" : "card-title"}>
              {movie.title}
            </div>
            <div className={isLoading ? "skeleton-loading" : "card-subinfo"}>
              {movie.overview}
            </div>
          </div>
        </>
      )}

      {isOpen && <MovieDetailsDialog movie={movie} />}
    </div>
  );
};

export default Card;
