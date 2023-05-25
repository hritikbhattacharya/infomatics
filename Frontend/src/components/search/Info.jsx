import React, { useState } from "react";
import axios from "axios";
import "./style.css";

const Info = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/chat", { prompt })
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handlePrompt = (e) => setPrompt(e.target.value);
  return (
    <>
      <div className="fixed top-0">
        <div className=" bg-gray-800 h-screen flex mt-14 justify-center flex-col  items-center">
          <h1 className="text-gray-400 fonte text-5xl text-center m-8 drop-shadow-xl shadow-white">
            SEARCH WITH AI
          </h1>
          <div className="hidden sm:flex">
            <p className="text-center mt-2 mb-8 mx-10 px-16 w-auto  text-white">
              Welcome to our website, your go-to destination for valuable
              information on various topics. Whether you're seeking answers to
              specific questions or just looking to expand your knowledge, we've
              got you covered.
            </p>
          </div>

          <div className="m-4 h-full  flex-col">
            <div className="mx-auto">
              <form
                className="w-96 mx-auto flex flex-col justify-center items-center"
                onSubmit={handleSubmit}
              >
                <label
                  for="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative items-center">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-96  p-4 pl-10 text-sm text-white bg-slate-900 border  rounded-lg  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-700 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Ask the AI"
                    required
                    value={prompt}
                    onChange={handlePrompt}
                  ></input>
                </div>
                <button
                  type="submit"
                  className="text-white mt-8 mx-auto bg-transparent border hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </form>
            </div>

            <div className="mt-10 mb-10 mx-auto border border-slate-400 rounded-xl p-8 h-auto w-96 bg-slate-800  text-white shadow-md shadow-gray-400 text-center">
              <p>{response}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
