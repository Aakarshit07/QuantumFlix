import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies.js";
import MainContainer from "./MainContainer.js";
import SecondaryContainer from "./SecondaryContainer.js";
import usePopularMovies from "../hooks/usePopularMovies.js";
import useTopRatedMovies from "../hooks/useTopRatedMovies.js";
import useUpcomingMovies from "../hooks/useUpcomingMovies.js";
import useTVShows from "../hooks/useTVShows.js";

const Browse = () => {
  usePopularMovies();
  useNowPlayingMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTVShows();
  
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse;