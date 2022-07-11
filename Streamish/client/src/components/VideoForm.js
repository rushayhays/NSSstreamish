import React from "react";
import { useNavigate } from "react-router-dom";
import { addVideo } from "../modules/videoManager";

const VideoForm = ({getVideoFunction}) => {

    const navigate = useNavigate();

    const postVideo = () => {
        let title=document.getElementById("vTitle")
        let desc=document.getElementById("vDesc")
        let url=document.getElementById("vUrl")
        console.log(title.value);
        console.log(desc.value);
        console.log(url.value);

        //Let's make an actual video object to pass into the post method
        let video = 
        {
            title: title.value,
            description: desc.value,
            url: url.value
        }
        //This adds the video to our database and then updates our video list with another call to fetch the full list of videos
        addVideo(video).then((p) =>{
            navigate("/")
        })
    }

    return(
        <div>
            <h3>Enter a new video</h3>
            <div>
                <label htmlFor="vTitle">Title</label>
                <input type="text" id="vTitle"></input>
                <label htmlFor="vDesc">Description</label>
                <input type="text" id="vDesc"></input>
                <label htmlFor="vUrl">Url</label>
                <input type="text" id="vUrl"></input>
            </div>
            <div>
                <button onClick={postVideo}>Post Video</button>
            </div>
        </div>
    );
};
export default VideoForm;
