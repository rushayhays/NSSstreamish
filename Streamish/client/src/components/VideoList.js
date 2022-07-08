import React, { useEffect, useState } from "react";
import Video from './Video';
import { getAllVideos, getAllWithComments, getVideoSearchResults } from "../modules/videoManager";
import "../styles/VideoList.css";

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = () => {
    getAllWithComments().then(videos => setVideos(videos));
  };

  useEffect(() => {
    getVideos();
  }, []);

  const getSearchedVideos = (stringParam, boolParam) => {
    getVideoSearchResults(stringParam, boolParam).then(videos => {
      console.log(videos)
      setVideos(videos)});
    console.log("searched videos ran");
  };

  const runVideoSearch = () =>{
    let queryString = document.getElementById("vSearch");
    let string = queryString.value
    console.log(queryString.value)
    let boolElement = false;
    getSearchedVideos(string, boolElement);
  }

  return (
    <div>
      <div className="videoSearch">
        <div>
          <label htmlFor="vSearch"></label>
          <input type="text" id="vSearch"></input>
        </div>
        <div>
          <button onClick={runVideoSearch}>Search</button>
        </div>
      </div>
      
      <div className="container">
        <div className="row justify-content-center">
          {videos.map((video) => (
            <Video video={video} key={video.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default VideoList;