import React from 'react'
import lang from '../utils/languageeConstants'
import { useSelector } from 'react-redux'

const GPTSearchBar = () => {
  const languageKey = useSelector((store) => store.config.lang);
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className="w-1/2 grid grid-cols-12 bg-black rounded-md border-2 border-white shadow-md shadow-gray-50">
            <input
                className="col-span-9 m-4 rounded-md bg-zinc-200 text-zinc-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-rose-400 outline-none duration-300 placeholder:text-zinc-600 px-4 py-2 shadow-md focus:shadow-lg focus:shadow-rose-400"
                placeholder={lang[languageKey].gptSearchPlaceholder}
                name="text"
                type="text"
            />
            <button 
                className="col-span-3 m-4 cursor-pointer  transition-all bg-rose-700 text-white px-6 py-2 rounded-lg border-rose-400 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-rose-300 shadow-rose-300 active:shadow-none"
            >
                {lang[languageKey].search}
            </button>
        </form>
    </div>
  )
}

export default GPTSearchBar