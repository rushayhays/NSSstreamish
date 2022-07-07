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

  const getSearchedVideos = () => {
    getVideoSearchResults().then(videos => setVideos(videos));
  };

  const runVideoSearch = () =>{
    let queryString = document.getElementById("vSearch");
    console.log(queryString.value)
    console.log("you found the McGuffin!")
  }

  return (
    <div>
      <div class="videoSearch">
        <div>
          <label for="vSearch"></label>
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