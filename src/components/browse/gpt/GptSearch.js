import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

import { BG_URL } from "../../../utils/constants";

const GPTSearch = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('${BG_URL}')`,
      }}
    >
      <div className="min-h-screen backdrop-brightness-50">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </div>
  );
};
export default GPTSearch;
