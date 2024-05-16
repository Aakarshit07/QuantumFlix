import { IMAGE_CDN_URL } from "../utils/constants"

const MovieCard = ({posterPath}) => {
  return (
    <div className="w-48">
        <img  className="rounded-sm" src={IMAGE_CDN_URL+posterPath}  alt="Movie Name" />
    </div>
  )
}

export default MovieCard