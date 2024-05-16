import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants"
import { useDispatch } from "react-redux";
import { addTopTvShows } from "../utils/moviesSlice";

const useTVShows = () => {
    
    const dispatch = useDispatch();
    const getTVShows = async () => {
        const response = await fetch("https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1", API_OPTIONS);
        const jsonData = await response.json();
        dispatch(addTopTvShows(jsonData.results));
    }

    useEffect(() => {
        getTVShows();
    }, []);
}

export default useTVShows;