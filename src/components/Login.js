import { useState } from "react"
import Header from "./Header"

const Login = () => {

  const [ isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div className="bg-login-pattern h-screen">
        <Header />
        <div className="flex justify-center items-center my-10 mx-4 p-2">
            <form className="w-96 bg-black/90 rounded-lg">
                <div className="flex flex-col gap-4 p-8">
                  <p className="text-left text-4xl text-gray-300 mb-4">{isSignInForm ? "Sign In" : "Sign Up"}</p>
                  {!isSignInForm && <input className="bg-black w-full text-gray-200 rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gray-200" placeholder="Name" /> }
                  <input className="bg-black w-full text-gray-200 rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gray-200" placeholder="Email" />
                  <input className="bg-black w-full text-gray-200 rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gray-200" placeholder="Password" />
                  <button className="inline-block cursor-pointer rounded-md bg-red-700 px-4 py-3.5 my-6 text-center text-sm font-semibold text-white transition duration-200 ease-in-out hover:bg-red-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-2 active:scale-95">{isSignInForm ? "Sign In" : "Sign Up"}</button>
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