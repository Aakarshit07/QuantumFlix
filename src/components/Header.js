import { useNavigate } from "react-router-dom";
import USER_AVATAR from "../assets/pfp.jpg";
import Logo from "../assets/Logo.png";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const showGptSearch = useSelector((store) =>  store.gpt.showGptSearch);
  
  const handleSignOut = () => {
    signOut(auth)
    .then(() => {})
    .catch((error) => {
      navigate("/error");
      console.log(error.message);
    });
  }

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView())
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL })); 
        navigate("/browse");  
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //Unsubscribe when component unmounts 
    return () => unsubscribe();
  }, []);


  return (
    <div className="flex justify-between items-center px-6 py-2 absolute z-10 w-full">
      <img 
        className="w-48 p-2"
        src={Logo}
        alt="logo"
      />
      {user && <div className="flex justify-center items-center gap-4">
        {showGptSearch && 
        <select onChange={handleLanguageChange} className="py-2 bg-gray-300 font-bold text-center cursor-pointer outline-none rounded-md">
          {SUPPORTED_LANGUAGES.map((lang) => 
            <option key={lang.identifier} value={lang.identifier}>
              {lang.name}
            </option>
          )}
        </select>}
        <button 
          onClick={handleGptSearchClick} 
          className="rounded-md p-2 bg-fuchsia-500 font-bold text-center cursor-pointer hover:text-white"
        >
          {showGptSearch ? "Home" : "GTP Search"}
        </button>
        <img className="w-12 h-12" src={user?.photoURL || USER_AVATAR} alt="Profile" />
        <button
          onClick={handleSignOut} 
          className="rounded-md p-2 bg-rose-500 font-bold text-center cursor-pointer hover:text-white"
        >
          Sign Out
        </button>
      </div>}
    </div>
  )
}

export default Header;