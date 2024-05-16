import { useSelector } from "react-redux";
import MovieList from "./MovieList"

function SecondaryContainer() {
  const movies = useSelector(store => store?.movies);
  
  return (
    movies?.nowPlayingMovies && (
      <div className="bg-black">
        <div className="relative z-20 -mt-72 px-4">
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/> 
          <MovieList title={"Top Rated"} movies={movies?.topRatedMovies }/>
          <MovieList title={"TV Shows"} movies={movies?.topTvShows}/> 
          <MovieList title={"Popular"} movies={movies?.popularMovies}/> 
          <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies}/> 
        </div>
      </div>
    )
  )
}

export default SecondaryContainer;

