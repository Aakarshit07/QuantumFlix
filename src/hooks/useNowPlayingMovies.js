import { useEffect } from "react";
import { API_NOW_PLAYING_URL, API_OPTIONS } from "../utils/constants"
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

function useNowPlayingMovies() {
    const dispatch = useDispatch();
    
    const getNowPlayingMovies = async () => {
        const response = await fetch(API_NOW_PLAYING_URL, API_OPTIONS);
        const jsonData = await response.json();
        dispatch(addNowPlayingMovies(jsonData.results));
    }

    useEffect(() => {
        getNowPlayingMovies();
    }, []);
}

export default useNowPlayingMovies;