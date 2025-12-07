import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { API_OPTIONS, LOGO } from "../../utils/constants";
import Cast from "./Cast";
import MovieOverview from "./MovieOverview";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

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
    setCast(data.cast);
  };

  useEffect(() => {
    const fetchAll = async () => {
      setIsLoading(true);
      await Promise.all([fetchMovieDetails(), fetchCast()]);
      setIsLoading(false);
    };

    fetchAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-screen h-screen bg-black">
        <div className="w-16 h-16 border-4 border-gray-400 border-t-red-600 rounded-full animate-spin"></div>
      </div>
    );
  }

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
      <div onClick={() => navigate(`/browse`)}>
        <img src={LOGO} alt="Netflix-logo" className="w-28 cursor-pointer" />
      </div>

      <div className="backdrop-blur-md bg-black/70 p-8 rounded-lg max-w-5xl mx-auto">
        <MovieOverview movie={movie} trailer={trailer} />

        <h2 className="text-2xl font-semibold mt-10 mb-4">Cast</h2>

        <Cast cast={cast} />
      </div>
    </div>
  );
};

export default MovieDetails;
