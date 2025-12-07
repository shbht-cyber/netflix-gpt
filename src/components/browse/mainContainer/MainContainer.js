import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const moviesCount = movies.length;
  const mainMovieIndex = Math.floor(Math.random() * moviesCount);

  const mainMovie = movies[mainMovieIndex];

  const { original_title, overview, id } = mainMovie;

  console.log("main move", mainMovie);

  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} id={id} />
      <VideoBackground movieId={id} />
    </div>
  );
};
export default MainContainer;
