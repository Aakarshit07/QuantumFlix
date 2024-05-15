import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    
    const getMovieTrailer = async () => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, 
                API_OPTIONS
            );
            const jsonData = await response.json();
            const filteredData = jsonData.results.filter((video) => video.type === "Trailer");
            const trailer = filteredData.length ? filteredData[0] : jsonData.results[0];
            dispatch(addTrailerVideo(trailer));
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getMovieTrailer();
    }, []);
  
}

export default useMovieTrailer;