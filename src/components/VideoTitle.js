import { FaPlay } from "react-icons/fa"
import { LuInfo } from "react-icons/lu"

function VideoTitle({title, overview}) {
    
    return (
        <div className="px-12 pt-[20%] absolute text-white w-full aspect-video bg-gradient-to-b from-black">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="w-1/4 py-6 text-base">{overview}</p>
            <div className="flex">
                <button className="rounded-md shadow-md p-2 w-28 bg-white text-black font-semibold cursor-pointer flex justify-center items-center gap-2 hover:bg-opacity-80"><FaPlay /> Play</button>
                <button className="rounded-md shadow-md p-2 w-36 mx-2 bg-gray-500 bg-opacity-60 text-white font-semibold cursor-pointer flex justify-center items-center gap-2 hover:bg-gray-50/35"><LuInfo /> More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle