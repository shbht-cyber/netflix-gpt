const MovieOverview = ({ movie, trailer }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-60 rounded-lg"
      />

      <div>
        <h1 className="text-4xl font-bold">{movie.title}</h1>
        <p className="text-gray-300 text-sm mt-2">
          ⭐ {movie.vote_average?.toFixed(1)} | {movie.runtime} min |{" "}
          {movie.release_date}
        </p>

        <div className="mt-4 flex gap-2">
          {movie.genres?.map((g) => (
            <span
              key={g.id}
              className="bg-gray-700 py-1 px-3 rounded-full text-xs"
            >
              {g.name}
            </span>
          ))}
        </div>

        <p className="mt-6 text-lg">{movie.overview}</p>

        {trailer && (
          <a
            href={`https://www.youtube.com/watch?v=${trailer.key}`}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-6 bg-red-600 px-6 py-3 rounded-lg hover:bg-red-700 transition text-lg"
          >
            ▶ Watch Trailer
          </a>
        )}
      </div>
    </div>
  );
};

export default MovieOverview;
