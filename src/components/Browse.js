import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies.js";
import MainContainer from "./MainContainer.js";
import SecondaryContainer from "./SecondaryContainer.js";
import usePopularMovies from "../hooks/usePopularMovies.js";
import useTopRatedMovies from "../hooks/useTopRatedMovies.js";
import useUpcomingMovies from "../hooks/useUpcomingMovies.js";
import useTVShows from "../hooks/useTVShows.js";
import GPTSearch from "./GPTSearch.js";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch); 
  usePopularMovies();
  useNowPlayingMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTVShows();
  
  return (
    <div>
      <Header />
      {
        showGptSearch ? (
          <GPTSearch /> 
        ) : (
          <>
            <MainContainer/>
            <SecondaryContainer/>
          </>
        )
      }
    </div>
  )
}

export default Browse;