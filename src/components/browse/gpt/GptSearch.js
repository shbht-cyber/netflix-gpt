import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

import { BG_URL } from "../../../utils/constants";

const GPTSearch = () => {
  return (
    <div
      style={{
        backgroundImage: `url('${BG_URL}')`,
      }}
    >
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </div>
  );
};
export default GPTSearch;
