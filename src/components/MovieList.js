import MovieCard from "./MovieCard"

const MovieList = ({title, movies}) => {
     
    console.log("MOVIEList: ", movies);
    return (
        <div className="px-6">   
            <h1 className="text-3xl font-semibold py-6 text-white">{title}</h1>
            <div className="flex overflow-x-scroll scroll-smooth no-scrollbar">
                <div className="flex items-center gap-4"> 
                   {movies && movies?.map((movie) => <MovieCard key={movie.id} posterPath={movie.poster_path}/>)}
                </div>
            </div>
        </div>
    )
}

export default MovieList