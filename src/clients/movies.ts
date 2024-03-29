import { IMovie } from "interfaces/movie";

export const API_URL = "https://api.themoviedb.org";
export interface MovieResponse {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTNjNmUwM2JlYjY0NWU3ZGQ2MTc5Y2M5ZGI3NTNlYiIsInN1YiI6IjY2MDQyOWZhN2Y2YzhkMDEzMDZjOWE4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RX7k3SCJ0dv2W14qt2KU0jnmAmXDF9338Mh3IFXtg10",
  },
};

export async function getNowPlayingMovies(): Promise<any> {
  const res = await fetch(API_URL + "/3/movie/now_playing", options);
  const result = await res.json();

  return result;
}

export async function getTopRatedMovies(): Promise<any> {
  const res = await fetch(API_URL + "/3/movie/top_rated", options);
  const result = await res.json();

  return result;
}

export async function getMovieDetails(movieID: number): Promise<any> {
  const res = await fetch(API_URL + "/3/movie/" + movieID, options);
  console.log("🚀 ~ getMovieDetails ~ res:", res);
  const result = await res.json();

  return result;
}
