import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants"
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";

function useUpcomingMovies() {
    const dispatch = useDispatch();
    const getUpcomingMovies = async () => {
        const response = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", API_OPTIONS);
        const jsonData = await response.json();
        dispatch(addUpcomingMovies(jsonData.results));
    }

    useEffect(() => {
        getUpcomingMovies();
    }, []);
}

export default useUpcomingMovies;