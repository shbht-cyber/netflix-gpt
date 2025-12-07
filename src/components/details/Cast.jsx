import React from "react";

const Cast = ({ cast }) => {
  return (
    <div className="flex gap-6 overflow-x-auto pb-4">
      {cast.map((actor) => (
        <div key={actor.id} className="text-center w-28 flex-shrink-0">
          <div className="w-28 h-36 overflow-hidden rounded-lg bg-gray-800">
            <img
              className="w-full h-full object-cover"
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                  : "https://via.placeholder.com/150"
              }
              alt={actor.name}
            />
          </div>
          <p className="text-sm mt-2 font-medium">{actor.name}</p>
          <p className="text-xs text-gray-400 truncate">{actor.character}</p>
        </div>
      ))}
    </div>
  );
};

export default Cast;
