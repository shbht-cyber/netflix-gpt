import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { API_OPTIONS } from "../../utils/constants";
import Cast from "./Cast";
import MovieOverview from "./MovieOverview";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  const fetchMovieDetails = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?append_to_response=videos`,
      API_OPTIONS
    );
    const data = await res.json();
    setMovie(data);
  };

  const fetchCast = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits`,
      API_OPTIONS
    );
    const data = await res.json();
    setCast(data.cast.slice(0, 10));
  };

  useEffect(() => {
    fetchMovieDetails();
    fetchCast();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (!movie) return <h1 className="text-white p-10">Loading...</h1>;

  const trailer = movie?.videos?.results?.find(
    (video) => video.type === "Trailer"
  );

  return (
    <div
      className="min-h-screen text-white p-6 bg-cover bg-center"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >
      <div className="backdrop-blur-md bg-black/70 p-8 rounded-lg max-w-5xl mx-auto">
        <MovieOverview movie={movie} trailer={trailer} />

        <h2 className="text-2xl font-semibold mt-10 mb-4">Cast</h2>

        <Cast cast={cast} />
      </div>
    </div>
  );
};

export default MovieDetails;
