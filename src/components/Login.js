import { useRef, useState } from "react"
import Header from "./Header"
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { gitProfile } from "../utils/constants";

const Login = () => {

  const [ isSignInForm, setIsSignInForm] = useState(true);
  const [ errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();


  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const nameValue = name.current ? name.current.value : "";
    const message = checkValidData(nameValue, email.current.value, password.current.value)
    setErrorMessage(message);
    if(message) return;
    
    
    if(!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: nameValue, 
          photoURL: gitProfile
        }).then(() => {
          const {uid, email, displayName, photoURL} = auth.currentUser;
          dispatch(addUser({
            uid: uid, 
            email: email, 
            displayName: displayName, 
            photoURL: photoURL 
          }));  
        }).catch((error) => {
          setErrorMessage(error.message);
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + ", " + errorMessage);
      });
    }
    else  {
      //Sign InLogic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + ", " + errorMessage);
      });
      
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div className="bg-login-pattern h-screen">
        <Header />
        <div className="flex justify-center items-center mx-4 px-2 pt-32">
            <form onSubmit={(e) => e.preventDefault()} className="w-96 bg-black/90 rounded-lg">
                <div className="flex flex-col gap-4 p-8">
                  <p className="text-left text-4xl text-gray-300 mb-4">{isSignInForm ? "Sign In" : "Sign Up"}</p>
                  {!isSignInForm && 
                  <input type="text" ref={name} className="bg-black w-full text-gray-200 rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gray-200" placeholder="Name" /> }
                  <input 
                    ref={email}
                    type="email"
                    className="bg-black w-full text-gray-200 rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gray-200" placeholder="Email" 
                  />
                  <input
                    ref={password} 
                    type="password"
                    className="bg-black w-full text-gray-200 rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gray-200" placeholder="Password" 
                  />
                  <p className="text-left text-red-500 text-xm text-wrap break-words text-ellipsis line-clamp-3">{errorMessage}</p>
                  <button 
                    className="inline-block cursor-pointer rounded-md bg-red-700 px-4 py-3.5 my-6 text-center text-sm font-semibold text-white transition duration-200 ease-in-out hover:bg-red-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-2 active:scale-95"
                    onClick={handleButtonClick}
                  >
                    {isSignInForm ? "Sign In" : "Sign Up"}
                  </button>
                  <p className="text-left text-white text-sm hover:underline hover:cursor-pointer hover:underline-offset-2" onClick={toggleSignInForm}>
                    {isSignInForm ? "New to Netflix? Sign Up Now"  :  "Already a user? Sign In Now"}
                  </p> 
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login;