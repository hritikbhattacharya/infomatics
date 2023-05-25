import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [url, setUrl] = useState("general");

  useEffect(() => {
    const getArticle = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=${url}&pageSize=5&page=${page}&apiKey=${process.env.REACT_APP_NEWS_KEY}`
      );
      console.log(response.data.articles);
      setArticles((prev) => [...prev, ...response.data.articles]);
    };
    getArticle();
  }, [page, url]);

  const handleInfiniteScroll = async () => {
    console.log("scrollHeight" + document.documentElement.scrollHeight);
    console.log("innerHeight" + window.innerHeight);
    console.log("scrollTop" + document.documentElement.scrollTop);
    try {
      if (
        document.documentElement.scrollTop + window.innerHeight + 1 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  return (
    <>
    <div className="">

    
      <div className="bg-gradient-to-r bg-gray-800 flex flex-col">
        <div className=" bg-gradient-to-r bg-gray-800 fixed w-full  mx-auto flex-wrap flex-row justify-center space-x-8 md:flex">
          <button
            onClick={() => {
              setArticles([]);
              setUrl("sports");
            }}
            className=" my-8 text-center bg-transparent border border-white text-white shadow-md shadow-gray-400 hover:bg-slate-500  font-bold py-2 px-4 rounded-md"
          >
            Sports
          </button>
          <button
            onClick={() => {
              setArticles([]);
              setUrl("entertainment");
            }}
            className="my-8 text-center bg-transparent border border-white text-white shadow-md shadow-gray-400 hover:bg-slate-500  font-bold py-2 px-4 rounded-md"
          >
            Entertainment
          </button>
          <button
            onClick={() => {
              setArticles([]);
              setUrl("health");
            }}
            className="my-8 text-center bg-transparent border border-white text-white shadow-md shadow-gray-400 hover:bg-slate-500  font-bold py-2 px-4 rounded-md"
          >
            Health
          </button>
          <button
            onClick={() => {
              setArticles([]);
              setUrl("science");
            }}
            className="my-8 text-center bg-transparent border border-white text-white shadow-md shadow-gray-400 hover:bg-slate-500  font-bold py-2 px-4 rounded-md"
          >
            Science
          </button>
          <button
            onClick={() => {
              setArticles([]);
              setUrl("technology");
            }}
            className=" my-8 text-center bg-transparent border border-white text-white shadow-md shadow-gray-400 hover:bg-slate-500  font-bold py-2 px-4 rounded-md"
          >
            Technology
          </button>
          <button
            onClick={() => {
              setArticles([]);
              setUrl("business");
            }}
            className=" my-8 text-center bg-transparent border border-white text-white shadow-md shadow-gray-400 hover:bg-slate-500  font-bold py-2 px-4 rounded-md"
          >
            Business
          </button>
        </div>
    
        <div className="mt-20">

        {articles.map((article) => {
          return (
            <NewsItem
              title={article.title}
              description={article.description}
              url={article.url}
              urlToImage={article.urlToImage}
              time={article.publishedAt}
              source={article.source.name}
              content={article.content}
            />
          );
        })}
        </div>
      </div>
      </div>
    </>
  );
};

export default News;
