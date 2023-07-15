import Head from "next/head";
import AuthenticationContext from "../context/AuthenticationContext";
import { Snackbar, Alert } from "@mui/material";
import { useState, useContext, useEffect } from "react";
import { FaFacebookF, FaEnvelope, FaRegEnvelope } from "react-icons/fa";
import axios from "axios";

import { useRouter } from "next/router";
function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [open, setOpen]= useState(false)
  const [errorMessage, setErrorMessage]= useState(null)
  const router = useRouter();
  const { register, error, clearError } = useContext(AuthenticationContext);
  useEffect(()=>{
    if(error){
      setErrorMessage(error)
      setOpen(true)
      clearError()
    }
  }, [error])
  const submitHandler = (e) => {
    e.preventDefault();

    console.log({ username, email, password });
    register({ username, email, password });
  };
  const handleClose=()=>{
    setOpen(false)
  }


  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-mistyrose">
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        onClose={handleClose}
        autoHideDuration={6000}
        key={"top_center"}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {errorMessage}
        </Alert>
      </Snackbar> 

      <main className="flex flex-col items-center justify-center w-full flex-1 bg-mistyrose px-20 text-center">
        <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 gap-1   ">
          <div className="">
            <div className="bg-white rounded-tr-2xl  md:w-[32rem] rounded-tl-2xl md:rounded-tl-2xl md:rounded-bl-2xl md:rounded-tr-none shadow-2xl  max-w-4xl">
              <div className="p-5 place-self-center">
                <div className=" sm:block justify-self-center">
                  <img
                    src="/your-place-to-readremovebgpreview-1@2x.png"
                    width={210}
                    height={65}
                  />
                </div>
                <div className="py-10">
                  <h2 className=" text-center text-3xl font-bold text-darksalmon mb-2">
                    Create a new account
                  </h2>
                  <div className="  border-2 border-solid w-10 border-darksalmon inline-block mb-2"></div>
                </div>
                <div className="flex flex-col items-center ">
                  <form onSubmit={submitHandler}>
                    <div className="bg-gray-50 w-64 p-2 flex items-center">
                      <input
                        type="text"
                        id="email"
                        className="bg-gray-50 border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-darksalmon focus:border-darksalmon block w-full p-2.5  flex-1"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                      />
                    </div>
                    <div className="bg-gray-50 w-64 p-2 flex items-center">
                      <input
                        type="text"
                        id="username "
                        className="bg-gray-50 border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-darksalmon focus:border-darksalmon block w-full p-2.5  flex-1"
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        required
                      />
                    </div>
                    <div className="bg-gray-50 w-64 p-2 flex items-center">
                      <input
                        type="text"
                        id="password"
                        className="bg-gray-50 border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-darksalmon focus:border-darksalmon block w-full p-2.5 flex-1"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                      />
                    </div>
                    <div className="flex w-64 mb-5 mt-7">
                      <label className="flex items-center text-[0.9rem]">
                        <input
                          type="checkbox"
                          name="remember"
                          className="mr-1"
                        ></input>
                        Remember me
                      </label>
                    </div>
                    <button
                      className=" border border-darksalmon text-darksalmon bg-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-darksalmon hover:text-white"
                      type="submit"
                    >
                      Sign up
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[12rem] rounded-br-2xl rounded-bl-2xl md:rounded-tr-2xl bg-darksalmon md:place-self-start ">
            <div className="h-[0.1rem] w-[18.6rem] md:h-[29.43rem]  md:pt-[8rem] md:w-[20rem]    md:rounded-br-2xl   md:rounded-tr-2xl md:rounded-bl-[0px] bg-darksalmon text-white text-center rounded-br-2xl rounded-bl-2xl mt-7 ">
              <h2 className="  text-2xl font-bold mb-2">Register</h2>
              <div className="border-2 border-solid w-10 border-white inline-block mb-2"></div>
              <p className=" text-center mb-3 mt-2  ">
                Be a part of the change <br /> we are trying to bring!
              </p>
              <p className=" text-center mt-4 text-[0.9rem]">
                Already have an account?
                <span className="hover:scale-10 ease-in duration-300">
                  <a
                    href="/login"
                    className="underline font-semibold ml-2 hover:scale-90 ease-in duration-300"
                  >
                    <br />
                    Login
                  </a>
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Signup;
