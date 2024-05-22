export const gitProfile = "https://avatars.githubusercontent.com/u/102687269?v=4";


export const API_NOW_PLAYING_URL = 'https://api.themoviedb.org/3/movie/now_playing?language=en-USpage=2';
export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YzBiYjJhNmUwZGJkMmE2YmNmOGVlNWNlZTdlN2NjOSIsInN1YiI6IjY2NDRhMzk4OTUwMTUxOWM5ZDFjNmU5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iKw15AFvPkDanKMW-jKpXXTMemrTKe3tVCK-bUOwv68'
  }
};


export const IMAGE_CDN_URL = "https://image.tmdb.org/t/p/w780";

export const SUPPORTED_LANGUAGES = [
  {identifier: "en", name: "English"},
  {identifier: "hindi", name: "Hindi"},
  {identifier: "spanish", name: "Spanish"},
  {identifier: "japanese", name: "Japanese"} 
] 