import GPTMoviesSuggestions from "./GPTMoviesSuggestions";
import GPTSearchBar from "./GPTSearchBar";

const GPTSearch = () => {
  return (
    <div className="bg-login-pattern h-screen">
        <GPTSearchBar />
        <GPTMoviesSuggestions />
    </div>
  )
}

export default GPTSearch;