import { IMG_CDN_URL } from "../../../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="relative w-32 sm:w-36 md:w-48 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-2 hover:z-50">
      <img
        className="rounded-md shadow-md hover:shadow-2xl transition-all duration-300"
        alt="Movie Card"
        src={IMG_CDN_URL + posterPath}
      />
    </div>
  );
};
export default MovieCard;
