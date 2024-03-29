export interface IMovie {
  adult: false;
  genre_ids: [18, 80];
  genres: IGenre[];
  id: 278;
  title: string;
  backdrop_path: string;
  poster_path: string;
  release_date: string;
  overview: string;
}

export interface IGenre {
  id: number;
  name: string;
}
