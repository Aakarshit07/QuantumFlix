import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants"
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

function usePopularMovies() {
    const dispatch = useDispatch();
    
    const getPopularMovies = async () => {
        const response = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", API_OPTIONS);
        const jsonData = await response.json();
        dispatch(addPopularMovies(jsonData.results));
    }

    useEffect(() => {
        getPopularMovies();
    }, []);
}

export default usePopularMovies;