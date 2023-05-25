import React from "react";
import "./newsitem.css";
import Moment from "react-moment";

const NewsItem = ({
  title,
  description,
  url,
  urlToImage,
  time,
  source,
  content,
}) => {
  return (
    <>
      <div className="news-app  ">
        <div className="w-[700px] p-5 mb-6 bg-black   shadow-gray-300 rounded-md flex flex-col sm:flex-row shadow-md">
          <div className="">
            <img
              className="news-img  rounded-md"
              src={urlToImage}
              alt={urlToImage}
            />

            <h1 className="text-white font-bold text-lg ">
              <a href={url}>{title}</a>
            </h1>
            <Moment className="text-white font-light" fromNow>
              {time}
            </Moment>
          </div>
          <div className="pl-5 text-white text-center sm:text-left  te">
            <h2 className="font-semibold">{source}</h2>
            <p className="pt-3 font-light">{description}</p>
            <div className="hidden sm:flex">

            <p className=" font-light pt-4 multi">{content}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
