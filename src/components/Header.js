import { useNavigate } from "react-router-dom";
import ProfileIcon from "../assets/pfp.jpg";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

function Header() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
     
    }).catch((error) => {
      navigate("/error");
      console.log(error.message);
    });
  }

  return (
    <div className="bg-gradient-to-b from-black flex justify-between items-center px-6 py-2">
      <img 
        className="w-48 p-2"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && <div className="flex justify-center items-center gap-4">
        <img className="w-12 h-12" src={user?.photoURL || ProfileIcon} alt="Profile" />
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