import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

function VideoBackground({movieId}) {
    useMovieTrailer(movieId);
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
    return (
        <div>
            <iframe
                className="w-full aspect-video" 
                src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&mute=1&controls=0&allowfullscreen&loop=1"} 
                title="YouTube video player"
                allow="accelerometer; autoplay; encrypted-media; gyroscope;" 
                allowFullScreen
            >    
            </iframe>
        </div>
    )
}

export default VideoBackground;