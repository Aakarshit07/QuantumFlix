import { useNavigate } from "react-router-dom";
import USER_AVATAR from "../assets/pfp.jpg";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import Logo from "../assets/Logo.png";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  
  const handleSignOut = () => {
    signOut(auth)
    .then(() => {})
    .catch((error) => {
      navigate("/error");
      console.log(error.message);
    });
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
        <img className="w-12 h-12" src={user?.photoURL || USER_AVATAR} alt="Profile" />
        <button
          onClick={handleSignOut} 
          className="rounded-md p-2 bg-red-500 font-semibold text-center cursor-pointer hover:text-white "
        >
          Sign Out
        </button>
      </div>}
    </div>
  )
}

export default Header;